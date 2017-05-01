import { h, Component } from 'preact';
import classNames from 'classnames';
import s from './DockBar.scss';

export default class DockBar extends Component {

	render() {
		return (
			<div
				className={s.root}
			>
				<ul className="clearfix nls">
					<li className={s.active}>
						<span className="icon-mp" /><br/>
						名片
					</li>
					<li>
						<span className="icon-mpj" /><br/>
						名片夹
					</li>
					<li>
						<span className="icon-bp" /><br/>
						帮派
					</li>
					<li>
						<span className="icon-wo" /><br/>
						我
					</li>
				</ul>
			</div>
		);
	}
}
