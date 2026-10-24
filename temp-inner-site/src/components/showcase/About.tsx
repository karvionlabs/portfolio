import React from 'react';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Abdullah Karif Shahjada</h3>
            <br />
            <div className="text-block">
                <p>
                    I am an <strong>AI Automation Expert</strong> based in Bangladesh, specializing in building intelligent automated workflows and social media automation systems. Alongside my core focus on AI automation, I work extensively as a <strong>Software Developer</strong>, <strong>App Developer</strong>, and <strong>Meta Marketing Expert</strong>. In 2026, I successfully completed the <strong>Professional AI Automation Course</strong> from the <strong>As-Sunnah Skill Development Institute</strong> as part of their pioneering <strong>1st Batch</strong>.
                </p>
                <br />
                <p>
                    Thank you for taking the time to visit my portfolio. I hope you enjoy exploring my work as much as I enjoyed building it. If you have any questions, project inquiries, or collaboration ideas, feel free to reach out to me via email at{' '}
                    <a href="mailto:hellokarvionlabs@gmail.com">hellokarvionlabs@gmail.com</a> or connect with me directly on WhatsApp at{' '}
                    <a href="https://wa.me/8801884636312" target="_blank" rel="noreferrer">+880 1884-636312</a>.
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    My journey into technology started with a strong curiosity about how digital systems operate and how repetitive tasks can be simplified through smart technology. This passion naturally led me to specialize in <strong>AI Automation</strong>, where I design and implement seamless automated workflows that save time and scale business operations efficiently.
                </p>
                <br />
                <p>
                    To establish a strong professional foundation in this rapidly evolving field, I enrolled in the <strong>1st Batch</strong> of the <strong>Professional AI Automation Course</strong> at the <strong>As-Sunnah Skill Development Institute</strong> and graduated in <strong>2026</strong>. Through hands-on projects, I mastered advanced social media automation, custom AI agent integration, and end-to-end business process automation.
                </p>
                <br />
                <p>
                    Beyond AI automation, I have developed a versatile skill set across multiple digital domains:
                </p>
                <br />
                <ul>
                    <li style={{ marginBottom: 8 }}>
                        <strong>App & Software Development:</strong> Building functional, user-friendly applications and custom software solutions tailored to modern business needs.
                    </li>
                    <li style={{ marginBottom: 8 }}>
                        <strong>Social Media & Workflow Automation:</strong> Creating smart, automated systems for social platforms and internal operations to maximize productivity and engagement.
                    </li>
                    <li style={{ marginBottom: 8 }}>
                        <strong>Meta Marketing:</strong> Strategizing, launching, and optimizing data-driven ad campaigns on Meta platforms to help brands reach their target audience and achieve measurable growth.
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h3>Karvion Labs & Content Creation</h3>
                <br />
                <p>
                    In addition to my development and automation work, I am the <strong>Founder of Karvion Labs</strong>. Through Karvion Labs, I regularly create and publish educational and insightful video content on YouTube and Facebook. My goal with this platform is to share practical knowledge about AI tools, modern automation techniques, software development, and digital growth strategies with a wider community.
                </p>
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring the rest of my portfolio website and everything it has to offer.
                </p>
                <br />
                <p>
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
