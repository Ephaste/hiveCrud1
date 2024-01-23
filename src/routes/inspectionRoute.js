
import express  from "express";
const inspectionRouter = express.Router();
import { createInspection, getAllInspections } from "../controllers/inspection/inspectionCrud.js";
import {verifyToken} from "../middleware/verifyToken.js";
/*
 * @swagger
 * components:
 *   schemas:
 *     Inspections:
 *       type: object
 *       required:
 *         - emails
 *       properties:
 *         id:
 *           type: string
 *           description: auto generated id
 *         emails:
 *           type: string
 *           description: email of the user
 *         replays:
 *           type: default
 *           description: The response 
 *       example:
 *         id: 2d3f
 *         emails: "example@gmail.com"
 *         replays: "Yeah its okay"
 */
/**
 * @swagger
 * tags:
 *   name: Inspections
 *   description: The inspections managing API
 */
/**
 * @swagger
 * /inspection/create:
 *   post:
 *     summary: Fill informations for your hive
 *     tags: [Inspection]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *          required: true
 *          content:
 *            application/json:
 *               schema:
 *                   $ref: '#/components/schemas/inspection'
 *     responses:
 *       201:
 *          description: The new hive data was successfully created
 *       500:
 *          description: Internal Server Error
 */
/**
 * @swagger
 * /inspection/getAllInspections:
 *    get:
 *      summary: Returns the list of hive information
 *      responses:
 *        200:
 *          description: The list of the hive's inspection
 */
//usersRouter.use(verifyToken);
inspectionRouter.get("/getAllInspections", getAllInspections,verifyToken);
inspectionRouter.post("/createInspection",createInspection,verifyToken);

export default inspectionRouter;
              