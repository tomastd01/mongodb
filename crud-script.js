// Crear y cambiar a la nueva base de datos "ecommerce"
use ecommerce;

// Crear colecciones vacías
db.createCollection("products");
db.createCollection("plataforma");


// Insertar documentos en la colección
db.products.insertMany([
    {
        name: "Sony Playstation 5",
        image: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_SX425_.jpg",
        description: "console",
        code: 1,
        price: 4499,
        stock: 784,
        date: ISODate()
    }, 
    {
        name: "Sony Playstation 4 Slim",
        image: "https://m.media-amazon.com/images/I/61n-yWHcmSS._AC_SX679_.jpg",
        description: "console",
        code: 2,
        price: 3248,
        stock: 351,
        date: ISODate()
    },
    {
        name: "Microsoft Xbox Series X",
        image: "https://m.media-amazon.com/images/I/61JGKhqxHxL._SX466_.jpg",
        description: "console",
        code: 3,
        price: 1499,
        stock: 890,
        date: ISODate()
    },
    {
        name: "Microsoft Xbox 360 Slim",
        image: "https://m.media-amazon.com/images/I/41OVLdOpPRL._SX466_.jpg",
        description: "console",
        code: 4,
        price: 149,
        stock: 46,
        date: ISODate()
    }
]);


// Insertar un solo documento en la colección
db.products.insertOne(
    {
        name: "Microsoft Xbox Series S",
        image: "https://m.media-amazon.com/images/I/61JGKhqxHxL._SX466_.jpg",
        description: "console",
        code: 5,
        price: 1799,
        stock: 340,
        date: ISODate()
    }
);

// Filtrar productos con precio menor a 1000
db.products.find({"price": {$lt: 1000}});

// Filtrar productos con precio mayor a 1000 y menor a 3000
db.products.find({$and: [{"price": {$gt: 1000}}, {"price":{$lt: 3000}}]});

// Filtrar productos con precio mayor a 3000
db.products.find({"price": {$gt: 3000}});

// Filtrar el nombre del tercer producto con el precio mas bajo de la colección
db.products.find({"name": 1}).sort({"price": 1}).limit(1).skip(2);

// Actualizar la propiedad stock a 100 para todos los documentos
db.products.updateMany({}, {$set:{"stock": 100}});

// Actualizar la propiedad stock a 0 para los productos con precio mayor a 4000
db.products.updateMany({"price": {$gt:4000}}, {$set:{"stock": 0}}) 

// Eliminar todos los documentos con precio menor a 1000
db.products.deleteMany({price: {$lt: 1000}})

// Crear usuario solo lectura
use admin;
db.createUser(
    {
        user: "pepe",
        pwd: "asd456",
        roles: [
            {role: "read", db: "ecommerce"}
        ]
    }
)
