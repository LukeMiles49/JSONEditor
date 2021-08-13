import {h, Fragment, VNode} from 'preact';
import {Props} from '../types';
import JSONSimple from './JSONSimple';
import {Format} from './JSONValue';

export default class JSONString extends JSONSimple {
	public render({value, format}: Props<{value: string, format: Format}>): VNode {
		switch (format) {
			case Format.Textual: return (
				<span className='string'>
					<span className='string-quote'>"</span>
					{JSONString.escapeString(value)}
					<span className='string-quote'>"</span>
				</span>
			);
			case Format.Graphical: return <span className='string'>{value}</span>;
		}
	}
	
	static escapeString(value: string): VNode {
		const elements: VNode[] = [];
		let safeString = "";
		
		function pushSafeString() {
			if (safeString !== "") {
				elements.push(<span className='string-value'>{safeString}</span>);
				safeString = "";
			}
		}
		
		function pushEscapeSequence(value: string) {
			pushSafeString();
			elements.push(<span className='string-escape'>{value}</span>);
		}
		
		for (let i = 0; i < value.length; i++) {
			const char = value.charAt(i);
			const charCode = char.charCodeAt(0);
			if (char === '\"') pushEscapeSequence("\\\"");
			else if (char === '\\') pushEscapeSequence("\\\\");
			else if (char === '\/') pushEscapeSequence("\\/");
			else if (char === '\b') pushEscapeSequence("\\b");
			else if (char === '\f') pushEscapeSequence("\\f");
			else if (char === '\n') pushEscapeSequence("\\n");
			else if (char === '\r') pushEscapeSequence("\\r");
			else if (char === '\t') pushEscapeSequence("\\t");
			else if (!(32 <= charCode && charCode <= 176))
				pushEscapeSequence(`\\u${charCode.toString(16).padStart(4, '0')}`);
			else safeString += char;
		}
		
		pushSafeString();
		
		return <>{elements}</>;
	}
}
