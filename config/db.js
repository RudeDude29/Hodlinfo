const mongoose = require('mongoose');

let uri = "mongodb+srv://babaramdevkijai029:nTGzYtDmegnFzw17@cluster0.l4j0imk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri).then(()=>{
    console.log('Connected')
  }).catch((err)=>{
    console.log("DB Connect Failed:\n");
    console.log(err);
  });