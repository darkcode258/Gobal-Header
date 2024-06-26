import React from 'react'
import logo from '../Asseat/images/logo.png'
import '../Asseat/Css/Footer.css'
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div>
                <hr style={{height:'1px',borderWidth:'0',color:'Black',backgroundColor:'gray', margin:'auto', width:"100%"}}></hr>

            <footer class="text-black body-font font1  ">
                <div class="container px-5 pt-24 pb-5 mx-auto">
                    <div class="flex flex-wrap md:text-left text-center order-first" >
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4 "id="fp1">
                            <h2 class="title-font  text-gray-900 tracking-widest text-sm mb-3 font-bold">CATEGORIES</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <Link class="text-black hover:text-amber-500 font-medium">First Link</Link>
                                </li>
                                <li>
                                    <Link class="text-black hover:text-amber-500 font-medium">Second Link</Link>
                                </li>
                                <li>
                                    <Link class="text-black hover:text-amber-500 font-medium">Third Link</Link>
                                </li>
                                <li>
                                    <Link class="text-black hover:text-amber-500 font-medium">Fourth Link</Link>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/4 w-full px-4" id="fp2">
                            <h2 class="title-font  text-gray-900 tracking-widest text-sm mb-3 font-bold">CATEGORIES</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <Link class="text-black hover:text-amber-500 font-medium">First Link</Link>
                                </li>
                                <li>
                                    <Link class="text-black hover:text-amber-500 font-medium">Second Link</Link>
                                </li>
                                <li>
                                    <Link class="text-black hover:text-amber-500 font-medium">Third Link</Link>
                                </li>
                                <li>
                                    <Link class="text-black hover:text-amber-500 font-medium">Fourth Link</Link>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4" id="fp3">
                            <h2 class="title-font  text-gray-900 tracking-widest text-sm mb-3 font-bold" >CATEGORIES</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <Link class="text-black hover:text-amber-500 font-medium">First Link</Link>
                                </li>
                                <li>
                                    <Link class="text-black hover:text-amber-500 font-medium">Second Link</Link>
                                </li>
                                <li>
                                    <Link class="text-black hover:text-amber-500 font-medium">Third Link</Link>
                                </li>
                                <li>
                                    <Link class="text-black hover:text-amber-500 font-medium">Fourth Link</Link>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font  text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
                            <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                                <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                    {/* <label for="footer-field" class="leading-7 text-sm text-black">Placeholder</label> */}
                                    <input type="text" id="footer-field" name="footer-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-yellow-200 focus:border-yellow-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                </div>
                                <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-yellow-500 border-0 py-2 pt-2.5 
                                px-6 focus:outline-none hover:bg-yellow-600 rounded">Submit</button>
                            </div>
                            <p class="text-gray-700 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
                                <br class="lg:block hidden  "/>waistcoat green juice
                            </p>
                        </div>
                    </div>
                </div>
                <hr style={{height:'0.5px',borderWidth:'0',color:'gray',backgroundColor:'Black',width:'90%' , margin:'auto'}}></hr>
                <div class=" text-white ">
                    <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                        <Link class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" to='/'>
                          
                            <img src={logo} alt="" class="w-10 h-10 text-white p-2 bg-gray-900 rounded-full" srcset="" />
                            <span class="ml-3 text-xl font-bold">Replay Global</span>
                        </Link>
                        <p class="text-sm text-gray-500 hover:text-amber-500  sm:ml-6 sm:mt-0 mt-4 font-normal">© 2024 Replay Global —
                            <Link href="https://twitter.com/darkcode" rel="noopener noreferrer" class="text-gray-700 ml-1 hover:text-amber-500" target="_blank">@darkcode</Link>
                        </p>
                        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <Link class="text-gray-500 hover:text-amber-500 ">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </Link>
                            <Link class="ml-3 text-gray-500 hover:text-amber-500 ">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </Link>
                            <Link class="ml-3 text-gray-500 hover:text-amber-500 ">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </Link>
                            <Link class="ml-3 text-gray-500 hover:text-amber-500 ">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </Link>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
