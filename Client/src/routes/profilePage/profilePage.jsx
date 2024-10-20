import "./profilePage.scss";
import List from "../../components/list/List";
import Chat from "../../components/chat/Chat";

export default function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>

          <div className="info">
            <span>
              Avatar:{" "}
              <img
                src="https://images.unsplash.com/photo-1729167318434-5cefa05fa3ad?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </span>
            <span>Username: <b>John Doe</b></span>
            <span>Email: <b>john@gmail.com</b></span>
          </div>

          <div className="title">
            <h1>My List</h1>
            <button> Create New Post</button>
          </div>
          <List/>

          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List/>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  );
}
