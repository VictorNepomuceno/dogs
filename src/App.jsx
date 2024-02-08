import React from 'react';
import Footer from './components/Footer';
import Header from './components/header';
import Home from './components/Home';
import Login from './components/login/login';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserStorage } from './UserContext';
import User from './components/User/User';
import ProtectedRoute from './components/helper/ProtectedRoute';
import Photo from './components/Photo/Photo';
import UserProfile from './components/User/UserProfile';
import NotFound from './components/NotFound';

const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <UserStorage>
                    <Header />
                    <main className="appBody">
                        <Routes>
                            <Route path="/dogs" element={<Home />} />
                            <Route path="/login/*" element={<Login />} />
                            <Route
                                path="/conta/*"
                                element={
                                    <ProtectedRoute>
                                        <User />
                                    </ProtectedRoute>
                                }
                            />
                            <Route path="/foto/:id" element={<Photo />} />
                            <Route path="/perfil/:user" element={<UserProfile />} />
                            <Route path="/*" element={<NotFound />} />
                        </Routes>
                    </main>
                    <Footer />
                </UserStorage>
            </BrowserRouter>
        </div>
    );
};

export default App;
