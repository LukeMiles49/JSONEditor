import {h, VNode} from 'preact';
import {Props} from '../types';
import {Format} from './JSONValue';
import JSONSimple from './JSONSimple';

export default class JSONNull extends JSONSimple {
	public render({value, format}: Props<{value: null, format: Format}>): VNode {
		return <span className='null'>null</span>;
	}
}
