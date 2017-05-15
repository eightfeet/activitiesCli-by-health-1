import { h, Component } from 'preact';
import { Router } from 'preact-router';
import './../styles/global.common';
import history from '~/core/history';
import { register } from '~/api';

import Home from '~/containers/Home';
import CardHolder from '~/containers/CardHolder';
import Organization from '~/containers/Organization';
import OrganizationDetail from '~/containers/OrganizationDetail';
import UserCenter from '~/containers/UserCenter';
import Create from '~/containers/Create';
import Works from '~/containers/Works';
import Resume from '~/containers/Resume';

import BaseInfo from '~/containers/BaseInfo';

import Card from '~/containers/Card';



import {wechatInfo} from '~/config';
import wechat, {share} from '~/utils/wechat';
import Request from '~/core/request';

const url = window.location.href.split('#');

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			user: {
				name: 'xiehuiming',
				created: false
			}
		};
	}


	componentWillMount() {
		register();
	}


	componentDidMount() {

	}

	handleUser = (user) => {
		this.setState({user});
	}

	getChildContext() {
		return {
			user: this.state.user,
			handleUser: this.handleUser
		};
	}
	render() {
		console.log(this.context);
		return (
			<div id="app">
				<Router history={history}>
					<Home path="/" />
					<CardHolder path="/cardholder" />
					<Create path="/create" />
					<Card path="/card" />
					<BaseInfo path="/baseinfo" />
					<Resume path="/resume" />
					<Works path="/works" />
					<Organization path="/organization"/>
					<OrganizationDetail path="/orgd" />
					<UserCenter path="/usercenter" />
					<Home default />
				</Router>
			</div>
		);
	}
}
