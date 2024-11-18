import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ date, image, title, style, headerStyle, dateStyle }) => {
    return (
        <div>
            <div
                className={`${style}`}
                style={{ backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
            >
                <div className="absolute rounded-md inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>

                <span className={`${dateStyle}`}>{date}</span>
                <Link to="#" className={`${headerStyle}`}>{title}</Link>
            </div>
        </div>
    )
}

export default BlogCard