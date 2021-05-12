import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';

function Dashboard() {


    return (
        <section className="dashboard">
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <Navbar />
            <div className="navbar-spacer"></div>
        </section>
    )
}
export default Dashboard;