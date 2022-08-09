/* eslint-disable jsx-a11y/anchor-is-valid */
import { useCallback, useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import dayjs from 'dayjs'
import { QUERY_LAUNCHES_NEXT } from './query'
import { LaunchesNextType } from '../../type';
import './style.css'

const PastLaunches = () => {
    const { data } = useQuery(QUERY_LAUNCHES_NEXT) as LaunchesNextType;
    console.log(data)

    const getVideoLink = useCallback((url: string) => {
        const id = url.slice(url.lastIndexOf('/') + 1)
        return `https://www.youtube.com/embed/${id}`
    }, [data])
    return (
        <div className="h-full">
            <div className="flex justify-center">
                <ul className="bg-white rounded-lg w-4/5 text-gray-900">
                    <li className="px-6 py-2 border-b border-gray-200 w-full flex justify-between">
                        <div className='font-bold'>ID:</div>
                        <div className='text-right ml-20'>{data.launchNext.id}</div>
                    </li>
                    <li className="px-6 py-2 border-b border-gray-200 w-full flex justify-between">
                        <div className='font-bold'>Details:</div>
                        <div className='text-right ml-20'>{data.launchNext.details}</div>
                    </li>
                    <li className="px-6 py-2 border-b border-gray-200 w-full flex justify-between">
                        <div className='font-bold'>Last Date Local:</div>
                        <div className='text-right ml-20'>{dayjs(data.launchNext.launch_date_local).format('YYYY-MM-DD HH:mm:ss')}</div>
                    </li>
                    <li className="px-6 py-2 border-b border-gray-200 w-full flex justify-between">
                        <div className='font-bold'>Launch Site:</div>
                        <div className='text-right ml-20'>{data.launchNext.launch_site.site_name_long}</div>
                    </li>
                    <li className="px-6 py-2 border-b border-gray-200 w-full flex justify-between">
                        <div className='font-bold'>Launch Success:</div>
                        <div className='text-right ml-20'>{data.launchNext.launch_success !== null ? (data.launchNext.launch_success ? 'Yes' : 'No') : ''}</div>
                    </li>
                    <li className="px-6 py-2 border-b border-gray-200 w-full flex justify-between">
                        <div className='font-bold'>Article:</div>
                        <div className='text-right ml-20'>{data.launchNext.links?.article_link ? <a href={data.launchNext.links?.article_link} target="_blank" className='underline' rel="noreferrer">OPEN LINK</a> : ''}</div>
                    </li>
                    <li className="px-6 py-2 border-b border-gray-200 w-full flex justify-between">
                        <div className='font-bold'>Video:</div>
                        <div className='text-right ml-20'>{data.launchNext?.links?.video_link ? <iframe
                                                    className="embed-responsive-item  "
                                                    src={getVideoLink(data.launchNext.links.video_link)}
                                                    allowFullScreen={false}
                                                    title={data.launchNext.links.video_link}
                                                ></iframe> : ''}</div>
                    </li>
                    <li className="px-6 py-2 border-b border-gray-200 w-full flex justify-between">
                        <div className='font-bold'>Rocket Type:</div>
                        <div className='text-right ml-20'>{data.launchNext.rocket.rocket_type}</div>
                    </li>
                    <li className="px-6 py-2 border-b border-gray-200 w-full flex justify-between">
                        <div className='font-bold'>Rocket Name:</div>
                        <div className='text-right ml-20'>{data.launchNext.rocket.rocket_name}</div>
                    </li>
                    <li className="px-6 py-2 border-b border-gray-200 w-full flex justify-between">
                        <div className='font-bold'>Mission Name:</div>
                        <div className='text-right ml-20'>{data.launchNext.mission_name}</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PastLaunches
