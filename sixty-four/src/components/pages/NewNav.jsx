import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
const NewNav = () => {
 const [isOpen, setIsOpen] = useState(false);
 const [showUserMenu, setShowUserMenu] = useState(false);
 
 // Mock user state - replace with your actual auth logic
 const isLoggedIn = true;
 const user = {
   name: "Jennifer",
   description: "User description here"
 };
  const navLinks = [
   { title: "Home", path: "/settings" },
   { title: "About", path: "/notifications" },
   { title: "Who We Are", path: "/knowledge" },
   { title: "what we serve", path: "/tutorials" },
   { title: " Members", path: "/member" }
 ];
  return (
   <>
     {/* Desktop Navigation */}
     <nav className="hidden lg:flex items-center justify-between px-6 py-4 bg-white shadow-md">
       <div className="flex items-center gap-4">
         <img src="/logo.png" alt="Logo" className="h-8" />
         <span className="font-bold text-xl">SFACC</span>
       </div>
       
        <div className="flex justify-center items-center gap-6">
         {navLinks.map((link) => (
           <Link 
             key={link.path} 
             to={link.path} 
             className="hover:text-blue-600 flex justify-center items-center"
           >
             {link.title}
           </Link>
         ))}

         </div>
            
         <div>
         
         {isLoggedIn ? (
           <div className="relative">
             <button onClick={() => setShowUserMenu(!showUserMenu)} className="flex items-center gap-2">
               <CgProfile className="text-2xl" />
               <span>{user.name}</span>
             </button>
             {showUserMenu && (
               <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                 <div className="px-4 py-2">
                   <p className="font-semibold">{user.name}</p>
                   <p className="text-sm text-gray-600">{user.description}</p>
                 </div>
                 <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                   Log out
                 </button>
               </div>
             )}
           </div>
         ) : (
           <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
             Login
           </button>
         )}
       </div>
     </nav>

      {/* Mobile Navigation */}
     <div className="lg:hidden">
       <div className="fixed top-4 left-4 z-50 flex items-center gap-2">
         <img src="/logo.png" alt="Logo" className="h-8" />
         <span className="font-bold text-white text-xl">SFACC</span>
       </div>
       <button 
         onClick={() => {
           setIsOpen(true);
           document.querySelector('.fixed.inset-0').style.width = '35%';
         }}
         className="fixed text-white top-4 right-4 z-50"
       >
         <FaBars className="text-2xl" />
       </button>
        {/* Slide-out menu */}
       <div className={`fixed inset-0 bg-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40`}>
         <div className="p-6">
           <button 
             onClick={() => setIsOpen(false)}
             className="absolute top-4 right-4"
           >
             <FaTimes className="text-2xl" />
           </button>
            <div className="mt-8">
             <h1 className="text-xl font-bold mb-6">Company Name</h1>
             
             {isLoggedIn && (
               <div className="flex items-center gap-3 mb-6">
                 <CgProfile className="text-2xl" />
                 <div>
                   <p className="font-semibold">{user.name}</p>
                   <p className="text-sm text-gray-600">{user.description}</p>
                 </div>
               </div>
             )}
              <div className="flex flex-col gap-4">
               {navLinks.map((link) => (
                 <Link 
                   key={link.path} 
                   to={link.path}
                   className="hover:text-blue-600"
                   onClick={() => setIsOpen(false)}
                 >
                   {link.title}
                 </Link>
               ))}
             </div>
              <div className="absolute bottom-8 left-6">
               {isLoggedIn ? (
                 <button className="text-red-600">
                   Log out
                 </button>
               ) : (
                 <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                   Login
                 </button>
               )}
             </div>
           </div>
         </div>
       </div>
     </div>
   </>
 );
};

export default NewNav;