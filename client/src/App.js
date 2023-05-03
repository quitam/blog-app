import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import WritePost from './pages/WritePost';
import DetailPost from './pages/DetailPost';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyles from '../src/components/GlobalStyles';

import { Outlet, Route, Routes } from 'react-router-dom';

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

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <DefaultLayout />,
//         children: [
//             {
//                 path: '/',
//                 element: <Home />,
//             },
//             {
//                 path: '/write-post',
//                 element: <WritePost />,
//             },
//             {
//                 path: '/post/:id',
//                 element: <DetailPost />,
//             },
//         ],
//     },
//     {
//         path: '/login',
//         element: <Login />,
//     },
//     {
//         path: '/register',
//         element: <Register />,
//     },
// ]);

// function App() {
//     return <RouterProvider router={router} />;
// }

function App() {
    return (
        <GlobalStyles>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/write-post" element={<WritePost />} />
                    <Route path="/post/:id" element={<DetailPost />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </GlobalStyles>
    );
}

export default App;
