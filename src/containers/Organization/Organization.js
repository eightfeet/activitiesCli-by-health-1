import { h, Component } from 'preact';
import s from './Organization';
import DockBar from '~/components/DockBar';

export default class Organization extends Component {

	render({ path }) {
		return (
			<div className={s.root}>
				<h1>名片夹</h1>
				<DockBar current={3} />
			</div>
		);
	}
}
