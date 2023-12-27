import express from "express"
import db from "./config/database.js"
import router from "./routes/routes.js"

const app = express()


app.use(express.json())
app.use(router)


// connection
async function connectToDB() {
    try {
      db.execute('SELECT 1');
      console.log('Database Connected..');
    } catch (error) {
      console.error(error);
    }
}
connectToDB()


const port = 3000
app.listen(port, () => {
    console.log(`app listening to port ${port}!`);
})