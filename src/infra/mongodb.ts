import abstractionsDB from 'mongoose' 
import config from "./config"

const connectionString = config.MONGO_DB_URL!

abstractionsDB.connect(connectionString)

var db = abstractionsDB.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function callback () {
    console.log('Conexão estabelecida com o MongoDB')
});

export default abstractionsDB

