import { h, Component } from 'preact';
import SwipeableViews from 'react-swipeable-views';
import DockBar from '~/components/DockBar';
import { FStringPrivacy, FTimeStamp } from '~/utils/fliter';
import history from '~/core/history';
import classNames from 'classnames';
import Modal from '~/components/Modal';
import Loading from '~/components/Loading';
import s from './style';
import prd from './ex.jpg';
import sl from './styleb';

import face from './face.jpg';

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
			<div className={s.root}>
				<div className={classNames(s.wrap, 'center', 'pr')}>
					<div className={s.orbg} />
					<div className="w9 center pdb5-5">
						<div className={s.card}>
							<h3 className="w9 center pdt5">李大厨</h3>
							<ul className={classNames('clearfix', 'nls', 'w9', 'center', s.info)}>
								<li className="w2 al-r">电话：</li>
								<li className="w5 font-biggest">13783821431</li>
								<li className="w3 al-r"><span className={s.btnrz}>去认证</span></li>
								<li className="w2 al-r">公司：</li>
								<li className="w8">未知</li>
								<li className="w2 al-r">邮箱：</li>
								<li className="w6">暂无</li>
							</ul>
							<div className="w9-8 center clearfix">
								<ul className={classNames(s.banner, 'nls', 'clearfix')}>
									<li className="w3-3-3 txt_cut">
										<span className="icon-hot font-biggest"></span>
										人气:1311123
									</li>
									<li className={classNames('w3-3-3', 'txt_cut', s.bdl)}>
										<span className="icon-zan font-biggest"></span>
										点赞:1311123
									</li>
									<li className={classNames('w3-3-3', 'txt_cut', s.bdl)}>
										<span className="icon-fav font-biggest"></span>
										收藏:1311123
									</li>
								</ul>
							</div>
						</div>
						<div className={s.face}>
							<img src={face} alt=""/>
						</div>
						<div className={s.tabinfo}>
							<div className="clearfix">
								<div className={classNames(s.item, s.active)}>作品</div>
								<div className={s.item}>资料</div>
							</div>
							<div className={s.list}>
								<div className={classNames("clearfix", s.prditem)}>
									<div className={s.l}>
										<img src={prd} alt=""/>
									</div>
									<div className={s.r}>
										<h3>手撕鸡</h3>
										<p>选用三黄鸡为原料，其中，外皮金黄 可谓手撕鸡的卖点之一...</p>
									</div>
								</div>
								<div className={classNames("clearfix", s.prditem)}>
									<div className={s.l}>
										<img src={prd} alt=""/>
									</div>
									<div className={s.r}>
										<h3>手撕鸡</h3>
										<p>选用三黄鸡为原料，其中，外皮金黄 可谓手撕鸡的卖点之一...</p>
									</div>
								</div>
							</div>
						</div>

						<div className={s.xsrc}>
							<h3>相似人才</h3>
							<div className={classNames('clearfix', s.swbar)}>
								<div className="fl w-5">
									<span className="icon-leftarrow" />
								</div>
								<div className="fl w9">
									<SwipeableViews>
										<div className={s.swipeitem}>
											<div>
												<img src={face} alt=""/>
												<p className="al-c">
													name
												</p>
											</div>
											<div>
												<img src={face} alt=""/>
												<p className="al-c">
													name
												</p>
											</div>
											<div>
												<img src={face} alt=""/>
												<p className="al-c">
													name
												</p>
											</div>
											<div>
												<img src={face} alt=""/>
												<p className="al-c">
													name
												</p>
											</div>
										</div>
										<div className={s.swipeitem}>
											<div>
												<img src={face} alt=""/>
												<p className="al-c">
													name
												</p>
											</div>
											<div>
												<img src={face} alt=""/>
												<p className="al-c">
													name
												</p>
											</div>
											<div>
												<img src={face} alt=""/>
												<p className="al-c">
													name
												</p>
											</div>
											<div>
												<img src={face} alt=""/>
												<p className="al-c">
													name
												</p>
											</div>
										</div>
										<div className={s.swipeitem}>
											<div>
												<img src={face} alt=""/>
												<p className="al-c">
													name
												</p>
											</div>
											<div>
												<img src={face} alt=""/>
												<p className="al-c">
													name
												</p>
											</div>
											<div>
												<img src={face} alt=""/>
												<p className="al-c">
													name
												</p>
											</div>
											<div>
												<img src={face} alt=""/>
												<p className="al-c">
													name
												</p>
											</div>
										</div>
									</SwipeableViews>
								</div>
								<div className="fl w-5">
									<span className="icon-rightarrow" />
								</div>
							</div>
						</div>

						<div className="btn mgt-8">递交名片</div>
					</div>
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
				<DockBar current={1} />
			</div>
		);
	}
}
