import {h, VNode} from 'preact';
import {Props} from '../types';
import {Format} from './JSONValue';
import JSONSimple from './JSONSimple';

export default class JSONNull extends JSONSimple {
	public render({value, format, indent}: Props<{value: null, format: Format, indent: number}>): VNode {
		return <span className='null'>null</span>;
	}
}
