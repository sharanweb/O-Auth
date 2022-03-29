const app = require("./index");
const connect = require("./config/db");

app.listen(5007, async()=>{
    try {
        await connect();
    } catch (error) {
        console.log(error.message);
    }
    console.log("listening port 5007");
});