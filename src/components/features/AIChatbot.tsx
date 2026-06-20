"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot } from "lucide-react";

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hi! I'm Rudra's AI assistant. Ask me anything about his skills, experience, or projects!" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setMessages(prev => [...prev, { role: "user", content: userMsg }]);
    setInput("");

    // Mock AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "bot", 
        content: "I'm a mock AI assistant for now! Rudra is currently building my brain using OpenAI and LangChain. Please check out his portfolio sections for more details!" 
      }]);
    }, 1000);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(138,43,226,0.5)] z-50 hover:shadow-[0_0_30px_rgba(138,43,226,0.8)] transition-shadow"
      >
        <MessageSquare size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 glass-card rounded-2xl overflow-hidden z-50 flex flex-col shadow-2xl border border-white/10"
          >
            <div className="bg-gradient-to-r from-primary to-secondary p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2 font-semibold">
                <Bot size={20} /> AI Assistant
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-md transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <div className="h-80 overflow-y-auto p-4 flex flex-col gap-4 bg-black/60">
              {messages.map((msg, i) => (
                <div key={i} className={`max-w-[80%] p-3 rounded-xl text-sm ${msg.role === "bot" ? "bg-white/10 text-gray-200 self-start rounded-tl-none" : "bg-primary text-white self-end rounded-tr-none"}`}>
                  {msg.content}
                </div>
              ))}
            </div>

            <div className="p-3 bg-black/80 border-t border-white/10 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about Rudra..." 
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary transition-colors"
              />
              <button onClick={handleSend} className="bg-primary hover:bg-primary/90 text-white p-2 rounded-lg transition-colors">
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
