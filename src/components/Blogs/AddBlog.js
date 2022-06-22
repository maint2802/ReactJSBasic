
import { useState } from 'react'
import './AddBlog.scss'
import axios from 'axios'

const AddBlog = (props) => {



    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = async () => {
        if (!title) {
            alert('Please enter a title')
            return;
        }
        if (!content) {
            alert('Please enter a title')
            return;
        }

        let data = {
            title: title,
            body: content,
            userId: 1,
        }
        const res = await axios.post('http://jsonplaceholder.typicode.com/posts', data)
        if (res?.data) {
            let newBlog = res.data
            console.log(newBlog)
            props.handleAddblog(newBlog)
        }

    }


    return (
        <div className="add-blog-container">
            <div className="add-blog-item">
                <label>Title: </label>
                <input
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                    type="text" />
            </div>
            <div className="add-blog-item">
                <label>Content: </label>
                <input
                    value={content}
                    onChange={(e) => { setContent(e.target.value) }}
                    type="text" />
            </div>
            <button
                onClick={handleSubmit}
            >Submit</button>
        </div>
    )
}

export default AddBlog