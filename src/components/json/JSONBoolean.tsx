import {h, VNode} from 'preact';
import {Props} from '../types';
import {Format} from './JSONValue';
import JSONSimple from './JSONSimple';

export default class JSONBoolean extends JSONSimple {
	public render({value, format}: Props<{value: boolean, format: Format}>): VNode {
		return <span className='boolean'>{value.toString()}</span>;
	}
}
