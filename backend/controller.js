const db = require("./db.js");

const Repo = db.Repo;
module.exports = {
    insertAllRepos, getAllRepos, updateAllRepos, deleteAllRepos
};

async function insertAllRepos(){
    
}

async function getAllRepos(){
await Repo.findAll()
const repos = await Repo.findAll();
return repos;
}

async function updateAllRepos(){
    
}

async function deleteAllRepos(){
await employee.destroyAll();
}