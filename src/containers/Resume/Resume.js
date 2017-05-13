import { h, Component } from 'preact';
import DockBar from '~/components/DockBar';
import HeaderBar from '~/components/HeaderBar';
import ScrollLoading from '~/components/ScrollLoading';
import { Link } from 'preact-router/match';
import Modal from '~/components/Modal';
import classNames from 'classnames';
import s from './Resume.scss';

export default class Resume extends Component {

	constructor(props){
		super(props);
		this.state = {
			list: [{
				resumeId: '1',
				starttime: '2015-12-12',
				endtime: '2017-12-12',
				company: '广州XXXX餐饮有限公司广州XXXX餐饮有限公司',
				position: '主厨',
				info: '主要负责餐厅风味定制，日常工作安排...'
			}],
			edit: false,
			starttime: null,
			endtime: null,
			company: null,
			position: null,
			info: null,
			showModal: true,
			deletresume: false
		};
	}

	handleCloseModal = () => {
		this.setState({ showModal: false });
	}

	handleShowEdit = (id) => () => {
		if (id) {
			for (let i = 0; i < this.state.list.length; i += 1) {
				console.log(this.state.list[i], 33333);
				if (id === this.state.list[i].resumeId) {
					this.setState({
						starttime: this.state.list[i].starttime,
						endtime: this.state.list[i].endtime,
						company: this.state.list[i].company,
						position: this.state.list[i].position,
						info: this.state.list[i].info,
						deletresume: true,
						showModal: true
					});
				}
			}
		} else {
			this.setState({
				starttime: null,
				endtime: null,
				company: null,
				position: null,
				info: null,
				deletresume: false,
				showModal: true
			});
		}
	}

	render() {
		console.log('s', s);
		const { list } = this.state;
		return (
			<div className={s.root}>
				<HeaderBar
					setTitle="编辑作品"
					goBack
				>
					<span className={classNames('icon-add', 'white', s.edite)} onClick={this.handleShowEdit()}/>
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
									<li className="clearfix" key={item.resumeId} onClick={this.handleShowEdit(item.resumeId)}>
										<h3 className="txt_cut font orangered">{item.starttime} 到 {item.endtime}</h3>
										<div className="clearfix">
											<div className="w4-8 fl txt_cut">
												{item.company}
											</div>
											<div className="w4-8 fr txt_cut">
												岗位：{item.position}
											</div>
										</div>
										<p className="txt_cut gray font-small">{item.info}</p>
									</li>
								))
							}
						</ul>
					</ScrollLoading>
				</div>
				<Modal
					contentLabel="ModalB"
					isOpen={this.state.showModal}
					onRequestClose={this.handleCloseModal}
					shouldCloseOnOverlayClick={true}
				>
					<ul className={classNames('nls pd1 clearfix pdt3 w9 center', s.form)}>
						<li className="mgb1 w3 al-r">开始时间:&nbsp;</li>
						<li className="mgb1 w7"><input className="ww" type="date" value={this.state.starttime} placeholder="开始时间" /></li>
						<li className="mgb1 w3 al-r">结束时间:&nbsp;</li>
						<li className="mgb1 w7"><input className="ww" type="date" value={this.state.endtime} placeholder="结束时间" /></li>
						<li className="mgb1 ww"><input type="text" value={this.state.company} placeholder="公司" /></li>
						<li className="mgb1 ww"><textarea className={s.textarea} placeholder="职能描述" cols="30" rows="5" >{this.state.info}</textarea></li>
						<li className="clearfix ww">
							<div className="fl w4-8 btn" onClick={this.handleCloseModal}>确定</div>
							{
								this.state.deletresume ?
								<div className="fr w4-8 btnb" onClick={this.handleCloseModal}>删除</div> :
								<div className="fr w4-8 btnb" onClick={this.handleCloseModal}>取消</div>
							}
						</li>
					</ul>
				</Modal>
			</div>
		);
	}
}
