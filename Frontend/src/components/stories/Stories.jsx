import './stories.scss'

const Stories = () => {
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
        }, {
            id: 4,
            img: "https://images.unsplash.com/profile-1588589289006-77599536a264image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            name: "Sanidhya Rathore"
        }
    ]
    return (
        <div className="stories">
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