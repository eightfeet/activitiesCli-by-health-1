import { h, Component } from 'preact';
import DockBar from '~/components/DockBar';
import HeaderBar from '~/components/HeaderBar';
import ScrollLoading from '~/components/ScrollLoading';
import Modal from '~/components/Modal';
import s from './CardHolder.scss';


export default class CardHolder extends Component {

	constructor(props){
		super(props);
		this.state = {
			list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
			showModal: true
		};
	}

	handleAction = () => new Promise((resolve) => {
		console.log('22222');
	});

	handleCloseModal = () => {
		this.setState({ showModal: false });
	}

	render() {
		const { list } = this.state;
		return (
			<div className={s.root}>
				<HeaderBar
					setTitle="名片夹"
					// goBack
					Next={{icon: 'icon-bj', link: '/'}}
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
										<div className="w2-5 fl">
											<img src={require('./face.jpg')} alt=""/>
										</div>
										<div className="w7-5">
											<h3 className="txt_cut font">差距卡桑德拉会计师大会拉开绝世独立空间啊还是到了看见哈时代里看见哈时间的</h3>
											<p className="txt_cut gray font-small">(20人)</p>
										</div>
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
