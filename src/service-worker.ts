const CACHE_NAME = 'v1';
const FILES_TO_CACHE = [
	'.',
	'./app.js',
	'./manifest.json',
	'./icon/compat-128x128.png',
	'./icon/compat-144x144.png',
	'./icon/compat-152x152.png',
	'./icon/compat-192x192.png',
	'./icon/compat-256x256.png',
	'./icon/compat-512x512.png',
	'./icon/icon-anysize.svg',
];

type ExtendableEvent = Event & {
	waitUntil: (promise: Promise<any>) => void,
};

type FetchEvent = ExtendableEvent & {
	clientId: string,
	preloadResponse: Promise<Response> | undefined,
	replacesClientId: string,
	resultingClientId: string,
	request: Request,
	respondWith: (response: Response | Promise<Response>) => void,
};

function waitUntil(handler: (e: ExtendableEvent) => Promise<void>): (e: Event) => void {
	return e => {
		const extEvent = e as ExtendableEvent;
		extEvent.waitUntil(handler(extEvent));
	};
}

function respondWith(handler: (e: FetchEvent) => Promise<Response>): (e: Event) => void {
	return e => {
		const extEvent = e as FetchEvent;
		extEvent.respondWith(handler(extEvent));
	};
}

self.addEventListener('install', waitUntil(async e => {
	const cache = await caches.open(CACHE_NAME);
	await cache.addAll(FILES_TO_CACHE);
}));

self.addEventListener('activate', waitUntil(async e => {
	const keys = await caches.keys();
	await Promise.all(keys.map(async key => {
		if (key !== CACHE_NAME) await caches.delete(key);
	}));
}));

self.addEventListener('fetch', respondWith(async e => {
	return await caches.match(e.request) ?? await fetch(e.request);
}));
