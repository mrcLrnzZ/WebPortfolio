import gillian from './assets/gillian.jpg';

function Header({ darkMode, setDarkMode }) {
    return (
        <div className="flex text-black dark:text-white gap-7 mt-10 p-4 rounded-xl transition-colors duration-300">
          
                <img src={gillian} alt="Gillian" className="w-48 h-38 object-cover"/>

            <div className="w-full">

                <div className="flex justify-between items-center gap- ">
                    <div className=''>
                        <h1 className='text-3xl font-bold flex items-center gap-2'>
                            Gillian Marc M. Lorenzo
                            <svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" aria-label="Verified user">
                                <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" fill="#1d9bf0"></path>
                            </svg>
                        </h1>
                    </div>
                   
                    <div className='flex justify-end'>
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`w-14 h-8 rounded-full flex items-center p-1 transition-all duration-500 shadow-inner ${darkMode ? 'bg-slate-800' : 'bg-blue-100'}`}
                            aria-label="Toggle theme"
                        >
                            <div className={`w-6 h-6 rounded-full shadow-lg flex items-center justify-center transition-all duration-500 transform ${darkMode ? 'translate-x-6 bg-slate-900' : 'translate-x-0 bg-white'}`}>
                                {darkMode ? (
                                    <svg className="w-4 h-4 text-yellow-300 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                    </svg>
                                ) : (
                                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.485a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 011.414-1.414l.707.707zM3 9a1 1 0 000 2h1a1 1 0 100-2H3z" />
                                    </svg>
                                )}
                            </div>
                        </button>
                    </div> 
                </div>

                <div className='mt-2 rounded-lg flex items-center gap-2 w-fit'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <p className="text-sm font-medium opacity-80">Metro Manila, Philippines</p>
                </div>

                <div className='mt-2'>
                    <p className="text-lg font-semibold opacity-90 dark:text-gray-200">Bachelor of Science in Computer Science</p>
                </div>
            
                <div className='flex flex-row gap-2 mt-1'>
                    <div className=''>
                        <button className="text-white text-sm cursor-pointer font-medium rounded-sm bg-gray-900 hover:bg-blue-900 text-black dark:bg-blue-900 dark:hover:bg-blue-600 px-2 py-2 flex items-center gap-2 shadow-md transition-all active:scale-95">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                            Send me an email
                        </button>
                </div>

                    <div>
                        <button className="text-white text-sm cursor-pointer font-medium rounded-sm bg-gray-900 hover:bg-black dark:bg-blue-900 dark:hover:bg-blue-600 px-3 py-2 flex items-center gap-2 shadow-md transition-all active:scale-95">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                            Github
                        </button>
                    </div>
                    <div>
                        <button className="text-white text-sm cursor-pointer font-medium rounded-sm bg-gray-900 hover:bg-blue-700 dark:bg-blue-900 dark:hover:bg-blue-600 px-3 py-2 flex items-center gap-2 shadow-md transition-all active:scale-95">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            Linkedin
                        </button>
                    </div>
                
                </div>
               
            </div>
        </div>
    
    )
}

export default Header