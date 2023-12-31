import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './misc/reportWebVitals';

import './css/index.css';

import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

reportWebVitals();
