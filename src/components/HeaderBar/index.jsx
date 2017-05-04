import { h, Component } from 'preact';
import { Link } from 'preact-router';
import SubNav from './SubNav';
import history from '~/core/history';
import s from './HeaderBar.scss';
import logo from '~/assets/logo.png';
import svglogo from '~/assets/logo.svg';

class HeaderBar extends Component {
	constructor() {
		super();
		this.state = {
			isSearch: false,
			isSubMenu: false
		};
	}

	render() {
		const { Next } = this.props;
		return (
      <header>
        <div className={`${s.heardbar} clearfix  bg-orangered`}>
          <div className="center w6 pr al-c font-bigger white txt_cut">
            {this.props.setTitle}
          </div>
					{
						this.props.goBack ? <div onClick={history.goBack}>
						<div className={`${s.fixleft} ${s.headerbarIcon}`} onClick={this.handlerOpenMenu}>
							<span className={`icon-leftarrow ${s.bannerico}`} />
						</div>
					</div> : null
					}
          <div className={`${s.fixright} ${s.headerbarIcon}`} >
            <Link href={Next ? Next.link : null}>
              <span className={`${Next ? Next.icon : null} ${s.bannerico}`} />
            </Link>
          </div>

        </div>
        <div
          className={this.state.isSubMenu
          ? `fr ${s.submenu} show`
          : `fr ${s.submenu} hide`}
          onClick={this.handlerCloseMenu}

        >
          <SubNav />
        </div>
      </header>
		);
	}
}

export default HeaderBar;
