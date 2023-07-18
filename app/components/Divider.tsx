// create divider of {height} pixels
import React from 'react'

export default function Divider({
    height,
}: {
    height: number
}) {
  return (
    <div className={`w-full h-[${height}px] bg-gradient-to-r from-gray-500 to-gray-700 drop-shadow-md`}></div>
  )
}