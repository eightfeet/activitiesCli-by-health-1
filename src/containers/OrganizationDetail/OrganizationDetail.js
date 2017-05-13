import { h, Component } from 'preact';
import DockBar from '~/components/DockBar';
import HeaderBar from '~/components/HeaderBar';
import ScrollLoading from '~/components/ScrollLoading';
import { Link } from 'preact-router/match';
import classNames from 'classnames';
import s from './OrganizationDetail.scss';

export default class OrganizationDetail extends Component {

	constructor(props){
		super(props);
		this.state = {
			list: [1, 2, 3],
			edit: false
		};
	}

	handleAction = () => new Promise((resolve) => {
		console.log('22222');
	});

	handleEdit = () => {
		this.setState({edit: true});
	}

	handleEndEdit = () => {
		this.setState({edit: false});
	}

	render() {
		console.log('s', s);
		const { list } = this.state;
		return (
			<div className={s.root}>
				<HeaderBar
					setTitle="哈德邦"
					goBack
				>
					{!this.state.edit ?
						<span className={classNames('icon-bj', 'white', s.edite)} onClick={this.handleEdit}/> :
						<span className={classNames('icon-yes', 'white', s.edite)} onClick={this.handleEndEdit}/>
					}
				</HeaderBar>
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
											<h3 className="txt_cut font">谢老大</h3>
											<p className="txt_cut gray font-small">大厨</p>
										</div>
										{this.state.edit ? <Link href={`tel:${13111232123}`}>
											<span className={classNames('icon-close', s.del)} />
										</Link> : null}
										{!this.state.edit ? <Link href={'/'}>
											<span className={classNames('icon-tel', s.tel)} />
										</Link> : null}
									</li>
								))
							}
						</ul>
					</ScrollLoading>
				</div>
			</div>
		);
	}
}
