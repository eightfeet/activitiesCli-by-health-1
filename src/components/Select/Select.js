import { h, Component } from 'preact';
import classNames from 'classnames';
import s from './Select.scss';


export default class Select extends Component {

	render() {
		const { className, children, ...other } = this.props;

		return (
			<div className={s.warp} >
				<span className={classNames(s.icon, 'icon-downarrow')} />
				<select
					{ ...other }
				>
					{children}
				</select>
			</div>
		);
	}
}
