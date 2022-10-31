import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import NavBarComponent from './components/NavBarComponent';
import EventsPage from './pages/EventsPage/EventsPage';
import BlogPage from './pages/BlogPage/BlogPage';
import HomePage from './pages/HomePage/HomePage';
import { useAuth } from './hooks/useAuth';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import EventDetailsPage from './pages/EventsPage/EventDetailsPage';

function App() {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return (
            <>
                <NavBarComponent />
                <Container maxWidth="lg" sx={{ marginTop: 15 }}>
                    <Routes>
                        <Route path="/" exact element={<HomePage />} />
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
                    <Route path="/events" exact element={<EventsPage />} />
                    <Route path="/event/:eventId" exact element={<EventDetailsPage />} />
                    <Route path="/blog" exact element={<BlogPage />} />
                    <Route path="/me" exact element={<ProfilePage />} />
                </Routes>
            </Container>
        </>
    );
}

export default App;
