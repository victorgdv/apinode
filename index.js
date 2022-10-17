const express = require("express"); 
const {connect} = require("./src/api/utils/db")
const presidentsRouter = require ("./src/api/routes/presidents.routes")
const PORT = 8000;

const app = express();
connect ();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use ("/presidents" , presidentsRouter);
app.listen(PORT, () => console.log(`listening on port: http://localhost:${PORT}`));