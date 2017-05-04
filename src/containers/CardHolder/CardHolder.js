import { h, Component } from 'preact';
import s from './CardHolder';
import DockBar from '~/components/DockBar';
import HeaderBar from '~/components/HeaderBar';

export default class CardHolder extends Component {

	render({ path }) {
		return (
			<div className={s.root}>
				<HeaderBar
					setTitle="名片夹名片夹名片夹名片夹名片夹名片夹名片夹"
					// goBack
					Next={{icon: 'icon-bj', link: '/'}}
				/>
				<h1>名片夹</h1>
				<DockBar current={2} />
			</div>
		);
	}
}
