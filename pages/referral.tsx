import React, { useState, useEffect } from 'react';

const Referral: React.FC = () => {
    const [referralLink, setReferralLink] = useState('');

    useEffect(() => {
        setReferralLink('http://localhost:5173/referral?ref=yourReferralCode');
    }, []);

    const referrals = [
        { id: 1, name: 'John Doe', date: '2023-10-01' },
        { id: 2, name: 'Jane Smith', date: '2023-10-02' }
    ];

    const copyToClipboard = () => {
        navigator.clipboard.writeText(referralLink);
        alert('Referral link copied to clipboard!');
    };

    return (
        <div>
            <h1>Referral Page</h1>
            <p>Welcome to the referral page!</p>
            <div>
                <h2>Invite Friends</h2>
                <p>Share this link to invite your friends:</p>
                <div>
                    <input type="text" value={referralLink} readOnly />
                    <button onClick={copyToClipboard}>Copy Link</button>
                </div>
            </div>
            <div>
                <h2>Your Referrals</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {referrals.map(referral => (
                            <tr key={referral.id}>
                                <td>{referral.id}</td>
                                <td>{referral.name}</td>
                                <td>{referral.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Referral;
