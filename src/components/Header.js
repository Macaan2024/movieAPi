function Header({onHomeClick}) {

    return (
        <>
        <nav className="bg-slate-900 border-gray-200">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <h4 className="font-bolder tracking-wider text-white">MovieApi</h4>
                </a>
                <div className="flex items-center space-x-6 rtl:space-x-reverse">
                    <a href="#" className="text-xs  text-blue-600 dark:text-blue-500 hover:underline bg-neutral-100 text-black py-2 px-3">Login</a>
                </div>
            </div>
        </nav>
        <nav className="bg-gray-50 dark:bg-gray-700">
            <div className="max-w-screen-xl px-4 py-3 mx-auto">
                <div className="flex items-center sm:justify-center">
                    <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                        <li>
                            <a className="font-normal" onClick={onHomeClick}>Home</a>
                        </li>     
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Header;