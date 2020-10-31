import express from "express";
import http from "http";
// import Bundler from "parcel-bundler";
import path from "path";
import SocketIOServer from "socket.io";
import logger from "morgan";

import initializeSocketIO from "./socket";

import routes from './routes/index';


const app = express();

const server = new http.Server(app);
const io = SocketIOServer(server);

initializeSocketIO(io);

// const bundler = new Bundler(path.join(__dirname, "../src/client/index.html"));
// app.use(bundler.middleware());


app.use(express.static(path.join(__dirname, 'client')));
app.use(routes);

// app.use(logger("dev"));


/** catch 404 and forward to error handler */
// app.use('*', (req: Request, res: Response, next: NextFunction) => {
//   return res.status(404).json({
//     success: false,
//     message: 'API endpoint doesnt exist'
//   })
// });

export default app;
