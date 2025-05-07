import { DataTypes } from "sequelize"
const usuarioatributos= {
    id: {primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER},
    nombre :{type: DataTypes.TEXT,
            allowNull: false},
    apellido:{type: DataTypes.TEXT,
            allowNull: false},
    usuario:{type: DataTypes.TEXT,
            allowNull: false},
    password:{type: DataTypes.TEXT,
            allowNull: false},
    email:{type: DataTypes.TEXT,
            allowNull: false},
    fecha_alta:{type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}
const usuariometodos= {timestamps: false}

const usuariomodels= {usuarioatributos, usuariometodos}

export {usuariomodels}