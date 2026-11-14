import { useEffect, useState } from 'react'
import ArrowIcon from './Icons/ArrowIcon'
import type { Media } from '../utils/project-structure'

// Fills the available area while loading so the polaroid doesn't collapse to 0 width.
const LOADING_SIZE = 'w-[calc(100cqw-24px)] h-[calc(100cqh-72px)]'
const LOADED_SIZE = 'w-auto h-[calc(100cqh-72px)] max-w-[calc(100cqw-24px)]'

function MediaView({ media }: { media: Media }) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const className = `block object-contain transition-opacity duration-300 ${
    loaded ? `${LOADED_SIZE} opacity-100` : `${LOADING_SIZE} opacity-0`
  }`
  const src = `/${media.url}`

  return (
    <>
      {media.type === 'image' ? (
        <img
          src={src}
          className={className}
          // Cached images can be complete before onLoad is attached.
          ref={(img) => {
            if (img?.complete && img.naturalWidth > 0) setLoaded(true)
          }}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      ) : (
        <video
          autoPlay={true}
          src={src}
          className={className}
          onLoadedData={() => setLoaded(true)}
          onError={() => setFailed(true)}
        ></video>
      )}
      {!loaded && failed && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-200 text-neutral-500">
          media not available
        </div>
      )}
      {!loaded && !failed && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-200 animate-pulse">
          <div className="size-10 rounded-full border-4 border-neutral-400 border-t-transparent animate-spin" />
        </div>
      )}
    </>
  )
}

function Polaroid({ medias }: { medias: Media[] }) {
  const [activeMedia, setActiveMedia] = useState<number>(0)

  // Preload neighbouring images so switching feels instant.
  useEffect(() => {
    const neighbours = [
      medias[(activeMedia + 1) % medias.length],
      medias[(activeMedia - 1 + medias.length) % medias.length],
    ]
    neighbours.forEach((media) => {
      if (media.type === 'image') new Image().src = `/${media.url}`
    })
  }, [activeMedia, medias])

  return (
    <div className="flex flex-col w-fit pt-3 px-3 pb-15 bg-white">
      <div className="relative">
        <MediaView key={medias[activeMedia].url} media={medias[activeMedia]} />
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
