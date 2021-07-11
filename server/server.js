const mongoose = require('mongoose') 
const dotenv = require('dotenv')

process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err.name, err.message )
    process.exit(1);
})

dotenv.config({path:'./config.env'})
const app = require('./app')

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true,
    useFindAndModify: false
}).then(() => console.log('DB connection successful! ...'))     

const PORT = process.env.PORT || 5000;
const server =app.listen(PORT, ()=> {
    console.log(`APP running on port ${PORT}`)  
});


process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.log(err.name, err.message); 
    server.close(() => {
      process.exit(1);
    });
})