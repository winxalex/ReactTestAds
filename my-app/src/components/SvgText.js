import React from 'react'
import './SvgText.css'

export default function SvgText({ x, y, style, onClick, children }) {
    return (

        <text x={x} y={y} style={style} className="noselect" onClick={onClick}>{children}</text>


    )
}
