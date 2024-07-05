import { useEffect, useState } from 'react'

function SearchBar() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api')
    .then(res => res.json())
    .then(data => setMessage(data.message));
  }, []);
  return (
    <>
 <p>Hello Search Bar</p>
 <p>{message}</p>
    </>
  )
}

export default SearchBar
