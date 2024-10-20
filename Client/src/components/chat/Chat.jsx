import { useState } from "react";
import "./chat.scss";

export default function Chat(){
    const [chat,setChat]=useState(true);

    return(
        <div className="chat">
            <div className="messages">
                <h1>Messages</h1>
                <div className="message">
                    <img src="https://images.unsplash.com/photo-1729167318434-5cefa05fa3ad?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit ame...
                    </p>
                </div>
                <div className="message">
                    <img src="https://images.unsplash.com/photo-1729167318434-5cefa05fa3ad?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit ame...
                    </p>
                </div>
                <div className="message">
                    <img src="https://images.unsplash.com/photo-1729167318434-5cefa05fa3ad?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit ame...
                    </p>
                </div>
                <div className="message">
                    <img src="https://images.unsplash.com/photo-1729167318434-5cefa05fa3ad?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit ame...
                    </p>
                </div>
                <div className="message">
                    <img src="https://images.unsplash.com/photo-1729167318434-5cefa05fa3ad?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit ame...
                    </p>
                </div>
                <div className="message">
                    <img src="https://images.unsplash.com/photo-1729167318434-5cefa05fa3ad?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit ame...
                    </p>
                </div>
                <div className="message">
                    <img src="https://images.unsplash.com/photo-1729167318434-5cefa05fa3ad?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit ame...
                    </p>
                </div>
            </div>
            {chat&&(<div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img src="https://images.unsplash.com/photo-1729167318434-5cefa05fa3ad?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        John Doe
                    </div>
                    <span className="close" onClick={()=>setChat(null)}>x</span>
                </div>
                <div className="center">
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                </div>
                <div className="bottom">
                    <textarea></textarea>
                    <button>Send</button>
                </div>
            </div>)}
        </div>
    )
}