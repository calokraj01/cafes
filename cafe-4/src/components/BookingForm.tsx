'use client';

import React, { useState } from 'react';
import { Calendar, Clock, Users, User, Mail, MessageSquare } from 'lucide-react';

interface BookingFormProps {
  onClose?: () => void;
}

const BookingForm = ({ onClose }: BookingFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simulate API call
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white/80 backdrop-blur-md p-12 rounded-3xl organic-shadow text-center animate-in fade-in zoom-in duration-500 max-w-2xl mx-auto border border-sage/10">
        <div className="w-20 h-20 bg-sage-light rounded-full flex items-center justify-center mx-auto mb-8">
          <Calendar className="text-sage w-10 h-10" />
        </div>
        <h3 className="text-4xl font-serif mb-4 text-sage">Table Reserved</h3>
        <p className="text-sage/70 text-lg leading-relaxed mb-8">
          Your sun-drenched spot is waiting. We've sent a confirmation email with your reservation details. We look forward to hosting your slow morning.
        </p>
        <button 
          onClick={() => {
            setIsSubmitted(false);
            if (onClose) onClose();
          }}
          className="text-earth font-bold uppercase text-sm tracking-widest hover:text-sage transition-colors underline underline-offset-8"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur-md p-8 md:p-16 rounded-3xl organic-shadow max-w-2xl mx-auto border border-sage/10 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-sage-light rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      
      <form onSubmit={handleSubmit} className="relative z-10 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="relative group">
            <label className="block text-xs font-bold uppercase tracking-widest text-sage/50 mb-2">Full Name</label>
            <div className="flex items-center border-b border-sage/20 py-2 focus-within:border-sage transition-colors">
              <User className="w-5 h-5 text-sage/50 mr-4" />
              <input 
                type="text" 
                required
                className="w-full bg-transparent border-none focus:ring-0 text-sage placeholder:text-sage/30 text-lg outline-none"
                placeholder="Jane Doe"
              />
            </div>
          </div>

          <div className="relative group">
            <label className="block text-xs font-bold uppercase tracking-widest text-sage/50 mb-2">Email Address</label>
            <div className="flex items-center border-b border-sage/20 py-2 focus-within:border-sage transition-colors">
              <Mail className="w-5 h-5 text-sage/50 mr-4" />
              <input 
                type="email" 
                required
                className="w-full bg-transparent border-none focus:ring-0 text-sage placeholder:text-sage/30 text-lg outline-none"
                placeholder="jane@example.com"
              />
            </div>
          </div>

          <div className="relative group">
            <label className="block text-xs font-bold uppercase tracking-widest text-sage/50 mb-2">Date</label>
            <div className="flex items-center border-b border-sage/20 py-2 focus-within:border-sage transition-colors">
              <Calendar className="w-5 h-5 text-sage/50 mr-4" />
              <input 
                type="date" 
                required
                className="w-full bg-transparent border-none focus:ring-0 text-sage placeholder:text-sage/30 text-lg outline-none"
              />
            </div>
          </div>

          <div className="relative group">
            <label className="block text-xs font-bold uppercase tracking-widest text-sage/50 mb-2">Time</label>
            <div className="flex items-center border-b border-sage/20 py-2 focus-within:border-sage transition-colors">
              <Clock className="w-5 h-5 text-sage/50 mr-4" />
              <select required defaultValue="" className="w-full bg-transparent border-none focus:ring-0 text-sage text-lg outline-none cursor-pointer appearance-none">
                <option value="" disabled>Select a time</option>
                <option value="08:00">08:00 AM</option>
                <option value="09:00">09:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="13:00">01:00 PM</option>
                <option value="14:00">02:00 PM</option>
              </select>
            </div>
          </div>
        </div>

        <div className="relative group">
          <label className="block text-xs font-bold uppercase tracking-widest text-sage/50 mb-2">Number of Guests</label>
          <div className="flex items-center border-b border-sage/20 py-2 focus-within:border-sage transition-colors">
            <Users className="w-5 h-5 text-sage/50 mr-4" />
            <select required defaultValue="2" className="w-full bg-transparent border-none focus:ring-0 text-sage text-lg outline-none cursor-pointer appearance-none">
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
              <option value="5">5 People</option>
              <option value="6">6+ People</option>
            </select>
          </div>
        </div>

        <div className="relative group">
          <label className="block text-xs font-bold uppercase tracking-widest text-sage/50 mb-2">Special Requests (Optional)</label>
          <div className="flex items-start border-b border-sage/20 py-2 focus-within:border-sage transition-colors">
            <MessageSquare className="w-5 h-5 text-sage/50 mr-4 mt-1" />
            <textarea 
              rows={2}
              className="w-full bg-transparent border-none focus:ring-0 text-sage placeholder:text-sage/30 text-lg outline-none resize-none"
              placeholder="Window seat, quiet corner, celebrating a birthday..."
            ></textarea>
          </div>
        </div>

        <div className="pt-8 text-center">
          <button 
            type="submit"
            className="w-full md:w-auto bg-earth text-white border-2 border-[#1A1A1A] px-16 py-5 rounded-[40px] text-lg font-medium hover:bg-sage transition-all hover:scale-[1.02] shadow-lg active:scale-95"
          >
            Confirm Reservation
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
