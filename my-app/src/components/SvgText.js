import React from 'react'

export default function SvgText({ x, y, style, onClick, children }) {
    return (

        <text x={x} y={y} style={style} onClick={onClick}>{children}</text>


    )
}
