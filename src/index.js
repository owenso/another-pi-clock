import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './store';

import App from './components/App';
// import './styles/main.scss';

ReactDOM.render(
  <AppContainer>
		<Provider store={store}>
			<App />
		</Provider>
	</AppContainer>,
	document.getElementById('container')
);

// Hot Module Replacement API
//https://github.com/gaearon/react-hot-loader/tree/next-docs/docs
if (module.hot) {
	module.hot.accept('./components/App.jsx', () => {
		const NextApp = require('./components/App.jsx').default;
		ReactDOM.render(
			<AppContainer>
				<Provider store={store}>
					<NextApp/>
				</Provider>
			</AppContainer>,
			document.getElementById('main')
		);
	});
}