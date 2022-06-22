import './Covid.scss'
import { useState, useEffect } from 'react'
import useFetch from '../../customize/useFetch'
import moment from 'moment'

function Covid() {
    const today = moment().startOf('day').toISOString(true)
    const priorDate = moment().startOf('day').subtract(32, 'days').toISOString(true)
    const url = `https://api.covid19api.com/country/vietnam?from=${priorDate}&to=${today}`
    const { data: CovidData, isLoading, isError } = useFetch(url)

    return (
        <>
            <h3>Covid VietNam</h3>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Active</th>
                        <th>Confirmed</th>
                        <th>Deaths</th>
                    </tr>
                </thead>
                <tbody>

                    {!isLoading && !isError &&
                        <>
                            {CovidData.length > 0 &&
                                CovidData.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.Date}</td>
                                            <td>{item.Active}</td>
                                            <td>{item.Confirmed}</td>
                                            <td>{item.Deaths}</td>
                                        </tr>
                                    )
                                })
                            }

                        </>

                    }
                    {isLoading &&
                        <>
                            <tr><td colSpan={5} style={{ textAlign: 'center' }}>is Loading...</td></tr>
                        </>
                    }
                    {isError &&
                        <>
                            <tr><td colSpan={5} style={{ textAlign: 'center' }}>something wrong...</td></tr>
                        </>
                    }
                </tbody>
            </table>
        </>
    )
}

export default Covid