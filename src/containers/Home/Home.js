import { h, Component } from 'preact';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import DockBar from '~/components/DockBar';
import { FStringPrivacy, FTimeStamp } from '~/utils/fliter';
import history from '~/core/history';
import classNames from 'classnames';
import Modal from '~/components/Modal';
import ScrollLoading from '~/components/ScrollLoading';
import Loading from '~/components/Loading';
import s from './style';
import prd from './ex.jpg';
import sl from './styleb';

import face from './face.jpg';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			showModal: false,
			showModalb: false,
			voiceId: null,
			voiceStatus: '0',
			index: 0,
			swipe: [1, 2, 3, 4],
			works: [1, 2, 3, 4]
		};
	}

	handelLoading = () => {
		Loading.show();
		setTimeout(() => {
			Loading.hide();
		}, 4000);
	}

	handleAction = () => new Promise((resolve) => {
		console.log('22222');
	});

	handleChangeIndex = (index) => {
		this.setState({
			index
		});
	}

	handlePage = (n) => () => {
		const length = this.state.swipe.length - 1;
		const { index } = this.state;
		// 👉
		if (n === 1) {
			this.handleChangeIndex(index < length ? index + 1 : 0);
		}
		// 👈
		if (n === 0) {
			this.handleChangeIndex(index > 0 ? index - 1 : length);
		}
	}

	render() {
		// console.log(this.context);
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
								<div className={classNames(s.list, 'pr')}>
									<ScrollLoading
										handleAction={this.handleAction}
										setId={'aaa'}
									>
										{this.state.works.map(item => (
											<div key={item} className={classNames("clearfix", s.prditem)}>
												<div className={s.l}>
													<img src={prd} alt=""/>
												</div>
												<div className={s.r}>
													<h3>手撕鸡</h3>
													<p>选用三黄鸡为原料，其中，外皮金黄 可谓手撕鸡的卖点之一...</p>
												</div>
											</div>))
										}
									</ScrollLoading>
								</div>
						</div>

						<div className={s.xsrc}>
							<h3>相似人才</h3>
							<div className={classNames('clearfix', s.swbar)}>
								<div className="fl w-5" onClick={this.handlePage(0)}>
									<span className="icon-leftarrow" />
								</div>
								<div className="fl w9">
									<AutoPlaySwipeableViews
										interval={8000}
										onChangeIndex={this.handleChangeIndex}
										index={this.state.index}
									>
										{
											this.state.swipe.map(item =>
												(<div key={item} className={s.swipeitem}>
													<div>
														<img src={face} alt=""/>
														<p className="al-c">
															{item}name
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
												</div>)
											)
										}
									</AutoPlaySwipeableViews>
								</div>
								<div className="fl w-5" onClick={this.handlePage(1)}>
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
