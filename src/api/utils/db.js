const mongoose = require ("mongoose");

const DB_URL = "mongodb+srv://root:root@cluster0.6wivmdo.mongodb.net/usapresidents?retryWrites=true&w=majority"; //Declaro una variable con mi BBDD, en este caso con mi mongo en local
const connect = async () => {
    try {
        //Conectar a la BBDD
        const DB = await mongoose.connect(DB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const {name, host} = DB.connection;

        console.log(`Connected to ${name} DB in host:${host}`);
    } catch (error) {
        console.log(`He tenido un error al contectar con mi BBDD ${error}`)
    }
}


module.exports = {connect}