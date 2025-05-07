import {DataTypes} from "sequelize  "
const tareasAtributos ={
    ID: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    UsuarioId: {
        type: DataTypes.INTEGER,
        allownull: true
    }
}
const tareasMetodos ={}

const tareasModels = {tareasAtributos, tareasMetodos}

export{ tareasModels}