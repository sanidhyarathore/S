import './comments.scss'
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext'

export const Comments = () => {
    const { currentUser } = useContext(AuthContext);
    const comments = [
        {
            id: 1,
            name: "Sanidhya Rathore",
            userId: 1,
            profilPic: "https://images.unsplash.com/profile-1588589289006-77599536a264image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            desc: "Best Pic",
        }, {
            id: 2,
            name: "Sanidhya Rathore",
            userId: 2,
            profilPic: "https://images.unsplash.com/profile-1588589289006-77599536a264image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            desc: "wonderful",
        }, {
            id: 3,
            name: "Sanidhya Rathore",
            userId: 3,
            profilPic: "https://images.unsplash.com/profile-1588589289006-77599536a264image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            desc: "Awesom pic",
        }, {
            id: 4,
            name: "Sanidhya Rathore",
            userId: 4,
            profilPic: "https://images.unsplash.com/profile-1588589289006-77599536a264image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            desc: "bestttt!!!",
        },
    ]
    return (
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePic} alt="" />
                <input type="text" placeholder="write a comment" />
                <button>Send</button>
            </div>
            {comments.map((comment) => (
                <div className="comment">
                    <img src={comment.profilPic} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">1 hour ago</span>
                </div>
            ))}
        </div>
    );
};

export default Comments;