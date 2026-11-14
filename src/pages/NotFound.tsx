import { useNavigate } from 'react-router'
import SquaredButton from '../components/SquaredButton'

function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="flex w-full h-full px-10 py-10 items-center bg-[#CB7E49]">
      <div className="flex flex-col w-full items-center gap-10">
        <div className="flex px-7 py-7 text-[32px] rounded-full bg-[#E5C48F] shadow-[12px_12px_4px_0px_#00000040]">
          {'404 PAGE NOT FOUND :('}
        </div>
        <SquaredButton
          type="red"
          onClick={() => {
            navigate(`/`)
          }}
        >
          {'back to home page'}
        </SquaredButton>
      </div>
    </div>
  )
}

export default NotFound
