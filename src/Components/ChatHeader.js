import React from "react";
import "./ChatHeader.css";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import EditLocationIcon from "@material-ui/icons/EditLocation";
import PeopleIcon from "@material-ui/icons/People";
import SearchIcon from "@material-ui/icons/Search";
import SendIcon from "@material-ui/icons/Send";
import HelpIcon from "@material-ui/icons/Help";

function ChatHeader() {
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
          Youtube
        </h3>
      </div>
      <div className="chatHeader__right">
        <NotificationImportantIcon />
        <EditLocationIcon />
        <PeopleIcon />
        <div className="chatHeader__search">
          <input type="text" placeholder="Search" />
          <SearchIcon />
        </div>
        <SendIcon />
        <HelpIcon />
      </div>
    </div>
  );
}

export default ChatHeader;
