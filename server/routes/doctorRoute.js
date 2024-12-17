import {createDoctor, deleteDoctor, getAll, getOne, updateDoctor} from "../controllers/doctorController.js";
import express from 'express';

const route = express.Router();

route.post("/create",createDoctor);
route.get("/all",getAll);
route.get('/getone/:id',getOne);
route.put("/update/:id",updateDoctor);
route.delete("/delete/:id",deleteDoctor);

export default route;