import express, { Request, Response } from 'express';
import dotenv from "dotenv";
import Timezones from './lib/configs/locationConfig';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get( "/", ( req: Request, res: Response ) => {
    res.send( "Hello world!" );
});

app.get('/timezones', Timezones);

app.listen(port,() => {
  console.log(`application is running on port ${port}.`);
});



