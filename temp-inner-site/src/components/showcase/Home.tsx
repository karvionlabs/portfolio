import React from 'react';

export interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
    return (
        <div style={styles.page}>
            <div style={styles.header}>
                <h1 style={styles.name}>Abdullah Karif Shahjada</h1>
                <h2 style={styles.title}>AI Automation Specialist</h2>
                <h4 style={styles.subTitle}>Software Developer • App Developer • Meta Marketing</h4>
                <p style={styles.caption}>
                    Welcome to my official interactive portfolio. Please use the navigation menu on the left to explore my background, experience, projects, and contact channels.
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    page: {
        left: 240,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
        boxSizing: 'border-box',
        padding: '32px 48px',
    },
    header: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 620,
    },
    name: {
        fontSize: 46,
        marginBottom: 12,
        lineHeight: 1.15,
        fontWeight: 'bold',
        color: '#1a1a1a',
    },
    title: {
        fontSize: 22,
        marginBottom: 8,
        color: '#2d3748',
        fontWeight: 600,
    },
    subTitle: {
        fontSize: 15,
        marginBottom: 20,
        color: '#4a5568',
        fontWeight: 500,
    },
    caption: {
        fontSize: 14,
        lineHeight: 1.6,
        color: '#4a5568',
        textAlign: 'center',
    },
};

export default Home;
