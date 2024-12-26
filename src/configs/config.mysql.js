require('dotenv').config()

module.exports = {
    "development": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.MYSQL_DB_HOST,
        "port": process.env.MYSQL_DB_PORT,
        "dialect": "mysql",
        "define": {
            freezeTableName: false,
        }

    }
}


