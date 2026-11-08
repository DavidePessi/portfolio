import { useNavigate } from 'react-router'
import SquaredButton from './SquaredButton'
import HomeIcon from './Icons/HomeIcon'

function TopBar() {
  const navigate = useNavigate()

  return (
    <div className="flex w-full justify-between">
      <SquaredButton type="icon" onClick={() => navigate(`/`)}>
        <p className="text-[32px]">
          <HomeIcon size={46} />
        </p>
      </SquaredButton>
      <SquaredButton type="squared" onClick={() => navigate(`/about`)}>
        <p className="text-[32px]">{'About me'}</p>
      </SquaredButton>
    </div>
  )
}
export default TopBar
