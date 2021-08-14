import {h, Fragment, VNode} from 'preact';
import {Props} from '../types';
import {JList} from './types';
import JSONValue, {Format} from './JSONValue';

export default class JSONList extends JSONValue {
	public render({format, value, indent}: Props<{value: JList, format: Format, indent: number}>): VNode {
		return (
			<span>
				<span className='list-bracket'>[</span>
				<br />
				<span className='list-values'>
					{value.map((v, i, a) => <>
						{' '.repeat(indent + 2)}
						{JSONValue.fromJSON(v, format, indent + 2)}
						{i < a.length - 1 && <>,<br /></>}
					</>)}
				</span>
				<br />
				{' '.repeat(indent)}
				<span className='list-bracket'>]</span>
			</span>
		);
	}
}
