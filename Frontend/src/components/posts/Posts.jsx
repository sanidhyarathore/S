import './posts.scss'
import Post from '../post/Post'

const Posts = () => {

    const posts = [
        {
            id: 1,
            name: "Sanidhya Rathore",
            userId: 1,
            profilPic: "https://images.unsplash.com/profile-1588589289006-77599536a264image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            desc: "This is description of the first post"
        }, {
            id: 2,
            name: "Sanidhya Rathore",
            userId: 2,
            profilPic: "https://images.unsplash.com/profile-1588589289006-77599536a264image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            desc: "This is description of the second post"
        }, {
            id: 3,
            name: "Sanidhya Rathore",
            userId: 3,
            profilPic: "https://images.unsplash.com/profile-1588589289006-77599536a264image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            desc: "This is description of the third post"
        }, {
            id: 4,
            name: "Sanidhya Rathore",
            userId: 4,
            profilPic: "https://images.unsplash.com/profile-1588589289006-77599536a264image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            desc: "This is description of the fourth post"
        },
    ]
    return (
        <div className='posts'>
            {posts.map(post => (
                <Post post={post} key={post.id} />
            ))}
        </div>

    )
}

export default Posts
