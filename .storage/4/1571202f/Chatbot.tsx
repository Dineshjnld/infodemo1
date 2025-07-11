import React from 'react';

const Chatbot: React.FC = () => {
  return (
    <div className="w-64 h-full bg-gray-100 p-4 border-r border-gray-300 shadow-lg">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Chatbot</h2>
      <div className="space-y-2">
        <p className="text-sm text-gray-600">Hello! How can I help you today?</p>
        {/* Placeholder for chat messages */}
        <div className="h-64 bg-white border border-gray-200 rounded p-2 overflow-y-auto">
          {/* Example messages */}
          <div className="text-xs text-gray-500 mb-1">Bot: Welcome!</div>
          <div className="text-xs text-blue-500 text-right mb-1">You: Hi there.</div>
        </div>
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full p-2 border border-gray-300 rounded text-sm"
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded text-sm hover:bg-blue-600">
          Send
        </button>
      </div>
      <p className="text-xs text-gray-400 mt-4 text-center">AgriGuru Assistant</p>
    </div>
  );
};

export default Chatbot;
