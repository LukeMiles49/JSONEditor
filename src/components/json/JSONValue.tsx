import {h, Component, VNode} from 'preact';
import {JAny} from './types';
import {JSONObject, JSONList, JSONString, JSONNumber, JSONBoolean, JSONNull} from '.';

export enum Format {
	Textual,
	Graphical,
}

export default abstract class JSONValue extends Component<{value: JAny, format: Format, indent: number}> {
	public static fromJSON(value: JAny, format: Format, indent: number): VNode {
		if (value === null) return <JSONNull value={value} format={format} indent={indent} />;
		else if (typeof value === 'boolean') return <JSONBoolean value={value} format={format} indent={indent} />;
		else if (typeof value === 'number') return <JSONNumber value={value} format={format} indent={indent} />;
		else if (typeof value === 'string') return <JSONString value={value} format={format} indent={indent} />;
		else if (Array.isArray(value)) return <JSONList value={value} format={format} indent={indent} />;
		else return <JSONObject value={value} format={format} indent={indent} />;
	}
}
