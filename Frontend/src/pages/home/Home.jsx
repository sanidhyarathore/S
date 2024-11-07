import Stories from '../../components/stories/Stories'
import Post from '../../components/posts/Post'
import './home.scss'

const Home = () => {
    return (
        <div className='home'>
            <Stories />
            <Post />
        </div>
    )
}
export default Home