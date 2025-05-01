import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";

const appRoutes = () => {
    return (
        <Routes> 
        <Route path="/" 
        element={
        <Layout>
            <HomePage />
            
                </Layout>
            } />
        <Route path="/auth-callback" element={<AuthCallbackPage /> } />
        <Route path="/user-profile" element={<span>User Profile Page</span>} />
        <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );

};
export default appRoutes;
// This file defines the routes for the application using React Router.
// The main route is the home page, and there is a user profile page.
// Any unknown routes will redirect to the home page.