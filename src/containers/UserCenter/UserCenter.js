import { h, Component } from 'preact';
import classNames from 'classnames';
import s from './UserCenter.scss';
import DockBar from '~/components/DockBar';
import history from '~/core/history';
import face from './face.jpg';
import Modal from '~/components/Modal';

export default class UserCenter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			showCard: false
		};
	}

	handleCloseModal = () => {
		this.setState({ showModal: false });
	}

	handleBaseInfo = () => {
		history.push('/baseinfo');
	}

	handleWorks = () => {
		history.push('/works');
	}

	handleCard = () => {
		history.push('/cardholder');
	}

	handleShowCard = () => {
		this.setState({ showCard: true });
	}

	handleHideCard = () => {
		this.setState({ showCard: false });
	}

	render({ path }) {
		return (
			<div className={classNames(s.root, 'bg-orangered')}>
				<div className={classNames(s.card, 'radius-small')}>
					<div className={classNames(s.edit, 'orangered', 'icon-bj')} onClick={() => {this.setState({showModal:true});}}>&nbsp;</div>
					<div className={s.face}>
						<img src={face} alt=""/>
					</div>
					<h3 className="al-c pdt1 pdb1">李书记</h3>
					<ul className={classNames('nls', s.nav)}>
						<li onClick={this.handleCard}><span className="icon-mpj2 orangered" />名片夹 <span className={classNames(s.arrow, 'icon-rightarrow')}></span></li>
						<li onClick={this.handleShowCard}><span className="icon-jhmp orangered" />面对面递名片 <span className={classNames(s.arrow, 'icon-rightarrow')}></span></li>
					</ul>
				</div>
				<DockBar current={4} />
				<Modal
					contentLabel="ModalB"
					isOpen={this.state.showModal}
					onRequestClose={this.handleCloseModal}
					shouldCloseOnOverlayClick={true}
				>
					<ul className="nls pd1 pdt3">
						<li className="btn mgb1" onClick={this.handleBaseInfo}>编辑资料</li>
						<li className="btn mgb1" onClick={this.handleWorks}>编辑作品</li>
						<li className="btn mgb1" onClick={() => { history.push('/resume');}}>编辑简历</li>
					</ul>
				</Modal>
				<Modal
					contentLabel="ModalA"
					isOpen={this.state.showCard}
					onRequestClose={this.handleHideCard}
					shouldCloseOnOverlayClick={true}
				>
					<div className={s.showcard}>
						<img src={require('./timg.jpeg')} alt=""/>
					</div>
				</Modal>
			</div>
		);
	}
}
