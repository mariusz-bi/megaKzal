const {Router} = require("express");
const {RouteRecord} = require("../records/route.record");
const routeRouter = Router();

routeRouter
    .get('/', async (req, res)=> {
        const {month, year} = req.query;
        const routeList = await RouteRecord.listSelected(month, year);
        res.json(routeList);

})
    .post('/', async (req, res) =>{
      const data = {
        ...req.body,
        duration: Number(req.body.duration),
      };

        const newRoute = new RouteRecord(data);

        await newRoute.insert();
        res.sendStatus(200);

    })
    .delete('/', async (req, res) => {
        console.log(req.query);
        await RouteRecord.deleteOne(req.query.id);
      res.sendStatus(200);
    });

module.exports = {
   routeRouter,
};