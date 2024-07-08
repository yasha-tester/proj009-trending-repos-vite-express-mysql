const { Sequelize } = require("sequelize");
const db = require("./db.js");
const Op = Sequelize.Op;

const Repo = db.Repo;
module.exports = {
    insertAllRepos, getAllRepos, updateAllRepos, searchAllRepos
};

// i may use it for first getAllRepos when you just make it to the world
async function insertAllRepos(){
    
}

async function searchAllRepos(input){
    const repos = await Repo.findAll({
        where: {
            [Op.or]: [
                { name: { [Op.like]: `%${input}%` } },
                { id: { [Op.like]: `%${input}%` } },
            ],
        }
    })
    return repos;
}

async function getAllRepos(){
await Repo.findAll()
const repos = await Repo.findAll();
return repos;
}

async function updateAllRepos(){
    try{
        fetch(`https://api.github.com/search/repositories?q=created:>2024-06-01&sort=stars&order=desc"`)
        .then(response => response.json())
        .then(data => {
                (async () => { 

                console.log("force sync started");
                await Repo.sync({force: true})
                console.log("force sync done");
                
        for(let i = 0; data.items.length > i; i++){
            Repo.create({
                name: data.items[i]["name"],
                repo_desc: data.items[i]["description"],
                starsCount: data.items[i]["stargazers_count"],
                place: [i + 1]
            })
            console.log(`repo ${ i + 1 }created`)
        }

    })()
        console.log(" async finished")
        // here will be timer maybe
        // here will be timer maybe
        }).catch((err) => console.log(err))

    } catch(e){
        console.log(e);
    }
}
