const HeroSection = () => {

  return (
    <section className="h-screen text-center text-white bg-black flex relative overflow-hidden">
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
  )
}

export default HeroSection
