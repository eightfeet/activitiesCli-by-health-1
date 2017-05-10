import { h, Component } from 'preact';
import DockBar from '~/components/DockBar';
import HeaderBar from '~/components/HeaderBar';
import ScrollLoading from '~/components/ScrollLoading';
import s from './CardHolder.scss';


export default class CardHolder extends Component {

	constructor(props){
		super(props);
		this.state = {
			list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
		};
	}

	handleAction = () => new Promise((resolve) => {
		console.log('22222');
	});

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
			</div>
		);
	}
}
