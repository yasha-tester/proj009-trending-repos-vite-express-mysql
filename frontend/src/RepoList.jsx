import { useEffect, useState } from 'react'

function RepoList() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/apiRouter')
    .then(res => res.json())
    .then(data => {
        // maybe i should do it in different React function?
        setMessage(data.repos.map((repo) => {
            return <div className='repoBlock'>
    <p>name: {data.repos[repo]["name"]}</p>
    <p>description: {data.repos[repo]["repo_desc"]}</p>
    <p>stars: {data.repos[repo]["starsCount"]}</p>
    <p>place: {data.repos[repo]["place"]}</p>
</div>
            
        }))
        console.log(data.repos[0])
    })
  }, []);
  return (
    <>
 <h2>my message is below:</h2>
 <p>{message}</p>
{/* <div className='repoBlock'>
    <p>name: {message}</p>
    <p>description: {"desc"}</p>
    <p>stars: {"starsCount"}</p>
    <p>place: {"place"}</p>
</div> */}
    </>
  )
}

export default RepoList
