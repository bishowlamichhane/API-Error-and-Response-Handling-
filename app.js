import express from 'express'
import router from './routes/userRoutes.router.js'
import errorMiddleware from './middleware/error.middleware.js'
const app=express()

//body parser middleware
app.use(express.json({limit:"16kb"}))

//Routes
app.use('/api/v1/users',router)


//Error Handling middleware
app.use(errorMiddleware)


export default app;