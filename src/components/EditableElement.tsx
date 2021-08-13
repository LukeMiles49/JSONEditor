import {h, Component, ComponentChild, VNode} from 'preact';
import {Props, CList} from './types';

export default class CodeEditor extends Component {
	public render({children}: Props<{}, CList<ComponentChild>>): VNode {
		return (
			<code contentEditable={true}>
				{children}
			</code>
		);
	}
}
