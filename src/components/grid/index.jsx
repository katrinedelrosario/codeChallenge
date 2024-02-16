import React from 'react'

export default function Grid({ width="100%", style={}, className="", gridTemplateColumns="1fr 1fr 1fr", gridTemplateRows, placeContent, children  }) {
  return (
    <div
    style={{
        display: "grid",
        gridTemplateColumns,
        gridTemplateRows,
        width: width,
        placeContent,
        ...style
    }}
    className={className}
    >
        {children}
    </div>
  )
}
