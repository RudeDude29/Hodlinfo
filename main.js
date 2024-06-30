const express = require('express');
const cors = require('cors')
require("../Backend/config/db.js");
const {dataRoutes} = require('../Backend/routes/dataRoutes.js');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api',dataRoutes);


app.listen(2700,()=>{
    console.log("-----Server Started-----");
})