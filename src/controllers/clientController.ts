import {Request, Response, NextFunction} from "express";


export default {
  index: async (req: Request, res: Response, next: NextFunction) => {
      return res.send('/index.html');
   },


}