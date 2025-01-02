import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Điều chỉnh đường dẫn
import RestaurantPage from './pages/RestaurantPage'; // Điều chỉnh đường dẫn
import AccountPage from './pages/AccountPage'; // Import AccountPage
import Header from './components/header'; // Điều chỉnh đường dẫn
import Footer from './components/footer'; // Điều chỉnh đường dẫn
import { AuthProvider } from '@/context/authcontext'; // Import AuthProvider

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="min-h-screen flex flex-col">
                    <Header />

                    <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/restaurant/:id" element={<RestaurantPage />} />
                            <Route path="/account" element={<AccountPage />} />
                        </Routes>
                    </main>

                    <Footer />
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;