import React, { useState, useEffect } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";

const Chat = () => {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 100));
  });

  const sendMessage = (e) => {
    e.preventDefault();

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={"https://avatars.dicebear.com/4.5/api/male/${seed}.svg"} />

        <div className="chat__headerInfo">
          <h3>Conversa </h3>
          <p>Visto por último...</p>
        </div>

        <div className="chat__headerRight">
          {/* <IconButton> */}
          <SearchOutlined />
          {/* </IconButton> */}
          {/* <IconButton> */}
          <AttachFile />
          {/* </IconButton> */}
          {/* <IconButton> */}
          <MoreVert />
          {/* </IconButton> */}
        </div>
      </div>

      <div className="chat__body">
        <p className={`chat__message ${true && "chat__reciever"}`}>
          <span className="chat__name">Andre Almeida</span>
          Mensagem
          <span className="chat__timestamp">22:25</span>
        </p>
      </div>

      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enviar uma mensagem"
            type="text"
          />
          <button type="submit" onClick={sendMessage}>
            Enviar uma mensagem
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
};

export default Chat;
