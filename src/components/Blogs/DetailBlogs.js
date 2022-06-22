import { useParams, useHistory } from 'react-router-dom'
import useFetch from '../../customize/useFetch'
function DetailBlogs() {

    const { id } = useParams();
    const history = useHistory()
    // const [blog, setBlog] = useState({})
    const url = `http://jsonplaceholder.typicode.com/posts/${id}`
    const { data: blogData, isLoading, isError } = useFetch(url, false)
    const handleClickBack = () => {
        history.push('/blogs')
    }

    const isEmpty = Object.keys(blogData).length === 0
    return (
        <>
            <div><span onClick={handleClickBack} className="blog-back">&lt;--Back</span></div>
            {blogData &&
                (<div className="blog-detail">
                    {blogData && !isEmpty &&
                        (
                            <>
                                <div className="blog-title">
                                    ID blog: {id} --- {isLoading ? 'Loading Data...' : blogData.title}
                                </div>
                                <div className="blog-body">{blogData.body}</div>
                            </>
                        )}
                </div>)
            }
        </>
    )
}

export default DetailBlogs