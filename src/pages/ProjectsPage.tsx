import { useState } from 'react'
import Menu from '../components/Menu'
import SquaredButton from '../components/SquaredButton'
import ArcSvg from '../components/svg/ArcSvg'
import TopBar from '../components/TopBar'
import { PROJECT_NAMES } from '../constants/projects'
import MobileLayout from './MobileLayout'
import { useIsMobile } from '../hooks/useIsMobile'

const PROJECT_PER_PAGE = 5

function ProjectsPage() {
  const [offsetPage, setOffsetPage] = useState<number>(0)
  const isMobile = useIsMobile()

  if (isMobile) {
    return <MobileLayout />
  }

  return (
    <div className="flex flex-col w-full h-full px-10 pt-10 pb-30 gap-10 items-start bg-[#CB7E49]">
      <TopBar />
      <div className="flex flex-col flex-1 w-full min-h-0 items-center">
        <div className="relative flex flex-col flex-1 min-h-0 w-[70dvw]">
          <div className="absolute flex flex-col gap-10 -left-[65px] top-[40px]">
            <ArcSvg size={130} />
            <ArcSvg size={130} />
            <ArcSvg size={130} />
          </div>
          <div className="flex flex-col flex-1 w-full min-h-0 px-30 py-10 items-start rounded-[60px] bg-[#E5C48F] shadow-[12px_12px_4px_0px_#00000040]">
            <Menu
              projects={PROJECT_NAMES.slice(offsetPage, offsetPage + PROJECT_PER_PAGE)}
              isUnderline={true}
            />
          </div>
          <div className="flex gap-3 relative self-end -top-[20px] right-[50px]">
            <SquaredButton
              onClick={() => setOffsetPage((previous) => previous - PROJECT_PER_PAGE)}
              type="red"
              disabled={offsetPage - PROJECT_PER_PAGE < 0}
            >
              <p className="text-[20px]">{'previous'}</p>
            </SquaredButton>
            <SquaredButton
              onClick={() => setOffsetPage((previous) => previous + PROJECT_PER_PAGE)}
              type="red"
              disabled={offsetPage + PROJECT_PER_PAGE > PROJECT_NAMES.length}
            >
              <p className="text-[20px]">{'next'}</p>
            </SquaredButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
