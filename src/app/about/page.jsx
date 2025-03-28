'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const Aboutpage = () => {
    const route = useRouter() //conditionally kono kicu navigate korte caile amra etake use korte pari evabe 

    const isuser = false;
    const handelNavigate = () => {
        if (isuser) {
            route.push('/about/address')
        } else {
            route.push('/')
        }
    }
    return (
        <section>
            <section className="m-4 md:m-8  ">
                <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                    <h2 className="text-5xl font-bold">Built to empower every team</h2>
                    <p >Libero minima optio qui</p>
                </div>
                <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-600">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="my-3 text-3xl font-semibold">Product</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Similique quas ea veniam</p>
                            <p>Tempore quasi porro</p>
                            <p>Blanditiis aut mollitia ex</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-600">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="my-3 text-3xl font-semibold">Product</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Similique quas ea veniam</p>
                            <p>Tempore quasi porro</p>
                            <p>Blanditiis aut mollitia ex</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-600">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="my-3 text-3xl font-semibold">Product</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Similique quas ea veniam</p>
                            <p>Tempore quasi porro</p>
                            <p>Blanditiis aut mollitia ex</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-600">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="my-3 text-3xl font-semibold">Product</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Similique quas ea veniam</p>
                            <p>Tempore quasi porro</p>
                            <p>Blanditiis aut mollitia ex</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-600">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="my-3 text-3xl font-semibold">Product</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Similique quas ea veniam</p>
                            <p>Tempore quasi porro</p>
                            <p>Blanditiis aut mollitia ex</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-600">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="my-3 text-3xl font-semibold">Product</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Similique quas ea veniam</p>
                            <p>Tempore quasi porro</p>
                            <p>Blanditiis aut mollitia ex</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Link href='/about/address'>Address page</Link> //basicallty direct navigate korte caile eta use korbo  */}

            <div className='flex items-center justify-center'>
                <button className=' px-4 py-3 border rounded-xl bg-purple-600 hover:bg-purple-700' type='button' onClick={handelNavigate}>address page</button>
            </div>
            <section className="m-4 md:m-8 py-12">
                <div className="container p-4 mx-auto my-6 space-y-1 text-center">
                    <span className="text-xs font-semibold tracking-wider uppercase dark:text-violet-600">shortcut to your dream ui</span>
                    <h2 className="pb-3 text-3xl font-bold md:text-4xl">Create a stylish website in minutes</h2>
                    <p>Get a jumpstart to creating your new webpage! With our fully responsive and carefully styled components you can get the structure of your website done with just a couple of clicks.</p>
                </div>
                <div className="container grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-4">
                    <div className="flex flex-col px-8 py-6">
                        <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font ">Components</h2>
                        <p className="flex-1 mb-4 text-base leading-relaxed ">Individual components that can be re-used multiple times in your designs.</p>
                        <a className="inline-flex items-center space-x-2 text-sm dark:text-violet-600" href="/components">
                            <span>Learn More</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="flex flex-col px-8 py-6 lg:border-none xl:border-solid">
                        <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font ">Sections</h2>
                        <p className="flex-1 mb-4 text-base leading-relaxed ">Pre-made building blocks that you can stack on top of each other like Legos to build a website of your own in minutes.</p>
                        <a className="inline-flex items-center space-x-2 text-sm dark:text-violet-600" href="/sections">
                            <span>Learn More</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="flex flex-col px-8 py-6">
                        <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font ">Templates</h2>
                        <p className="flex-1 mb-4 text-base leading-relaxed ">Full pages that showcase pieces of what you can achieve with the building blocks that are in this UI kit.</p>
                        <a className="inline-flex items-center space-x-2 text-sm dark:text-violet-600" href="/templates">
                            <span>Learn More</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="flex flex-col px-8 py-6">
                        <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font ">Customization</h2>
                        <p className="flex-1 mb-4 text-base leading-relaxed ">Choose your primary color from any of the Tailwind CSS 2.0 colors. You can also view all of the components in our light and dark themes.</p>
                        <a className="inline-flex items-center space-x-2 text-sm dark:text-violet-600" href="/docs">
                            <span>Learn More</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Aboutpage;