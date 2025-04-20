const seedrandom = require('seedrandom');

function generar_num(){
    const semilla = seedrandom(1763519);
    const num_random = [];
    for (let i = 0; i < 100000; i++){num_random.push(semilla.int32())}
    return num_random
}

copnsole.log (generar_num())
