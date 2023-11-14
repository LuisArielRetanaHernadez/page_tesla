import Logo from './components/svg/Logo'
function App() {

  return (
    <>
      <mian>
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

        </header>

        <section className="w-screen h-screen text-center text-white bg-black flex relative overflow-hidden">
          <div className="h-full w-full absolute top-0 bottom-0">
            <video className="h-full w-full object-center object-cover" autoPlay loop muted src="https://res.cloudinary.com/dqmkovsdy/video/upload/v1699912376/tesla/media/videos/x0x9nksw5hf7ph3aatag.mp4"></video>
          </div>

          <div className="h-full w-full flex flex-col relative z-10">

            <header className="flex flex-col">

              <h2 className="text-5xl font-medium pt-40">Disfruta de Tesla</h2>
              <p className="text-sm">Programe una prueba de conduccion hoy mismo</p>

            </header>

            <footer className="pb-24 flex flex-col flex-grow justify-end">
              <div>
                <a className="font-medium px-6 py-2 border-2 rounded-md backdrop-blur-sm inline-block
                 hover:bg-white hover:text-black duration-100 cursor-pointer">
                  Prueba de conduccion
                </a>
              </div>
            </footer>

          </div>

         
        </section>
      </mian>
    </>
  )
}

export default App
