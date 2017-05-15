import { h, Component } from 'preact';
import DockBar from '~/components/DockBar';
import HeaderBar from '~/components/HeaderBar';
import ScrollLoading from '~/components/ScrollLoading';
import history from '~/core/history';
import s from './Organization.scss';

export default class Organization extends Component {

	constructor(props){
		super(props);
		this.state = {
			list: [1]
		};
	}

	handleAction = () => new Promise((resolve) => {
		console.log('22222');
	});

	handleEnter = () => {
		history.push('/orgd');
	}

	render() {
		console.log('s', s);
		const { list } = this.state;
		return (
			<div className={s.root}>
				<HeaderBar
					setTitle="帮派"
					// goBack
					// Next={{icon: 'icon-add', link: '/'}}
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
									<li className="clearfix" key={item} onClick={this.handleEnter}>
										<div className="w2-5 fl">
											<img src={require('./face.jpg')} alt=""/>
										</div>
										<div className="w7-5">
											<h3 className="txt_cut font">哈德帮</h3>
											<p className="txt_cut gray font-small">(20人)</p>
										</div>
									</li>
								))
							}
						</ul>
					</ScrollLoading>
				</div>
				<DockBar current={3} />
			</div>
		);
	}
}
