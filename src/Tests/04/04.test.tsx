

test('Take man older than 90', ()=>{
    const ages = [18,20,90,100,1,14,22];
    const oldAges = ages.filter(age => age>90);
    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)

})

test('get only completed tasks', ()=>{
    const  tasks = [
        {id:1,title: 'Bread', isDone: false},
        {id:2,title: 'Milk', isDone: true},
        {id:3,title: 'Meat', isDone: false},
        {id:4,title: 'ice-cream', isDone:true}
    ]

    const completed = tasks.filter(task =>
        task.isDone )

    expect(completed.length).toBe(2)
    expect(completed[0].title).toBe('Milk')
    expect(completed[1].title).toBe('ice-cream')
})
