import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage/Login';
import NavBarComponent from './components/NavBarComponent';
import EventsPage from './pages/Events/EventsPage';
import BlogPage from './pages/BlogPage/BlogPage';
import HomePage from './pages/HomePage/HomePage';
import { useAuth } from './hooks/useAuth';
import ProfilePage from './pages/ProfilePage/ProfilePage';

function App() {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return (
            <>
                <NavBarComponent />
                <Container maxWidth="lg" sx={{ marginTop: 15 }}>
                    <Routes>
                        <Route path="/" exact element={<HomePage />} />
                        <Route path="/login" exact element={<Login />} />
                        <Route path="/registration" exact element={<Login />} />
                        <Route path="/events" exact element={<EventsPage />} />
                        <Route path="/blog" exact element={<BlogPage />} />
                    </Routes>
                </Container>
            </>
        );
    }
    return (
        <>
            <NavBarComponent />
            <Container maxWidth="lg" sx={{ marginTop: 15 }}>
                <Routes>
                    <Route path="/" exact element={<HomePage />} />
                    <Route path="/logout" exact element={<Login />} />
                    <Route path="/event/:eventid/apply" exact element={<Login />} />
                    <Route path="/events" exact element={<EventsPage />} />
                    <Route path="/event/:eventid/applicants" exact element={<Login />} />
                    <Route path="/blog" exact element={<BlogPage />} />
                    <Route path="/me" exact element={<ProfilePage />} />
                    <Route path="/users" exact element={<Login />} />
                </Routes>
            </Container>
        </>
    );
}

export default App;
