import './rightBar.scss'

const RightBar = () => {
    return (
        <div className='rightbar'>
            <div className="container">
                <div className="item">
                    <span>Suggestions for you</span>
                    <div className="user">
                        <div className="userinfo">
                            <img src='https://images.unsplash.com/profile-1588589289006-77599536a264image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' />
                            <span>Sanidhya Rathore</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userinfo">
                            <img src='https://images.unsplash.com/profile-1588589289006-77599536a264image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' />
                            <span>Sanidhya Rathore</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <span>Latest Activities</span>
                    <div className="user">
                        <div className="userinfo">
                            <img src='https://images.unsplash.com/profile-1588589289006-77599536a264image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' />
                            <p>
                                <span>Sanidhya Rathore </span>
                                Liked your post
                            </p>
                        </div>
                        <span>a minute ago</span>
                    </div>
                    <div className="user">
                        <div className="userinfo">
                            <img src='https://images.unsplash.com/profile-1588589289006-77599536a264image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' />
                            <p>
                                <span>Sanidhya Rathore </span>
                                Liked your post
                            </p>
                        </div>
                        <span>a minute ago</span>
                    </div>
                    <div className="user">
                        <div className="userinfo">
                            <img src='https://images.unsplash.com/profile-1588589289006-77599536a264image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' />
                            <p>
                                <span>Sanidhya Rathore </span>
                                Liked your post
                            </p>
                        </div>
                        <span>a minute ago</span>
                    </div>

                </div>

                <div className="item">
                    <span>Online Friends</span>
                    <div className="user">
                        <div className="userinfo">
                            <img src='https://images.unsplash.com/profile-1588589289006-77599536a264image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' />
                            <div className="online" />
                            <span>Sanidhya Rathore </span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userinfo">
                            <img src='https://images.unsplash.com/profile-1588589289006-77599536a264image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' />
                            <div className="online" />
                            <span>Sanidhya Rathore </span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userinfo">
                            <img src='https://images.unsplash.com/profile-1588589289006-77599536a264image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' />
                            <div className="online" />
                            <span>Sanidhya Rathore </span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )

}

export default RightBar