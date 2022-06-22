
import { useHistory } from 'react-router-dom'

const NotFound = () => {

    const history = useHistory()

    const handleBackToHomePage = () => {
        history.push('/')
    }

    return (
        <div>
            <h3>Trang này không hiển thị</h3>
            <h5>Có thể liên kết đã hỏng hoặc trang đã bị gỡ. Hãy kiểm tra xem liên kết mà bạn đang cố mở có chính xác không.</h5>
            <button
                className="btn btn-primary"
                onClick={handleBackToHomePage}
            >Go to Homepage</button>
        </div>
    )
}

export default NotFound