import {createDoctor, deleteDoctor, getAll, getOne, login, register, updateDoctor, logout} from "../controllers/doctorController.js";
import express from 'express';
import auth from "../middlewares/auth.js";
const router = express.Router();

const route = express.Router();

route.post("/create",createDoctor);
route.get("/all",getAll);
route.get('/getone/:id',getOne);
route.put("/update/:id",updateDoctor);
route.delete("/delete/:id",deleteDoctor);

route.post("/register",register);
route.post("/login",login);
route.post("/logout",logout);

export default route;