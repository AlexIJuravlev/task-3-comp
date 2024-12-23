import './index.css';
import ReactLogo from './assets/react.svg?react';
import { MyCompanent } from './MyCompanent'

export const App = () => {
	return (
		<div className='App'>
			<h1>Hello world</h1>
			<ReactLogo />
			<MyCompanent type="normal" value="123"/>
		</div>

	);
};
