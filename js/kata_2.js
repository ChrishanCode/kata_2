const peoples = [
    { name: 'malika', age: 25 },
    { name: 'chalana', age: 30 },
    { name: 'eran', age: 35 },
    { name: 'chathurika', age: 35 },
]

const peopleNames = peoples.map((people) => {
    return people.name
})

console.log(peopleNames);