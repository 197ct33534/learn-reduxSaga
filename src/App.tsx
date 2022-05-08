import React, { useEffect } from 'react';

import cityApi from 'api/cityApi';
import { Route, Routes } from 'react-router-dom';
import LoginPage from 'features/auth/Page/LoginPage';
import { AdminLayout } from 'components/Layout';
import { NotFound, PivateRoute } from 'components/common';

function App() {
    useEffect(() => {
        cityApi.getAll().then((response) => console.log(response));
    }, []);
    return (
        <>
            <Routes>
                <Route path="/login" element={<LoginPage />} />

                <Route path="/admin" element={<PivateRoute />}>
                    <Route path="" element={<AdminLayout />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
