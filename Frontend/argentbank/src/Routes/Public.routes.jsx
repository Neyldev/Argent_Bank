import { Routes, Route, Navigate } from 'react-router-dom';

import { Home, Login } from '@/Pages/Public/Index';
import Layout from '@/Layouts/Layout';

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Home />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;
