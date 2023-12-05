const router = require("express").Router()
const client = require("../db/client")



router.get("/", async (req, res, next) => {
  try {
    const { rows: robots } = await client.query('SELECT * FROM robots');
    console.log(robots);
    return res.json({ robots }); 
  } catch (error) {
    next(error);
  }
})





module.exports = router