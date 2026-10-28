import React, { useState } from 'react';
import ResumeDownload from './ResumeDownload';

export interface ContactProps {}

const Contact: React.FC<ContactProps> = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const leads = JSON.parse(localStorage.getItem('folio_client_leads') || '[]');
            leads.unshift({
                id: Date.now(),
                name,
                email,
                company,
                message,
                date: new Date().toLocaleString()
            });
            localStorage.setItem('folio_client_leads', JSON.stringify(leads));
        } catch (err) {
            console.error('Failed to log lead:', err);
        }
        setIsSent(true);
    };

    return (
        <div className="site-page-content">
            <h1>Contact & Audit Booking</h1>
            <h3>Get in touch with Abdullah Karif Shahjada</h3>
            <br />
            {isSent ? (
                <div style={{ background: '#e6ffe6', border: '1px solid #66cc66', padding: 20, borderRadius: 4, color: '#006600' }}>
                    <h3>✓ Transmission Received!</h3>
                    <p style={{ marginTop: 8 }}>
                        Thank you for reaching out. Your project brief has been logged into my priority queue. I will review your requirements and respond shortly.
                    </p>
                </div>
            ) : (
                <div className="text-block">
                    <p>
                        Interested in hiring me for an <strong>AI Automation Project</strong>, <strong>App/Software Development</strong>, or <strong>Meta Ad Campaigns</strong>? Fill out the brief form below, or reach out directly via:
                    </p>
                    <ul style={{ margin: '12px 0 16px 20px', lineHeight: 1.8 }}>
                        <li><strong>Email:</strong> <a href="mailto:hellokarvionlabs@gmail.com">hellokarvionlabs@gmail.com</a></li>
                        <li><strong>WhatsApp:</strong> <a href="https://wa.me/8801884636312" target="_blank" rel="noreferrer">+880 1884-636312 (01884636312)</a></li>
                        <li><strong>Facebook Page:</strong> <a href="https://www.facebook.com/profile.php?id=61593837111806" target="_blank" rel="noreferrer">Abdullah Karif Shahjada (Official Page)</a></li>
                        <li><strong>Karvion Labs:</strong> Founder & Tech Content Creator</li>
                    </ul>
                    <form onSubmit={handleSubmit} style={styles.form}>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Your Name:</label>
                            <input
                                required
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                style={styles.input}
                            />
                        </div>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Your Email:</label>
                            <input
                                required
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={styles.input}
                            />
                        </div>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Company / Business:</label>
                            <input
                                type="text"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                style={styles.input}
                            />
                        </div>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Project Details / Bottleneck to Automate:</label>
                            <textarea
                                required
                                rows={5}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                style={styles.textarea}
                            />
                        </div>
                        <button type="submit" style={styles.button}>
                            Send Operational Briefing
                        </button>
                    </form>
                </div>
            )}
            <br />
            <br />
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    form: {
        maxWidth: 500,
        flexDirection: 'column',
    },
    formGroup: {
        flexDirection: 'column',
        marginBottom: 14,
    },
    label: {
        fontSize: 13,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    input: {
        padding: '8px 10px',
        border: '1px solid #808080',
        borderRadius: 2,
        fontSize: 14,
        fontFamily: 'inherit',
    },
    textarea: {
        padding: '8px 10px',
        border: '1px solid #808080',
        borderRadius: 2,
        fontSize: 14,
        fontFamily: 'inherit',
    },
    button: {
        padding: '8px 20px',
        background: '#c0c0c0',
        border: '2px solid',
        borderColor: '#ffffff #808080 #808080 #ffffff',
        fontWeight: 'bold',
        cursor: 'pointer',
        alignSelf: 'flex-start',
        marginTop: 6,
    },
};

export default Contact;
