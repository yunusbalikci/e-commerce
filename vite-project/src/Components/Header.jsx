import ShopBag from "../assets/pictures/ShopBag.png";
import logo from "../assets/pictures/mylogo.png";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faSearch,faBasketShopping,faHeart, faCircleUser} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
        <div>
            <header className="h-28 shadow-sm -mb-3 bg-white">
                <div className="container flex items-center justify-between">
                    <a href="#">
                        <img className="w-40 h-28" src={logo} alt="" />
                    </a>

                    <div className="flex w-full item-center justify-center rounded-lg relative">
                        <span className="absolute left-4 ml-36 top-2 text-lg text-orange-600">
                        <FontAwesomeIcon icon={faSearch} />
                        </span>
                        <input type="text" placeholder="Search" className="w-96 border-2 pl-10 border-orange-400 focus:border-orange-400 rounded-lg px-4 py-2 bg-gray-100" />
                        <button className="bg-orange-400 border border-orange-400 text-white px-8 ml-5 rounded-lg hover:bg-orange-300 hover-text-orange-400 transition duration-200">Search</button>
                    </div>

                    <div className="flex items-center space-x-8">
                    <a href="#" className="text-center text-gray-700 hover:text-primary transition relative">
                            <div className="text-2xl">
                            <FontAwesomeIcon className="text-orange-300 hover:text-orange-500 duration-200" icon={faHeart} />
                            </div>
                            <div className="text-xs mt-1 leading-3 whitespace-nowrap">WISH LIST</div>
                            <span className="absolute -top-1 right-0 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs "></span>
                        </a>
                        <a href="#" className="text-center text-gray-700 hover:text-primary transition relative">
                            <div className="text-2xl">
                            <FontAwesomeIcon className="text-orange-300 hover:text-orange-500 duration-200" icon={faBasketShopping} />
                            </div>
                            <div className="text-xs mt-1 leading-3">CART</div>
                            <span className="absolute -top-1 right-0 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs "></span>
                        </a>
                        <a href="#" className="text-center text-gray-700 hover:text-primary transition relative">
                            <div className="text-2xl">
                            <FontAwesomeIcon className="text-orange-300 hover:text-orange-500 duration-200" icon={faCircleUser} />
                            </div>
                            <div className="text-xs mt-1 leading-3">ACCOUNT</div>
                            <span className="absolute -top-1 right-0 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs "></span>
                        </a>
                    </div>

                </div>

            </header>
            <div className="w-full h-12 bg-orange-400 cursor-pointer">
                <div className="container text-xl flex space-x-16">
                <h1 className="pt-3 text-white font-bold uppercase">Kategories</h1>
                <h1 className="pt-3 text-white font-bold uppercase">Kategories</h1>
                <h1 className="pt-3 text-white font-bold uppercase">Kategories</h1>
                <h1 className="pt-3 text-white font-bold uppercase">Kategories</h1>
                <h1 className="pt-3 text-white font-bold uppercase">Kategories</h1>
                <h1 className="pt-3 text-white font-bold uppercase">Kategories</h1>
                <h1 className="pt-3 text-white font-bold uppercase">Kategories</h1>


                </div>
            </div>
        </div>
    )
}