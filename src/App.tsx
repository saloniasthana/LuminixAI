import React, { useState } from "react";
import ModelSelector from "./components/ModelSelector";
import PromptEditor from "./components/PromptEditor";
import ChatWindow from "./components/ChatWindow";
import ThemeToggle from "./components/ThemeToggle";
import { AppContextProvider } from "./context/AppContext";

type Message = {
  role: "user" | "assistant";
  content: string;
};

function App() {
  const [selectedModel, setSelectedModel] = useState("gpt-3.5-turbo");
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSend = (prompt: string) => {
    const newMessage: Message = { role: "user", content: prompt };
    setMessages((prev) => [...prev, newMessage]);

    // Fake AI response for now
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `Response from ${selectedModel}` },
      ]);
    }, 1000);
  };

  return (
    <AppContextProvider>
    <div className="min-h-screen p-4 bg-white dark:bg-black text-black dark:text-white">
      {/* Hero Section */}
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-indigo-600">
      <h1 className="text-4xl font-bold text-white drop-shadow-lg">
        Hello from <span className="text-yellow-300">Luminix.AI ✨</span>
        </h1>
      </div>
    
      {/* Main App Section */}
      <ThemeToggle />
      <ModelSelector selectedModel={selectedModel} onChange={setSelectedModel} />
      <ChatWindow messages={messages} />
      <PromptEditor onSend={handleSend} />
      </div>
      </AppContextProvider>
 );
}
export default App;
