import SquaredButton from '../components/SquaredButton'
import TopBar from '../components/TopBar'
import { useIsMobile } from '../hooks/useIsMobile'
import MobileLayout from './MobileLayout'

function About() {

  return (
    <div className="flex flex-col w-full h-full px-10 pt-10 pb-30 gap-10 items-start bg-[#CB7E49]">
      <TopBar />
      <div className="flex flex-col flex-1 w-full max-w-300 min-h-0 items-center self-center rounded-[60px] bg-white overflow-hidden">
        <div className="flex flex-1 min-h-0 w-full gap-10 px-10 pb-10 pt-10">
          <img className="flex h-full" src="/placeholder-photo.png"></img>
          <div className="flex flex-col gap-4 text-xl overflow-y-auto">
            <p>
              {`knowledge of: C, C++, C#, Typescript, Javascript, Java, HTML, CSS, SQL, 
                Git, React, Figma, Unity.`}
            </p>
            <p>
              {`Davide Pessi is a creative technologist graduated in Computer Science and Engineering at
            Politecnico di Milano. 
            He works where design and engeneer meet:He works where engineering and design meet, 
            turning designers’ visions into solid, high-performance interactive systems. 
            His work spans virtual reality experiences, websites and applications, installations, 
            real-time interfaces and video games. He has experience in computer graphics, including 
            shaders, VFX and particle systems. `}
            </p>
            <p className="flex-1">{`He is currently a full stack developer at Accurat.`}</p>
            <p className="flex-1">
              {'Interested in robotics, videogames, drawings, film, shader, vfx, animation'}
            </p>
          </div>
        </div>
        <div className="flex w-full px-12 py-5 justify-end bg-[#CCF2FB]">
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
