import React, { useState } from 'react'

const Servicecard = ({ service }) => {
  if (!service) return null

  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white"
    >
      {/* glow */}
      <div
        className="absolute z-0 w-72 h-72 rounded-full blur-2xl 
                   bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500
                   transition-opacity duration-500 mix-blend-lighten opacity-70"
        style={{
          top: position.y - 144,
          left: position.x - 144,
        }}
      />

      {/* content */}
      <div className="relative z-10 flex items-center gap-10 p-8 rounded-3xl bg-white dark:bg-gray-900 transition-all">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-2">
          <img
            src={service.icon}
            alt={service.title}
            className="w-24 h-24 bg-white dark:bg-gray-900 rounded-full"
          />
        </div>

        <div className="flex-1">
          <h3 className="font-bold">{service.title}</h3>
          <p className="text-sm mt-2">{service.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Servicecard
