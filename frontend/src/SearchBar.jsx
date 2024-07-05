import { useEffect, useState } from 'react'
function SearchBar() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/')
    .then(res => res.json())
    .then(data => setMessage(data.message));
  }, []);
  return (
    <>
 {/* <p>Hello Search Bar</p> */}
 <form action='/apiRouter/search'>
 <input type='search' name="findRepo" placeholder='Hello Search Bar..'/>
 <input type='submit' value="search"/>
 {/* i want to remember what to do here */}
 </form>
 <p>{message}</p>
    </>
  )
}

export default SearchBar
