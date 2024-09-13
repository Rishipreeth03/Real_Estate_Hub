import './profilePage.css'

export default function profilePage() {
    return (
        <div className="profilePage">
            <div className="details">
                <div className="wrapper">

                    <div className="title">
                        <h1>User Information</h1>
                        <button>Update Profile</button>
                    </div>

                    <div className="title">
                        <h1>My List</h1>
                        <button>New Post</button>
                    </div>

                    <div className="title">
                        <h1>Saved List</h1>
                    </div>
                </div>
            </div>
            <div className="chatContainer">
                <div className="wrapper"></div>
            </div>
        </div>
    )
}