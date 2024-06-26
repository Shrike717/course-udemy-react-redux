import React from 'react';
import UsersList from './components/UsersList';

// This app needs to run the json-server: npm run start:server
// Then run the app: npm start

function App() {
	return (
		<div className='container mx-auto'>
			<UsersList />
		</div>
	);
}

export default App;
