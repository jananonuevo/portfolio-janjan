function Footer() {
    return (
        <footer className="bg-gray-900 mt-32 py-10">
            <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="text-xl font-bold text-white">Jan Añonuevo</p>
                    <p className="text-sm text-gray-400 mt-1">Software Developer</p>
                </div>

                <div className="flex items-center gap-6 text-sm text-gray-300">
                    <a href="https://github.com/jananonuevo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/jan-anonuevo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                        LinkedIn
                    </a>
                </div>
                
                <div className="flex flex-col items-center md:items-end text-sm text-gray-300">
                    <a href="tel:+639692317498" className="hover:text-white transition-colors duration-300 font-medium">+63 969 231 7498</a>
                    <a href="mailto:jananonuevo7@gmail.com" className="hover:text-white transition-colors duration-300 mt-1 font-medium">jananonuevo7@gmail.com</a>
                </div>
            </div>
            <div className="text-center text-xs text-gray-500 mt-12">
                &copy; {new Date().getFullYear()} Jan Añonuevo. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer