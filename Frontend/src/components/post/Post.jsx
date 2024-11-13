import React, { Component } from 'react'
import './post.scss';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from '@mui/material';

const Post = ({ post }) => {
    return (
        <div className='post'>
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilPic} />
                        <div className="details">
                            <Link to={`/profile/${post.userId}`} style={{ textDecoration: "none", color: 'inherit' }}>
                                <div className="name"><span>{post.name}</span></div>
                            </Link>
                            <div className="date">a minute ago</div>
                        </div>
                    </div>
                    <MoreHorizIcon />
                </div>
            </div>
            <div className="content">
                <p>{post.desc}</p>
                <img src={post.img} />
            </div>
            <div className="info"></div>
        </div>
    )
}

export default Post;