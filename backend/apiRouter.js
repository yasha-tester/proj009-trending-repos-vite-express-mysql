const express = require("express");
const apiRouter = express.Router();

const { insertAllRepos, getAllRepos, updateAllRepos, searchAllRepos } = require("./controller.js");
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

apiRouter.get('/search', async (req, res, next) => {
    try{
        const repos = await searchAllRepos(req.query.findRepo);
        console.log("req sth: ")
        console.log(req.query.findRepo)
        let condList = true;
        res.status(200).json({ repos });
        // i might put found databases in the middle of markup
    } catch(e)
{
    console.log(e);
    res.redirect("/");
}})

module.exports = apiRouter;