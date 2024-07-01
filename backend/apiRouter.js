const express = require("express");
const apiRouter = express.Router();

const { insertAllRepos, getAllRepos, updateAllRepos, deleteAllRepos } = require("./controller.js");


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