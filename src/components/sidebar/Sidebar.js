import React from "react";
import "./Sidebar.css";
import SidebarChat from "../sidebarChat/SidebarChat";

import { Avatar, IconButton } from "@material-ui/core";

import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          {/* <IconButton> */}
          <DonutLargeIcon />
          {/* </IconButton> */}

          {/* <IconButton> */}
          <ChatIcon />
          {/* </IconButton> */}

          {/* <IconButton> */}
          <MoreVertIcon />
          {/* </IconButton> */}
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Procure ou adicione um novo chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat />
      </div>
    </div>
  );
};

export default Sidebar;
