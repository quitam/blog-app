import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import WritePost from './pages/WritePost';
import DetailPost from './pages/DetailPost';
import Header from './components/Header';
import Footer from './components/Footer';

import {
    createBrowserRouter,
    Outlet,
    // createRoutesFromElements,
    // Route,
    RouterProvider,
} from 'react-router-dom';

const DefaultLayout = () => {
    return (
        <div className="app">
            <div className="blur" style={{ top: '10%', right: '-10%' }}></div>
            <div className="blur" style={{ top: '50%', left: '-5%' }}></div>
            <div className="app-container">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/write-post',
                element: <WritePost />,
            },
            {
                path: '/post/:id',
                element: <DetailPost />,
            },
        ],
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
