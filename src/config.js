let url;

if (process.env.NODE_ENV === 'production') {
	url = ''; // 生产地址
}

if (process.env.NODE_ENV === 'development') {
	url = '/cook'; // 开发代理http://wx-test.by-health.com地址
}

if (process.env.NODE_ENV === 'sit') {
	url = ''; // 测试环境地址
}

export const apiUrl = url;

export const wechatInfo = {
	appId: 'wxb425b33623e260d4',
	jsApiList: ['startRecord', 'stopRecord', 'playVoice', 'translateVoice', 'scanQRCode', 'showAllNonBaseMenuItem'],
	title: '一篇文章',
	link: window.location.href,
	imgUrl: 'http://img1.cache.netease.com/ent/2017/3/16/20170316081052bc7eb.jpg?imageView&thumbnail=380y187&quality=85',
	desc: '一篇文章描述'
};

