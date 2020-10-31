import dotenv from 'dotenv';
import app from './app';
import 'reflect-metadata';

import './database/mysqlconnection';
import './database/mongoconnection';

dotenv.config();

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`🏃 Server Running at http://localhost:${port}`);
});
