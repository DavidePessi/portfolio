import { useState } from 'react'
import ArrowIcon from './Icons/ArrowIcon'
import type { Media } from '../utils/project-structure'

function Polaroid({ medias }: { medias: Media[] }) {
  const [activeMedia, setActiveMedia] = useState<number>(0)

  return (
    <div className="flex flex-col w-fit pt-3 px-3 pb-15 bg-white">
      <div className="relative">
        {medias[activeMedia].type === 'image' ? (
          <img
            src={`/${medias[activeMedia].url}`}
            className="block w-auto h-[calc(100cqh-72px)] max-w-[calc(100cqw-24px)] object-contain"
          />
        ) : (
          <video
            autoPlay={true}
            src={`/${medias[activeMedia].url}`}
            className="block w-auto h-[calc(100cqh-72px)] max-w-[calc(100cqw-24px)] object-contain"
          ></video>
        )}
        <button
          className="flex absolute inset-y-0 left-0 w-20 h-full justify-center hover:bg-black/30"
          onClick={() => {
            setActiveMedia((previous) =>
              previous === 0 ? medias.length - 1 : (previous - 1) % medias.length
            )
          }}
        >
          <div className="flex flex-col justify-center">
            <ArrowIcon size={50} rotation={180} />
          </div>
        </button>
        <button
          className="flex absolute inset-y-0 right-0 w-20 h-full justify-center hover:bg-black/30"
          onClick={() => {
            setActiveMedia((previous) => (previous + 1) % medias.length)
          }}
        >
          <div className="flex flex-col justify-center">
            <ArrowIcon size={50} />
          </div>
        </button>
      </div>
    </div>
  )
}

export default Polaroid
