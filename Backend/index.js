import express from "express";
const app = express();
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import commentsRoutes from "./routes/comments.js"
import likesRoutes from "./routes/likes.js"
import postsRoutes from "./routes/posts.js"

app.use(express.json())
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/post", postsRoutes)
app.use("/api/comments", commentsRoutes)
app.use("/api/like", likesRoutes)

app.listen(8800, () => {
    console.log("Hello from server")
})

