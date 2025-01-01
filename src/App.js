import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '/app/page';
import RestaurantPage from './pages/RestaurantPage';
import Header from './components/header';
import Footer from './components/footer';

function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <Header />

                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/restaurant/:id" element={<RestaurantPage />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    );
}

export default App;