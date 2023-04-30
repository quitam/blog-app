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
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
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
    return (
        <div className="app">
            <div className="container">
                <RouterProvider router={router} />
            </div>
        </div>
    );
}

export default App;
