"use client";

import { useChat, type UIMessage } from "@ai-sdk/react";
import { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const { messages, status, sendMessage } = useChat();
  
  const [input, setInput] = useState("");
  // 1. Changed to true so it opens automatically on page load
  const [isOpen, setIsOpen] = useState(true); 
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage({ text: input });
    setInput(""); 
  };

  const isLoading = status === "submitted" || status === "streaming";

  // 2. Curated starter prompts for recruiters
  const starterPrompts = [
    "Tell me about the 98% accuracy MRI model.",
    "What is the architecture of your AWS stock pipeline?",
    "What roles are you targeting for May 2026?",
    "Explain the DualBrain AI routing logic."
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        // 3. Increased dimensions to w-[400px] and h-[600px]
        <div className="mb-4 w-[400px] h-[600px] flex flex-col border border-neutral-300 dark:border-neutral-800 rounded-lg bg-white dark:bg-neutral-900 shadow-xl overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="px-4 py-3 border-b border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">Shreenath&apos;s AI Agent</p>
              <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Powered by Gemini</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
            {messages.length === 0 && (
              <div className="flex flex-col gap-4 mt-2">
                <p className="text-sm text-neutral-500 text-center">
                  Hi! I&apos;m Shreenath&apos;s AI agent. I know all about his research, tech stack, and experience. How can I help you?
                </p>
                <p className="text-xs text-neutral-500 text-center">
                  This is chat is being run by Gemini's free tier, please be generous to not burn my tokens.
                </p>
                
                {/* 4. Render clickable starter prompts */}
                <div className="flex flex-col gap-2 mt-2">
                  {starterPrompts.map((prompt, i) => (
                    <button
                      key={i}
                      onClick={() => sendMessage({ text: prompt })}
                      className="text-left text-sm px-4 py-2.5 rounded-md border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                    >
                      → {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {messages.map((m: UIMessage) => (
              <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] text-sm px-4 py-2.5 rounded-lg ${
                  m.role === "user" 
                    ? "bg-neutral-800 dark:bg-neutral-200 text-white dark:text-neutral-900" 
                    : "border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/50 text-neutral-800 dark:text-neutral-300"
                }`}>
                  {m.parts.map((part, index) => 
                    part.type === "text" ? <span key={index}>{part.text}</span> : null
                  )}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="text-sm px-4 py-2 text-neutral-500 italic">Typing...</div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={onSubmit} className="p-3 border-t border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my experience..."
              disabled={status !== "ready"}
              className="w-full text-sm px-4 py-2.5 rounded-md border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-300 placeholder-neutral-500 outline-none focus:border-neutral-500 dark:focus:border-neutral-400 transition-colors disabled:opacity-50"
            />
            <p className="text-[10px] text-neutral-500 text-center mt-2">
              AI generated responses might be inaccurate. Please visit experience tab to get most accurate metrics/results.
            </p>
            <p className="text-[10px] text-neutral-500 text-center mt-2">
            Do not enter sensitive information.
            </p>
          </form>
        </div>
      )}

      {/* Toggle FAB Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="px-5 py-3 rounded-full text-sm font-medium text-white bg-gradient-to-br from-neutral-800 to-neutral-600 shadow-lg hover:shadow-xl transition-all animate-in zoom-in duration-200"
        >
          Chat with my AI
        </button>
      )}
    </div>
  );
}