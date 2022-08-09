/* eslint-disable jsx-a11y/anchor-is-valid */
import { useCallback, useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import dayjs from 'dayjs'
import { QUERY_LAUNCHES_PAST } from './query'
import { LaunchesPastType } from '../../type';
import './style.css'

const PAGE_SIZE = 10;
const TOTAL_PAGE = Math.ceil(109 / PAGE_SIZE)
const PastLaunches = () => {
    const [current, setCurrent] = useState(0)
    const { data } = useQuery(QUERY_LAUNCHES_PAST, { variables: { offset: current * PAGE_SIZE } }) as LaunchesPastType;
    console.log(data)

    const getVideoLink = useCallback((url: string) => {
        const id = url.slice(url.lastIndexOf('/') + 1)
        return `https://www.youtube.com/embed/${id}`
    }, [data])
    return (
        <div className="h-full">
            <div className="flex flex-col">
                <div className="overflow-x-auto PastLaunches__table-container">
                    <div className="py-4 inline-block min-w-full ">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left PastLaunches__table">
                        <thead className="border-b bg-gray-800 ">
                            <tr>
                                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                    ID
                                </th>
                                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                    Details
                                </th>
                                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                    Last Date Local
                                </th>
                                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                    Launch Site
                                </th>
                                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                    Launch Success
                                </th>
                                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                    Article
                                </th>
                                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                    Video
                                </th>
                                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                    Rocket
                                </th>
                                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                    Mission Name
                                </th>
                            </tr>
                        </thead>
                        <tbody className='PastLaunches__table-tbody'>
                            {data?.launchesPast?.map(item => {
                                return (
                                    <tr key={item.id} className="bg-white border-b">
                                        <>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                                                <div className='w-60'>{item.details}</div>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {dayjs(item.launch_date_local).format('YYYY-MM-DD HH:mm:ss')}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                                                <div className='w-60'>{item.launch_site.site_name_long}</div>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {item.launch_success ? 'Yes' : 'No'}
                                            </td>
                                            <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                                                {item.links.article_link ? <a href={item.links.article_link} target="_blank" className='underline' rel="noreferrer">OPEN LINK</a> : 'None'}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {item?.links?.video_link ? <iframe
                                                    className="embed-responsive-item  "
                                                    src={getVideoLink(item.links.video_link)}
                                                    allowFullScreen={false}
                                                    title={item.links.video_link}
                                                ></iframe> : 'None'}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <div>
                                                    <span>Type: </span><span>{item.rocket.rocket_type}</span>
                                                </div>
                                                <div>
                                                    <span>Name: </span><span>{item.rocket.rocket_name}</span>
                                                </div>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {item.mission_name}
                                            </td>
                                        </>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center fixed bottom-0 right-0 bg-gray-200 w-screen py-4">
                <nav aria-label="Page navigation example">
                    <ul className="flex list-style-none">
                        <li className="page-item disabled"><a onClick={() => setCurrent(current - 1)}
                            className={
                                current === 0 ? 'page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 pointer-events-none focus:shadow-none' :
                                'page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'
                            }
                            href="#" tabIndex={-1} aria-disabled="true">Previous</a></li>
                        {Array(TOTAL_PAGE).fill('').map((item, index) => {
                            return (
                                <li key={index+'page'} className={
                                    current === index ? 'page-item active' : 'page-item'
                                    }><a
                                        onClick={() => setCurrent(index)}
                                        className={
                                            current === index ? 'page-link relative block py-1.5 px-3 rounded border-0 bg-blue-600 outline-none transition-all duration-300 rounded text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md' : 
                                            'page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'
                                        }
                                        href="#">{index + 1}</a></li>
                                )
                            })
                        }
                        <li className="page-item"><a onClick={() => setCurrent(current + 1)}
                            className={
                                current >= TOTAL_PAGE - 1 ? 'page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 pointer-events-none focus:shadow-none' :
                                'page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'
                            }
                            href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default PastLaunches
