import {h, Fragment, Component, VNode} from 'preact';
import {Props} from '../types';
import {JAny, JObject} from './types';
import JSONValue, {Format} from './JSONValue';
import JSONString from './JSONString';

export default class JSONObject extends JSONValue {
	public render({format, value, indent}: Props<{value: JObject, format: Format, indent: number}>): VNode {
		return (
			<span className='object'>
				<span className='object-bracket'>{"{"}</span>
				<br />
				<span className='object-values'>
					{Object.entries(value).map(([k, v], i, a) => <>
						<JSONKVP k={k} v={v} format={format} indent={indent + 2} />
						{i < a.length - 1 && <>,<br /></>}
					</>)}
				</span>
				<br />
				{' '.repeat(indent)}
				<span className='object-bracket'>{"}"}</span>
			</span>
		);
	}
}

export abstract class JSONKVP extends Component<{k: string, v: JAny, format: Format, indent: number}> {
	public render({k, v, format, indent}: Props<{k: string, v: JAny, format: Format, indent: number}>): VNode {
		return (
			<span className='object-kvp'>
				{' '.repeat(indent)}
				<JSONString value={k} format={format} indent={indent} />
				<span className='object-colon'>: </span>
				{JSONValue.fromJSON(v, format, indent)}
			</span>
		);
	}
}
