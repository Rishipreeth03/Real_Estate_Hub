import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";

const app = express();

app.use(cors({origin:process.env.CLIENT_URL,credentials:true}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/posts",postRoute);
app.use("/api/auth",authRoute);
app.use("/api/test",testRoute);
app.use("/api/users",userRoute);
app.use("/api/chat",chatRoute);
app.use("/api/message",messageRoute);

app.listen(8800,()=>{
    console.log("Server is listening at 8800");
});