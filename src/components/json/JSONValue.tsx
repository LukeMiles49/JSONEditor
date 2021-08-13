import {h, Component, VNode} from 'preact';
import {JAny} from './types';
import {JSONObject, JSONList, JSONString, JSONNumber, JSONBoolean, JSONNull} from '.';

export enum Format {
	Textual,
	Graphical,
}

export default abstract class JSONValue extends Component<{value: JAny, format: Format}> {
	public static fromJSON(value: JAny, format: Format): VNode {
		if (value === null) return <JSONNull value={value} format={format} />;
		else if (typeof value === 'boolean') return <JSONBoolean value={value} format={format} />;
		else if (typeof value === 'number') return <JSONNumber value={value} format={format} />;
		else if (typeof value === 'string') return <JSONString value={value} format={format} />;
		else if (Array.isArray(value)) return <JSONList value={value} format={format} />;
		else return <JSONObject value={value} format={format} />;
	}
}
