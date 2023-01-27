import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'

import todos_router from './routes/todos.js'

dotenv.config();

const app = express();
app.use(cors());

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api/todos', todos_router);

app.listen(process.env.PORT || 5050, ()=>{
  console.log(`Server run on port ${process.env.PORT || 5050}`);
})