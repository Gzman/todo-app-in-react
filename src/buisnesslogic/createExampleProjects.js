import uniqid from "uniqid"

const randomDaysInTheFuture = (days) => {
    const randOffset = Math.floor(Math.random() * days);
    const randomDate = new Date();
    randomDate.setTime(Date.now() + (1000 * 60 * 60 * 24 * randOffset));
    return randomDate;
}

const createExampleProjects = () => {
    return [
        {
            id: uniqid(),
            name: "Unsorted stuff",
            tasks: [
                {
                    id: uniqid(),
                    name: "Groecery shopping",
                    description: "Milk, apples, bananas, bread",
                    dueDate: randomDaysInTheFuture(3),
                    priority: "Low",
                    isComplete: true,
                },
                {
                    id: uniqid(),
                    name: "Help moving",
                    description: "Help a friend moving to munich",
                    dueDate: randomDaysInTheFuture(30),
                    priority: "High",
                    isComplete: false,
                },
                {
                    id: uniqid(),
                    name: "Vacation",
                    description: "Fly to the philippines",
                    dueDate: randomDaysInTheFuture(60),
                    priority: "High",
                    isComplete: false,
                },
            ]
        },
        {
            id: uniqid(),
            name: "Homework",
            tasks: [
                {
                    id: uniqid(),
                    name: "Weight training",
                    description: "10 reps, with 40kg, three times",
                    dueDate: randomDaysInTheFuture(15),
                    priority: "Low",
                    isComplete: true,
                },
                {
                    id: uniqid(),
                    name: "Cutting tree branches",
                    description: "Old dry and dead branches needs to be cut",
                    dueDate: randomDaysInTheFuture(10),
                    priority: "Medium",
                    isComplete: true,
                },
                {
                    id: uniqid(),
                    name: "Clean the car",
                    description: "Wash and vacuum clean the car",
                    dueDate: randomDaysInTheFuture(11),
                    priority: "Low",
                    isComplete: true,
                },
                {
                    id: uniqid(),
                    name: "Garage cleaning",
                    description: "",
                    dueDate: randomDaysInTheFuture(30),
                    priority: "Low",
                    isComplete: false,
                },
            ]
        },
        {
            id: uniqid(),
            name: "Web development",
            tasks: [
                {
                    id: uniqid(),
                    name: "Learn Mongo DB",
                    description: "",
                    dueDate: randomDaysInTheFuture(44),
                    priority: "Low",
                    isComplete: false,
                },
                {
                    id: uniqid(),
                    name: "Learn a server; next.js or express.js",
                    description: "",
                    dueDate: randomDaysInTheFuture(33),
                    priority: "Low",
                    isComplete: false,
                },
                {
                    id: uniqid(),
                    name: "Build the shopping-cart project",
                    description: "",
                    dueDate: randomDaysInTheFuture(19),
                    priority: "Medium",
                    isComplete: false,
                },
                {
                    id: uniqid(),
                    name: "Finish the todo-app project in react",
                    description: "",
                    dueDate: randomDaysInTheFuture(30),
                    priority: "Low",
                    isComplete: true,
                },
                {
                    id: uniqid(),
                    name: "Learn Design Patterns",
                    description: "",
                    dueDate: new Date("2021-03-11"),
                    priority: "High",
                    isComplete: false,
                }
            ]
        },
        {
            id: uniqid(),
            name: "Empty",
            tasks: [],
        },
    ]
}

export { createExampleProjects }