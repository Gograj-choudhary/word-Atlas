import { NavLink } from "react-router-dom"
import { FaLongArrowAltRight } from "react-icons/fa";
export const Hero =()=>{
    return(
        <main className="bg-white dark:bg-gray-800 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
    
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            Explore The Whole World Knowledge In Just One Click!
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Hey, here you can see all countries' general info!
          </p>
          <NavLink to="/country">
            <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition">
              Explore <FaLongArrowAltRight />
            </button>
          </NavLink>
        </div>


        <div className="flex justify-center">
          <img
            src="/images/world.jpg"
            alt="world"
            className="w-full max-w-md rounded-lg shadow-md"
          />
        </div>
      </div>
    </main>
    )
}