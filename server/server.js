const app = require('./src/app');
const dbConnect =require('./src/config/db.config');
const { getServerPort } = require('./src/config/env');
const { errorMiddleWareModule } = require('./src/middleware');

const PORT = getServerPort()||3000;
app.use("*",errorMiddleWareModule.notFound);
app.use(errorMiddleWareModule.errorHandler);
app.listen(PORT,async()=>{
    try {
        await dbConnect.mongodbConnect();
        console.log(`server is running on port ${PORT}`)
    } catch (error) {
        console.log(error)
    }
})