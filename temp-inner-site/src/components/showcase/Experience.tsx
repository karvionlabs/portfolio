import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1 style={{ marginLeft: -16 }}>Experience</h1>
            <h3>Career & Professional Initiatives</h3>
            <br />
            <div className="text-block">
                <div style={styles.headerRow}>
                    <h3>Karvion Labs</h3>
                    <b>Present</b>
                </div>
                <p style={styles.companyName}>
                    Founder & Lead AI Automation Specialist
                </p>
                <p style={styles.introParagraph}>
                    A technology and digital solutions initiative focused on helping businesses streamline operations through custom AI workflows, web and mobile applications, and performance-driven Meta marketing.
                </p>
                <ul>
                    <li style={{ marginBottom: 10 }}>
                        <p>
                            <strong>AI & Workflow Automation:</strong> Design and deploy end-to-end automated systems that eliminate repetitive manual tasks, connect disparate apps, and optimize daily business operations.
                        </p>
                    </li>
                    <li style={{ marginBottom: 10 }}>
                        <p>
                            <strong>Web & App Development:</strong> Build responsive, scalable websites and functional mobile applications tailored to user engagement and client needs.
                        </p>
                    </li>
                    <li style={{ marginBottom: 10 }}>
                        <p>
                            <strong>Meta Marketing & Growth:</strong> Plan, execute, and optimize targeted ad campaigns across Facebook and Instagram, utilizing data analytics to maximize audience reach and ROI.
                        </p>
                    </li>
                    <li style={{ marginBottom: 10 }}>
                        <p>
                            <strong>Brand & Community Management:</strong> Oversee multi-platform digital presence across YouTube and Facebook, driving consistent organic growth and audience engagement.
                        </p>
                    </li>
                </ul>
            </div>

            <div className="text-block">
                <div style={styles.headerRow}>
                    <h3>As-Sunnah Skill Development Institute</h3>
                    <b>Present (1st Batch)</b>
                </div>
                <p style={styles.companyName}>
                    Professional Trainee — AI Automation
                </p>
                <p style={styles.introParagraph}>
                    Intensive hands-on specialization in modern artificial intelligence tools, workflow integration, and business process automation.
                </p>
                <ul>
                    <li style={{ marginBottom: 10 }}>
                        <p>
                            <strong>System Integration:</strong> Building complex multi-step automation pipelines and connecting APIs to create seamless, self-operating digital ecosystems.
                        </p>
                    </li>
                    <li style={{ marginBottom: 10 }}>
                        <p>
                            <strong>AI Agent Implementation:</strong> Developing practical AI-driven solutions for automated customer support, lead generation, and smart data processing.
                        </p>
                    </li>
                    <li style={{ marginBottom: 10 }}>
                        <p>
                            <strong>Cross-Platform Tooling:</strong> Mastering modern no-code/low-code automation platforms alongside web and app ecosystems to solve real-world technical challenges.
                        </p>
                    </li>
                </ul>
            </div>

            <div className="text-block">
                <div style={styles.headerRow}>
                    <h3>Karvion English Cartoons</h3>
                    <b>Present</b>
                </div>
                <p style={styles.companyName}>
                    Founder & Content Strategist
                </p>
                <p style={styles.introParagraph}>
                    An educational media platform on YouTube and Facebook dedicated to making basic English learning accessible, engaging, and practical through animated storytelling.
                </p>
                <ul>
                    <li style={{ marginBottom: 10 }}>
                        <p>
                            <strong>Content Production & Direction:</strong> Spearhead the concept creation, scripting, and production of educational cartoon episodes designed specifically for beginner English learners.
                        </p>
                    </li>
                    <li style={{ marginBottom: 10 }}>
                        <p>
                            <strong>Audience & Channel Growth:</strong> Manage publishing workflows, SEO, and community engagement across Facebook and YouTube to build an active learning community.
                        </p>
                    </li>
                    <li style={{ marginBottom: 10 }}>
                        <p>
                            <strong>Automated Media Workflows:</strong> Utilize AI tools and automation to speed up scriptwriting, voiceover processing, and video publishing schedules.
                        </p>
                    </li>
                </ul>
            </div>

            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    companyName: {
        color: '#666',
        fontSize: 14,
        fontStyle: 'italic',
        marginBottom: 6,
    },
    introParagraph: {
        marginTop: 4,
        marginBottom: 12,
        lineHeight: 1.5,
    },
};

export default Experience;
