'use client'

import { useState } from 'react'
import { Disclosure, Tab } from '@headlessui/react'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Tabs({ isDarkMode }: { isDarkMode: boolean }) {
    let [categories] = useState({
        'About me': [
            {
                id: 1,
                title: ' Highly motivated and accomplished self-taught Frontend Engineer with over 2 year sof commercial experience in leveraging React, Redux, Typescript, JavaScript, andREST APIs to create exceptional user interfaces. Passionate about delivering seamless and visually captivating web applications, I am seeking a challenging role to contribute my expertise and continue to excel as a front-end engineer. With a strong foundation in self-directed learning and a proven track record of success, Iam dedicated to pushing the boundaries of front-end development and crafting immersive digital experiences.',
            }

        ],
        Work: [
            {
                id: 1,
                title: (
                    <div className='mb-2'>
                        <Disclosure>
                            {() => (
                                <>
                                    <Disclosure.Button className="rounded-lg bg-blue-400 px-4 py-2 text-left text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring focus-visible:ring-blue-400 focus-visible:ring-opacity-75 w-[100%]">
                                        <div className='flex justify-between'>
                                            <p>Neho</p>
                                            <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-white">
                                                <li>{'2022-2023'}</li>

                                            </ul>
                                        </div>
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-gray-500">
                                        <ul className='list-disc pl-2 pt-2'>
                                            <li> Designed and implemented responsive website interfaces using React, ensuring optimal user experience across multiple devices.</li>
                                            <li> Developed and maintained frontend components and features using React,Redux, and TypeScript.</li>
                                            <li> Integrated REST APIs to facilitate seamless communication between the frontend and backend systems.  </li>
                                            <li> Conducted thorough testing using Jest and Enzyme, and debugging of frontend code to ensure code quality and identify and fix bugs.</li>
                                            <li> Collaborated with cross-functional teams to deliver cohesive and successful projects.</li>
                                            <li> Worked in an Agile environment,participating in daily stand-ups, sprint planning,and code reviews.</li>
                                        </ul>
                                    </Disclosure.Panel>

                                </>)}
                        </Disclosure >
                        <Disclosure as='div' className='mt-2'>
                            {() => (
                                <>
                                    <Disclosure.Button className="rounded-lg bg-blue-400 px-4 py-2 text-left text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring focus-visible:ring-blue-400 focus-visible:ring-opacity-75 w-[100%]">
                                    <div className='flex justify-between'>
                                            <p>Aquasoft</p>
                                            <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-white">
                                                <li>{'2021-2022'}</li>

                                            </ul>
                                        </div>
                                        
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-gray-500">
                                        <ul className='list-disc pl-2 pt-2'>
                                            <li> Conducted troubleshooting on websites across various browsers to ensure optimal quality and compatibility.</li>
                                            <li> Utilized different testing tools and frameworks to perform comprehensive testing and ensure the smooth functionality of web applications.</li>
                                            <li> ICollaborated with cross-functional teams, including designers, backend developers, and testers, to successfully complete projects and meet project milestones.</li>
                                            <li> Contributed to backend development tasks and collaborated on API integrations to ensure seamless data flow between the frontend and backend systems.</li>
                                            <li> Utilized content management systems to efficiently manage and update website content.</li>
                                            <li> Actively engaged in continuous learning, keeping up-to-date with the latest advancements in frontend development to enhance technical skills and contribute to the team&rsquo;s success.</li>
                                        </ul>
                                    </Disclosure.Panel>

                                </>)}
                        </Disclosure >
                    </div>),
            },
        ],
        Skills: [
            {
                id: 1,
                title: 'Ask Me Anything: 10 answers to your questions about coffee',
                date: '2d ago',
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: '',
                date: '4d ago',
                commentCount: 1,
                shareCount: 2,
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
