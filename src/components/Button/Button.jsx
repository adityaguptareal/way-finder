import React from 'react'

export default function Button({buttonText = "save"}) {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <button
          style={{
            backgroundColor: "limegreen",
            color: "white",
            padding: "12px 30px",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          {buttonText}
        </button>
        </div>
        <div/>
    </div>
  )
}
