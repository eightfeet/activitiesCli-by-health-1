import { h, Component } from 'preact';
import { Router } from 'preact-router';
import './../styles/global.common';
import history from '~/core/history';

import Home from '~/containers/Home';
import CardHolder from '~/containers/CardHolder';
import Organization from '~/containers/Organization';
import UserCenter from '~/containers/UserCenter';
import Create from '~/containers/Create';


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
					<CardHolder path="/cardholder" />
					<Create path="/create" />
					<Organization path="/organization"/>
					<UserCenter path="/usercenter" />
					<Home default />
				</Router>
			</div>
		);
	}
}
