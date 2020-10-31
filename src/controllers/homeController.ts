import {Request, Response, NextFunction} from "express";
// utils
// import makeValidation from '@withvoid/make-validation';
// models
// import UserModel, { USER_TYPES } from '../models/User.js';

export default {
  onGetHome: async (req: Request, res: Response, next: NextFunction) => {
    console.log("Passei aqui get home")
    try {
      // const users = await UserModel.getUsers();
      return res.status(200).json({ success: true, message: "Get Home" });
    } catch (error) {
      return res.status(400).json({ success: false, error })
    }
   },

   onGetHome2: async (req: Request, res: Response, next: NextFunction) => {
    console.log("Passei aqui get home2")
    try {
      // const users = await UserModel.getUsers();
      return res.status(200).json({ success: true, message: "Get Home2" });
    } catch (error) {
      return res.status(400).json({ success: false, error })
    }
   },


  // onGetUserById: async (req, res) => {

  //   try {
  //     const user = await UserModel.getUserById(req.params.id);
  //     return res.status(200).json({ success: true, user });
  //   } catch (error) {
  //     return res.status(500).json({ success: false, error: error })
  //   }

  //  },


  // onCreateUser: async (req, res) => {
  //   try {
  //     const validation = makeValidation(types => ({
  //       payload: req.body,
  //       checks: {
  //         username: { type: types.string },
  //         firstName: { type: types.string },
  //         lastName: { type: types.string },
  //         origin: { type: types.string },
  //         type: { type: types.enum, options: { enum: USER_TYPES } },
  //       }
  //     }));
  //     if (!validation.success) return res.status(400).json(validation);

  //     const { username, firstName, lastName, origin, type } = req.body;

  //     const userExists = await UserModel.findOne({username: username});
  //     if (userExists) return res.status(400).json({ success: false, error: "Já existe usuário cadastrado com este username" });

  //     const user = await UserModel.createUser(username, firstName, lastName, origin, type);
  //     return res.status(200).json({ success: true, user });
  //   } catch (error) {
  //     console.log('ERROR', error)
  //     return res.status(500).json({ success: false, error: error })
  //   }
  // },


  // onDeleteUserById: async (req, res) => {

  //   try {
  //     const user = await UserModel.deleteByUserById(req.params.id);
  //     return res.status(200).json({
  //       success: true,
  //       message: `Deleted a count of ${user.deletedCount} user.`
  //     });
  //   } catch (error) {
  //     return res.status(500).json({ success: false, error: error })
  //   }

  //  },


}