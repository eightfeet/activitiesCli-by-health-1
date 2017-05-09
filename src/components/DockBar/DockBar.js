import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import classNames from 'classnames';
import s from './DockBar.scss';

const listData = [{
	icon: 'icon-mp',
	name: '名片',
	link: '/'
}, {
	icon: 'icon-mpj',
	name: '名片夹',
	link: '/cardholder'
}, {
	icon: 'icon-bp',
	name: '帮派',
	link: '/organization'
}, {
	icon: 'icon-wo',
	name: '我',
	link: '/usercenter'
}];

export default class DockBar extends Component {

	render() {
		return (
			<div
				className={`${s.root} shadow-top`}
			>
				<ul className="clearfix nls">
					{
						listData.map((item, i) => (<li className={i === (this.props.current - 1) ? s.active : null}>
						<Link href={item.link}>
							<span className={item.icon} /><br />
							{item.name}
						</Link>
					</li>))
					}
				</ul>
			</div>
		);
	}
}
