
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  const toggleLanguage = () => {
    setLanguage(language === "English" ? "Hindi" : "English");
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="hover:cursor-pointer text-xl font-bold text-gray-800">
              UICIL
            </div>
            <div className="hover:cursor-pointer hidden md:ml-10 md:flex md:space-x-8">
              <div className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium hover:cursor-pointer">
                Home
              </div>
              <div className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium hover:cursor-pointer">
                Grievance
              </div>
              <div className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium hover:cursor-pointer">
                Stories
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <button
              onClick={toggleLanguage}
              className="hidden md:block text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium hover:cursor-pointer"
            >
              {language === "English" ? "Hindi" : "English"}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            ></button>
          </div>
        </div>
      </div>
    </nav>
  );
}
