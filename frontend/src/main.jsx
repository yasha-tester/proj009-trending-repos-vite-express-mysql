import React from 'react'
import ReactDOM from 'react-dom/client'
import RepoList from './RepoList.jsx'
import Timer from './Timer.jsx'
import ForceSync from './ForceSync.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Timer />
    <ForceSync />
    {/* <SearchBar /> */}
    <RepoList />
  </React.StrictMode>,
)
