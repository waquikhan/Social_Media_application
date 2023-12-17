import express  from "express";

const app = express()   
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import commentsRoutes from "./routes/comments.js"
import likesRoutes from "./routes/likes.js"
import postsRoutes from "./routes/posts.js"
import cookieParser from "cookie-parser";
import cors from "cors";
 

//middleware 
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/comments", commentsRoutes)
app.use("/api/likes", likesRoutes)
app.use("/api/posts", postsRoutes)


app.listen(8800, ()=>{
    console.log("API Working!")
})