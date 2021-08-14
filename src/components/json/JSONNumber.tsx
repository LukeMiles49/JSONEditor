import {h, VNode} from 'preact';
import {Props} from '../types';
import {Format} from './JSONValue';
import JSONSimple from './JSONSimple';

export default class JSONNumber extends JSONSimple {
	public render({value, format, indent}: Props<{value: number, format: Format, indent: number}>): VNode {
		return <span className='number'>{value}</span>;
	}
}
