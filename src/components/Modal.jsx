import React from "react"

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-75 bg-gray-900">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-2xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
            aria-label="Fermer"
          >
            X
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Modal
