import express from "express";
import {login} from "../controllers/authentication/login.js";
import { signup } from "../controllers/authentication/signup.js";
import { logger } from "../middleware/logger.js";
//import {changePassword} from "../controllers/authentication";
const authRouter = express.Router();
//import {getBill,signup} from "../controllers/authentication";
//import{}
/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     signUp:
 *       type: object
 *       required:
 *         - email
 *         - fullNames
 *         - password
 *         - phoneNo
 *         - location
 *         - role
 *       properties:
 *         email:
 *           type: string
 *           description: The email of the user
 *         fullNames:
 *           type: string
 *           description: The fullNames of the user
 *         password:
 *           type: string
 *           description: The password of the user
 *         phoneNo:
 *           type: string
 *           description: The phoneNo of the user
 *         location:
 *           type: string
 *           description: The location of the user
 *         role:
 *           type: string
 *           description: The role of the user i.e., user or admin
 *       example:
 *         email: ephasteniyonizeye@gmail.com
 *         fullNames: Ephaste NIYONIZEYE
 *         password: myPassword1
 *         phoneNo: "+25070000000"
 *         location: Kigali, Rwanda
 *         role: user
 *     login:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The email of the user
 *         password:
 *           type: string
 *           description: The password of the user
 *       example:
 *         email: emashyirambere@gmail.com
 *         password: myPassword
 *     userEdit:
 *       type: object
 *       required:
 *         - email
 *         - fullNames
 *         - image
 *         - password
 *         - phoneNo
 *         - location
 *         - role
 *       properties:
 *         email:
 *           type: string
 *           description: The email of the user
 *         fullNames:
 *           type: string
 *           description: The fullNames of the user
 *         image:
 *           type: string
 *           format: binary
 *           description: The profile picture of the user
 *         password:
 *           type: string
 *           description: The password of the user
 *         phoneNo:
 *           type: string
 *           description: The phoneNo of the user
 *         location:
 *           type: string
 *           description: The location of the user
 *         role:
 *           type: string
 *           description: The role of the user i.e., user or admin
 *       example:
 *         email: ephasteniyonizeye@gmail.com
 *         fullNames: Ephaste NIYONIZEYE
 *         image: images.jpg
 *         password: myPassword1
 *         phoneNo: "+25070000000"
 *         location: Kigali, Rwanda
 *         role: user
 */
/**
 * @swagger
 * tags:
 *   name: SIGNUP
 *   description: The sign up managing API
 */
/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Create a new user
 *     tags: [Signup]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *          required: true
 *          content:
 *            application/json:
 *               schema:
 *                   $ref: '#/components/schemas/auth/signup'
 *     responses:
 *       201:
 *          description: The new user data was successfully created
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/auth/signup'
 *       500:
 *          description: Internal Server Error
 */
/**
 * @swagger
 * tags:
 *   name: LOGIN
 *   description: The login up managing API
 */
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Create a new user
 *     tags: [Login]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *          required: true
 *          content:
 *            application/json:
 *               schema:
 *                   $ref: '#/components/schemas/auth/login'
 *     responses:
 *       201:
 *          description: The new user data was successfully created
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/auth/login'
 *       500:
 *          description: Internal Server Error
 */


authRouter.post("/login", login);
authRouter.post("/signup",logger,signup);
//authRouter.post("/changePassword", changePassword);


export default authRouter;
