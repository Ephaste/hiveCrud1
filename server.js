import  express  from "express";
import bodyParser from "body-parser";
import cors from "cors";
///import "dotenv/config";
import dotenv from "dotenv"
dotenv.config();
import mongoose from "mongoose";
import morgan from "morgan";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import hiveRouter from "./src/routes/hiveRoute.js";


const app =express();
app.use(bodyParser.json());
app.use(cors())
app.use(morgan("dev"))
app.use('/api/v1/hive',hiveRouter);



//pp.db =db;
// const fileSync = require("lowdb/adapters/fileSync");
// const adapter = new fileSync("db.json");
//  const db = low(adapter)

let port = 2000; 
const options = {
  swaggerDefinition: {
    openapi : "3.0.0",
    info: {
      title: "HIVE API",
      version :"1.0.0",
      description: "It is all about Hive  API documentation using swagger",
    },
    servers: [  
      {
        url: "http://localhost:2000"
        //url: "https://holiday-planners.onrender.com/"
      }
    ],
    
    } ,
    apis: ["./src/routes/*.js"],
  }
  // Define the 'apis' array here within 'swaggerOptions'
   // Specify the path to your API route files

const specs = swaggerJSDoc(options)

const swaggerDocs = swaggerJSDoc(options);
app.use("/api-docs",swaggerUI.serve, swaggerUI.setup(specs))
 

app.all('*', (req, res, next) => {
  if (req.originalUrl.startsWith('/api-docs')) {
    next(); // Allow requests to /api-docs to proceed
  }
  

  next(new appError(`Can't find the ${req.originalUrl} on this server!`, 404));
});



console.log(process.env.DB_CONNECTION_DEV);
mongoose.connect(process.env.DB_CONNECTION_PROD).then((res) =>{
  console.log("Database connected");
});
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});