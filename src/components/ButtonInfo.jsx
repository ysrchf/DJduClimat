import { useState } from "react"

const ButtonInfo = ({ text }) => {
  const [showInfo, setShowInfo] = useState(false)

  const handleMouseEnter = () => {
    setShowInfo(true)
  }

  const handleMouseLeave = () => {
    setShowInfo(false)
  }

  return (
    <div className="relative inline-block">
      <button
        className="bg-gray-300 rounded-full w-10 h-10 text-xl text-black-700 focus:outline-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        ?
      </button>
      {showInfo && (
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-gray-200 border border-gray-300 px-4 py-2 text-center text-sm">
          {text}
        </div>
      )}
    </div>
  )
}

export default ButtonInfo
