function ArrowIcon({ size = 112, rotation = 0 }: { size?: number; rotation?: number }) {
  return (
    <svg
      width={`${size}`}
      height={`${size}`}
      viewBox="0 0 112 112"
      fill="none"
      transform={`rotate(${rotation})`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="111.723"
        y="55.8614"
        width="79"
        height="24"
        rx="12"
        transform="rotate(135 111.723 55.8614)"
        fill="#CB7E49"
      />
      <rect
        x="55.8613"
        y="0.000106633"
        width="79"
        height="24"
        rx="12"
        transform="rotate(45 55.8613 0.000106633)"
        fill="#CB7E49"
      />
    </svg>
  )
}

export default ArrowIcon
