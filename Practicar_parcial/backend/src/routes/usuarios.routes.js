import express from "express";
import { userservices } from "../services/users.service.js";


const router = express.Router()
router.get = ("/obtenerById/:id", async (req, res) => 
    { 
    try{ const usuarios = await userservices.getById(req.params.id); res.json(usuarios)} 
    catch(error){res.status(500).json({error: "algo salio mal"})}

})

router.post("/crearUsuario", async (req, res) =>{
    try{ const usuario = await userservices.createUser(req.body)
        res.json(usuario)
    }
    catch(error){res.status(500).json({error: "algo salio mal"})}
})


router.delete("/usuarioABorrar", async (req, res) => {
    const {id} = req.query;
    try { await userservices.deleteUser(id)
        res.status(200).json({exito: "El usuario se borró correctamente"})
    }
catch(error){res.status(500).json({error: "algo salio mal"})}

} )
const usuariosRouter = {router}

export {usuariosRouter}