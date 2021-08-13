import {h, Component, VNode} from 'preact';
import {Props} from './types';
import EditableElement from './EditableElement';
import {JSONValue, Format} from './json';

export default class Pane extends Component {
	public render({}: Props): VNode {
		return (
			<div>
				<EditableElement>
					{JSONValue.fromJSON({
						"hello 😊": 7,
						"x": true,
						"y": null,
					}, Format.Textual)}
				</EditableElement>
			</div>
		);
	}
}
