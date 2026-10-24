import React, { useState } from 'react';
import { Play, RefreshCw, Cpu, Database, Mail } from 'lucide-react';
import { soundManager } from '../audio/SoundManager';
import confetti from 'canvas-confetti';

interface NodeStep {
  id: string;
  title: string;
  type: string;
  icon: React.ReactNode;
  detail: string;
}

export const WorkflowSimulator: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(-1);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [logs, setLogs] = useState<string[]>([]);

  const steps: NodeStep[] = [
    {
      id: 'trigger',
      title: 'Inbound Webhook Trigger',
      type: 'Source API / Stripe',
      icon: <Database className="w-5 h-5 text-amber-400" />,
      detail: 'Captures new lead payload: { name: "Acme Corp", budget: "$15,000/mo" }',
    },
    {
      id: 'agent',
      title: 'LLM Reasoning & ICP Scoring',
      type: 'Claude 3.7 / GPT-4o Agent',
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      detail: 'Analyzes intent, extracts requirements, scores quality (Score: 98/100).',
    },
    {
      id: 'action',
      title: 'Automated Multi-Sync',
      type: 'CRM + Slack + Email Dispatch',
      icon: <Mail className="w-5 h-5 text-emerald-400" />,
      detail: 'Creates deal in HubSpot, notifies engineering channel, drafts VIP proposal.',
    },
  ];

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(0);
    soundManager.playClick(600);
    setLogs(['[00:00.01] ⚡ Webhook received from client intake form...']);

    setTimeout(() => {
      setActiveStep(1);
      soundManager.playClick(900);
      setLogs(prev => [
        ...prev,
        '[00:01.10] 🧠 Agent initiated reasoning loop: Evaluated ICP profile -> MATCHED',
        '[00:01.45] 📊 Sentiment positive. Revenue probability: High',
      ]);
    }, 1200);

    setTimeout(() => {
      setActiveStep(2);
      soundManager.playClick(1200);
      setLogs(prev => [
        ...prev,
        '[00:02.30] 🚀 Dispatched data to HubSpot CRM & Slack Channel',
        '[00:02.80] ✉️ VIP Proposal email generated and queued for dispatch',
      ]);
    }, 2400);

    setTimeout(() => {
      setIsRunning(false);
      setActiveStep(3);
      soundManager.playSuccess();
      setLogs(prev => [
        ...prev,
        '✨ Execution Completed in 2.84s! Saved 4.5 hours of manual human triage.',
      ]);
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f0ff', '#8a2be2', '#10b981'],
      });
    }, 3200);
  };

  const resetSimulation = () => {
    setActiveStep(-1);
    setIsRunning(false);
    setLogs([]);
    soundManager.playClick(400);
  };

  return (
    <div className="glow-border" style={{ borderRadius: '16px', padding: '24px', background: 'rgba(10, 16, 32, 0.85)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#00f0ff', boxShadow: '0 0 10px #00f0ff' }}></span>
            <h3 style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '0.5px' }}>Live Pipeline Sandbox (Interactive)</h3>
          </div>
          <p style={{ color: 'var(--text-dim)', fontSize: '13px', marginTop: '4px' }}>
            Click "Execute Pipeline" to see an autonomous lead-qualification agent run live:
          </p>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={runSimulation}
            disabled={isRunning}
            className="glow-button"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: 600,
              cursor: isRunning ? 'not-allowed' : 'pointer',
              opacity: isRunning ? 0.6 : 1,
            }}
          >
            <Play className="w-4 h-4 fill-cyan-400 text-cyan-400" />
            {isRunning ? 'Processing...' : 'Execute Pipeline'}
          </button>
          <button
            onClick={resetSimulation}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'var(--text-dim)',
              padding: '8px 12px',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
            title="Reset sandbox"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Nodes visual track */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
        {steps.map((step, idx) => {
          const isCurrent = activeStep === idx;
          const isDone = activeStep > idx;

          return (
            <div
              key={step.id}
              style={{
                padding: '16px',
                borderRadius: '12px',
                background: isCurrent ? 'rgba(0, 240, 255, 0.12)' : isDone ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                border: `1px solid ${isCurrent ? '#00f0ff' : isDone ? '#10b981' : 'rgba(255, 255, 255, 0.08)'}`,
                boxShadow: isCurrent ? '0 0 20px rgba(0, 240, 255, 0.25)' : 'none',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{ padding: '8px', borderRadius: '8px', background: 'rgba(0,0,0,0.4)' }}>
                  {step.icon}
                </div>
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-code)', color: isCurrent ? '#00f0ff' : isDone ? '#10b981' : 'var(--text-dim)' }}>
                  {isDone ? 'COMPLETED' : isCurrent ? 'EXECUTING...' : `NODE 0${idx + 1}`}
                </span>
              </div>
              <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>{step.title}</h4>
              <p style={{ fontSize: '12px', color: 'var(--text-dim)', lineHeight: 1.4 }}>{step.detail}</p>
            </div>
          );
        })}
      </div>

      {/* Real-time Execution Terminal */}
      <div
        style={{
          background: '#040711',
          borderRadius: '8px',
          padding: '14px',
          border: '1px solid rgba(0, 240, 255, 0.15)',
          fontFamily: 'var(--font-code)',
          fontSize: '12px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '6px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }}></div>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }}></div>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }}></div>
          <span style={{ color: 'var(--text-dim)', fontSize: '11px', marginLeft: '6px' }}>orchestration_runtime.log</span>
        </div>
        <div style={{ minHeight: '60px', maxHeight: '100px', overflowY: 'auto' }}>
          {logs.length === 0 ? (
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>// Standby mode: Click "Execute Pipeline" to test real-time agent execution...</span>
          ) : (
            logs.map((log, i) => (
              <div key={i} style={{ color: log.includes('✨') ? '#10b981' : log.includes('🧠') ? '#00f0ff' : '#cbd5e1', marginBottom: '3px' }}>
                {log}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
