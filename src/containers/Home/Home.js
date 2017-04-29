import { h, Component } from 'preact';
import { FStringPrivacy, FTimeStamp } from '~/utils/fliter';
import history from '~/core/history';
import classNames from 'classnames';
import Modal from '~/components/Modal';
import Loading from '~/components/Loading';
import s from './style';
import sl from './styleb';

export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			showModal: false,
			showModalb: false,
			voiceId: null,
			voiceStatus: '0'
		};
	}

	handleOpenModal = () => {
		this.setState({ showModal: true });
	}

	handleCloseModal = () => {
		this.setState({ showModal: false });
	}

	handleOpenModalb = () => {
		this.setState({ showModalb: true });
	}

	handleCloseModalb = () => {
		this.setState({ showModalb: false });
	}

	handelLoading = () => {
		Loading.show();
		setTimeout(() => {
			Loading.hide();
		}, 4000);
	}

	handleStartVoice = () => {
		window.wx.ready(() => {
			window.wx.startRecord();
			this.setState({
				voiceStatus: '1'
			});
		});
	}

	handleEndVoice = () => {
		let __this = this;
		window.wx.stopRecord({
			success (res) {
				__this.setState({
					voiceId: res.localId,
					voiceStatus: '2'
				});
			}
		});
	}

	handlePlayVoice = () => {
		let __this = this;
		window.wx.playVoice({
			localId: this.state.voiceId
		});
		this.setState({
			voiceStatus: '0'
		});
	}

	render() {
		console.log(this.context);
		return (
			<div>
				<div className={s.orbg} />
				<div className={classNames(s.wrap, 'w9', 'center', 'pr')}>
					<div className={s.card}></div>
				</div>
				<Modal
					contentLabel="ModalB"
					isOpen={this.state.showModalb}
					onRequestClose={this.handleCloseModalb}
					shouldCloseOnOverlayClick={true}
				>
					<div className="center w9 pd1 font">
						<h2 className="al-c mgb1" >modalB</h2>
					</div>
				</Modal>

			</div>
		);
	}
}
