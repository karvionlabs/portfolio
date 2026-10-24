import React from 'react';
import { ArrowUpRight, Zap, Bot, ShieldCheck, Sparkles } from 'lucide-react';
import { WorkflowSimulator } from '../simulator/WorkflowSimulator';
import { soundManager } from '../audio/SoundManager';

interface HomeProps {
  onNavigate: (tab: string) => void;
}

export const HomePage: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
      
      {/* 1. Hero Section */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            style={{
              padding: '6px 14px',
              borderRadius: '20px',
              background: 'rgba(0, 240, 255, 0.1)',
              border: '1px solid rgba(0, 240, 255, 0.3)',
              color: '#00f0ff',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.5px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            AI AUTOMATION SPECIALIST & AGENTIC ARCHITECT
          </span>
          <span style={{ fontSize: '12px', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
            Available for Q4/2026 Projects
          </span>
        </div>

        <h1
          style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-1px',
            fontFamily: 'var(--font-display)',
            maxWidth: '900px',
          }}
        >
          I design <span style={{ color: '#00f0ff', textShadow: '0 0 30px rgba(0,240,255,0.4)' }}>autonomous AI workflows</span> that replace manual busywork & accelerate revenue.
        </h1>

        <p style={{ fontSize: '18px', color: 'var(--text-dim)', maxWidth: '720px', lineHeight: 1.6 }}>
          Building production-grade multi-agent ecosystems, n8n/Make orchestration pipelines, and custom LLM applications with human-in-the-loop resilience.
        </p>

        {/* Action CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '10px' }}>
          <button
            onClick={() => {
              soundManager.playClick();
              onNavigate('contact');
            }}
            className="glow-button"
            style={{
              padding: '14px 28px',
              borderRadius: '10px',
              fontSize: '15px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            Schedule Automation Audit <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              soundManager.playClick();
              onNavigate('projects');
            }}
            style={{
              padding: '14px 24px',
              borderRadius: '10px',
              fontSize: '15px',
              fontWeight: 600,
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: 'var(--text-main)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Bot className="w-4 h-4 text-purple-400" />
            Explore Shipped Systems
          </button>
        </div>
      </section>

      {/* 2. Key Metrics Proof Ticker */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
        }}
      >
        {[
          { label: 'Manual Hours Saved', value: '14,200+', detail: 'Across client operations' },
          { label: 'Production Workflows', value: '45+', detail: 'Live agentic pipelines' },
          { label: 'Average Response Time', value: '< 15 sec', detail: 'From lead capture to outreach' },
          { label: 'System Uptime / SLA', value: '99.9%', detail: 'Zero-drop resilience' },
        ].map((item, i) => (
          <div
            key={i}
            className="glow-border"
            style={{
              padding: '20px',
              borderRadius: '12px',
              background: 'rgba(15, 23, 42, 0.65)',
            }}
          >
            <div style={{ fontSize: '28px', fontWeight: 800, color: '#00f0ff', fontFamily: 'var(--font-display)' }}>
              {item.value}
            </div>
            <div style={{ fontSize: '14px', fontWeight: 600, marginTop: '4px' }}>{item.label}</div>
            <div style={{ fontSize: '12px', color: 'var(--text-dim)', marginTop: '2px' }}>{item.detail}</div>
          </div>
        ))}
      </section>

      {/* 3. Interactive Sandbox Simulator */}
      <section>
        <WorkflowSimulator />
      </section>

      {/* 4. Core Pillars of Automation Architecture */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: 700, fontFamily: 'var(--font-display)' }}>
            Engineered For Enterprise Resilience
          </h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '14px', marginTop: '4px' }}>
            No toy chatbots or fragile scripts. Every pipeline includes failure fallbacks, rate limiting, and data privacy.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {[
            {
              icon: <Bot className="w-6 h-6 text-cyan-400" />,
              title: 'Agentic Workflows (LangGraph & n8n)',
              desc: 'Autonomous multi-step agents that research, reason, clean datasets, and sync across your internal software stack.',
            },
            {
              icon: <Zap className="w-6 h-6 text-purple-400" />,
              title: 'Voice & Omnichannel AI Sales',
              desc: 'Custom Conversational AI on WhatsApp, Retell/Vapi, and Email with sub-second latency and intelligent CRM routing.',
            },
            {
              icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
              title: 'SOC2 & Human-in-the-Loop Guardrails',
              desc: 'Safe AI deployment with confidence score gating, human sign-off triggers, and strict zero-data-leakage architecture.',
            },
          ].map((card, i) => (
            <div
              key={i}
              className="glow-border"
              style={{
                padding: '24px',
                borderRadius: '14px',
                background: 'rgba(13, 20, 36, 0.7)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div style={{ padding: '10px', borderRadius: '10px', background: 'rgba(255,255,255,0.04)', width: 'fit-content' }}>
                {card.icon}
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 700 }}>{card.title}</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-dim)', lineHeight: 1.6 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
