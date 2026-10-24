import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const projects = [
    {
      title: 'Autonomous Inbound Sales & Lead Enrichment Pipeline',
      client: 'B2B SaaS Firm ($12M ARR)',
      stack: ['n8n', 'OpenAI GPT-4o', 'Clearbit API', 'HubSpot CRM', 'Slack Webhooks'],
      problem: 'Inbound demo requests sat in sales reps inboxes for 4+ hours, causing 35% lead drop-off.',
      solution: 'Architected an instant webhook listener that enriches company metadata via Clearbit, feeds it to an LLM scoring model, assigns lead routing to Slack, and drafts tailored executive email drafts in <12 seconds.',
      metrics: ['Response time slashed from 4 hours to 11 seconds', 'Sales qualified lead conversion increased by 42%', '18 hours/week saved per account executive'],
    },
    {
      title: 'Voice AI Concierge & Smart Appointment Dispatcher',
      client: 'Multi-Location Health & MedSpa Group',
      stack: ['Retell AI', 'Twilio SIP', 'Make.com', 'Google Calendar API', 'PostgreSQL'],
      problem: 'Front-desk staff missed 28% of after-hours calls, leading to lost client bookings and frustrating phone queues.',
      solution: 'Deployed a human-like voice AI agent capable of multi-turn natural language conversation, resolving FAQs, and writing confirmed slots directly into electronic medical scheduling software.',
      metrics: ['91% call resolution rate without human transfer', 'Captured $68,000 in previously lost after-hours appointments', '0 missed calls during peak surge hours'],
    },
    {
      title: 'Intelligent Invoice OCR & ERP Auto-Reconciliation Engine',
      client: 'Global Logistics & Supply Chain Operator',
      stack: ['Python FastAPI', 'Claude 3.7 Vision', 'Supabase Vector', 'NetSuite API'],
      problem: 'Accounting team spent 25 hours every week manually typing disorganized PDF invoices, with frequent data-entry errors.',
      solution: 'Built an automated email parser and vision pipeline that validates line-item taxes, checks vendor master databases, flags discrepancies for one-click human review, and auto-posts clean ledgers.',
      metrics: ['Reduced document processing time by 88%', 'Zero data entry calculation errors in 6 months of production', 'Over $120,000 saved annually in operational overhead'],
    },
  ];

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <div>
        <h2 style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'var(--font-display)' }}>
          Production Case Studies & Proof of Work
        </h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '15px', marginTop: '6px' }}>
          Real systems engineered for high-growth operations. Proven business metrics over abstract code snippets.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {projects.map((item, idx) => (
          <div
            key={idx}
            className="glow-border"
            style={{
              padding: '28px',
              borderRadius: '16px',
              background: 'rgba(12, 18, 34, 0.8)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <span style={{ fontSize: '11px', color: '#00f0ff', fontFamily: 'var(--font-code)', letterSpacing: '1px' }}>
                  CASE STUDY 0{idx + 1} • {item.client.toUpperCase()}
                </span>
                <h3 style={{ fontSize: '20px', fontWeight: 700, marginTop: '4px' }}>{item.title}</h3>
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {item.stack.map((tech, i) => (
                <span
                  key={i}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    background: 'rgba(0, 240, 255, 0.08)',
                    border: '1px solid rgba(0, 240, 255, 0.2)',
                    color: '#93c5fd',
                    fontSize: '11px',
                    fontFamily: 'var(--font-code)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Problem vs Solution Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginTop: '6px' }}>
              <div style={{ padding: '16px', borderRadius: '10px', background: 'rgba(239, 68, 68, 0.06)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                <div style={{ color: '#f87171', fontSize: '12px', fontWeight: 700, marginBottom: '4px' }}>THE BOTTLENECK</div>
                <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: 1.5 }}>{item.problem}</p>
              </div>

              <div style={{ padding: '16px', borderRadius: '10px', background: 'rgba(0, 240, 255, 0.06)', border: '1px solid rgba(0, 240, 255, 0.2)' }}>
                <div style={{ color: '#38bdf8', fontSize: '12px', fontWeight: 700, marginBottom: '4px' }}>THE ARCHITECTED SYSTEM</div>
                <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: 1.5 }}>{item.solution}</p>
              </div>
            </div>

            {/* Quantifiable Results */}
            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px' }}>
              <div style={{ fontSize: '12px', color: 'var(--text-dim)', fontWeight: 600, marginBottom: '10px' }}>
                MEASURABLE BUSINESS IMPACT:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px' }}>
                {item.metrics.map((metric, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#86efac' }}>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
