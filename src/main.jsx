import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './components/Login';
import Browse from './components/Browse';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';


let router = createBrowserRouter([
	{
		path: "/",
		Component: Login,
	},
	{
		path: "/browse",
		Component: Browse,
	}
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider store={appStore}>
			<RouterProvider router={router} />
		</Provider>
	</StrictMode>,
)
