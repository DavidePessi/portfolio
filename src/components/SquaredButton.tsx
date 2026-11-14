import type { ReactNode } from 'react'

const typeButton = {
  squared:
    'px-8 py-4 rounded-[30px] bg-[#E5C48F] shadow-[4px_4px_4px_0px_#00000040] hover:bg-[#E4B15F] disabled:bg-[#A99180]',
  icon: 'px-4 py-4 rounded-full bg-[#E5C48F] shadow-[4px_4px_4px_0px_#00000040] hover:bg-[#E4B15F] disabled:bg-[#A99180]',
  iconRed:
    'px-3 py-3 rounded-full bg-[#EE8B89] shadow-[4px_4px_4px_0px_#00000040] hover:bg-[#E04E4C] disabled:bg-[#A99180]',
  red: 'px-4 py-2 rounded-full bg-[#EE8B89] shadow-[4px_4px_4px_0px_#00000040] hover:bg-[#E04E4C] disabled:bg-[#A99180]',
}

type TypeButton = keyof typeof typeButton

function SquaredButton({
  children,
  onClick,
  type,
  disabled = false,
}: {
  children: ReactNode
  onClick: () => void
  type: TypeButton
  disabled?: boolean
}) {
  return (
    <button className={typeButton[type]} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default SquaredButton
