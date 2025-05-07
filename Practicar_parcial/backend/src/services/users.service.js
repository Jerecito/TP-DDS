import sequelize from "../databases/databases.js"

const getAll = async () => {const allUsuarios = await sequelize.models.Usuarios.findAll()
    return allUsuarios.map(usuario => usuario.dataValues )};
const createUser = () => {};
const deleteUser = () => {};

const userservices = {
    getAll, createUser, deleteUser
};
export {userservices}