import PropTypes from 'prop-types';
import { BsBookmarkCheckFill } from "react-icons/bs";


const Blog = ({ blog, handleAddToBookmarks }) => {
    const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mb-20'>
            <img className='w-full' src={cover} alt={`Cover picture of title ${title}`} />
            <div className='flex justify-between  my-3'>
                <div className='flex'>
                    <img className='w-16 rounded-[100%] mr-4' src={author_img} alt="" />
                    <div>
                        <h2 className='text-2xl'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div>
                    <span>{reading_time}min read</span>
                    {/* Bookmark */}
                    <button
                        onClick={ () => handleAddToBookmarks(blog)}
                        className='ml-3'
                    ><BsBookmarkCheckFill></BsBookmarkCheckFill></button>
                </div>

            </div>
            <h2 className='text-4xl font-bold'>{title}</h2>
            <p className='mt-4'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button className='mt-3'><span className='text-purple-600'>Mark as read</span></button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired
}

export default Blog;