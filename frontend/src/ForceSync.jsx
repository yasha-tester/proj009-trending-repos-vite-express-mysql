import { useEffect, useState } from 'react'

function ForceSync() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api')
    .then(res => res.json())
    .then(data => setMessage(data.message));
  }, []);
  return (
    <>
    <a href='/apiRouter/fs'>Hello ForceSync</a>
 <p>{message}</p>
    </>
  )
}

export default ForceSync
