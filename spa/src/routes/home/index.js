import { h, Component } from 'preact';
import style from './style.scss';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>RRAUZ</h1>
				<h2>Things worth sharing</h2>
			</div>
		);
	}
}
