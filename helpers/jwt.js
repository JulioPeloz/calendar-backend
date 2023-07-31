const jwt = require('jsonwebtoken');

const generarJWT = ( uid, name ) => {
    return new Promise( ( resolve, reject ) => {

        const payload = {uid, name};
        
        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '2h'
        }, (err, token) => { //Este es un callback que se va a disparar si hubiera un error y con el token
            if(err){
                console.log(err);
                reject('No se pudo generar el token');
            }

            resolve(token);
        })
    })
}

module.exports = {
    generarJWT
}