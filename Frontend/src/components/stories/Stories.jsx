import { useContext } from 'react'
import './stories.scss'
import { AuthContext } from "../../context/authContext"

const Stories = () => {
    const { currentUser } = useContext(AuthContext);
    const stories = [
        {
            id: 1,
            img: "https://images.unsplash.com/profile-1588589289006-77599536a264image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            name: "Sanidhya Rathore"
        }, {
            id: 2,
            img: "https://images.unsplash.com/profile-1588589289006-77599536a264image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            name: "Sanidhya Rathore"
        }, {
            id: 3,
            img: "https://images.unsplash.com/profile-1588589289006-77599536a264image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            name: "Sanidhya Rathore"
        }
    ]
    return (
        <div className="stories">
            <div className="story">
                <img src={stories[0].img} />
                <span>{stories[0].name}</span>
                <button>+</button>
            </div>

            {
                stories.map(story => (
                    <div className="story">
                        <img src={story.img} />
                        <span>{story.name}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Stories