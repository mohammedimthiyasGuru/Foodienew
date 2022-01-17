module.exports = {
    HOST: "cindb.cnywu5ueeyw9.ap-southeast-1.rds.amazonaws.com",
    USER: "cinadmin",
    PASSWORD: "CinAdmin2o2!",
    DB: "foodie",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }  
};