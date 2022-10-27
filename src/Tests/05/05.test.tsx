 type PeopleType = {
    name: string
    age: number
}
let people:Array<PeopleType> = [];
beforeEach(()=> {
     people = [
        {name: 'Andrey Ivanov', age: 25},
        {name: 'Ivan Petrov', age: 45},
        {name: 'Vova Sidorov', age: 29}
    ]
})
test('Greeting message',()=> {
    const greeting = people.map(man => `Hello ${man.name.split(' ')[0]}.Welcome to IT-incubator`)
    expect(greeting.length).toBe(3)
    expect(greeting[0]).toBe('Hello Andrey.Welcome to IT-incubator')
    expect(greeting[1]).toBe('Hello Ivan.Welcome to IT-incubator')
    expect(greeting[2]).toBe('Hello Vova.Welcome to IT-incubator')
})