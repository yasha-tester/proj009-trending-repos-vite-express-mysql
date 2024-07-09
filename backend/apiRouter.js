const express = require("express");
const apiRouter = express.Router();

const { insertAllRepos, getAllRepos, updateAllRepos, searchAllRepos } = require("./controller.js");
const Repo = require("./models/Repo");
const Sequelize = require("sequelize");
const { FORCE } = require("sequelize/lib/index-hints");

// it might be of help when creating separate api
// apiRouter.get('/search', async (req, res, next) => {
//     try{

//         const repos = await searchAllRepos(req.body);
//         console.log("req sth: ")
//         console.log(req.body)

//     req.searchedData =  repos;
//     next()
//                  // i want to put found databases in the middle of markup
//     } catch(e)
// {
//     console.log(e);
//     res.status(400);
// }})

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




// apiRouter.get('/search', (req, res, next) => {
//     res.redirect("/")
// })

module.exports = apiRouter;