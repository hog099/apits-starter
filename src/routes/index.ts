import express, {Request, Response, NextFunction} from 'express';

// middlewares
// import { encode } from '../middlewares/jwt.js';
// import { main } from '../middlewares/main';

import ClientController from '../controllers/clientController';
import HomeController from '../controllers/homeController';

const routes = express.Router();

// routes.post('/login/:userId', encode, (req, res, next) => {
//     return res.status(200).json({success: true, authorization: req.authToken });
//   });

routes
// .get('/', ClientController.index);
.get('/', (req: Request, res: Response, next: NextFunction) => {
     return res.send('/index.html');
   });

routes
  // .get('/api/home', async (req: Request, res: Response)=>{
  //   return res.status(200).json({ success: true, message: "Get Home" });
  // })
  .get('/api/home', HomeController.onGetHome)
  .post('/api/home2', HomeController.onGetHome2)
  // .get('/:id', user.onGetUserById)
  // .delete('/:id', user.onDeleteUserById)






export default routes;
