import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa6';
const Blog = ({ blog,handelarAddBookmarks }) => {
    const { Title, Cover, Image, Author, Posted,Hashtag } = blog;
    return (
        <div className='mb-20'>
            <img className='w-full rounded-xl' src={Cover} alt={`cover picture of the title ${Title}`} />

            <div className='flex justify-between mt-6'>
                <div className='flex'>
                    <img className='w-14' src={Image} alt="" />
                    <div className='ml-6'>
                        <h2 className='text-2xl'>{Author}</h2>
                        <p>{Posted}</p>
                    </div>
                </div>
                
                <div>
                    <span>Posted Time:{Posted}</span><button onClick ={ ()=>handelarAddBookmarks(blog)} className='ml-2 text-green-500'
                    ><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-6xl'>my Title {Title}</h2>
            <p className='text-'>{Hashtag}</p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handelarAddBookmarks:PropTypes.func
}
// ekhane props ta babohar korlo kn 
// amr tw full blog ta asteche na 
export default Blog;