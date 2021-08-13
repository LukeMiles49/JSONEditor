import {h, Component, VNode} from 'preact';
import {Props} from './types';
import Pane from './Pane';

export default class Editor extends Component {
	public render({}: Props): VNode {
		return (
			<div id='editor'>
				<Pane />
			</div>
		);
	}
}
