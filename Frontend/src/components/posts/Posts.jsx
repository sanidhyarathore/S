import './posts.scss'
import Post from '../post/Post'

const Posts = () => {

    const posts = [
        {
            id: 1,
            name: "Sanidhya Rathore",
            userId: 1,
            profilPic: "https://images.unsplash.com/profile-1588589289006-77599536a264image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            desc: "This is description of the first post",
            img: "https://images.unsplash.com/photo-1606667905759-d799c2c92eef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D"
        }, {
            id: 2,
            name: "Sanidhya Rathore",
            userId: 2,
            profilPic: "https://images.unsplash.com/profile-1588589289006-77599536a264image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            desc: "This is description of the second post",
            img: "https://images.unsplash.com/photo-1588589189961-dc6282649ed1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8fA%3D%3D"
        }, {
            id: 3,
            name: "Sanidhya Rathore",
            userId: 3,
            profilPic: "https://images.unsplash.com/profile-1588589289006-77599536a264image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            desc: "This is description of the third post",
            img: "https://images.unsplash.com/photo-1588589015148-5c0184d25a41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8fA%3D%3D"
        }, {
            id: 4,
            name: "Sanidhya Rathore",
            userId: 4,
            profilPic: "https://images.unsplash.com/profile-1588589289006-77599536a264image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            desc: "This is description of the fourth post",
            img: "https://images.unsplash.com/photo-1508062878650-88b52897f298?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"
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
