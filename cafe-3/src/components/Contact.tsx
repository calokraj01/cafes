'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Send, CheckCircle2, Users, Coffee, Calendar, MapPin, Mail, Phone, Clock } from 'lucide-react';

const Contact = () => {
  const [activeTab, setActiveTab] = useState<'reserve' | 'contact'>('reserve');
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState('');
  
  // Form State
  const [formData, setFormData] = useState({
    codename: '',
    crewSize: '2 AGENTS',
    vibe: 'Techno Coffee Rave',
    email: '',
    message: ''
  });

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [receiptId, setReceiptId] = useState('');

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const date = new Date();
      setTime(date.toUTCString().replace('GMT', 'UTC'));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectVibe = (vibeName: string) => {
    setFormData(prev => ({ ...prev, vibe: vibeName }));
  };

  const handleSelectCrew = (size: string) => {
    setFormData(prev => ({ ...prev, crewSize: size }));
  };

  const generateReceiptId = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = 'SIP-';
    for (let i = 0; i < 4; i++) result += chars.charAt(Math.floor(Math.random() * chars.length));
    result += '-';
    for (let i = 0; i < 4; i++) result += chars.charAt(Math.floor(Math.random() * chars.length));
    return result;
  };

  const triggerTerminalSequence = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.codename || !formData.email || (activeTab === 'contact' && !formData.message)) {
      alert('Please fill out all required fields, operative.');
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(false);
    setTerminalLogs([]);

    const steps = [
      '>> ACCESSING NEON SIP SECURE BEAN PROTOCOLS...',
      '>> ESTABLISHING QUANTUM LINK OVER SUB-PORT 8080...',
      `>> BROADCASTING SOURCE IDENT: [${formData.codename.toUpperCase()}]`,
      activeTab === 'reserve'
        ? `>> LOCKING TABLE IN VIBE MATRIX: [${formData.vibe.toUpperCase()}] FOR [${formData.crewSize}]`
        : `>> ENCRYPTING MESSAGE PAYLOAD FOR CENTRAL CORE...`,
      '>> STABILIZING CAFFEINE POWER GENERATOR...',
      '>> PACKET DELIVERED AND HASH VALIDATED BY COFFEE CONCIERGE...',
      '>> CONNECTION CLOSING. SUCCESS STATUS: 200 OK.'
    ];

    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 600 + Math.random() * 400));
      setTerminalLogs(prev => [...prev, steps[i]]);
    }

    await new Promise(resolve => setTimeout(resolve, 500));
    setReceiptId(generateReceiptId());
    setSubmitSuccess(true);
    setIsSubmitting(false);
  };

  const resetForm = () => {
    setSubmitSuccess(false);
    setIsSubmitting(false);
    setTerminalLogs([]);
    setFormData({
      codename: '',
      crewSize: '2 AGENTS',
      vibe: 'Techno Coffee Rave',
      email: '',
      message: ''
    });
  };

  const vibes = [
    { name: 'Techno Coffee Rave', color: 'border-neon-orange text-neon-orange hover:bg-neon-orange/10' },
    { name: 'Acid House Session', color: 'border-neon-green text-neon-green hover:bg-neon-green/10' },
    { name: 'Chillhop Midnight', color: 'border-neon-blue text-neon-blue hover:bg-neon-blue/10' },
    { name: 'Neon Sip Day Fuel', color: 'border-neon-pink text-neon-pink hover:bg-neon-pink/10' }
  ];

  const crewSizes = ['1 AGENT', '2 AGENTS', '3-4 HACKERS', '5+ CREW'];

  return (
    <section id="contact-section" className="py-32 px-8 bg-black relative border-t-8 border-neon-pink overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-neon-pink/5 blur-[120px] rounded-full -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-neon-blue/5 blur-[120px] rounded-full translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* LEFT COLUMN: CYBER DETAILS */}
          <div className="w-full lg:w-5/12 flex flex-col justify-between">
            <div>
              {/* Sticker */}
              <div className="inline-block bg-neon-pink text-black px-4 py-1 text-xs font-black uppercase tracking-wider mb-6 rotate-[-2deg] shadow-[4px_4px_0_#00F5FF]">
                SECURE ACCESS REQUIRED
              </div>
              
              <h2 className="text-6xl md:text-8xl font-black leading-none mb-8 tracking-tighter text-white">
                SIGNAL / <br />
                <span className="text-neon-pink italic">SECURE.</span>
              </h2>
              
              <p className="text-2xl font-bold opacity-75 max-w-md mb-12 border-l-4 border-neon-blue pl-6 py-2">
                Want to book a high-voltage table or beam us a business proposition? Lock your frequency here.
              </p>
            </div>

            {/* Cyber Terminal Stats */}
            <div className="glass-card border-l-8 border-neon-pink p-8 rounded-3xl space-y-6 bg-white/5 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-neon-pink/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="text-xs uppercase tracking-widest text-neon-pink font-black border-b border-white/10 pb-3 flex items-center justify-between">
                <span>[ TERMINAL FEED STATUS ]</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-neon-green rounded-full animate-pulse" />
                  ONLINE
                </span>
              </div>

              <div className="space-y-4 font-mono text-sm tracking-wide">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-neon-pink mt-0.5 shrink-0" />
                  <div>
                    <span className="text-white/40 block text-xs">SYS TIME (GMT)</span>
                    <span className="text-white font-bold">{mounted ? time : 'SYNCHRONIZING...'}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-neon-blue mt-0.5 shrink-0" />
                  <div>
                    <span className="text-white/40 block text-xs">HQ COORDINATES</span>
                    <span className="text-neon-blue font-bold">37.7749° N, 122.4194° W (GRID: B9)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-neon-orange mt-0.5 shrink-0" />
                  <div>
                    <span className="text-white/40 block text-xs">DIRECT FREQUENCY</span>
                    <span className="text-neon-orange font-bold">1-800-NEON-SIP</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-neon-green mt-0.5 shrink-0" />
                  <div>
                    <span className="text-white/40 block text-xs">DECRYPTED NET</span>
                    <span className="text-neon-green font-bold">BEAM@NEONSIP.CLUB</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-2 border-t border-white/10 text-[10px] text-white/40 flex justify-between font-mono">
                <span>PROT: CAFFEINE-v4.0.2</span>
                <span>ENC: RSA-4096 / BEAN</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: ACTION DASHBOARD */}
          <div className="w-full lg:w-7/12">
            <div 
              className="glass-card border-b-8 border-r-8 border-neon-blue p-8 md:p-12 rounded-[40px] relative overflow-hidden bg-white/5 backdrop-blur-xl min-h-[680px] flex flex-col justify-between"
              data-lenis-prevent
            >
              
              {/* Tab Selector */}
              <div className="flex gap-4 mb-10 border-b-4 border-black pb-6">
                <button
                  onClick={() => { if (!isSubmitting) setActiveTab('reserve'); }}
                  className={`flex-1 py-4 font-black uppercase text-xl border-4 transition-all duration-200 cursor-pointer text-center ${
                    activeTab === 'reserve'
                      ? 'bg-neon-blue border-white text-black shadow-[4px_4px_0_#FF0080] -translate-y-1'
                      : 'border-white/20 hover:border-white text-white bg-transparent'
                  }`}
                  disabled={isSubmitting}
                >
                  [ LOCK A SPOT ]
                </button>
                <button
                  onClick={() => { if (!isSubmitting) setActiveTab('contact'); }}
                  className={`flex-1 py-4 font-black uppercase text-xl border-4 transition-all duration-200 cursor-pointer text-center ${
                    activeTab === 'contact'
                      ? 'bg-neon-pink border-white text-black shadow-[4px_4px_0_#00F5FF] -translate-y-1'
                      : 'border-white/20 hover:border-white text-white bg-transparent'
                  }`}
                  disabled={isSubmitting}
                >
                  [ BEAM MESSAGE ]
                </button>
              </div>

              {/* Form Content / Terminal States */}
              <AnimatePresence mode="wait">
                {isSubmitting ? (
                  /* TERMINAL SIMULATION SUBMITTING STATE */
                  <motion.div
                    key="terminal"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-black/80 border-4 border-neon-blue p-8 rounded-3xl font-mono text-sm text-neon-blue min-h-[480px] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 border-b border-neon-blue/30 pb-4 mb-6">
                        <Terminal className="w-6 h-6 animate-pulse text-neon-blue" />
                        <span className="font-black text-lg tracking-widest uppercase">SIP-TRANSMITTER PROT.V4</span>
                      </div>
                      
                      <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2" data-lenis-prevent>
                        {terminalLogs.map((log, idx) => (
                          <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className={`${log.includes('SUCCESS') ? 'text-neon-green font-bold' : log.includes('IDENT') ? 'text-neon-pink' : 'text-neon-blue'}`}
                          >
                            {log}
                          </motion.div>
                        ))}
                        <motion.div 
                          animate={{ opacity: [1, 0, 1] }} 
                          transition={{ repeat: Infinity, duration: 0.8 }}
                          className="inline-block w-2.5 h-4 bg-neon-blue ml-1"
                        />
                      </div>
                    </div>
                    
                    <div className="text-center pt-8 text-white/50 text-xs animate-pulse">
                      SECURE PIPELINE ACTIVATED. DO NOT SHUT DOWN SYSTEM.
                    </div>
                  </motion.div>
                ) : submitSuccess ? (
                  /* SUCCESS RECEIPT STATE */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-6 flex flex-col items-center justify-center border-4 border-neon-green rounded-3xl bg-neon-green/5 p-6 min-h-[480px]"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                      transition={{ type: 'spring', damping: 10, stiffness: 200 }}
                      className="w-24 h-24 rounded-full bg-neon-green text-black flex items-center justify-center mb-8 shadow-[0_0_20px_#B4FF00]"
                    >
                      <CheckCircle2 className="w-12 h-12" />
                    </motion.div>
                    
                    <h3 className="text-4xl font-black text-neon-green mb-4 neon-glow-green uppercase">
                      TRANSMISSION LOCKED!
                    </h3>
                    
                    <p className="text-xl max-w-md opacity-80 mb-8 font-bold text-white">
                      Your packet has breached the core. The baristas have been alerted and your coordinates have been encrypted.
                    </p>

                    <div className="bg-black/60 border-2 border-white/20 p-6 rounded-2xl font-mono text-left max-w-sm w-full mb-8 relative">
                      <div className="absolute top-2 right-2 text-[10px] text-neon-green font-bold font-mono tracking-widest">[ COFFEE-REC ]</div>
                      <div className="text-xs text-white/40 border-b border-white/10 pb-2 mb-3">SIP SECURE PASS</div>
                      <div className="space-y-2 text-sm">
                        <div><span className="text-white/40">OPERATIVE:</span> <span className="text-neon-pink font-bold">{formData.codename.toUpperCase()}</span></div>
                        {activeTab === 'reserve' ? (
                          <>
                            <div><span className="text-white/40">VIBE AREA:</span> <span className="text-neon-orange font-bold">{formData.vibe.toUpperCase()}</span></div>
                            <div><span className="text-white/40">CREW SIZE:</span> <span className="text-neon-blue font-bold">{formData.crewSize}</span></div>
                          </>
                        ) : (
                          <div><span className="text-white/40">COMM TYPE:</span> <span className="text-neon-pink font-bold">CORE FEEDBACK</span></div>
                        )}
                        <div><span className="text-white/40">SECURE ID:</span> <span className="text-neon-green font-bold font-mono">{receiptId}</span></div>
                      </div>
                    </div>

                    <button
                      onClick={resetForm}
                      className="bg-white text-black font-black uppercase px-8 py-4 cursor-pointer hover:bg-neon-green transition-all shadow-[4px_4px_0_#B4FF00]"
                    >
                      [ NEW TRANSMISSION ]
                    </button>
                  </motion.div>
                ) : (
                  /* MAIN INTERACTIVE FORM STATE */
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={triggerTerminalSequence}
                    className="space-y-8"
                  >
                    {/* General Field 1: CODENAME */}
                    <div className="flex flex-col gap-3">
                      <label className="text-neon-blue uppercase text-sm font-black tracking-widest flex items-center gap-2">
                        <span>[ 01 ] CODENAME / OPERATIVE NAME</span>
                        <span className="text-xs text-white/40 italic">(Required)</span>
                      </label>
                      <input
                        type="text"
                        name="codename"
                        required
                        value={formData.codename}
                        onChange={handleInputChange}
                        placeholder="ENTER CODENAME (E.G., CYBER_BARISTA)"
                        className="w-full bg-black/50 border-4 border-white/20 p-5 font-mono text-white placeholder-white/30 text-lg uppercase tracking-wider rounded-2xl focus:border-neon-blue focus:shadow-[0_0_15px_rgba(0,245,255,0.4)] focus:bg-black outline-none transition-all"
                      />
                    </div>

                    {/* General Field 2: EMAIL */}
                    <div className="flex flex-col gap-3">
                      <label className="text-neon-pink uppercase text-sm font-black tracking-widest flex items-center gap-2">
                        <span>[ 02 ] SIGNAL FREQUENCY (EMAIL)</span>
                        <span className="text-xs text-white/40 italic">(Required)</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="OPERATIVE@NET.DOM"
                        className="w-full bg-black/50 border-4 border-white/20 p-5 font-mono text-white placeholder-white/30 text-lg uppercase tracking-wider rounded-2xl focus:border-neon-pink focus:shadow-[0_0_15px_rgba(255,0,128,0.4)] focus:bg-black outline-none transition-all"
                      />
                    </div>

                    {/* DUAL BRANCHING: TAB SPECIFIC FIELDS */}
                    {activeTab === 'reserve' ? (
                      <>
                        {/* Reservation: CREW SIZE */}
                        <div className="flex flex-col gap-3">
                          <label className="text-neon-orange uppercase text-sm font-black tracking-widest flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>[ 03 ] CREW SIZE</span>
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {crewSizes.map((size) => (
                              <button
                                key={size}
                                type="button"
                                onClick={() => handleSelectCrew(size)}
                                className={`py-4 px-3 font-mono font-bold text-xs uppercase border-4 rounded-xl transition-all cursor-pointer text-center ${
                                  formData.crewSize === size
                                    ? 'bg-neon-orange border-white text-black font-black shadow-[3px_3px_0_#B4FF00]'
                                    : 'border-white/10 hover:border-white/40 text-white hover:bg-white/5'
                                }`}
                              >
                                {size}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Reservation: VIBE SELECTOR */}
                        <div className="flex flex-col gap-4">
                          <label className="text-neon-green uppercase text-sm font-black tracking-widest flex items-center gap-2">
                            <Coffee className="w-4 h-4" />
                            <span>[ 04 ] TARGET VIBE MATRIX</span>
                          </label>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {vibes.map((v) => (
                              <button
                                key={v.name}
                                type="button"
                                onClick={() => handleSelectVibe(v.name)}
                                className={`p-4 border-4 rounded-2xl font-bold uppercase transition-all duration-200 text-left cursor-pointer flex justify-between items-center ${v.color} ${
                                  formData.vibe === v.name
                                    ? 'bg-white text-black border-white shadow-[4px_4px_0px_#B4FF00]'
                                    : 'bg-black/20 border-white/10 text-white'
                                }`}
                              >
                                <span className="text-sm font-black">{v.name}</span>
                                {formData.vibe === v.name && (
                                  <span className="w-3 h-3 bg-neon-green rounded-full shadow-[0_0_10px_#B4FF00]" />
                                )}
                              </button>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      /* Contact: MESSAGE / PAYLOAD */
                      <div className="flex flex-col gap-3">
                        <label className="text-neon-green uppercase text-sm font-black tracking-widest flex items-center gap-2">
                          <span>[ 03 ] TRANSMISSION PAYLOAD (MESSAGE)</span>
                          <span className="text-xs text-white/40 italic">(Required)</span>
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="BEAM US A DETAILED PAYLOAD... COLLABORATION, RAVE SPECS, OR COFFEE FEEDBACK..."
                          className="w-full bg-black/50 border-4 border-white/20 p-5 font-mono text-white placeholder-white/30 text-lg uppercase tracking-wider rounded-2xl focus:border-neon-green focus:shadow-[0_0_15px_rgba(180,255,0,0.4)] focus:bg-black outline-none transition-all resize-none"
                        />
                      </div>
                    )}

                    {/* Submit button */}
                    <div className="pt-6">
                      <button
                        type="submit"
                        className={`w-full py-6 font-black uppercase text-2xl border-4 transition-all duration-200 cursor-pointer flex items-center justify-center gap-4 ${
                          activeTab === 'reserve'
                            ? 'bg-neon-blue border-white text-black hover:bg-white shadow-[8px_8px_0_#FF0080] hover:shadow-[4px_4px_0_#FF0080] hover:-translate-x-[-4px] hover:-translate-y-[-4px]'
                            : 'bg-neon-pink border-white text-black hover:bg-white shadow-[8px_8px_0_#00F5FF] hover:shadow-[4px_4px_0_#00F5FF] hover:-translate-x-[-4px] hover:-translate-y-[-4px]'
                        }`}
                      >
                        {activeTab === 'reserve' ? (
                          <>
                            <Calendar className="w-6 h-6 shrink-0" />
                            <span>[ ENCRYPT TABLE SLOT ]</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-6 h-6 shrink-0" />
                            <span>[ TRANSMIT SIGNAL ]</span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
