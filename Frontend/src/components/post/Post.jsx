import React, { Component, useState } from 'react'
import './post.scss';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from '@mui/material';
import { Comments } from '../comments/Comments';

const Post = ({ post }) => {
    const [liked, setLiked] = useState(false);
    const [commentOpen, setCommentOpen] = useState(false);

    const likeHandler = () => {
        setLiked(!liked);
    }

    return (
        <div className='post'>
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilPic} alt="Profile Pic" />
                        <div className="details">
                            <Link to={`/profile/${post.userId}`} style={{ textDecoration: "none", color: 'inherit' }}>
                                <div className="name"><span>{post.name}</span></div>
                            </Link>
                            <div className="date">a minute ago</div>
                        </div>
                    </div>
                    <MoreHorizIcon />
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <div className="imageWrapper">
                        <img src={post.img} alt="Post Image" />
                    </div>
                </div>
                <div className="info">
                    <div className="item">
                        {!liked ? (
                            <FavoriteBorderOutlinedIcon onClick={likeHandler} />
                        ) : (
                            <FavoriteOutlinedIcon onClick={likeHandler} />
                        )}
                        12 Likes
                    </div>
                    <div className="item">
                        <TextsmsOutlinedIcon onClick={() => { setCommentOpen(!commentOpen) }} /> 12 Comments
                    </div>
                    <div className="item">
                        <ShareOutlinedIcon /> Share
                    </div>
                </div>
                {commentOpen && <Comments />}
            </div>
        </div>
    );
}

export default Post;
