import React from 'react';
import { Link } from '../general';

export interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
    return (
        <div style={styles.page}>
            <div style={styles.header}>
                <h1 style={styles.name}>Abdullah Karif Shahjada</h1>
                <h2>AI Automation</h2>
            </div>
            <div style={styles.buttons}>
                <Link containerStyle={styles.link} to="/about" text="ABOUT" />
                <Link
                    containerStyle={styles.link}
                    to="/experience"
                    text="EXPERIENCE"
                />
                <Link
                    containerStyle={styles.link}
                    to="/projects"
                    text="PROJECTS"
                />
                <Link
                    containerStyle={styles.link}
                    to="/contact"
                    text="CONTACT"
                />
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    page: {
        left: 0,
        right: 0,
        top: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
    },
    header: {
        textAlign: 'center',
        marginBottom: 64,
        marginTop: 64,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        justifyContent: 'space-between',
        padding: '0px 40px',
    },
    image: {
        width: 800,
    },
    link: {
        padding: '0px 16px',
    },
    nowrap: {
        whiteSpace: 'nowrap',
    },
    name: {
        fontSize: 54,
        marginBottom: 16,
        lineHeight: 1.05,
    },
    caption: {
        width: '80%',
        maxWidth: 600,
        textAlign: 'center',
        marginTop: 32,
    },
};

export default Home;
