import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

const rootElem = document.getElementById('root');
if (!rootElem) throw new Error('Root element not found.');

ReactDOM.createRoot(rootElem).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
