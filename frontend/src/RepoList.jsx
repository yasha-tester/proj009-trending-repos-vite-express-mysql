import { useEffect, useState } from 'react'
import "./style.css"
function RepoList() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/apiRouter')
    .then(res => res.json())
    .then(data => {

      let dataObject = [];
        // maybe i should do it in different React function?
        data.repos.forEach((item) => {

          dataObject.push(
<div className='repoBlock'>
    <p>name: {item["name"]}</p>
    <p>description: {item["repo_desc"]}</p>
    <p>stars: {item["starsCount"]}</p>
    <p>place: {item["place"]}</p>
</div>)})

        setMessage(dataObject)
    })
  }, []);
  return (
    <>
 <h2>my message is below:</h2>
 <p>{message}</p>
    </>
  )
}

export default RepoList
