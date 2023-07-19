export default function Skills() {
    return (
        <div className='grid grid-cols-1 divide-y-4'>
            <div className='pb-2 flex justify-center'>
                <div className='pb-2'>
                    <img className='p-2 w-12 h-12' src='images/React.png' alt='React' />
                    <p className='text-center'>React</p>
                </div>
            </div>
            <div className='pt-2 pb-2 flex flex-row justify-center'>
                <div className='pb-2 flex flex-wrap justify-center'>
                    <div className='p-2 items-center'>
                        <img className='h-12 w-24' src='images/RestAPI.svg' alt='Restful API&rsquo;s' />
                        <p className='text-center'>Rest APi</p>
                    </div>
                    <div className='p-2'>
                        <img className='w-12 h-12' src='images/GraphQL.png' alt='GraphQL' />
                        <p className='text-center'>GraphQL</p>
                    </div>
                </div>
            </div>
            <div className='pt-2 flex justify-center'>
                <div className='flex flex-wrap justify-center'>
                    <div className='p-2'>
                        <img className='w-12 h-12' src='images/JS.png' alt='JavaScript' />
                        <p className='text-center'>JS</p>
                    </div>
                    <div className='p-2'>
                        <img className='w-12 h-12' src='images/HTML5_logo_and_wordmark.svg' alt='HTML5' />
                        <p className='text-center'>HTML5</p>
                    </div>
                    <div className='p-2'>
                        <img className='w-12 h-12' src='images/CSS3_logo_and_wordmark.svg' alt='CSS3' />
                        <p className='text-center'>CSS3</p>
                    </div>
                </div>
            </div>
        </div>
    )
}