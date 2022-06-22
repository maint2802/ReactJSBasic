import axios from 'axios';
import { useState, useEffect } from 'react'
import './YoutubeSearch.scss'
import moment from 'moment'
const YoutubeSearch = () => {

    const [videos, setVideos] = useState([])
    const [query, setQuery] = useState('')

    const handleSearchYT = async () => {
        const res = await axios({
            "method": "GET",
            "url": 'https://www.googleapis.com/youtube/v3/search',
            "params": {
                'part': 'snippet',
                'maxResults': '20',
                'key': 'AIzaSyDiVDwHwe08xnJoi3B2DrW9YPReR0wSol8',
                'type': "video",
                'q': query
            }
        })
        if (res?.data?.items && res?.data?.items.length > 0) {
            let raw = res.data.items
            raw = raw.map(item => {
                item.id = item.id.videoId
                item.title = item.snippet.title
                item.date = item.snippet.publishedAt
                item.channel = item.snippet.channelTitle
                item.des = item.snippet.description
                return item
            })
            console.log(raw)
            setVideos(raw)
        }
    }
    console.log(videos)
    return (
        <div className="ys-container">
            <div className="ys-search">
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    type="text"
                    placeholder="Search" />
                <button
                    type="button"
                    onClick={handleSearchYT}
                >Search</button>
            </div>
            <div className="ys-result-container">
                {videos && videos.length > 0 &&
                    videos.map(video =>
                    (<div className="ys-result-item">
                        <div className="ys-left">
                            <iframe
                                src={`https://www.youtube.com/embed/${video.id}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="ys-right">
                            <div className="ys-title">{video.title}</div>
                            <div className="ys-date">Release at: {moment(video.date).format('DD/MM/YYY HH:MM A')}</div>
                            <div className="ys-channel">Channel: {video.channel}</div>
                            <div className="ys-des">{video.des}</div>
                        </div>
                    </div>)
                    )}
            </div>
        </div>
    )
}

export default YoutubeSearch



// {
//     "kind": "youtube#searchListResponse",
//     "etag": "ZxN5GuRarnPsJP4NOoEHu02mkGM",
//     "nextPageToken": "CAUQAA",
//     "regionCode": "VN",
//     "pageInfo": {
//       "totalResults": 1000000,
//       "resultsPerPage": 5
//     },
//     "items": [
//       {
//         "kind": "youtube#searchResult",
//         "etag": "p29pB81k5dJAo87-BP-jOkj8PrE",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "CuklIb9d3fI"
//         },
//         "snippet": {
//           "publishedAt": "2021-07-09T03:59:12Z",
//           "channelId": "UC3IZKseVpdzPSBaWxBxundA",
//           "title": "BTS (방탄소년단) &#39;Permission to Dance&#39; Official MV",
//           "description": "BTS (방탄소년단) 'Permission to Dance' Official MV Credits: Director: Yong Seok Choi (Lumpens) & Woogie Kim (MOTHER) ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/CuklIb9d3fI/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/CuklIb9d3fI/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/CuklIb9d3fI/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "HYBE LABELS",
//           "liveBroadcastContent": "none",
//           "publishTime": "2021-07-09T03:59:12Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "d7NVIxlZO2WoPe1d5cVJSwymsXE",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "6PmRRLrLDwQ"
//         },
//         "snippet": {
//           "publishedAt": "2022-02-11T05:57:06Z",
//           "channelId": "UCK8S6QMrTk1G8TYQwIyDo-w",
//           "title": "B T S PLAYLIST 2022 UPDATED | 방탄소년단 노래 모음",
//           "description": "",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/6PmRRLrLDwQ/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/6PmRRLrLDwQ/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/6PmRRLrLDwQ/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "LQ KPOP",
//           "liveBroadcastContent": "none",
//           "publishTime": "2022-02-11T05:57:06Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "TlJHOZ9-fecwqRkCWNjj_OmP9WU",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "gdZLi9oWNZg"
//         },
//         "snippet": {
//           "publishedAt": "2020-08-21T03:58:10Z",
//           "channelId": "UC3IZKseVpdzPSBaWxBxundA",
//           "title": "BTS (방탄소년단) &#39;Dynamite&#39; Official MV",
//           "description": "BTS (방탄소년단) 'Dynamite' Official MV Credits: Director: Yong Seok Choi (Lumpens) Assistant Director: Jihye Yoon (Lumpens) ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/gdZLi9oWNZg/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/gdZLi9oWNZg/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/gdZLi9oWNZg/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "HYBE LABELS",
//           "liveBroadcastContent": "none",
//           "publishTime": "2020-08-21T03:58:10Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "GhnU6enJlkyrVg-eS60DMQNTnJs",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "7QrqmDK0ZRA"
//         },
//         "snippet": {
//           "publishedAt": "2022-04-19T12:00:04Z",
//           "channelId": "UCsuwiFMAjeBxe74IqaQ6bkQ",
//           "title": "BTS - So What Lyric &amp; Live | Reaction | 방탄소년단",
//           "description": "You guys asked for our P.O. Box and here it is: GetSideways P.O. Box 1474 Powell, OH 43065 Please subscribe to our other ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/7QrqmDK0ZRA/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/7QrqmDK0ZRA/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/7QrqmDK0ZRA/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "GetSideways Reacts",
//           "liveBroadcastContent": "none",
//           "publishTime": "2022-04-19T12:00:04Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "Wx9xhw9uswjdnZfmIrq4YsdIRzM",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "S50SYJbyXY4"
//         },
//         "snippet": {
//           "publishedAt": "2021-12-23T15:00:03Z",
//           "channelId": "UCLkAepWjdylmXSltofFvsYQ",
//           "title": "[CHOREOGRAPHY] BTS (방탄소년단) ‘Butter (Holiday Remix)’ Dance Practice",
//           "description": "BTS #방탄소년단 #BTS_Butter Connect with BTS: https://ibighit.com/bts http://twitter.com/BTS_bighit http://twitter.com/BTS_twt ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/S50SYJbyXY4/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/S50SYJbyXY4/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/S50SYJbyXY4/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "BANGTANTV",
//           "liveBroadcastContent": "none",
//           "publishTime": "2021-12-23T15:00:03Z"
//         }
//       }
//     ]
//   }
