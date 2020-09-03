import React from 'react'

const Link = ({ active, children, onClick }) => (
  <div className="inline-btn">
    <button
      type="button"
      className="show_btns"
      onClick={onClick}
      style={{
        background: active ? 'rgb(59, 138, 202)' : 'rgb(206, 204, 204)',
        color: active ? 'white' : 'black'
      }}>
      {children}
    </button>
  </div>
)

export default Link
