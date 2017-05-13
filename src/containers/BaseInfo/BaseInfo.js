import { h, Component } from 'preact';
import classNames from 'classnames';
import s from './BaseInfo.scss';
import HeaderBar from '~/components/HeaderBar';
import Select from '~/components/Select';
import history from '~/core/history';
import face from './face.jpg';

export default class BaseInfo extends Component {

	handleCreated = () => {
		history.push('/usercenter');
	}

	render({ path }) {
		return (
			<div>
				<HeaderBar
					setTitle="修改基本资料"
					goBack
				/>
				<div className={classNames(s.root)}>
					<div className={classNames(s.card, 'radius-small', 'pdb2')}>
						<div className={s.face}>
							<img src={face} alt=""/>
						</div>
						<ul className={classNames(s.form, 'nls', 'clearfix', 'formBox')}>
							<li className='w2 al-r'><span className="pdr-5">姓名</span></li>
							<li className='w8'><input type="text"/></li>
							<li className='w2 al-r'><span className="pdr-5">手机</span></li>
							<li className='w8'><input type="text"/></li>
							<li className='w2 al-r'><span className="pdr-5">性别</span></li>
							<li className='w8'>
								<Select name="" id="" className={classNames(s.select, 'icon-downarrow')}>
									<option>男</option>
									<option>女</option>
								</Select>
							</li>
							<li className='w2 al-r'><span className="pdr-5">公司</span></li>
							<li className='w8'><input type="text"/></li>
							<li className='w2 al-r'><span className="pdr-5">职位</span></li>
							<li className='w8'>
								<Select name="" id="" className={classNames(s.select, 'icon-downarrow')}>
									<option> 23123123jhg1h2k3jhg1kj2h3gkjh1g23kjhg12kj3hg1kj2h3g</option>
								</Select>
							</li>
						</ul>
						<div className="btn mgt2 w9 center" onClick={this.handleCreated}>修改</div>
					</div>
				</div>
			</div>
		);
	}
}
