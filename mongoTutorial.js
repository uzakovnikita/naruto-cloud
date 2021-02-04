// create
db.users.insert({
    name: "nikita",
    age: 24,
});
// create
db.users.insertMany([
    {
        name: "vasya",
        age: 20,
    },
    {
        name: "dimon",
        age: 33,
    },
    {
        name: "ubill",
        age: 25,
    },
    {
        name: "anton",
        age: 28,
    },
]);
// read
db.users.find();
// update
db.users.update(
    {
        name: "nikita", // критерий поиска
    },
    {
        $set: {
            name: "NIKITA",
            age: 45,
        },
    }
);
db.users.updateMany(
    {
        age: { $lt: 40 },
    },
    {
        $rename: {
            name: "fullname",
        },
    }
);
//delete
db.users.deleteOne({
    name: "NIKITA",
});
//множественный запрос
db.users.bulkWrite([
    {
        insertOne: {
            document: {
                name: "nastya",
                age: 19,
            },
        },
    },
    {
        deleteOne: {
            filter: { name: "petya" },
        },
    },
]);
//o2m
db.users.update(
    {
        name: "nastya",
    },
    {
        $set: {
            posts: [
                {
                    title: "javascript",
                    text: "js top",
                },
                {
                    title: "javascript",
                    text: "js top",
                },
                {
                    title: "javascript",
                    text: "js top",
                },
                {
                    title: "javascript",
                    text: "js top",
                },
            ],
        },
    }
);
// извлечение постов у юзера
db.users.findOne(
    {
        name: "nastya",
    },
    { posts: 1 }
);
// поиск по наличию конкретного свойства поля
db.users.find({
    posts: {
        $elemMatch: {
            title: "javascript",
        },
    },
});
// поиск по  наличию связи
db.users.find({
    posts: { $exists: true },
});
// адреса в одной коллекции, а сущности котором принадлежат адреса имеют массив с id адресов
const entity = {
    name: "user one",
    adress_ids: [ObjectId("some key of id"), ObjectId("some key of id")],
};

const exampleArray = [
    {
        id: 1,
        name: "one",
        child: true,
        children: [
            { id: 2, name: "two", child: false, children: null },
            {
                id: 3,
                name: "three",
                child: true,
                children: [
                    { id: 4, name: "four", child: false, children: null },
                ],
            },
        ],
    },
    {
        id: 2,
        name: "one",
        child: true,
        children: null,
    },
];
