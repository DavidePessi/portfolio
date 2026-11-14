import { useState } from 'react'
import Menu from '../components/Menu'
import TopBar from '../components/TopBar'
import { PROJECT_NAMES } from '../constants/projects'
import { useIsMobile } from '../hooks/useIsMobile'
import MobileLayout from './MobileLayout'

function Home() {
  const isMobile = useIsMobile()
  const [hoveredProject, setHoveredProject] = useState<string>('Sfondo')

  if (isMobile) {
    return <MobileLayout />
  }

  return (
    <div className="flex flex-col w-full h-full px-10 pt-10 pb-30 items-start ">
      <img
        src={`/${hoveredProject}.webp`}
        className="fixed inset-0 -z-1 h-screen w-screen object-cover object-center"
      />
      <TopBar />
      <div className="flex flex-col h-full justify-end">
        <div className="p-4 flex flex-col gap-2 rounded-[30px] bg-[#E5C48F] shadow-[12px_12px_4px_0px_#00000040]">
          <Menu
            projects={[...PROJECT_NAMES.slice(0, 4), 'more']}
            onHoverProject={setHoveredProject}
            isUnderline={false}
          ></Menu>
        </div>
      </div>
    </div>
  )
}

export default Home
