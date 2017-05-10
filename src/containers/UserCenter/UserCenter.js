import { h, Component } from 'preact';
import classNames from 'classnames';
import s from './UserCenter.scss';
import DockBar from '~/components/DockBar';
import face from './face.jpg';

export default class UserCenter extends Component {

	render({ path }) {
		return (
			<div className={classNames(s.root, 'bg-orangered')}>
				<div className={classNames(s.card, 'radius-small')}>
					<div className={classNames(s.edit, 'orangered', 'icon-bj')}>&nbsp;</div>
					<div className={s.face}>
						<img src={face} alt=""/>
					</div>
					<span className={s.btnrz}>未认证</span>
					<h3 className="al-c pdt1 pdb1">李书记</h3>
					<ul className={classNames('nls', s.nav)}>
						<li><span className="icon-mpj2 orangered" />名片夹 <span className={classNames(s.arrow, 'icon-rightarrow')}></span></li>
						<li><span className="icon-jhmp orangered" />面对面地递名片 <span className={classNames(s.arrow, 'icon-rightarrow')}></span></li>
					</ul>
				</div>
				<DockBar current={4} />
			</div>
		);
	}
}
