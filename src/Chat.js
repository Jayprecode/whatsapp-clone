import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import { useParams } from "react-router-dom";
import "./Chat.css";
import db from "./firebase";

function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");
  // @ts-ignore
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");

  useEffect(() => {
    if (roomId) {
      db.collection("rooms").doc(roomId).onSnapshot(snapshot =>
        setRoomName(snapshot.data().name));
    }
  }, [roomId]);



    useEffect(() => {
      // @ts-ignore
      setSeed(Math.floor(Math.random() * 5000));
    }, [roomId]);
    
    const sendMessage = (e) => {
        e.preventDefault();
        setInput("");
    }

    return (
      <div className="chat">
        <div className="chat__header">
          <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
          <div className="chat__headerInfo">
            <h3>{roomName}</h3>
            <p>Last seen at ...</p>
          </div>
          <div className="chat__headerRight">
            <IconButton>
              <SearchOutlined />
            </IconButton>
            <IconButton>
              <AttachFile />
            </IconButton>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>
            <div className="chat__body">
                
                <p className={`chat__message ${true && "chat__receiver"}`}>
            <span className="chat__name">Jayprecode</span>
            Yoo What's up
            <span className="chat__timestamp">14:54pm</span>
          </p>
        </div>
        <div className="chat__footer">
          <InsertEmoticon />
          <form>
              <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text" />
              <button onClick={sendMessage} type="submit">Send a message</button>
          </form>
          <MicIcon />
        </div>
      </div>
    );
}

export default Chat
