import express from 'express'
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes/index.js';
// import model from './model/index.js';
// import userRoutes from '../api/routes/users.js'
// import authRoutes from '../api/routes/auth.js'
// import passwordResetRoutes from '../api/routes/passwordReset.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


// connection(); 

//middlewares
app.use(express.json());
app.use(cors());
//routes
// app.use("/api/users",userRoutes);
// app.use("/api/auth",authRoutes);
// app.use("/api/password-reset",passwordResetRoutes);
// app.use("/api/auth",authRoutes);



routes(app);

mongoose.connect('mongodb://localhost:27017/UniSearch');

export default app;