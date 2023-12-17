export default function Header() {
    return (
        <div>
            <div className="bg-gradient-to-r from-slate-50 to-gray-300 py-2 lg:py-3 text-orange-500 font-bold uppercase">
                <header className="bg-gradient-to-r from-slate-50 to-gray-300 py-2 lg:py-3 text-orange-500 font-bold uppercase">
                    <nav className="hidden md:flex justify-between flex-1">
                        <div className="container flex items-center text-sm lg:text-2xl space-x-4 lg:space-x-16">
                            <a className="hover:text-slate-300" href="/">alışveriş <br /> <a className="text-end ml-14" href="">yap.com</a></a>
                            <a href="/">Kategoriler</a>
                            <a href="/">Fırsat Ürünleri</a>
                            <a href="/">Kampanyalar</a>
                            <div className="flex cursor-pointer bg-gray-300 p-2 rounded-full gap-2">
                                <a href="#_" class="flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-500 whitespace-no-wrap bg-white border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none">
                                Giriş yap
                                <img className="w-10  h-10 hover:bg-orange-400 duration-200" src="https://icons.veryicon.com/png/o/miscellaneous/domain-icons/my-account-login.png" alt="" /> 
                                </a>
                            </div>
                        </div>
                    </nav>
            </header>
            </div>
        </div>
    )
}