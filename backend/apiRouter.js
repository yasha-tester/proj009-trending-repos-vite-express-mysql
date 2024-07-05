const express = require("express");
const apiRouter = express.Router();

const { insertAllRepos, getAllRepos, updateAllRepos, deleteAllRepos, searchAllRepos } = require("./controller.js");
const Repo = require("./models/Repo");
const Sequelize = require("sequelize");
const { FORCE } = require("sequelize/lib/index-hints");


// Get all Repos

apiRouter.get('/', async (req, res, next) => {
    try{
        const repos = await getAllRepos();
        res.status(200).json({ repos })
    } catch(e)
{
    console.log(e);
    res.sendStatus(500);
}})

apiRouter.get('/fs', async (req, res, next) => {
    try{
        const repos = await updateAllRepos();
        res.redirect("/")
    } catch(e)
{
    console.log(e);
    res.redirect("/");
}})

apiRouter.get('/search', async (req, res, next) => {``
    try{
        const repos = await searchAllRepos(req.query.findRepo);
        console.log("req sth: ")
        console.log(req.query.findRepo)
        res.status(200).json({ repos });
        // i might put found databases in the middle of markup
    } catch(e)
{
    console.log(e);
    res.redirect("/");
}})

apiRouter.get('/weekly', async (req, res, next) => {
    try{
        fetch('https://github.com/trending?since=weekly&spoken_language_code=')
        .then(response => response.text())
        .then(data => {
        console.log(data)
        var resData = data;
        })
        res.json({ "it works but no var": "yes" });

    } catch(e){
        console.log(e);
        res.sendStatus(400);
    }
})

apiRouter.get('/7daysago', async (req, res, next) => {
    try{
        fetch(`https://api.github.com/search/repositories?q=created:>2024-06-01&sort=stars&order=desc"`)
        .then(response => response.json())
        .then(data => {
            // let reposObject = {};
                (async () => { 

                console.log("force sync started");
                await Repo.sync({force: true})
                console.log("force sync done");
                
        for(let i = 0; data.items.length > i; i++){
            /*
            // unneccessary object of repos data (written for fun)
            reposObject[i] = [];
            reposObject[i]["name"] = data.items[i]["name"];
            reposObject[i]["desc"] = data.items[i]["description"];
            reposObject[i]["starsCount"] = data.items[i]["stargazers_count"];
            reposObject[i]["place"] = [i+1];
*/
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
        
        res.json(data);
        }).catch((err) => console.log(err))

    } catch(e){
        console.log(e);
        res.sendStatus(400);
    }
})

// create a repo (wont be used, it's a sketch for me to understand what to do)
apiRouter.post('/', async (req, res, next) => {
    try{
        const name = req.body.repo.name;
        const desc = req.body.repo.desc;
        const starsCount = req.body.repo.starsCount;
        const place = req.body.repo.place;

    } catch(e){
        console.log(e);
        res.sendStatus(400);
    }
})

module.exports = apiRouter;