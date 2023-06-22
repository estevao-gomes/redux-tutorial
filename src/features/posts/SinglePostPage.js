import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { PostAuthor } from './PostAuthor'

export function SinglePostPage({match}){
    const { postId } = match.params

    const post = useSelector(state =>
        state.posts.find(post => post.id === postId)
        )
    
    if(!post){
        return(
            <section>
                <h2>Post not found!</h2>            
            </section>
        )
    }
    return(
        <section>
            <article className='post'>
                <h2>{post.title}</h2>
                <h3>{PostAuthor({userId: post.id})}</h3>
                <p className='post-content'>{post.content}</p>
                <Link to={`/editPost/${postId}`} className="button">Edit post</Link>
            </article>
        </section>
    )
}