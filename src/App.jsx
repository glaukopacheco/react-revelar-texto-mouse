import React, { useEffect } from 'react'

const App = () => {

  useEffect(() => {
    const cursor = document.querySelector('#cursor')

    window.addEventListener('mousemove',(e) => {
      cursor.style.left = (e.x - 150) + 'px'
      cursor.style.top = (e.y - 150) + 'px'
    })
  })

  return (
    <>
      <div className="container">
        <div className="content">
          <div className="content__text">
            <h1 className="title">Revelando texto</h1>
            <h1 className="subtitle">O apredizado é como o horizonte: não há limites.</h1>
          </div>
        </div>
      </div>

      <div className="cursor" id="cursor"></div>
    </>
  )
}

export default App
