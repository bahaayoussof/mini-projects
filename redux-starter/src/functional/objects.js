const person = {
    name: "john",
    address: {
        country: "USA",
        city: "San Francisco"
    }
};

const updated = {
    ...person,
    address: {
        ...person.address,
        city: "New York"
    },
    name: "Bob"
};

// console.log(person);