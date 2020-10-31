import React from "react";
import io from "socket.io-client";

import MessageList from "./messagelist";
import NewMessage from "./newmessage";

const socket = io(location.origin);

export default () => (
  <div>
    <MessageList socket={socket} />
    <NewMessage socket={socket} />
  </div>
);