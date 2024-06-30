const dataModel= require("../Models/dataModel.js");
const axios = require('axios');
const getData = async (req,res)=>{
    
    try {
        const text = await axios.get("https://api.wazirx.com/api/v2/tickers");
        
    
    
    const data = text.data;
    const dataArray = Object.values(data);
    const limitedData = dataArray.slice(0,10);
    limitedData.forEach(async (coinData) => {
        const newModel = new dataModel({
            name: coinData.name,
            last: coinData.last,
            buy: coinData.buy,
            sell: coinData.sell,
            volume: coinData.volume,
            base_unit: coinData.base_unit,
        })
        await newModel.save();
    });
     
     res.json({
        status:"Success",
        data:{
            Coins:limitedData,
        }
     })
    } catch (error) {
        res.status(500);
        res.json({
            status:"Fail caught in catch",
            message:error.message,
        })
    }
    

}

const get10Data = async (req,res)=>{
    // const {limit=10} = req.query;
    
    try {
        const text = await axios.get("https://api.wazirx.com/api/v2/tickers");
        const data = text.data;
        const dataArray = Object.values(data);
        const limitedData = dataArray.slice(0, 10);
        
        for (const coinData of limitedData) {
            await dataModel.findOneAndUpdate(
                { name: coinData.name   
                 },
                {name:coinData.name,
            last: coinData.last,
            buy: coinData.buy,
            sell: coinData.sell,
            volume: coinData.volume,
            base_unit: coinData.base_unit,
                },
                { upsert: false }
            );
        }
        const top10 = await dataModel.find({});
        res.json(top10);
    } catch (error) {
        res.status(500).json({ status: "fail" });
    }
};

const getContiData = async (req, res) => {
    // Define limitedData in the outer scope

    
        try {
            const data = await axios.get("https://api.wazirx.com/api/v2/tickers");
            const dataArray =  Object.values(data.data);
            const limitedData = dataArray.slice(0,10);
            
            res.send(limitedData) // Assign to the outer scope limitedData
            
        } catch (error) {
            console.error("Error fetching data:", error);
        }
   

    // Send response when requested
     // This will send an empty array initially
 
};

module.exports = {
    getData,
    get10Data,
    getContiData
}