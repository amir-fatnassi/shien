const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit')
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors')
const cookieParser = require('cookie-parser')

const globalErrorHandler = require('./controllers/errorController')
const FemmeProductRouter = require('./routes/FemmeProductRoutes');
const HommeProductRouter = require('./routes/HommeProductRoutes');
const userRouter = require('./routes/userRoutes');
const PaymentRouter = require('./routes/PaymentRoutes');

console.log(process.env.NODE_ENV )

const app = express();   

app.use(helmet())

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100,
    message: 'Too many requests from this IP, please try again in an hour!' 
});

app.use('/api', limiter);

app.use(express.json({ limit: '10kb' }));
app.use('/public', express.static('public'));
// app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

// app.use((req, res, next) => {
//     console.log(req.cookies.jwt);       
//     next()
// })
app.use(cors())

app.use(mongoSanitize());

app.use('/api/v1/products/femme', FemmeProductRouter); 
app.use('/api/v1/products/homme', HommeProductRouter); 
app.use('/api/v1/booking', PaymentRouter); 
app.use('/api/v1/users', userRouter);               


app.use(globalErrorHandler)

module.exports = app

// c17koqExsCrGYPGa