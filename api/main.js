const express = require('express');
const cors = require('cors')
require("../config/db.js");
const {dataRoutes} = require('../routes/dataRoutes.js');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api',dataRoutes);


app.listen(2700,()=>{
    console.log("-----Server Started-----");
})