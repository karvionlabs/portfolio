import React from 'react';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';
import portraitPic from '../../assets/pictures/karif.jpg';
import automationSessionPic from '../../assets/pictures/automation_session.jpg';

export interface AboutProps {}

const styles: { [key: string]: React.CSSProperties } = {
    paragraph: {
        textAlign: 'left',
        lineHeight: 1.6,
        wordSpacing: 'normal',
        letterSpacing: 'normal',
    },
    bulletItem: {
        marginBottom: 10,
        lineHeight: 1.5,
        textAlign: 'left',
    },
};

const About: React.FC<AboutProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Abdullah Karif Shahjada</h3>
            <br />
            <div className="text-block">
                <p style={styles.paragraph}>
                    I am an <strong>AI Automation Expert</strong> based in Bangladesh, specializing in building intelligent automated workflows and social media automation systems. Alongside my core focus on AI automation, I work extensively as a <strong>Software Developer</strong>, <strong>App Developer</strong>, and <strong>Meta Marketing Expert</strong>. In 2026, I successfully completed the <strong>Professional AI Automation Course</strong> from the <strong>As-Sunnah Skill Development Institute</strong> as part of their pioneering <strong>1st Batch</strong>.
                </p>
                <br />
                <p style={styles.paragraph}>
                    Thank you for taking the time to visit my portfolio. I hope you enjoy exploring my work as much as I enjoyed building it. If you have any questions, project inquiries, or collaboration ideas, feel free to reach out to me via email at{' '}
                    <a href="mailto:hellokarvionlabs@gmail.com">hellokarvionlabs@gmail.com</a> or connect with me directly on WhatsApp at{' '}
                    <a href="https://wa.me/8801884636312" target="_blank" rel="noreferrer">+880 1884-636312</a>.
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', textAlign: 'left', paddingRight: 16 }}>
                        <p style={styles.paragraph}>
                            My journey into technology started with a strong curiosity about how digital systems operate and how repetitive tasks can be simplified through smart technology. This passion naturally led me to specialize in <strong>AI Automation</strong>, where I design and implement seamless automated workflows that save time and scale business operations efficiently.
                        </p>
                        <br />
                        <p style={styles.paragraph}>
                            To establish a strong professional foundation in this rapidly evolving field, I enrolled in the <strong>1st Batch</strong> of the <strong>Professional AI Automation Course</strong> at the <strong>As-Sunnah Skill Development Institute</strong> and graduated in <strong>2026</strong>. Through hands-on projects, I mastered advanced social media automation, custom AI agent integration, and end-to-end business process automation.
                        </p>
                    </div>
                    <div style={{ width: 190, minWidth: 170, marginLeft: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                        <img
                            src={portraitPic}
                            alt="Abdullah Karif Shahjada"
                            style={{
                                width: '100%',
                                borderRadius: 4,
                                border: '1px solid #d0d0d0',
                                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.16)',
                            }}
                        />
                        <p style={{ marginTop: 8, textAlign: 'center' }}>
                            <sub>
                                <b>Figure 1:</b> Abdullah Karif Shahjada
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <p style={styles.paragraph}>
                    Beyond AI automation, I have developed a versatile skill set across multiple digital domains:
                </p>
                <br />
                <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={styles.bulletItem}>
                        <strong>App & Software Development:</strong> Building functional, user-friendly applications and custom software solutions tailored to modern business needs.
                    </li>
                    <li style={styles.bulletItem}>
                        <strong>Social Media & Workflow Automation:</strong> Creating smart, automated systems for social platforms and internal operations to maximize productivity and engagement.
                    </li>
                    <li style={styles.bulletItem}>
                        <strong>Meta Marketing:</strong> Strategizing, launching, and optimizing data-driven ad campaigns on Meta platforms to help brands reach their target audience and achieve measurable growth.
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h3>Karvion Labs & Automation Future Journey</h3>
                <br />
                <p style={styles.paragraph}>
                    In addition to my development and automation work, I am the <strong>Founder of Karvion Labs</strong>. Through Karvion Labs, I actively conduct hands-on training sessions and workshops on AI tools, automation systems, and future technology to empower the next generation of builders.
                </p>
                <br />
                <div
                    className="captioned-image"
                    style={{
                        alignSelf: 'center',
                        width: '100%',
                        maxWidth: 540,
                        margin: '12px auto 20px auto',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <img
                        src={automationSessionPic}
                        alt="Abdullah Karif Shahjada - AI Automation Session"
                        style={{
                            width: '100%',
                            borderRadius: 4,
                            border: '1px solid #d0d0d0',
                            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.18)',
                        }}
                    />
                    <p style={{ marginTop: 8, textAlign: 'center' }}>
                        <sub>
                            <b>Figure 2:</b> Conducting AI Automation Session, 2026
                        </sub>
                    </p>
                </div>
                <p style={styles.paragraph}>
                    My vision with Karvion Labs is to bridge the gap between complex artificial intelligence research and practical daily workflows, empowering freelancers, businesses, and developers to scale their operations 10x faster with autonomous AI agents.
                </p>
                <br />
                <p style={styles.paragraph}>
                    Thanks for reading about me! I hope that you enjoy exploring the rest of my portfolio website and everything it has to offer.
                </p>
                <br />
                <p style={styles.paragraph}>
                    If you have any questions, comments, or a project in mind, I would love to hear from you. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link>, send me an email at{' '}
                    <a href="mailto:hellokarvionlabs@gmail.com">hellokarvionlabs@gmail.com</a>, or message me directly on WhatsApp at{' '}
                    <a href="https://wa.me/8801884636312" target="_blank" rel="noreferrer">+880 1884-636312 (01884636312)</a>.
                </p>
            </div>
        </div>
    );
};

export default About;
