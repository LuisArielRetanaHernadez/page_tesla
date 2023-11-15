import { useEffect, useRef } from "react"
import Logo from "./svg/Logo"

const LandingHeader = () => {

  const menuBackdrop = useRef(null)
  const navPrimary = useRef(null)

  useEffect(() => {
    if (menuBackdrop.current && navPrimary.current) {
      const items = navPrimary.current.children.length

      for (let i = 0; i < items; i++) {
        const item = navPrimary.current.children[i]
        item.addEventListener('mouseover', () => {
          const {left, top, width, height} = item.getBoundingClientRect()
          menuBackdrop.current.style.setProperty('--move-left', left + 'px')
          menuBackdrop.current.style.setProperty('--move-top', top + 'px')
          menuBackdrop.current.style.setProperty('--width', width + 'px')
          menuBackdrop.current.style.setProperty('--height', height + 'px')
          
          menuBackdrop.current.style.opacity = 1
          menuBackdrop.current.style.visibility = 'visible'
        })

        item.addEventListener('mouseout', () => {
          menuBackdrop.current.style.opacity = 0
          menuBackdrop.current.style.visibility = 'hidden'
        })
      }
    }
  },[menuBackdrop, navPrimary])
  
  return (
    <header id="landing-header" className="w-full text-white py-4 px-10 flex items-center justify-between fixed top-0 z-20">
    <div className="flex flex-grow basis-0">
      <Logo className="h-6 w-28 "/>
    </div>

    <nav>
      <ul ref={navPrimary} className="flex text-sm [&>li>a]:inline-block [&>li>a]:font-medium [&>li>a]:px-4 [&>li>a]:py-2">
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
    <div ref={menuBackdrop} id="menu-backdrop" className=" absolute bg-black/50 backdrop-blur-sm rounded
      left-[var(--move-left)] top-[var(--move-top)]
      w-[var(--width)] h-[var(--height)]
      transition-all duration-300
      ease-in-out -z-10"></div>
  </header>
  )
}

export default LandingHeader
