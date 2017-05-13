import { h, Component } from 'preact';
import { Link } from 'preact-router';
import history from '~/core/history';
import s from './HeaderBar.scss';
import logo from '~/assets/logo.png';
import svglogo from '~/assets/logo.svg';

class HeaderBar extends Component {
	render() {
		const { Next, children } = this.props;
		console.log(children);
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
            {children.length > 0 ? null : <Link href={Next ? Next.link : null}>
              <span className={`${Next ? Next.icon : null} ${s.bannerico}`} />
            </Link>}
						{children}
          </div>
        </div>
      </header>
		);
	}
}

export default HeaderBar;
