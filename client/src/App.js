import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage/Login';
import NavBarComponent from './components/NavBarComponent';
import EventsPage from './pages/Events/EventsPage';
import BlogPage from './pages/BlogPage/BlogPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
    return (
        <>
            <NavBarComponent />
            <Container maxWidth="lg" sx={{ marginTop: 15 }}>
                <Routes>
                    <Route path="/" exact element={<Login />} />
                    <Route path="/home" exact element={<HomePage />} />
                    <Route path="/registration" exact element={<Login />} />
                    <Route path="/login" exact element={<Login />} />
                    <Route path="/logout" exact element={<Login />} />
                    <Route path="/event/:eventid/apply" exact element={<Login />} />
                    <Route path="/events" exact element={<EventsPage />} />
                    <Route path="/event/:eventid/applicants" exact element={<Login />} />
                    <Route path="/blog" exact element={<BlogPage />} />
                    <Route path="/me" exact element={<Login />} />
                    <Route path="/users" exact element={<Login />} />
                </Routes>
            </Container>
        </>
    );
}

export default App;
