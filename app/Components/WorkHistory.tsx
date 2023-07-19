import { Disclosure } from "@headlessui/react";

export default function WorkHistory() {
    return (
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
        </div>
    )
}