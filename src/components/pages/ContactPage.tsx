import React, { useState } from 'react';
import { Send, CheckCircle2, Terminal, Calendar } from 'lucide-react';
import { soundManager } from '../audio/SoundManager';
import confetti from 'canvas-confetti';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playSuccess();
    setIsSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 60,
      colors: ['#00f0ff', '#10b981'],
    });
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <div>
        <h2 style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'var(--font-display)' }}>
          Initialize an Automation Audit
        </h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '15px', marginTop: '6px' }}>
          Schedule a 20-minute operational scoping call or submit your bottleneck below.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
        {/* Contact Form */}
        <div className="glow-border" style={{ padding: '28px', borderRadius: '16px', background: 'rgba(12, 18, 34, 0.8)' }}>
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '40px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
              <CheckCircle2 className="w-12 h-12 text-emerald-400" />
              <h3 style={{ fontSize: '20px', fontWeight: 700 }}>Transmission Received</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-dim)', lineHeight: 1.5 }}>
                Your operational briefing has been logged into our agent queue. Expect a scoped assessment within 4 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="glow-button"
                style={{ padding: '8px 18px', borderRadius: '8px', fontSize: '13px', cursor: 'pointer', marginTop: '10px' }}
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-dim)', marginBottom: '6px' }}>Your Name / Title</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Sarah Jenkins (Head of Ops)"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: '#fff',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-dim)', marginBottom: '6px' }}>Work Email</label>
                <input
                  required
                  type="email"
                  placeholder="sarah@company.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: '#fff',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-dim)', marginBottom: '6px' }}>Current Bottleneck / Goal</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe the repetitive manual process you would like to automate with AI agents..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: '#fff',
                    fontSize: '14px',
                    outline: 'none',
                    resize: 'none',
                  }}
                />
              </div>

              <button
                type="submit"
                className="glow-button"
                style={{
                  padding: '14px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px',
                  marginTop: '6px',
                }}
              >
                <Send className="w-4 h-4" /> Dispatch Request
              </button>
            </form>
          )}
        </div>

        {/* Direct Booking & Engagement Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="glow-border" style={{ padding: '24px', borderRadius: '16px', background: 'rgba(12, 18, 34, 0.7)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <Calendar className="w-5 h-5 text-cyan-400" />
              <h4 style={{ fontSize: '16px', fontWeight: 700 }}>5-Day Fixed Operational Audit</h4>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-dim)', lineHeight: 1.6 }}>
              A low-friction, high-clarity diagnostic. We review your tech stack, map workflows, and present an exact architectural blueprint and ROI projection before quoting a single line of production code.
            </p>
          </div>

          <div className="glow-border" style={{ padding: '24px', borderRadius: '16px', background: 'rgba(12, 18, 34, 0.7)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <Terminal className="w-5 h-5 text-purple-400" />
              <h4 style={{ fontSize: '16px', fontWeight: 700 }}>Core Deployment Standards</h4>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--text-dim)' }}>
              <li>• Rapid 2 to 6 week turnarounds for active sprints</li>
              <li>• Strict confidentiality & Zero-training on client data</li>
              <li>• Direct Slack / Teams coordination channel</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
