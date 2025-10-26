import React, { useState } from "react";
import { io } from "socket.io-client";
import { FollowUpPayload } from "@shared";

const socket = io("http://localhost:3000");

export default function App() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("idle");

  const send = () => {
    const items = text.split(",").map(i => i.trim()).filter(Boolean);
    if (!items.length) return;
    setStatus("sending");
    const payload: FollowUpPayload = { items, createdAt: Date.now() };
    socket.emit("followup:create", payload);
    setStatus("sent");
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h2>Reviewer</h2>
      <textarea
        rows={4}
        cols={40}
        placeholder="latency, retry logic, error states"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <br />
      <button onClick={send}>Send</button>
      <p>Status: {status}</p>
    </div>
  );
}
