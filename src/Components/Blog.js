import React from 'react'
const Blog = (props) => {
    
    return ( 
            <div className="blog-content p-4" style={props.color}>
                <img 
                        src={props.url}
                        alt="blogs-dogs" 
                        className="blog-image"
                    />
                <aside className="blog-aside">
                    <h1>{props.title}</h1>
                    <p>{props.para}</p>
                </aside>
            </div>
     );
}
 
export default Blog;