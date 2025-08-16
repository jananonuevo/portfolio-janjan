function Hero() {
    
    return (
        <>
        <div className='w-full min-h-screen flex justify-center items-center md:mt-20'>
            <div className="grid lg:grid-cols-2 gap-3">
                <div className="mt-10 lg:mt-0 mb-10 ml-20">
                    <img className="rounded-full w-96 h-96 xl:w-120 xl:h-120" src="/assets/img/janjan.png" />
                </div>
                
                <div className="flex flex-col items-center justify-center text-center">
                    <p className="text-3xl lg:text-2xl xl:text-5xl text-[#292929]">Hallo, hallo!</p>
                    <h1 className="lg:text-lg xl:text-3xl font-bold mt-2 xl:mt-5 text-[#292929]">I'm Jan Añonuevo. Software Developer.</h1>
                    <button type="button" className="text-gray hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm xl:text-md px-5 py-2 xl:px-10 xl:py-5 text-center me-2 mb-2 dark:border-gray-600 dark:text-black dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 mt-4 xl:mt-8 cursor-pointer">Download CV</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero