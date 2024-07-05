import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api')
    .then(res => res.json())
    .then(data => setMessage(data.message));
  }, []);
  return (
    <>
 <p>Hello App!</p>
 <p>{message}</p>
    </>
  )
}

export default App
