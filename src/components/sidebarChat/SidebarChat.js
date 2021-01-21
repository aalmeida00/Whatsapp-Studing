import React, { useEffect, useState } from "react";
import "./SidebarChat.css";

import { Avatar } from "@material-ui/core";

const SidebarChat = ({ addNewChat }) => {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 1000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Entre o nome do chat");

    if (roomName) {
      //firebase add later
    }
  };

  return !addNewChat ? (
    <div>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/4.5/api/male/${seed}.svg`} />
        <div className="sidebarChat__info">
          <h2>Chat Name</h2>
          <p>Last Message</p>
        </div>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Adicione uma nova conversa</h2>
    </div>
  );
};

export default SidebarChat;
