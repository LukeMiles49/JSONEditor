import { h, render } from 'preact';
import Editor from './components/Editor';

import './style.css';

// Register service worker.
if ('serviceWorker' in navigator)
	window.addEventListener('load', () =>
		navigator.serviceWorker.register('./service-worker.js'));

const app = <Editor />;

render(app, document.body);
