function HomeIcon({ size = 106 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 106 106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_194_13)">
        <rect x="15" y="37" width="31" height="62" rx="10" fill="black" />
        <rect x="60" y="37" width="31" height="62" rx="10" fill="black" />
        <path
          d="M46.4773 10.5438C50.0421 7.8544 54.9579 7.8544 58.5227 10.5438L99.2453 41.2671C106.906 47.0463 102.818 59.25 93.2226 59.25H11.7774C2.18166 59.25 -1.90552 47.0463 5.75467 41.2671L46.4773 10.5438Z"
          fill="black"
        />
        <rect x="46" y="59" width="14" height="18" fill="black" />
        <rect x="60" y="81" width="14" height="18" fill="black" />
        <rect x="32" y="81" width="14" height="18" fill="black" />
      </g>
      <defs>
        <clipPath id="clip0_194_13">
          <rect width="106" height="106" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default HomeIcon
