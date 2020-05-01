

MONGO DB:
//While installation don't choose to run as service
//Will be installed for example E:\Program Files\MongoDB\Server\4.2\bin
//Run in cmd mongod.exe (not mongo.exe)
//You need to create manually folder E:\data\db  where MongoDB default databases will be created
//In package json add this line so you can start MongoDB from npm
"scripts": {

    "mongodb": "md mongo-db & \"E:/Program Files/MongoDB/Server/4.2/bin/mongod.exe\" --port 27017 --dbpath mongo-db"
  },
start:
npm run mongodb

Backup MongoDB
"scripts": {

     "mongodb-backup": "md mongo-db-backup & \"E:/Program Files/MongoDB/Server/4.2/bin/mongodump.exe\" --db test-db --out mongo-db-backup"
  },
start:
npm run mongodb-backup
//database name is "test-db", can be any or --c "name of colleciton"