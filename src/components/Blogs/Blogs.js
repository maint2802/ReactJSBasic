import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import useFetch from '../../customize/useFetch'
import AddBlog from './AddBlog'
import './Blogs.scss'
function Blogs() {

    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const url = 'http://jsonplaceholder.typicode.com/posts'
    const { data: blogsData, isLoading, isError } = useFetch(url, false)

    useEffect(() => {
        if (blogsData && blogsData.length > 0) {
            let newDataCopy = blogsData.slice(90, 100)
            setNewData(newDataCopy)
        }
    }, [blogsData])

    const handleAddblog = (blog) => {
        let data = [...newData]
        data.unshift(blog)
        setShow(false);
        setNewData(data)
    }

    const handleDeleteBlog = (id) => {
        let dataCopy = [...newData]
        dataCopy = dataCopy.filter((item) => item.id != id)
        setNewData(dataCopy)
    }

    return (
        <>
            <>
                <Button variant="primary" className="my-4" onClick={handleShow}>
                    Add Blog
                </Button>

                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Adding new blog</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddBlog handleAddblog={handleAddblog} />
                    </Modal.Body>
                </Modal>
            </>
            {!isLoading && (
                <>
                    <div className="blog-container">
                        {newData.length > 0 &&
                            newData.map(blog =>
                            (<div className="blog-single" key={blog.id}>
                                <div className="blog-title">
                                    <span>Title: {blog.title}</span>
                                    <span onClick={() => handleDeleteBlog(blog.id)}>X</span>
                                </div>
                                <div className="blog-body">Body: {blog.body}</div>
                                <button>
                                    <Link to={`/blogs/${blog.id}`}>View Detail</Link>
                                </button>
                            </div>))}
                    </div>
                </>

            )}
            {isLoading && (
                <div>Loading...</div>
            )}
        </>

    )
}

export default Blogs

