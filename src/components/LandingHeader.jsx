import Logo from "./svg/Logo"

const LandingHeader = () => {
  
  return (
    <header className="w-full text-white py-4 px-10 flex items-center justify-between fixed top-0 z-20">
    <div className="flex flex-grow basis-0">
      <Logo className="h-6 w-28 "/>
    </div>

    <nav>
      <ul className="flex text-sm [&>li>a]:inline-block [&>li>a]:font-medium [&>li>a]:px-4 [&>li>a]:py-2">
        <li><a href="#">Model S</a></li>
        <li><a href="#">Model 3</a></li>
        <li><a href="#">Model X</a></li>
        <li><a href="#">Model Y</a></li>
        <li><a href="#">PowerAll</a></li>
        <li><a href="#">Carga</a></li>
      </ul>
    </nav>

    <nav className="flex flex-grow justify-end basis-0">
      <ul className="flex text-sm [&>li>a]:inline-block [&>li>a]:font-medium [&>li>a]:px-4 [&>li>a]:py-2">
        <li><a href="#">Soporte</a></li>
        <li><a href="#">Tienda</a></li>
        <li><a href="#">Menu</a></li>
      </ul>     
    </nav>
    <div id="menu-backdrop" className="absolute backdrop-blur-sm rounded-sm 
    left-[var(--move-left) top-[var(--move-top)] w-[var(--width)] h-[var(--height)]
    transition-all duraction-300 ease-in-out"></div>
  </header>
  )
}

export default LandingHeader
