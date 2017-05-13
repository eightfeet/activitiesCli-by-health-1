import { h, Component } from 'preact';
import classNames from 'classnames';
import DockBar from '~/components/DockBar';
import HeaderBar from '~/components/HeaderBar';
import ScrollLoading from '~/components/ScrollLoading';
import Modal from '~/components/Modal';
import history from '~/core/history';
import s from './CardHolder.scss';
import { Link } from 'preact-router/match';


export default class CardHolder extends Component {

	constructor(props){
		super(props);
		this.state = {
			list: [1, 2],
			showModal: false
		};
	}

	handleAction = () => new Promise((resolve) => {
		console.log('22222');
	});

	handleCloseModal = () => {
		this.setState({ showModal: false });
	}

	handleItem = () => {
		history.push('/card');
	}

	render() {
		const { list } = this.state;
		return (
			<div className={s.root}>
				<HeaderBar
					setTitle="名片夹"
					// goBack
				/>
				<div className={s.listwarp}>
					<ScrollLoading
						handleAction={this.handleAction}
						backToTop
						setId={'lalala'}
					>
						<ul className={`${s.list} nls`} >
							{
								list.map(item => (
									<li className="clearfix" key={item}>
										<div className="w2-5 fl" onClick={this.handleItem}>
											<img src={require('./face.jpg')} alt=""/>
										</div>
										<div className="w6" onClick={this.handleItem}>
											<h3 className="txt_cut font">谢谢小</h3>
											<p className="txt_cut gray font-small">13111232123</p>
										</div>
										<Link href={`tel:${13111232123}`}>
											<span className={classNames('icon-tel', s.tel)} />
										</Link>
									</li>
								))
							}
						</ul>
					</ScrollLoading>
				</div>
				<DockBar current={2} />
				<Modal
					contentLabel="ModalB"
					isOpen={this.state.showModal}
					onRequestClose={this.handleCloseModal}
					shouldCloseOnOverlayClick={true}
				>
					<h3 className="al-c orangered pdt1">访问失败</h3>
					<p className="al-c pdt1-5">页面加载失败！</p>
				</Modal>
			</div>
		);
	}
}
