import { h, Component } from 'preact';
import s from './UserCenter';
import DockBar from '~/components/DockBar';

export default class UserCenter extends Component {

	render({ path }) {
		return (
			<div className={s.root}>
				<h1>名片夹</h1>
				<DockBar current={4} />
			</div>
		);
	}
}
