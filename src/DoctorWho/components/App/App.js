import React from 'react';
import WithDoctorWhoService from '../hoc/WithDoctorWhoService';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';
import './App.css';

const App = () => {
    return(
        <WithDoctorWhoService>
            <div className="container">
                <main className="main">
                    <Header />
                    <MainContent />
                </main>
                <Footer />
            </div>
        </WithDoctorWhoService>
    )
}

export default App;