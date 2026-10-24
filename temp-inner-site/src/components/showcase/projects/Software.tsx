import React, { useState, useEffect } from 'react';

export interface SoftwareProjectsProps {}

interface ProjectItem {
    id: string;
    title: string;
    category?: string;
    description: string;
    tech: string;
}

const DEFAULT_PROJECTS: ProjectItem[] = [
    {
        id: 'proj-1',
        title: 'Autonomous Inbound Lead Routing & Follow-up Agent',
        description:
            'Captured Meta ad leads in under 2 seconds, validated their profile using AI reasoning, assigned lead score, and initiated an automated personalized WhatsApp conversation, lifting conversion rates by 42%.',
        tech: 'n8n, OpenAI GPT-4o, Meta Ads API, HubSpot CRM, WhatsApp API',
    },
    {
        id: 'proj-2',
        title: 'Custom E-Commerce & Service Web Application',
        description:
            'Full-stack responsive web application featuring custom ordering workflows, payment gateway synchronization, and automated inventory reconciliation.',
        tech: 'React, TypeScript, Node.js, Stripe, Supabase',
    },
    {
        id: 'proj-3',
        title: 'Cross-Platform Mobile Client Portal App',
        description:
            'Engineered an intuitive mobile application for client onboarding, real-time ticket tracking, and automated status alerts.',
        tech: 'React Native / Mobile UI, REST APIs, Push Notifications',
    },
    {
        id: 'proj-4',
        title: 'Meta Performance Marketing Funnel Engine',
        description:
            'End-to-end performance marketing setup combining hyper-targeted audience segments, dynamic retargeting, and automated ROI analytics dashboards.',
        tech: 'Meta Pixel, CAPI (Conversions API), Google Tag Manager, Looker Studio',
    },
];

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    const [projects, setProjects] = useState<ProjectItem[]>(DEFAULT_PROJECTS);

    useEffect(() => {
        try {
            const raw = localStorage.getItem('folio_admin_database');
            if (raw) {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed.projects) && parsed.projects.length > 0) {
                    setProjects(parsed.projects);
                }
            }
        } catch (e) {
            console.error('Failed to load dynamic projects:', e);
        }

        const handleStorage = (e: StorageEvent) => {
            if (e.key === 'folio_admin_database') {
                try {
                    const parsed = JSON.parse(e.newValue || '{}');
                    if (Array.isArray(parsed.projects) && parsed.projects.length > 0) {
                        setProjects(parsed.projects);
                    }
                } catch (err) {}
            }
        };
        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
    }, []);

    return (
        <div className="site-page-content">
            <h1>Featured Automation & Dev Projects</h1>
            <h3>Production-Grade Systems & Applications</h3>
            <br />
            {projects.map((proj, idx) => (
                <div className="text-block" key={proj.id || idx}>
                    <h3>{`${idx + 1}. ${proj.title}`}</h3>
                    <p style={styles.caption}>
                        <strong>Tech:</strong> {proj.tech}
                    </p>
                    <p>{proj.description}</p>
                </div>
            ))}
        </div>
    );
};

const styles: StyleSheetCSS = {
    caption: {
        fontSize: 13,
        color: '#666',
        marginTop: 4,
        marginBottom: 8,
    },
};

export default SoftwareProjects;
