'use client'

import { useState } from 'react'
import { Tab } from '@headlessui/react'
import ContactMe from '../Components/ContactMe'
import Skills from '../Components/Skills'
import WorkHistory from '../Components/WorkHistory'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Tabs({ isDarkMode }: { isDarkMode: boolean }) {
    let [categories] = useState({
        'About me': [
            {
                id: 1,
                title: (<>
                    Highly motivated and accomplished self-taught Frontend Engineer with over 2 years of commercial experience in leveraging React, Redux, Typescript, JavaScript, and REST APIs to create exceptional user interfaces.
                    <br />
                    Passionate about delivering seamless and visually captivating web applications, I am seeking a challenging role to contribute my expertise and continue to excel as a front-end engineer.
                    <br />
                    With a strong foundation in self-directed learning and a proven track record of success, I am dedicated to pushing the boundaries of front-end development and crafting immersive digital experiences.
                </>),
            }

        ],
        Work: [
            {
                id: 1,
                title: (<WorkHistory />),
            },
        ],
        Skills: [
            {
                id: 1,
                title: (<Skills />),
            },
        ],
        Projects: [
            {
                id: 1,
                title: (<div></div>)
            }
        ],
        'Contact me': [
            {
                id: 1,
                title: (<ContactMe isDarkMode={isDarkMode} />),
            },
        ],
    })

    return (
        <div className='w-full max-w-md px-2 py-16 sm:px-0 ml-4 drop-shadow-lg'>
            <Tab.Group>
                <Tab.List className={`flex space-x-1 rounded-xl bg-blue-900/20 p-1 ${isDarkMode ? 'dark:bg-gray-400 dark:border-gray-700 dark:hover:bg-gray-300' : ''}`} >
                    {Object.keys(categories).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ${isDarkMode ? 'dark:text-white' : ''}`,
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                    isDarkMode ? 'dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ' : '',
                                    selected
                                        ? 'bg-white shadow'
                                        : `text-blue-100 hover:bg-white/[0.12] hover:text-white ${isDarkMode ? 'dark:text-slate-300' : ''}`
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className='mt-2'>
                    {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                'rounded-xl bg-white p-3',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                isDarkMode ? 'dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700' : ''
                            )}
                        >
                            <ul>
                                {posts.map((post) => (
                                    <li
                                        key={post.id}
                                        className='relative rounded-md p-3 '
                                    >
                                        <h3 className={`text-sm font-medium leading-5 ${isDarkMode ? 'dark:text-white' : ''}`}>
                                            {post.title}
                                        </h3>

                                    </li>
                                ))}
                            </ul>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}
