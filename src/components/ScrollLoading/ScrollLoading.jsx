import { h, Component } from 'preact';
import s from './ScrollLoading.scss';

class ScrollLoading extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isLocked: false,
			showLoading: false,
			isPageOver: false,
			noMore: false,
			stopBack: false,
			showBackToTop: false
		};
		this.timer = null;
		this.isLockedNew = false;
	}

	componentWillUnmount() {
		window.clearTimeout(this.timer);
	}

	onScroll = (e) => {
		const { handleAction, totalsize, currentpage, pagesize, backToTop } = this.props;
    // 滚动的高度
		const scrollTop = e.currentTarget.scrollTop;
    // 外框高度
		const boxHeight = e.currentTarget.offsetHeight;
    // 内容高度
		const contentHeight = e.currentTarget.childNodes[0].offsetHeight;

		if (!this.state.isPageOver) {
			if (scrollTop + boxHeight >= contentHeight) {
				if (!this.isLockedNew) {
					this.isLockedNew = true;
					this.setState({
						isLocked: true,
						showLoading: true
					});
					if (!handleAction) {
						console.log('!!!!!!!!!!请务必传入Promise方法  handleAction = () => new Promise((resolve) => {doing...})');
						return;
					}
					handleAction()
            .then(() => new Promise((resolve) => {
	this.setState({
		showLoading: false
	});
	resolve();
}))
            .then(() => new Promise((resolve) => {
	window.clearTimeout(this.timer);
	this.timer = window.setTimeout(() => {
		this.isLockedNew = false;
		this.setState({
			isLocked: false
		});
		resolve();
	}, 1200);
})).catch(() => {
	this.setState({
		isPageOver: true,
		showLoading: false,
		noMore: true
	});
});
				}
				if (totalsize <= (currentpage * pagesize)) {
					this.setState({
						isPageOver: true,
						showLoading: false,
						noMore: true
					});
				}
			}
		} else if (!this.state.stopBack) {
			this.setState({
				stopBack: true
			});
		}
		if (backToTop) {
			this.handlerScroll();
		}
	}

	handleTop = () => {
		this.startrun();
	}

	startrun = () => {
		clearInterval(this.timer);
		this.timer = setInterval(() => {
			let speed = this.refWarp.scrollTop / 8;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if (this.refWarp.scrollTop === 0) {
				clearInterval(this.timer);
			} else {
				this.refWarp.scrollTop -= speed;
			}
		}, 30);
	}

	refWarp = null
	refTop = null

	handlerScroll = () => {
		const WH = window.innerHeight;
		const PS = this.refWarp.scrollTop;
		if (PS > WH) {
			this.setState({
				showBackToTop: true
			});
		} else {
			this.setState({
				showBackToTop: false
			});
		}
	}

	render() {
		const { children } = this.props;
		const { showBackToTop } = this.state;
		return (
      <div ref={this.props.inRef}>
        <div className={s.scrollLoading} onScroll={this.onScroll} id={this.props.setId} ref={(ref) => { this.refWarp = ref; }}>
          <div>
            {children}
            {
              this.state.showLoading ?
                <div className={s.SLoading}>
                  <div className={`${s.listloading} center al-c`} >
                    <div>
                      <div />
                    </div>
                    <div>
                      <div />
                    </div>
                    <div>
                      <div />
                    </div>
                    <div>
                      <div />
                    </div>
                    <div>
                      <div />
                    </div>
                    <div>
                      <div />
                    </div>
                    <div>
                      <div />
                    </div>
                    <div>
                      <div />
                    </div>
                  </div>
                  <div className="gray-light al-c pd1 font-smallest">加载中</div>
                </div> :
              null
            }
            <div
              className={`gray-light al-c font-smallest ${s.nomoren} ${this.state.noMore ?
              s.nomore : 'hide'}`}
            >
              没有了</div>
          </div>
        </div>
        { this.props.backToTop ? <div className={`${s.backtotop} ${showBackToTop ? 'show' : 'hide'}`} onClick={this.handleTop} >
          <div className="al-c icon-uparrow orangered pdt1" style={{ fontSize: '1.8rem' }} />
          <p className="orangered al-c font-small">置顶</p></div> : null }
      </div>
		);
	}
}

export default ScrollLoading;
