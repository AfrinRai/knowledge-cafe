import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    console.log(blog)
    const {cover, author, author_img, posted_date, reading_time, hashtags, title} = blog;

    return (
        <div className='mt-16'>
            <img className=' mb-8' src={cover} alt="" />
            <div className='flex justify-between mb-6'>
                <div className='flex'>
                    <img className=' w-14 h-14 rounded-full' src={author_img} alt="" />
                    <div className=' ml-6'>
                        <h3 className=' text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className=' pr-3'>{reading_time} min read</span>
                    <button>Bookmark</button>
                </div>
            </div>
            <h3 className=' text-4xl font-semibold mb-7'>{title}</h3>
            <p>{
                hashtags.map((hash, idx) => <span key={idx}><a href=''>#{hash} </a></span>)
            }</p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;