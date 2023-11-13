function App() {

  return (
    <>
      <mian>
        <header className="w-full text-white py-4 px-10 flex items-center justify-between fixed top-0 z-20">
          <div className="flex flex-grow basis-0">
            <svg className="h-6 w-28" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"></path></svg>
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

        <section className="w-screen h-screen text-center text-white bg-black relative overflow-hidden">
          <div className="h-full absolute top-0 bottom-0">
            <video className="object-center" autoPlay loop muted src="https://res.cloudinary.com/dqmkovsdy/video/upload/v1699912376/tesla/media/videos/x0x9nksw5hf7ph3aatag.mp4"></video>
          </div>

          <header className="relative z-20">
            <h2>Disfruta de Tesla</h2>
            <p>Programe una prueba de conduccion hoy mismo</p>
          </header>

         <footer className="relative z-20">
           <a>
            Prueba de conduccion
          </a>
         </footer>
         
        </section>
      </mian>
    </>
  )
}

export default App
