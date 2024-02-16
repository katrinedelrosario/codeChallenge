import React from 'react'

export default function Grid({ width="100%", style={}, className="", gridTemplateColumns="1fr 1fr 1fr", gridTemplateRows, placeContent, gap="10px", children  }) {
  return (
    <div
    style={{
        display: "grid",
        gridTemplateColumns,
        gridTemplateRows,
        width: width,
        placeContent,
        gap,
        ...style
    }}
    className={className}
    >
        {children}
    </div>
  )
}
