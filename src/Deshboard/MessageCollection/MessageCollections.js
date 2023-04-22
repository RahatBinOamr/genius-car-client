import React, { useEffect, useState } from "react";
import MessageCollection from "./MessageCollection";

const MessageCollections = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(" https://genius-car-server-omega-nine.vercel.app/contact")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);
  return (
    <div className="grid gap-6 mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      {messages.map((message, i) => (
        <MessageCollection message={message} key={i} />
      ))}
    </div>
  );
};

export default MessageCollections;
