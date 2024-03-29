import React, { useState } from 'react'
import style from "./tooltip.module.scss"

export default function Tooltip({ title, onClick, tooltip, className }) {
  const [open, setOpen] = useState(false)
  return (
    <div
    className={`${style.tooltipButton} ${className}`}
    >
      <button
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={onClick}
      >
        {title}
        
        {/* tooltip popup */}
        {open && (
        <div
        className={style.tooltipMessage}
        >
          <p>
            {tooltip}
          </p>
        {/* tooltip popup */}
          
        </div>
      )}
      </button>
    </div>
  )
}
