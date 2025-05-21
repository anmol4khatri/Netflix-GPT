import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login';
import Browse from './pages/Browse';
import TvShows from "./pages/TvShows";
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import ProtectedLayout from "./pages/ProtectedLayout";
import AiSearch from './pages/AiSearch';


let router = createBrowserRouter([
	{
		element: <ProtectedLayout/>,
		children: [
			{
				path: "/",
				element: <Login/>
			},
			{
				path: "/browse",
				element: <Browse/>
			},
			{
				path: "/tvshows",
				element: <TvShows/>
			},
			{
				path: "/ai_search",
				element: <AiSearch/>
			}
		]
	}
]);

createRoot(document.getElementById('root')).render(
	// <StrictMode>
		<Provider store={appStore}>
			<RouterProvider router={router} />
		</Provider>
	// </StrictMode>,
)
