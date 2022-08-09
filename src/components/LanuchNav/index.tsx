/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';

interface Props {
    onChange: Function
}

const LaunchNav: React.FC<Props> = (props) => {

    const [current, setCurrent] = useState('past')
    const activeClass = `
    px-6
    py-2.5
    bg-blue-800
    text-white
    font-medium
    text-xs
    leading-tight
    uppercase
    hover:bg-blue-700
    focus:bg-blue-700 focus:outline-none focus:ring-0
    active:bg-blue-800
    transition
    duration-150
    ease-in-out`
    const linkClass = `
    px-6
    py-2.5
    bg-blue-600
    text-white
    font-medium
    text-xs
    leading-tight
    uppercase
    hover:bg-blue-700
    focus:bg-blue-700 focus:outline-none focus:ring-0
    active:bg-blue-800
    transition
    duration-150
    ease-in-out
    `

    const onChangeType = (type: string) => {
        setCurrent(type)
        if (props.onChange) {
            props.onChange(type)
        }
    }

    return (
        <div className="flex items-center justify-center mt-6">
            <div className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                <a
                href="#"
                aria-current="page"
                className={`${current === 'past' ? activeClass : linkClass} rounded-l`}
                onClick={() => onChangeType('past')}
                >
                Past Launches
            </a>
            <a
                href="#"
                className={`${current === 'next' ? activeClass : linkClass} rounded-r`}
                onClick={() => onChangeType('next')}
                >
                Next Launches
            </a>
        </div>
    </div>);
};

export default LaunchNav;
