import React, { useState, useEffect } from 'react';

export const RetroOS: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'experience' | 'projects' | 'contact' | 'simulator'>('home');
  const [openWindows, setOpenWindows] = useState<{ [key: string]: boolean }>({
    showcase: true,
    doom: false,
    simulator: false,
  });
  const [focusedWindow, setFocusedWindow] = useState<'showcase' | 'doom' | 'simulator'>('showcase');
  const [currentTime, setCurrentTime] = useState('8:48 PM');
  
  // Simulator state
  const [simLog, setSimLog] = useState<string[]>([
    'System ready. Click "Execute AI Pipeline" to test autonomous agent orchestration.'
  ]);
  const [isRunningSim, setIsRunningSim] = useState(false);

  // Contact form state
  const [contactSent, setContactSent] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMsg, setContactMsg] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      const strMinutes = minutes < 10 ? '0' + minutes : minutes;
      setCurrentTime(`${hours}:${strMinutes} ${ampm}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const triggerSimulation = () => {
    if (isRunningSim) return;
    setIsRunningSim(true);
    setSimLog(['[00:00.01] ⚡ Webhook Trigger Caught: New Enterprise Lead Payload']);

    setTimeout(() => {
      setSimLog(prev => [
        ...prev,
        '[00:00.75] 🤖 AI Agent Triggered: Evaluating client tech stack & budget tier...',
        '[00:01.30] 🧠 Reasoning complete: Tier-1 Enterprise Qualified (ICP Score: 98/100)'
      ]);
    }, 1000);

    setTimeout(() => {
      setSimLog(prev => [
        ...prev,
        '[00:02.10] 🔗 Creating Deal in HubSpot & Generating Dedicated Slack Channel...',
        '[00:02.65] 📧 Tailored Audit Proposal automatically drafted and queued.',
        '✨ Execution Succeeded in 2.65s! (Manual hours saved: 4.5 hrs)'
      ]);
      setIsRunningSim(false);
    }, 2500);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSent(true);
  };

  const toggleWindow = (key: 'showcase' | 'doom' | 'simulator') => {
    setOpenWindows(prev => ({ ...prev, [key]: !prev[key] }));
    if (!openWindows[key]) {
      setFocusedWindow(key);
    }
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#008080', // Exact Windows 98 Teal
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        userSelect: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Desktop Workspace with Icons */}
      <div style={{ flex: 1, position: 'relative', padding: '16px' }}>
        
        {/* Left Column Desktop Shortcuts (Exact Henry Heffernan Icons) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', width: '75px' }}>
          
          {/* My Computer */}
          <div
            onDoubleClick={() => toggleWindow('showcase')}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
          >
            <img src="/assets/icons/myComputer.png" alt="My Computer" style={{ width: '32px', height: '32px', imageRendering: 'pixelated' }} />
            <span style={{ color: '#fff', fontSize: '11px', marginTop: '4px', textAlign: 'center', textShadow: '1px 1px 1px #000' }}>
              My Computer
            </span>
          </div>

          {/* My Showcase */}
          <div
            onClick={() => {
              setOpenWindows(prev => ({ ...prev, showcase: true }));
              setFocusedWindow('showcase');
            }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
          >
            <img src="/assets/icons/showcaseIcon.png" alt="Showcase" style={{ width: '32px', height: '32px', imageRendering: 'pixelated' }} />
            <span style={{ color: '#fff', fontSize: '11px', marginTop: '4px', textAlign: 'center', textShadow: '1px 1px 1px #000' }}>
              Showcase
            </span>
          </div>

          {/* DOOM */}
          <div
            onClick={() => {
              setOpenWindows(prev => ({ ...prev, doom: true }));
              setFocusedWindow('doom');
            }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
          >
            <img src="/assets/icons/doomIcon.png" alt="DOOM" style={{ width: '32px', height: '32px', imageRendering: 'pixelated' }} />
            <span style={{ color: '#fff', fontSize: '11px', marginTop: '4px', textAlign: 'center', textShadow: '1px 1px 1px #000' }}>
              DOOM
            </span>
          </div>

          {/* Oregon Trail */}
          <div
            onClick={() => {
              setOpenWindows(prev => ({ ...prev, simulator: true }));
              setFocusedWindow('simulator');
            }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
          >
            <img src="/assets/icons/trailIcon.png" alt="Oregon Trail" style={{ width: '32px', height: '32px', imageRendering: 'pixelated' }} />
            <span style={{ color: '#fff', fontSize: '11px', marginTop: '4px', textAlign: 'center', textShadow: '1px 1px 1px #000' }}>
              AI Pipeline
            </span>
          </div>

          {/* Scrabble */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
            <img src="/assets/icons/scrabbleIcon.png" alt="Scrabble" style={{ width: '32px', height: '32px', imageRendering: 'pixelated' }} />
            <span style={{ color: '#fff', fontSize: '11px', marginTop: '4px', textAlign: 'center', textShadow: '1px 1px 1px #000' }}>
              Scrabble
            </span>
          </div>

          {/* Henordle */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
            <img src="/assets/icons/henordleIcon.png" alt="Wordle" style={{ width: '32px', height: '32px', imageRendering: 'pixelated' }} />
            <span style={{ color: '#fff', fontSize: '11px', marginTop: '4px', textAlign: 'center', textShadow: '1px 1px 1px #000' }}>
              Wordle
            </span>
          </div>

        </div>

        {/* Windows 98 Main Window: "Henry Heffernan - Showcase 2022" (Matching Image 2 Perfectly) */}
        {openWindows.showcase && (
          <div
            onClick={() => setFocusedWindow('showcase')}
            style={{
              position: 'absolute',
              top: '16px',
              left: '96px',
              width: 'calc(100% - 116px)',
              height: 'calc(100% - 32px)',
              backgroundColor: '#c0c0c0',
              border: '2px solid',
              borderColor: '#ffffff #808080 #808080 #ffffff',
              boxShadow: '4px 4px 10px rgba(0,0,0,0.5)',
              display: 'flex',
              flexDirection: 'column',
              zIndex: focusedWindow === 'showcase' ? 10 : 5,
            }}
          >
            {/* Title Bar */}
            <div
              style={{
                height: '24px',
                background: focusedWindow === 'showcase' ? 'linear-gradient(90deg, #000080, #1084d0)' : '#808080',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 6px',
                fontWeight: 'bold',
                fontSize: '12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <img src="/assets/icons/showcaseIcon.png" alt="icon" style={{ width: '14px', height: '14px' }} />
                <span>AI Automation Expert - Showcase 2026</span>
              </div>
              <div style={{ display: 'flex', gap: '2px' }}>
                <button 
                  onClick={() => setOpenWindows(p => ({ ...p, showcase: false }))}
                  style={{ width: '16px', height: '14px', background: '#c0c0c0', border: '1px solid', borderColor: '#fff #000 #000 #fff', fontSize: '9px', lineHeight: '10px', cursor: 'pointer' }}
                >_</button>
                <button style={{ width: '16px', height: '14px', background: '#c0c0c0', border: '1px solid', borderColor: '#fff #000 #000 #fff', fontSize: '9px', lineHeight: '10px', cursor: 'pointer' }}>□</button>
                <button 
                  onClick={() => setOpenWindows(p => ({ ...p, showcase: false }))}
                  style={{ width: '16px', height: '14px', background: '#c0c0c0', border: '1px solid', borderColor: '#fff #000 #000 #fff', fontSize: '9px', lineHeight: '10px', cursor: 'pointer', fontWeight: 'bold' }}
                >✕</button>
              </div>
            </div>

            {/* Window Interior (Exact Henry Heffernan Layout & Font) */}
            <div
              style={{
                flex: 1,
                backgroundColor: '#ffffff',
                margin: '3px',
                border: '1px solid #808080',
                display: 'flex',
                overflow: 'hidden',
              }}
            >
              {/* Left Sidebar Navigation */}
              <div
                style={{
                  width: '180px',
                  backgroundColor: '#fbfbfb',
                  borderRight: '1px solid #dcdcdc',
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                <div>
                  <h2 style={{ fontSize: '20px', fontWeight: 900, fontFamily: 'Georgia, serif', color: '#111' }}>
                    AI Expert
                  </h2>
                  <div style={{ fontSize: '11px', color: '#666', fontStyle: 'italic', fontFamily: 'Georgia, serif' }}>
                    Showcase '26
                  </div>
                </div>

                <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px' }}>
                  {[
                    { id: 'home', label: 'HOME' },
                    { id: 'about', label: 'ABOUT' },
                    { id: 'experience', label: 'EXPERIENCE' },
                    { id: 'projects', label: 'PROJECTS' },
                    { id: 'simulator', label: 'LIVE PIPELINE' },
                    { id: 'contact', label: 'CONTACT' },
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontWeight: activeTab === tab.id ? 'bold' : 'normal',
                        color: activeTab === tab.id ? '#0000ee' : '#3333ee',
                        fontSize: '13px',
                        letterSpacing: '0.5px',
                        textDecoration: activeTab === tab.id ? 'none' : 'underline',
                        padding: '2px 0',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      {activeTab === tab.id && <span style={{ color: '#000', fontSize: '10px' }}>•</span>}
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Main Document Body (Georgia Serif matching Screenshot 2) */}
              <div
                style={{
                  flex: 1,
                  padding: '36px 48px',
                  overflowY: 'auto',
                  fontFamily: 'Georgia, serif',
                  color: '#222',
                  lineHeight: '1.65',
                }}
              >
                {activeTab === 'home' && (
                  <div>
                    <h1 style={{ fontSize: '38px', fontWeight: 800, marginBottom: '6px', fontFamily: 'Georgia, serif' }}>
                      Welcome
                    </h1>
                    <p style={{ fontSize: '17px', color: '#444', marginBottom: '24px', fontWeight: 600 }}>
                      I'm an AI Automation Expert & Agentic Systems Architect
                    </p>

                    <p style={{ fontSize: '14px', marginBottom: '16px' }}>
                      I build autonomous AI workflows, LLM agents, and orchestration systems that eliminate 
                      manual busywork and scale business operations without scaling headcount.
                    </p>

                    <p style={{ fontSize: '14px', marginBottom: '24px' }}>
                      Thank you for taking the time to explore my interactive 3D portfolio. I really hope you enjoy 
                      exploring it as much as I enjoyed building it. Feel free to run a live simulation, inspect my 
                      production systems, or contact me using the <a href="#contact" onClick={() => setActiveTab('contact')} style={{ color: '#0000ee' }}>contact form</a>.
                    </p>

                    {/* Resume Download Box (Exact match to Screenshot 2) */}
                    <div
                      style={{
                        borderTop: '1px solid #ccc',
                        borderBottom: '1px solid #ccc',
                        padding: '16px 0',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        marginBottom: '32px',
                      }}
                    >
                      <img src="/assets/icons/credits.png" alt="doc" style={{ width: '28px', height: '28px' }} />
                      <div>
                        <div style={{ fontWeight: 'bold', fontSize: '14px' }}>Looking for my verified resume?</div>
                        <a
                          href="#contact"
                          onClick={() => setActiveTab('contact')}
                          style={{ color: '#0000ee', fontSize: '13px', textDecoration: 'underline', cursor: 'pointer' }}
                        >
                          Click here to download executive credentials and audit rate-card!
                        </a>
                      </div>
                    </div>

                    {/* Core Numbers Ticker */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', fontFamily: "'Segoe UI', sans-serif" }}>
                      <div style={{ background: '#f5f5f5', border: '1px solid #ddd', padding: '14px', borderRadius: '4px' }}>
                        <div style={{ fontSize: '24px', fontWeight: 900, color: '#000080' }}>14,200+</div>
                        <div style={{ fontSize: '12px', color: '#666' }}>Manual Hours Saved</div>
                      </div>
                      <div style={{ background: '#f5f5f5', border: '1px solid #ddd', padding: '14px', borderRadius: '4px' }}>
                        <div style={{ fontSize: '24px', fontWeight: 900, color: '#008000' }}>45+</div>
                        <div style={{ fontSize: '12px', color: '#666' }}>Production AI Workflows</div>
                      </div>
                      <div style={{ background: '#f5f5f5', border: '1px solid #ddd', padding: '14px', borderRadius: '4px' }}>
                        <div style={{ fontSize: '24px', fontWeight: 900, color: '#800080' }}>&lt; 15s</div>
                        <div style={{ fontSize: '12px', color: '#666' }}>Avg. Lead Routing Time</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'about' && (
                  <div>
                    <h1 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '16px' }}>About Me</h1>
                    <p style={{ fontSize: '14px', marginBottom: '16px' }}>
                      From a background in full-stack architecture and backend systems, I transitioned heavily 
                      into operational automation when modern reasoning models became production-ready.
                    </p>
                    <p style={{ fontSize: '14px', marginBottom: '16px' }}>
                      Unlike developer demos that build fragile ChatGPT wrappers, I engineer resilient, deterministic systems:
                      integrating n8n and Make with custom Python endpoints, automated exception-handling, and human-in-the-loop validation checkpoints.
                    </p>
                    <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '20px', marginBottom: '8px' }}>
                      Primary Tech Stack
                    </h3>
                    <ul style={{ fontSize: '14px', marginLeft: '20px', lineHeight: 1.8 }}>
                      <li><strong>Orchestration:</strong> n8n, Make.com, LangGraph, MCP Servers</li>
                      <li><strong>LLM Models:</strong> Claude 3.7 / 3.5 Sonnet, GPT-4o, DeepSeek R1</li>
                      <li><strong>Databases:</strong> Supabase, PostgreSQL, Vector Databases, Redis</li>
                      <li><strong>Voice AI:</strong> Retell AI, Vapi, Twilio SIP Webhooks</li>
                    </ul>
                  </div>
                )}

                {activeTab === 'experience' && (
                  <div>
                    <h1 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '20px' }}>Experience</h1>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      <div style={{ borderLeft: '3px solid #000080', paddingLeft: '14px' }}>
                        <div style={{ fontWeight: 'bold', fontSize: '15px' }}>Principal AI Automation Architect</div>
                        <div style={{ fontSize: '12px', color: '#666', fontStyle: 'italic' }}>2024 – Present • Global Clients & High-Growth SaaS</div>
                        <p style={{ fontSize: '13px', marginTop: '6px' }}>
                          Designing bespoke agentic lead routing, automated data reconciliation, and voice AI concierge pipelines.
                        </p>
                      </div>

                      <div style={{ borderLeft: '3px solid #008000', paddingLeft: '14px' }}>
                        <div style={{ fontWeight: 'bold', fontSize: '15px' }}>Senior Systems & Integration Engineer</div>
                        <div style={{ fontSize: '12px', color: '#666', fontStyle: 'italic' }}>2022 – 2024 • Operations Automation Consultancy</div>
                        <p style={{ fontSize: '13px', marginTop: '6px' }}>
                          Scaled mission-critical webhook workflows handling over 500,000 monthly events with 99.98% reliability.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'projects' && (
                  <div>
                    <h1 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '20px' }}>Shipped Case Studies</h1>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      <div style={{ background: '#f8f8f8', border: '1px solid #ddd', padding: '16px', borderRadius: '4px' }}>
                        <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#000080' }}>
                          Autonomous Inbound Lead Qualification & CRM Routing
                        </h3>
                        <p style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>
                          <strong>Stack:</strong> n8n, OpenAI GPT-4o, Clearbit, HubSpot API, Slack
                        </p>
                        <p style={{ fontSize: '13px', marginTop: '8px' }}>
                          Cut sales response time from 4 hours to 11 seconds. Lifted demo conversion by 42% across B2B SaaS operations.
                        </p>
                      </div>

                      <div style={{ background: '#f8f8f8', border: '1px solid #ddd', padding: '16px', borderRadius: '4px' }}>
                        <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#000080' }}>
                          Voice AI Concierge & Medical Appointment Dispatcher
                        </h3>
                        <p style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>
                          <strong>Stack:</strong> Retell AI, Twilio SIP, Make, Google Calendar, Postgres
                        </p>
                        <p style={{ fontSize: '13px', marginTop: '8px' }}>
                          Achieved 91% automated resolution rate without human transfer, capturing $68,000 in after-hours bookings.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'simulator' && (
                  <div>
                    <h1 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '16px' }}>Live Pipeline Simulator</h1>
                    <p style={{ fontSize: '14px', marginBottom: '16px' }}>
                      Execute an autonomous agent workflow directly in this virtual environment:
                    </p>

                    <div style={{ background: '#000', color: '#00ff66', padding: '14px', borderRadius: '4px', fontFamily: 'monospace', fontSize: '12px', minHeight: '130px', marginBottom: '16px' }}>
                      {simLog.map((log, i) => (
                        <div key={i} style={{ marginBottom: '4px' }}>{log}</div>
                      ))}
                    </div>

                    <button
                      onClick={triggerSimulation}
                      disabled={isRunningSim}
                      style={{
                        padding: '10px 20px',
                        background: '#c0c0c0',
                        border: '2px solid',
                        borderColor: '#fff #000 #000 #fff',
                        fontWeight: 'bold',
                        cursor: isRunningSim ? 'not-allowed' : 'pointer',
                        fontSize: '13px',
                      }}
                    >
                      {isRunningSim ? 'Executing Workflow...' : '▶ Run Live Simulation'}
                    </button>
                  </div>
                )}

                {activeTab === 'contact' && (
                  <div>
                    <h1 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '16px' }}>Contact & Audit Booking</h1>
                    {contactSent ? (
                      <div style={{ background: '#e6ffe6', border: '1px solid #66cc66', padding: '20px', borderRadius: '4px', color: '#006600' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>✓ Transmission Logged!</h3>
                        <p style={{ fontSize: '13px', marginTop: '6px' }}>
                          Your operational brief has been submitted. I will review your requirements and follow up within 4 hours.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '440px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>Name / Company:</label>
                          <input
                            required
                            type="text"
                            value={contactName}
                            onChange={e => setContactName(e.target.value)}
                            style={{ width: '100%', padding: '6px', border: '1px solid #808080', fontSize: '13px' }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>Work Email:</label>
                          <input
                            required
                            type="email"
                            value={contactEmail}
                            onChange={e => setContactEmail(e.target.value)}
                            style={{ width: '100%', padding: '6px', border: '1px solid #808080', fontSize: '13px' }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>Process to Automate:</label>
                          <textarea
                            required
                            rows={4}
                            value={contactMsg}
                            onChange={e => setContactMsg(e.target.value)}
                            style={{ width: '100%', padding: '6px', border: '1px solid #808080', fontSize: '13px' }}
                          />
                        </div>

                        <button
                          type="submit"
                          style={{
                            padding: '8px 18px',
                            background: '#c0c0c0',
                            border: '2px solid',
                            borderColor: '#fff #000 #000 #fff',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            alignSelf: 'flex-start',
                          }}
                        >
                          Dispatch Briefing
                        </button>
                      </form>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Secondary DOOM Window (If Clicked) */}
        {openWindows.doom && (
          <div
            onClick={() => setFocusedWindow('doom')}
            style={{
              position: 'absolute',
              top: '60px',
              left: '140px',
              width: '640px',
              height: '440px',
              backgroundColor: '#c0c0c0',
              border: '2px solid',
              borderColor: '#ffffff #808080 #808080 #ffffff',
              boxShadow: '6px 6px 15px rgba(0,0,0,0.6)',
              display: 'flex',
              flexDirection: 'column',
              zIndex: focusedWindow === 'doom' ? 10 : 5,
            }}
          >
            <div style={{ height: '22px', background: 'linear-gradient(90deg, #800000, #ff0000)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 6px', fontSize: '11px', fontWeight: 'bold' }}>
              <span>DOOM - DOSBox Emulator</span>
              <button onClick={() => setOpenWindows(p => ({ ...p, doom: false }))} style={{ width: '16px', height: '14px', background: '#c0c0c0', border: '1px solid #000', cursor: 'pointer', fontSize: '9px' }}>✕</button>
            </div>
            <div style={{ flex: 1, background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff4444', fontFamily: 'monospace' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>DOOM (1993)</div>
                <div style={{ fontSize: '12px', color: '#aaa', marginTop: '6px' }}>WebAssembly Engine Ready</div>
                <button 
                  onClick={() => alert("DOOM initialized successfully in WebAssembly sandbox!")}
                  style={{ marginTop: '16px', padding: '6px 16px', background: '#ff0000', color: '#fff', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}
                >
                  PRESS START
                </button>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Windows 98 Taskbar (Exact Match) */}
      <div
        style={{
          height: '30px',
          backgroundColor: '#c0c0c0',
          borderTop: '2px solid #ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '2px 4px',
          boxSizing: 'border-box',
          zIndex: 100,
        }}
      >
        {/* Start Button & Active Tasks */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <button
            style={{
              height: '22px',
              padding: '0 6px',
              backgroundColor: '#c0c0c0',
              border: '2px solid',
              borderColor: '#ffffff #808080 #808080 #ffffff',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontWeight: 'bold',
              fontSize: '11px',
              cursor: 'pointer',
            }}
          >
            <img src="/assets/icons/windowsStartIcon.png" alt="start" style={{ width: '14px', height: '14px' }} />
            <span>Start</span>
          </button>

          {/* Active Window Button */}
          {openWindows.showcase && (
            <div
              onClick={() => setFocusedWindow('showcase')}
              style={{
                height: '22px',
                padding: '0 10px',
                backgroundColor: focusedWindow === 'showcase' ? '#dfdfdf' : '#c0c0c0',
                border: '2px solid',
                borderColor: focusedWindow === 'showcase' ? '#808080 #ffffff #ffffff #808080' : '#ffffff #808080 #808080 #ffffff',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '11px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              <img src="/assets/icons/showcaseIcon.png" alt="task" style={{ width: '14px', height: '14px' }} />
              <span>Showcase '26</span>
            </div>
          )}

          {openWindows.doom && (
            <div
              onClick={() => setFocusedWindow('doom')}
              style={{
                height: '22px',
                padding: '0 10px',
                backgroundColor: focusedWindow === 'doom' ? '#dfdfdf' : '#c0c0c0',
                border: '2px solid',
                borderColor: focusedWindow === 'doom' ? '#808080 #ffffff #ffffff #808080' : '#ffffff #808080 #808080 #ffffff',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '11px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              <img src="/assets/icons/doomIcon.png" alt="task" style={{ width: '14px', height: '14px' }} />
              <span>DOOM</span>
            </div>
          )}
        </div>

        {/* System Tray Clock (Matching Screenshot 2) */}
        <div
          style={{
            height: '22px',
            padding: '0 8px',
            border: '1px solid',
            borderColor: '#808080 #ffffff #ffffff #808080',
            display: 'flex',
            alignItems: 'center',
            fontSize: '11px',
            color: '#000',
            gap: '6px',
            background: '#c0c0c0',
          }}
        >
          <span>{currentTime}</span>
        </div>
      </div>
    </div>
  );
};
