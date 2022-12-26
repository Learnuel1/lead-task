const { MongoClient } = require("mongodb");
const { getDBURL,getLOCAL_DBURL } = require("../env"); 
const mongodbConnect = async () => {
  try { 
    console.log(`Connecting to database...`);
    const DBURL =getDBURL()||getLOCAL_DBURL();
const client = new MongoClient(DBURL);

    await client.connect();
    console.log(`Database connected...`);
  } catch (error) {
    console.log(error);
    process.exit(-1);
  }
}
        
module.exports={
    mongodbConnect,
}