export type JObject = {[key: string]: JAny};
export type JList = JAny[];
export type JAny =
	  JObject
	| JList
	| string
	| number
	| boolean
	| null;
