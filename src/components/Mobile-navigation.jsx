import {
  MagnifyingGlassIcon,
  XMarkIcon,
  Bars4Icon,
  ClipboardDocumentListIcon,
  Bars3BottomLeftIcon,
} from "@heroicons/react/16/solid";
import gsap from "gsap";
import { useState, useRef, useLayoutEffect } from "react";
import { Link, useNavigate } from "react-router";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import Skeletonbutton from "./Skeleton";
import { MoonIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";



const MobileNavigation = () => {
  const { isLoaded,isSignedIn } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const containerRef = useRef(null);
  const menuRef = useRef(null);
  const tl = useRef(null);

  const handleClick = () => setIsOpen((prev) => !prev);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // build timeline once
      tl.current = gsap.timeline({ paused: true });

      tl.current
        .fromTo(
          menuRef.current,
          { height: 0, opacity: 0 },
          {
            height: "auto",
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          }
        )
        .fromTo(
          ".menu-item",
          { y: -10, x: -40, opacity: 0 },
          {
            y: 0,
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
            clearProps: "all", // prevents click bugs
          },
          "-=0.2"
        );
    }, containerRef);

    return () => ctx.revert(); // cleanup
  }, []);

  // control animation
  useLayoutEffect(() => {
    if (!tl.current) return;

    if (isOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isOpen]);

  return (
    <section
      ref={containerRef}
      className="fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-200 lg:hidden md:hidden sm:block bg-white/90 backdrop-blur-md"
    >
      {/* HEADER */}
      <div className="flex justify-between p-4 items-center max-w-6xl mx-auto">
        <Link to="/" className="text-3xl font-bold font-mono">
          Sho<span className="text-[#2E8B57]">pify</span>
        </Link>
        
        <div className="flex space-x-4 items-center text-center content-center"> 
          <MoonIcon className="w-5 h-5"/>
          <ShoppingCartIcon className="w-5 h-5 " onClick={()=> navigate('/cart')}/>
          {isOpen ? (
            <XMarkIcon
              onClick={handleClick}
              className="h-8 w-8 cursor-pointer hover:bg-gray-100 rounded-md p-1"
            />
          ) : (
            <Bars3BottomLeftIcon
              onClick={handleClick}
              className="h-8 w-8 cursor-pointer hover:bg-gray-100 rounded-md p-1"
            />
          )}
        </div>
      </div>

      {/* MENU */}
      <div
        ref={menuRef}
        className="overflow-hidden mx-6 border rounded border-gray-200"
        style={{ height: 0, opacity: 0 }}
      >
        <ul className="flex flex-col space-y-2 p-4 text-lg">
          <Link onClick={() => setIsOpen(false)} to="/" className="menu-item px-4 py-2 hover:bg-gray-100">
            Home
          </Link>
          <Link onClick={() => setIsOpen(false)} to="/shop" className="menu-item px-4 py-2 hover:bg-gray-100">
            Shop
          </Link>
          <Link onClick={() => setIsOpen(false)} to="/categories" className="menu-item px-4 py-2 hover:bg-gray-100">
            Categories
          </Link>
          <Link onClick={() => setIsOpen(false)} to="/cart" className="menu-item px-4 py-2 hover:bg-gray-100">
            Cart
          </Link>
        </ul>

        <div className="space-y-3 flex flex-col p-4 border-t border-gray-200">
                      {!isLoaded ? (
              <Skeletonbutton />
            ) : isSignedIn ? (
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Action
                    label="My orders"
                    labelIcon={<ClipboardDocumentListIcon className="w-4 h-4" />}
                    onClick={() => navigate('/orders')}
                  />
                </UserButton.MenuItems>
              </UserButton>
            ) : (
              <SignInButton mode="modal">
                <button className="menu-item capitalize px-5 py-2 rounded border shadow cursor-pointer bg-[#48976a] text-white hover:bg-[#3EA56F]">
                  Get Started
                </button>
              </SignInButton>
            )}
        </div>
      </div>
    </section>
  );
};

export default MobileNavigation;