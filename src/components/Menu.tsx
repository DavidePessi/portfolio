import { useCallback } from 'react'
import { useNavigate } from 'react-router'

function Menu({
  projects,
  onHoverProject,
  isUnderline,
}: {
  projects: string[]
  onHoverProject?: React.Dispatch<React.SetStateAction<string>>
  isUnderline: boolean
}) {
  const onMouseHoverCallback = useCallback(
    (newFocusedProject: string) => {
      if (onHoverProject) onHoverProject(newFocusedProject)
    },
    [onHoverProject]
  )

  return (
    <div className="flex flex-col w-full gap-2.5">
      <p className="text-[30px]">{`Project`}</p>
      {projects.map((project) => {
        return (
          <MenuButton
            project={project}
            onFocus={onMouseHoverCallback}
            key={project}
            isUnderline={isUnderline}
          />
        )
      })}
    </div>
  )
}

function MenuButton({
  project,
  onFocus,
  isUnderline,
}: {
  project: string
  onFocus: (project: string) => void
  isUnderline: boolean
}) {
  const navigate = useNavigate()

  if (project === 'more') {
    return (
      <button
        className={
          'flex w-full px-8 py-2 text-[30px] hover:rounded-full hover:shadow-[4px_4px_4px_0px_#00000040] hover:bg-[#EE8B89]'
        }
        onMouseEnter={() => onFocus('more-background')}
        onMouseDown={() => navigate(`/projects`)}
      >
        {project}
      </button>
    )
  }

  return (
    <button
      className={
        'flex flex-col w-full items-start px-8 py-2 text-[30px] hover:rounded-full hover:shadow-[4px_4px_4px_0px_#00000040] hover:bg-[#EE8B89]'
      }
      onMouseEnter={() => onFocus(project)}
      onMouseDown={() => navigate(`/projects/${project}`)}
    >
      {project}
      {isUnderline && <div className="w-full h-0.5 bg-[#CB7E49]"></div>}
    </button>
  )
}

export default Menu
