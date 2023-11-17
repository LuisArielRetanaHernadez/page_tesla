import HeroSection from "../../components/HeroSection"
const layouts = [
  {
    title: 'Disfrruta de tesla',
    text: 'Programa una prueba de conducion hoy',
    links: [
      {
        title: 'Prueba de conducion'
      }
    ],
    isVideo: true,
  },
  {
    title: 'Model Y',
    text: 'Conecte una prueba de conducion',
    links: [
      {
        title: 'Explorar inventario',
        style: [
          'bg-black/50'
        ]
      },
      {
        title: 'Pedidos personalizda'
      }
    ],
    isVideo: false,
    urlImage: "https://res.cloudinary.com/dqmkovsdy/image/upload/v1700200758/tesla/media/image/rwotfj7dm9kxd6pkrnhj.avif"
  },
  {
    title: 'Mondel X',
    text: 'Conecte una prueba de conducion',
    links: [
      {
        title: 'Explorar inventario',
        style: [
          'bg-black/50'
        ]
      },
      {
        title: 'Pedidos personalizda'
      }
    ],
    isVideo: false,
    urlImage: "https://res.cloudinary.com/dqmkovsdy/image/upload/v1699994058/tesla/media/image/Homepage-Model-X-Desktop-LHD_bd1dvv.avif"
  },
  {
    title: 'Mondel S',
    text: 'Conecte una prueba de conducion',
    links: [
      {
        title: 'Explorar inventario',
        style: [
          'bg-black/50'
        ]
      },
      {
        title: 'Pedidos personalizda'
      }
    ],
    isVideo: false,
    urlImage: "https://res.cloudinary.com/dqmkovsdy/image/upload/v1699994096/tesla/media/image/Homepage-Model-S-Desktop-LHD-6.22_ghnhch.avif"
  },
]
const Home = () => {

  return (
    <>
      {layouts.map((layout, index) => (
        <div className="snap-center" key={index}>
          <HeroSection {...layout} />
        </div>
      ))}
    </>
  )
}

export default Home
