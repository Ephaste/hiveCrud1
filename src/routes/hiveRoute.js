
import express  from "express";
const hiveRouter = express.Router();

//import { createHive, getAll, getbyId, updateHive,deleteHiveById} from "../hive/hiveCrud";
import { createHive, getAll, getbyId, updateHive, deleteHiveById } from "../hive/hiveCrud.js";

/*
 * @swagger
 * components:
 *   schemas:
 *     Hives:
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
 *   name: Hive
 *   description: The hives managing API
 */
/**
 * @swagger
 * hive/create:
 *   post:
 *     summary: Create a new hive
 *     tags: [Hives]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *          required: true
 *          content:
 *            multipart/form-data:
 *               schema:
 *                   $ref: '#/components/schemas/hive'
 *     responses:
 *       201:
 *          description: The new hive data was successfully created
 *       500:
 *          description: Internal Server Error
 */
/**
 * @swagger
 * /hive/getAll:
 *    get:
 *      summary: Returns the list of hives
 *      responses:
 *        200:
 *          description: The list of the hives
 */
/**
 * @swagger
 * /hive/getById/{id}:
 *   get:
 *     summary: Get the  hive by ID
 *     tags:
 *       - Hives
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The contact ID
 *     responses:
 *       200:
 *         description: The hive description by ID
 *       404:
 *         description: The hive was not found
 */
/**
 * @swagger
 * /hive/{id}:
 *   put:
 *     summary: Update the hive by ID
 *     tags:
 *       - Hives
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The contact ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contacts'
 *     responses:
 *       200:
 *         description: The contact was updated
 *       404:
 *         description: The user was not found
 *       500:
 *         description: Some error occurred
 */
/**
 * @swagger
 * /hive/{id}:
 *   delete:
 *     summary: Remove the contact by ID
 *     tags:
 *       - Contacts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The contact ID
 * 
 *     responses:
 *       200:
 *         description: The contact was deleted successfully
 *       404:
 *         description: The contact was not found
 */
//usersRouter.use(verifyToken);
hiveRouter.get("/getAll", getAll);
hiveRouter.post("/create",createHive);
hiveRouter.delete("/:id",deleteHiveById);
// studentsRouter.put("/:id",putData);
 hiveRouter.get("/getById/:id", getbyId);
 hiveRouter.patch("/:id",updateHive);

export default hiveRouter;
              
//module.exports =studentsRouter; 