import SquaredButton from '../components/SquaredButton'
import TopBar from '../components/TopBar'

function About() {
  /*
  Davide Pessi è un digital technologist laureato in Computer Science and Engineering al Politecnico di Milano.
   Lavora dove ingegneria e design si incontrano: traduce le visioni dei designer in sistemi interattivi solidi
    e performanti. Il suo lavoro spazia dalle esperienze in realtà virtuale a siti web e applicazioni, fino ad 
    installazioni, interfacce real-time e videogame. Ha esperienza in computer graphics come shader, vfx e 
    sistemi di particelle. Attualmente ricopre la posizione di full stack developer in Accurat.
  */
  return (
    <div className="flex flex-col w-full h-full px-10 pt-10 pb-30 gap-10 items-start bg-[#CB7E49]">
      <TopBar />
      <div className="flex flex-col flex-1 w-full min-h-0 items-center rounded-[60px] bg-white overflow-hidden">
        <div className="flex-1 w-full px-10 pb-10 pt-10">ciao</div>
        <div className="flex w-full px-12 py-5 justify-between bg-[#CCF2FB]">
          <p className="flex-1 text-20">
            {'interest in robotics, videogames, drawings, film, shader, vfx, animation'}
          </p>
          <div className="flex min-w-0 gap-5">
            <SquaredButton
              type="iconRed"
              onClick={() =>
                window.open('https://github.com/DavidePessi', '_blank', 'noopener,noreferrer')
              }
            >
              <img src="/git-icon.png" className="size-8" />
            </SquaredButton>
            <SquaredButton
              type="iconRed"
              onClick={() =>
                window.open('https://natsudavi.itch.io/', '_blank', 'noopener,noreferrer')
              }
            >
              <img src="/itch-icon.png" className="size-8" />
            </SquaredButton>
            <SquaredButton
              type="iconRed"
              onClick={() =>
                window.open(
                  'https://it.linkedin.com/in/davide-pessi-9447b1224',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
            >
              <img src="/linkedin-icon.png" className="size-8" />
            </SquaredButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
