import './App.css';
import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
    return (
        <Container maxWidth="lg">
            <Routes>
                <Route path="/" exact element={<Login />} />
            </Routes>
        </Container>
    );
}

export default App;
