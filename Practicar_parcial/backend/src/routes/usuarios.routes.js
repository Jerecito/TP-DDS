import express from "express";
import { userservices } from "../services/users.service.js";


const router = express.Router()
router.get = ("/", async (req, res) => 
    { 
    try{ const usuarios = await userservices.getAll(); res.json(usuarios)} 
    catch(error){res.status(500).json({error: "algo salio mal"})}

})

const usuariosRouter = {router}

export {usuariosRouter}