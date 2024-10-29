import { Routes, Route } from 'react-router-dom';

import User from '@/Pages/Auth/User/user';
import Layout from '@/Layouts/Layout';

const AuthRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="user" element={<User />} />
            </Route>
        </Routes>
    );
};

export default AuthRouter;
