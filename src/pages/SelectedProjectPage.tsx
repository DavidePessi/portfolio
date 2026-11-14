import { useNavigate, useParams } from 'react-router'
import TopBar from '../components/TopBar'
import { CONTENT } from '../constants/projects'
import SquaredButton from '../components/SquaredButton'
import Polaroid from '../components/Polaroid'
import LinkIcon from '../components/Icons/LinkIcon'
import { getProjectById, type Media } from '../utils/project-structure'
import MobileLayout from './MobileLayout'
import { useIsMobile } from '../hooks/useIsMobile'

function SelectedProjectPage() {
  const { projectName } = useParams()
  const navigate = useNavigate()
  const isMobile = useIsMobile()

  if (isMobile) {
    return <MobileLayout />
  }

  const project = getProjectById(projectName ?? '') ?? CONTENT[0]

  const thumbnail: Media = { type: 'image', url: project.defaultImg }
  const photoSet = project.extraMedia ? [thumbnail, ...project.extraMedia] : [thumbnail]

  return (
    <div className="flex flex-col w-full h-full px-10 pt-10 pb-20 gap-10 items-center bg-[#CB7E49]">
      <TopBar />
      <div className="flex flex-col flex-1 w-full min-h-0">
        <div className="flex flex-col flex-1 w-full min-h-0 px-10 py-10 items-center gap-10 rounded-[60px] bg-[#E5C48F] shadow-[12px_12px_4px_0px_#00000040]">
          <div className="flex flex-col flex-1 min-h-0 w-full items-center gap-5">
            <div className="flex w-full gap-3">
              <p className="text-[30px]">{project.title}</p>
              {project.externalLink && (
                <SquaredButton
                  type="iconRed"
                  onClick={() => window.open(project.externalLink, '_blank', 'noopener,noreferrer')}
                >
                  <LinkIcon size={20} />
                </SquaredButton>
              )}
            </div>
            <div className="flex flex-1 w-full min-h-0 gap-10">
              <div className="flex-1 min-w-0 flex justify-center [container-type:size]">
                <Polaroid key={project.id} medias={photoSet} />
              </div>
              <div className="flex-1 min-w-0 min-h-0 flex-col pr-3 overflow-y-auto">
                {project.team && (
                  <p className="whitespace-pre-line">
                    <strong>Team: </strong> {`${project.team}`}
                  </p>
                )}
                {project.advisor && (
                  <p className="whitespace-pre-line">
                    <strong>Team: </strong> {`${project.advisor}`}
                  </p>
                )}
                {project.coAdvisor && (
                  <p className="whitespace-pre-line">
                    <strong>Team: </strong> {`${project.coAdvisor}`}
                  </p>
                )}
                {project.role && (
                  <p className="whitespace-pre-line">
                    <strong>Role: </strong> {`${project.role}`}
                  </p>
                )}
                {project.dates && (
                  <p className="whitespace-pre-line">
                    <strong>Dates: </strong>
                    {`${project.dates}`}
                  </p>
                )}
                {project.description && (
                  <p className="whitespace-pre-line">
                    <strong>Description: </strong>
                    {`${project.description}`}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 relative self-end -top-[20px] right-[50px]">
          <SquaredButton onClick={() => navigate(-1)} type="red">
            <p className="text-[20px]">{'back'}</p>
          </SquaredButton>
        </div>
      </div>
    </div>
  )
}

export default SelectedProjectPage
