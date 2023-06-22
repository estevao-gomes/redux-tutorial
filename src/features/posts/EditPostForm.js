import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { postUpdated } from './postsSlice'

export function EditPostForm({match}){
    const { postId } = match.params

    const post = useSelector(state => state.posts.find(post=>post.id === postId))

    const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)

    const dispatch = useDispatch()
    const history = useHistory()

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    function onSavePostClicked(){
        if(title && content){
            dispatch(postUpdated({ id: postId, title, content }))
            history.push(`/posts/${postId}`)
        }
    }

    return(
        <section>
            <form>
                <label htmlFor='postTitle'>Post Title:</label>
                <input 
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    placeholder="What's on your mind?"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor='postContent'>Post content:</label>
                <textarea 
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
            </form>
            <button type="button" onClick={onSavePostClicked}>Save post</button>
        </section>
    )
}