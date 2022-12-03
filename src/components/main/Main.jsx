import "./main.css";
import Post from "../../components/post/Post";
import PostSumTwo from "../../components/postsumtwo/PostSumTwo";
import PostSumThree from "../../components/postsumthree/PostSumThree";

function Main() {
  return (
    <div className="posts">
      <Post/>
      <br />
      <PostSumTwo/>
      <br />
      <PostSumThree/>
    </div>
  )
}

export default Main
