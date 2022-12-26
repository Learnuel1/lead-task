require("dotenv").config();
module.exports ={
    getDBURL:()=>process.env.DB_URL,
    getLOCAL_DBURL:()=>process.env.LOCAL_DB_URL,
    getServerPort:()=>process.env.PORT,
 getFrontendOrigin:()=>process.env.FRONTEND_ORIGIN_URL,
}