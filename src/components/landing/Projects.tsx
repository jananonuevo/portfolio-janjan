function Projects() {
    
    return (
        <>
        <h1 className="text-5xl font-bold text-center mt-50">Projects</h1>
      
      <div className="flex justify-center items-center mt-10 grid xl:grid-cols-2 mx-10">
        <div className="flex justify-center items-center">
            <div className = "w-full h-100 bg-[url(/assets/img/logosengineeringanddesign.jpg)] bg-no-repeat bg-cover bg-center"> </div>
        </div>
        <div className="mt-10 mb-10 lg:ml-10 text-center xl:text-left">
            <h1 className="mt-5 text-3xl font-bold text-[#292929]">Logos Engineering and Design Website</h1>
            <h1 className="mt-5 text-xl text-[#292929]">A simple static website made for the company Logos Engineering and Design to promote their services.</h1>
            <button type="button" className="cursor-pointer mt-7 text-gray hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-black dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Github</button>
        </div>
      </div>
        </>
    )
}

export default Projects