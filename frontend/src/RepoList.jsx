import { useEffect, useState } from 'react'
import "./style.css"
function RepoList() {
  const [searchItem, setSearchItem] = useState('');
  const [itemObject, setItemObject] = useState([]);
  const [repoList, setRepoList] = useState('');

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

  const filteredItems = itemObject.filter((item) => {
    return item["name"].toLowerCase().includes(searchTerm.toLowerCase())

    // console.log(item["name"].toLowerCase().includes(searchItem.toLowerCase()))
  })

    setRepoList(filteredItems);
  }

  useEffect(() => {
    fetch('/apiRouter')
    .then(res => res.json())
    .then(data => {

      let dataObject = [];

        data.repos.forEach((item) => {
          dataObject.push({
            name: item["name"],
            description: item["repo_desc"],
            stars: item["starsCount"],
            place: item["place"]
          })
        })
        
        setItemObject(dataObject);
        console.log(dataObject)
      }, []);
      }, [])

  return (
    <>
 <input type='text' value={searchItem} onChange={handleInputChange} placeholder='Hello Search Bar..'/>

 {/* list of repositories */}
  {repoList && repoList.map(item => 
 <div className='repoBlock'>
      <p>name: {item["name"]}</p>
      <p>description: {item["description"]}</p>
      <p>stars: {item["stars"]}</p>
      <p>place: {item["place"]}</p>
  </div>) 
  || 
  itemObject.map(item => 
    <div className='repoBlock'>
         <p>name: {item["name"]}</p>
         <p>description: {item["description"]}</p>
         <p>stars: {item["stars"]}</p>
         <p>place: {item["place"]}</p>
     </div>) 
  ||
  <p>No repositories found!</p>
  }
    </>
  )
}

export default RepoList
