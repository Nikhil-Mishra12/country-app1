import {createRoot} from 'react-dom/client'
import Contact  from './components/Contact';
import App from './App'
import Error from './components/Error';
import Home from './components/Home';
import{createBrowserRouter,RouterProvider} from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import { ThemeProvider } from './components/contexts/ThemeContext';
const router=createBrowserRouter([
    {
        path: '/',
        element:<App />,
        errorElement:<Error />,
        children:[
            {
             path: '/',
        element:<Home />,
            },
            {
             path: '/contact',
        element:<Contact />,
            },
            {
             path: '/:country',
        element:<CountryDetails />,
            }
        ]
    },
    ])
const root=createRoot(document.querySelector('#root'))

root.render(
<RouterProvider router={router} />

)
