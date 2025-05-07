import { Sequelize} from "sequelize";
import { tareasModels } from "../models/Tareas";
import { usuariomodels } from "../models/Usuarios";


//cadena de conexión + bd
const sequelize = new Sequelize({dialect: "sqlite",
    storage: "./db.sqlite"

})

//sequelize.define(nombre, atributos, metodos)
sequelize.define("Tareas", tareasModels.tareasAtributos, tareasModels.tareasMetodos);
sequelize.define("Usuarios", usuariomodels.usuarioatributos, usuariomodels.usuariometodos);

//crear fks
sequelize.models.Tareas.belongsTo(sequelize.models.Usuarios, {foreignKey: "UsuarioId"})