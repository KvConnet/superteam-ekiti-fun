import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav>
            // ...existing code...
            <ul>
                // ...existing code...
                <li><Link to="/referral">Referral</Link></li>
                // ...existing code...
            </ul>
            // ...existing code...
        </nav>
    );
};

export default Navbar;
