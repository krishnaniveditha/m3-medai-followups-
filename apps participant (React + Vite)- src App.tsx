import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { AgentQuestions } from "@shared";

const socket = io("http://localhost:3000");

export default function App() {
  const [messages, setMessages] = useState<AgentQuestions[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    socket.on("connect", () => setReady(true));

    socket.on("agent:questions", (msg: AgentQuestions) => {
      setMessages(prev => [...prev, msg]);
      const utter = new SpeechSynthesisUtterance(msg.text);
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utter);
    });

    return () => {
      socket.off("agent:questions");
    };
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h2>Participant</h2>
      <p>Status: {ready ? "ready" : "connecting..."}</p>
      <ul>
        {messages.map(m => (
          <li key={m.createdAt}>{m.text}</li>
        ))}
      </ul>
    </div>
  );
}
