import { h, Component } from 'preact';
import { Router } from 'preact-router';
import './../styles/global.common';
import history from '~/core/history';

import DockBar from './DockBar';
import Home from '~/containers/Home';
import SecurityCode from '~/containers/SecurityCode';
import GetPhoto from '~/containers/GetPhoto';
import Voice from '~/containers/Voice';
import Infomation from '~/containers/Infomation';
import Preview from '~/containers/Preview';
import SView from '~/containers/View';



import {wechatInfo} from '~/config';
import wechat, {share} from '~/utils/wechat';
import Request from '~/core/request';

const url = window.location.href.split('#');

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			user: {name: 'xiehuiming'}
		};
	}

	componentDidMount() {

	}


	getChildContext() {
		return {
			user: this.state.user
		};
	}
	render() {
		console.log(this.context);
		return (
			<div id="app"  >
				<Router history={history}>
					<Home path="/" />
					<SecurityCode path="/securitycode" />
					<GetPhoto path="/getphoto" />
					<Voice path="/voice" />
					<Infomation path="/infomation" />
					<Preview path="/preview" />
					<SView path="/view" />
				</Router>
				<DockBar />
			</div>
		);
	}
}
