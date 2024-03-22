import { Link } from "react-router-dom";
import './Post.css'

const Post = ({post}) => {
    const {id, title, body} = post;
    
    return (
        <div className="postStyle">
            <h4>Post of Id: {id}</h4>
            <h3>Title: {title}</h3>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <Link to={`/post/${id}`}>
            <button>Show Detail</button>
            </Link>
            
        </div>
    );
};

export default Post;