import { useState, useEffect } from 'react'
import './App.css'

function App() {

  // target waktu
  const targetDate = new Date(2026, 2, 13, 0, 0, 0).getTime()

  // state waktu tersisa
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime())

  useEffect(() => {

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance <= 0) {
        clearInterval(timer)
        setTimeLeft(0)
      } else {
        setTimeLeft(distance)
      }

    }, 1000)

    return () => clearInterval(timer)

  }, [])

  // konversi ms → hari jam menit detik
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

  return (
    <div>
      {timeLeft > 0 ? (
        <div style={{ marginTop: '-10vh' }}>
          <h1 style={{ paddingBottom: "5vh" }}>
            Cieee penasarannn 😁
          </h1>
          <h1>
            {days} Hari {hours} Jam {minutes} Menit {seconds} Detik
          </h1>
        </div>

      ) : (

        <div>
          <h1 style={{ marginBottom: "9vh" }}>
            Happy Birthday Aisyyy 🎉🎉
          </h1>

          <button
            style={{
              backgroundColor: 'red',
              color: 'white',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '5px'
            }}

            onClick={() =>
              window.open(
                'https://www.youtube.com/watch?v=oIy5XlZfLSc',
                '_blank'
              )
            }
          >
            Tonton Video
          </button>

        </div>

      )}

    </div>
  )
}

export default App