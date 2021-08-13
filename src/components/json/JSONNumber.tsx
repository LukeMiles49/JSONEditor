import {h, VNode} from 'preact';
import {Props} from '../types';
import {Format} from './JSONValue';
import JSONSimple from './JSONSimple';

export default class JSONNumber extends JSONSimple {
	public render({value, format}: Props<{value: number, format: Format}>): VNode {
		return <span className='number'>{value}</span>;
	}
}
