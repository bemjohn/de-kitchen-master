"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending an email or form payload
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  return (
    <div className="pt-20 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Get in Touch</h2>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 uppercase tracking-wider">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Planning a private dinner? Building a new restaurant? Require expert culinary staff? We are ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24">
          
          {/* Contact Information Panel */}
          <div className="bg-white border border-gray-100 p-10 md:p-14 rounded-3xl relative overflow-hidden group shadow-lg shadow-primary/5">
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/10 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-tr-full -z-10" />

            <h3 className="text-3xl font-bold text-gray-900 mb-8">Reach Out Directly</h3>
            
            <ul className="space-y-10">
              <li className="flex items-start">
                <div className="w-14 h-14 bg-orange-50 border border-primary/20 rounded-2xl flex items-center justify-center text-primary flex-shrink-0 mt-1 shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="ml-6">
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Phone / WhatsApp</p>
                  <a href="tel:+2347066035210" className="text-2xl text-gray-900 font-bold hover:text-primary transition-colors block">
                    +234 (706) 603-5210
                  </a>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="w-14 h-14 bg-orange-50 border border-primary/20 rounded-2xl flex items-center justify-center text-primary flex-shrink-0 mt-1 shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="ml-6">
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</p>
                  <a href="mailto:hello@dekitchenmaster.com" className="text-xl text-gray-900 font-bold hover:text-primary transition-colors block border-b border-transparent hover:border-primary inline-block">
                    hello@dekitchenmaster.com
                  </a>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="w-14 h-14 bg-orange-50 border border-primary/20 rounded-2xl flex items-center justify-center text-primary flex-shrink-0 mt-1 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="ml-6">
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Headquarters</p>
                  <p className="text-xl text-gray-900 font-medium leading-relaxed">
                    Victoria Island<br />
                    Lagos, Nigeria
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-16 pt-10 border-t border-gray-100">
              <p className="text-gray-600 mb-6 font-medium">Or click below to chat with us immediately:</p>
              <a
                href="https://wa.me/2347066035210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-[#25D366] hover:bg-[#1DA851] text-white font-bold tracking-wide rounded-full transition-colors w-full justify-center md:w-auto"
              >
                Start WhatsApp Chat
              </a>
            </div>
          </div>

          {/* Contact Form Container */}
          <div className="bg-white border border-gray-100 p-10 md:p-14 rounded-3xl shadow-lg shadow-primary/5">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h3>
            
            {isSubmitted ? (
               <div className="bg-green-50 border border-green-200 p-8 rounded-2xl text-center">
                 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                   <Send className="w-8 h-8 text-green-600" />
                 </div>
                 <h4 className="text-2xl font-bold text-gray-900 mb-4">Request Received!</h4>
                 <p className="text-green-800 font-medium">
                   Thank you for reaching out to De Kitchen Master. Our culinary concierges will review your request and get back to you within 24 hours.
                 </p>
                 <button 
                   onClick={() => setIsSubmitted(false)}
                   className="mt-8 text-primary font-bold hover:text-primary-dark transition-colors"
                 >
                   Send another message
                 </button>
               </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-gray-700">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-gray-700">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold text-gray-700">Service Required</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-colors appearance-none"
                  >
                    <option value="" disabled>Select an inquiry type...</option>
                    <option value="private-chef">Private Chef Booking</option>
                    <option value="catering">Event Catering</option>
                    <option value="setup">Kitchen Setup Consulting</option>
                    <option value="recruitment">Staff Recruitment</option>
                    <option value="training">Culinary Training</option>
                    <option value="other">General Inquiry / Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-gray-700">Project Details</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the date, guest count, location, and any specific dietary requests..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-colors resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold uppercase tracking-widest rounded-xl px-8 py-5 transition-all duration-300 shadow-lg shadow-primary/20 transform hover:-translate-y-1 flex justify-center items-center"
                >
                  Submit Request <Send className="ml-3 w-5 h-5" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
