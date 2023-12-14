import "./Post.scss"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Comments from "../Comments/Comments";
import { useState } from "react";
import { Link } from "react-router-dom";


const Post = ({post}) => {

    const [commentsOpen, setCommentsOpen] = useState(false);

    //TEMPRARY
    const liked = false;

  return (
    <div className="post">
        <div className="container">
            <div className="user">
                <div className="userInfo">
                    <img src={post.profilePic} alt="" />
                    <div className="details">
                    <Link to={`/profile/${post.userId}`} style={{textDecoration:'none', color:'inherit'}}>
                        <span className="name">{post.name}</span>
                    </Link>
                        <span className="date"> 1 min ago</span>
                    </div>
                </div>
                <MoreHorizOutlinedIcon />
            </div>
            <div className="content">
                <p>{post.desc}</p>
                <img src={post.image} alt="" />
            </div>
            <div className="info">
                <div className="item">
                    {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
                    322 Likes
                </div>
                <div className="item" onClick={()=>setCommentsOpen(!commentsOpen)}>
                    <TextsmsOutlinedIcon />
                    54 Comments
                </div>
                <div className="item">
                    <ShareOutlinedIcon />
                    Share
                </div>
            </div>
            {commentsOpen && <Comments />}
        </div>
    </div>
  )
}

export default Post
