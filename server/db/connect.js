const mongoose = require('mongoose');

const DB = process.env.DATABASE;

//Database connection online

mongoose.connect(DB, {
    useNewUrlParser: true,
  //  useCreateIndex: true,
    useUnifiedTopology: true
  //  useFindAndModify: false
}).then(() => {
    console.log(`DB connection successfully...`);
    }).catch((err) => console.log(`no DB connection!`));





// mongoose.connect(DB, {useNewUrlParser: true, useUnifiedTopology: true } )
// .then(() => console.log(`DB connection successfully...`))
// .catch((err) => console.log(err));
