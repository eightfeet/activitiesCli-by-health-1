import { h, Component } from 'preact';
import DockBar from '~/components/DockBar';
import HeaderBar from '~/components/HeaderBar';
import ScrollLoading from '~/components/ScrollLoading';
import { Link } from 'preact-router/match';
import Modal from '~/components/Modal';
import classNames from 'classnames';
import s from './Works.scss';

export default class Works extends Component {

	constructor(props){
		super(props);
		this.state = {
			list: [{
				worksId: '1',
				name: '手撕鸡',
				info: '选用三黄鸡为原料，其中，外皮金黄 可谓手撕鸡的卖点之一...',
				img: require('./ex.jpg')
			}],
			edit: false,
			editname: null,
			editinfo: null,
			editimg: null,
			showModal: false,
			deletworks: false
		};
	}

	handleCloseModal = () => {
		this.setState({ showModal: false });
	}

	handleShowEdit = (id) => () => {
		if (id) {
			for (let i = 0; i < this.state.list.length; i += 1) {
				console.log(this.state.list[i], 33333);
				if (id === this.state.list[i].worksId) {
					this.setState({
						editname: this.state.list[i].name,
						editinfo: this.state.list[i].info,
						editimg: this.state.list[i].img,
						deletworks: true,
						showModal: true
					});
				}
			}
		} else {
			this.setState({
				editname: null,
				editinfo: null,
				editimg: null,
				deletworks: false,
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
									<li className="clearfix" key={item.worksId} onClick={this.handleShowEdit(item.worksId)}>
										<div className="w2-5 fl">
											<img src={item.img} alt=""/>
										</div>
										<div className="w7-5">
											<h3 className="txt_cut font">{item.name}</h3>
											<p className="txt_cut gray font-small">{item.info}</p>
										</div>
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
					<div className={s.pic}>
						{ this.state.editimg && this.state.editimg.length > 0 ?
							<img src={this.state.editimg} />
							: <div>
								<span className="icon-add" />
								<p>上传图片</p>
							</div>
						}

					</div>
					<ul className="nls pd1 clearfix">
						<li className="mgb1"><input type="text" value={this.state.editname} placeholder="作品名称" /></li>
						<li className="mgb1"><textarea className={s.textarea} placeholder="作品介绍" cols="30" rows="5" >{this.state.editinfo}</textarea></li>
						<li className="clearfix">
							<div className="fl w4-8 btn" onClick={this.handleCloseModal}>确定</div>
							{
								this.state.deletworks ?
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
