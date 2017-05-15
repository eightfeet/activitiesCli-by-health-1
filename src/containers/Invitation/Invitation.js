import { h, Component } from 'preact';
import classNames from 'classnames';
import s from './invitation.scss';
import DockBar from '~/components/DockBar';
import history from '~/core/history';
import face from './face.jpg';
import Modal from '~/components/Modal';

export default class invitation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			showCard: false
		};
	}

	render({ path }) {
		return (
			<div className={classNames(s.root, 'bg-orangered')}>
				<div className={classNames(s.card, 'radius-small')}>
					<div className={s.face}>
						<img src={face} alt=""/>
					</div>
					<h3 className="al-c pdt1 pdb1">哈狗帮</h3>
					<p className="al-c">name, sss...</p>
					<div className="al-c font-small">(共2人)</div>

					<div className="w9 center btn mgt4">确定加入</div>
				</div>

			</div>
		);
	}
}
