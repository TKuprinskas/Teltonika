import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewUser from './pages/NewUser';
import NewCategory from './pages/NewCategory';
import UsersList from './pages/UsersList';

const PageRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/create-user'} element={<NewUser />} />
                <Route path={'/create-category'} element={<NewCategory />} />
                <Route path={'/samsung/:id'} element={<UsersList />} />
                <Route path={'/apple/:id'} element={<UsersList />} />
            </Routes>
        </Router>
    );
};

export default PageRouter;
