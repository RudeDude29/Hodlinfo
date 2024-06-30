const express = require('express');
const {getData,get10Data,getContiData} = require('../components/dataComponents.js');

const dataRoutes = express.Router();

dataRoutes.route("/").get(getData);
dataRoutes.route("/list").get(get10Data);
dataRoutes.route("/live").get(getContiData);
module.exports = {
    dataRoutes
}