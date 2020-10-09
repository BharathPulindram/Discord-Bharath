import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoIcon from "@material-ui/icons/Info";
import CallIcon from "@material-ui/icons/Call";
import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Bharath Kumar</h3>
        <ExpandMoreIcon />
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon className="sidebar__addChannel" />
        </div>
        <div className="sidebar__channelList">
          <SidebarChannel />
        </div>
      </div>
      <div className="sidebar__voice">
        <SignalCellularAltIcon
          fontSize="large"
          className="sidebar__voiceIcon"
        />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar__voiceIcons">
          <InfoIcon />
          <CallIcon />
        </div>
      </div>
      <div className="sidebar__profile">
        <Avatar src="https://pbs.twimg.com/profile_images/1185858244389957633/6SoMTZGE.jpg" />
        <div className="sidebar__profileInfo">
          <h3>@Bharath</h3>
          <p>#this is my id</p>
        </div>
        <div className="sidebar__profileIcons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
