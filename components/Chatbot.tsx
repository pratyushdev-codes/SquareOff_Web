import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2, Bot } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from 'framer-motion';

const SYSTEM_INSTRUCTION = `You are the AI Assistant for Squareoff InvestTech, a premium financial services firm founded by Varun Pandya.
Your goal is to assist visitors by answering questions about the website, services, and basic financial concepts.

Key Information about Squareoff InvestTech:
- **Founder:** Varun Pandya (CFA Level 1 candidate, Engineering background).
- **Services:** Investment Advisory, Portfolio Management, Risk Analysis, Market Research (Fundamental & Technical), Long-term Wealth Planning.
- **Focus:** Data-driven, algorithmic, and research-backed strategies for Indian Equities. Serving clients in India.
- **Academy:** TradeCraft Academy offers training in intraday trading and price action strategies.
- **Why India:** Highlights India's structural growth, digital infrastructure, and market outperformance.

Guidelines:
- **Be Professional & Helpful:** Use a polite, sophisticated tone suitable for a wealth management firm.
- **No Financial Advice:** Do NOT provide specific stock tips (e.g., "Buy Stock X"). If asked for advice, explain general concepts or suggest booking a consultation via the Contact page.
- **Website Navigation:** Guide users to relevant pages (e.g., "You can learn more on our Services page" or "Check out TradeCraft for education").
- **Concise Answers:** Keep responses brief and easy to read.
`;

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm the Squareoff AI Assistant. How can I help you today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue.trim();
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Use Vite's native way to access environment variables
      const apiKey = import.meta.env.VITE_API_KEY;
      console.log("API Key loaded:", apiKey ? `Yes (${apiKey.substring(0, 10)}...)` : "NO - API KEY IS MISSING!");

      if (!apiKey) {
        throw new Error("API key is not configured. Please check your environment variables.");
      }

      const ai = new GoogleGenAI({ apiKey });

      // Build conversation history for the API
      const conversationHistory = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      // Add the new user message
      conversationHistory.push({
        role: 'user',
        parts: [{ text: userText }]
      });

      console.log("Sending request to Gemini API...");

      // Using gemini-2.0-flash as the free model
      const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: conversationHistory,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        }
      });

      console.log("API Response received:", response);

      // Extract text from response
      const responseText = response.text ?? "I apologize, I couldn't generate a response.";
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);

    } catch (error: any) {
      console.error("API Error:", error);

      const errorStr = String(error?.message || error);
      if (errorStr.includes('429') || errorStr.includes('RESOURCE_EXHAUSTED') || errorStr.includes('quota')) {
        setMessages(prev => [...prev, {
          role: 'model',
          text: "I'm currently unavailable due to high demand. Please try again in a few minutes, or contact us through the Contact page for immediate assistance."
        }]);
      } else {
        setMessages(prev => [...prev, {
          role: 'model',
          text: "I apologize, but I'm having trouble connecting right now. Please try again later or reach out via the Contact page."
        }]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 bg-white text-black'}`}
        aria-label="Open Chat"
      >
        <MessageCircle size={28} />
        {/* Status Dot */}
        <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] bg-neutral-950 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/10"
          >
            {/* Header */}
            <div className="bg-neutral-900 p-4 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white shadow-lg">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Squareoff AI</h3>
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 relative">
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <p className="text-xs text-neutral-400">
                      Online
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-neutral-400 hover:text-white transition-colors bg-neutral-800 p-2 rounded-full hover:bg-neutral-700"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-grow overflow-y-auto p-4 space-y-6 scrollbar-hide bg-black/40">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                      ? 'bg-white text-black rounded-tr-none'
                      : 'bg-neutral-800 text-neutral-200 rounded-tl-none border border-white/5 shadow-lg'
                      }`}
                  >
                    {msg.role === 'model' && (
                      <div className="flex items-center gap-1.5 mb-2 text-[10px] text-green-400 uppercase tracking-widest font-bold">
                        <Sparkles size={10} /> AI Assistant
                      </div>
                    )}
                    <div className="whitespace-pre-wrap">{msg.text}</div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-neutral-900/50 p-4 rounded-2xl rounded-tl-none border border-white/5 flex items-center space-x-3">
                    <Loader2 size={18} className="animate-spin text-green-500" />
                    <span className="text-xs text-neutral-400 animate-pulse">Typing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-4 bg-neutral-950 border-t border-white/10">
              <div className="relative flex items-end gap-2">
                <div className="relative flex-grow">
                  <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage(e);
                      }
                    }}
                    placeholder="Type your message..."
                    className="w-full bg-neutral-900 text-white placeholder-neutral-500 rounded-2xl py-3 pl-4 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-white/20 border border-white/5 resize-none scrollbar-hide"
                    rows={1}
                    style={{ minHeight: '46px', maxHeight: '100px' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="p-3 bg-white text-black rounded-full flex items-center justify-center hover:bg-neutral-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors mb-0.5"
                >
                  <Send size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};