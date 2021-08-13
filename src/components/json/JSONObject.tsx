import {h, Fragment, Component, VNode} from 'preact';
import {Props} from '../types';
import {JAny, JObject} from './types';
import JSONValue, {Format} from './JSONValue';
import JSONString from './JSONString';

export default class JSONObject extends JSONValue {
	public render({format, value}: Props<{value: JObject, format: Format}>): VNode {
		return (
			<span className='object'>
				<span className='object-bracket'>{"{"}</span>
				<div className='object-values'>
					{Object.entries(value).map(([k, v], i, a) => <>
						<JSONKVP k={k} v={v} format={format} />
						{i < a.length - 1 && <>,<br /></>}
					</>)}
				</div>
				<span className='object-bracket'>{"}"}</span>
			</span>
		);
	}
}

export abstract class JSONKVP extends Component<{k: string, v: JAny, format: Format}> {
	public render({k, v, format}: Props<{k: string, v: JAny, format: Format}>): VNode {
		return (
			<span className='object-kvp'>
				<JSONString value={k} format={format} />
				<span className='object-colon'>:</span>
				{JSONValue.fromJSON(v, format)}
			</span>
		);
	}
}
