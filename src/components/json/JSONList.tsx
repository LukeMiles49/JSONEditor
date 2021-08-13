import {h, Fragment, VNode} from 'preact';
import {Props} from '../types';
import {JList} from './types';
import JSONValue, {Format} from './JSONValue';

export default class JSONList extends JSONValue {
	public render({format, value}: Props<{value: JList, format: Format}>): VNode {
		return (
			<span>
				<span className='list-bracket'>[</span><br />
				{value.map((v, i, a) => <>
					{JSONValue.fromJSON(v, format)}
					{i < a.length - 1 && <>,<br /></>}
				</>)}
				<span className='list-bracket'>]</span>
			</span>
		);
	}
}
