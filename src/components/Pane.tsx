import {h, Component, VNode} from 'preact';
import {Props} from './types';
import EditableElement from './EditableElement';
import {JSONValue, Format} from './json';

export default class Pane extends Component {
	public render({}: Props): VNode {
		return (
			<div>
				<EditableElement>
					<div>
						{JSONValue.fromJSON({
							"hello 😊": 7,
							"x": true,
							"y": [null, "abc", false],
						}, Format.Textual, 0)}
					</div>
				</EditableElement>
			</div>
		);
	}
}
