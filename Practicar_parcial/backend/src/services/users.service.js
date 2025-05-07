import sequelize from "../databases/databases.js"

const getAll = async () => {const allUsuarios = await sequelize.models.Usuarios.findAll()
    return allUsuarios.map(usuario => usuario.dataValues )};

const getById = async (id) => {
    const usuario = await sequelize.models.Usuarios.findByPk(id)
    return usuario.dataValues
}
 

const createUser = async (body) => {
    const usuarioACrear = await sequelize.models.Usuarios.create({
        nombre: body.nombre, 
        apellido: body.apellido, 
        usuario: body.usuario, 
        password: body.password, 
        email: body.email})
    return usuarioACrear.dataValues
};
const deleteUser = async (idUsuario) => {
    const usuarioABorrar = await sequelize.models.Usuarios.destroy({where: {id: idUsuario}})
};

const userservices = {
    getAll, createUser, deleteUser
};
export {userservices}