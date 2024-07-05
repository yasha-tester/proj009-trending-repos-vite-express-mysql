import { useEffect, useState } from 'react'

function Timer() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api')
    .then(res => res.json())
    .then(data => setMessage(data.message));
  }, []);
  return (
    <>
 <p>Hello Timer</p>
 <p>{message}</p>
    </>
  )
}

export default Timer
