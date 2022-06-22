import { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'

function useFetch(url, isCovid) {
    const ourRequest = axios.CancelToken.source() // <-- 1st step

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(url, {
                    cancelToken: ourRequest.token, // <-- 2nd step
                })
                let data = res?.data ? res.data : []
                if (data.length > 0 && isCovid) {
                    data.map((item) => {
                        item.Date = moment(item.Date).format('DD-MM-YYYY')
                        return item
                    })
                }

                let isArray = Array.isArray(data)
                if (isArray) data = data.reverse();
                setData(data);
                setIsLoading(false)
                setIsError(false)
            }
            catch (err) {
                if (axios.isCancel(err)) {
                    console.log('Request canceled', err.message);
                } else {
                    setIsLoading(false)
                    setIsError(true)
                }
            }
        }
        fetchData()

        return () => {
            ourRequest.cancel("Operations canceled by the user") // <-- 3rd step
        }
    }, [url]);

    return { data, isLoading, isError }

}

export default useFetch