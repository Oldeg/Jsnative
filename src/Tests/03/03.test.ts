import {StudentType} from '../02/02';
import {addSkill, makeStudentActive} from './03';

let student: StudentType
beforeEach(()=>{
    student =  {
        id: 1,
        'name': 'Oleg',
        age: 26,
        isActive: false,
        address: {
            streetTitle: 'Lva Sapegi 6',
            city: {
                cityTitle: 'Mogilev',
                countryTitle: 'Belarus'
            }
        },
        technologies: [
            {
                id:1,
                title: 'HTML'
            },
            {
                id:2,
                title: 'CSS'
            },
            {
                id:3,
                title: 'React'
            }
        ]
    }
})


test('skill should be added', ()=>{
    expect(student.technologies.length).toBe(3)
    addSkill(student, 'JS')

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined()
})
test('student should be activ', ()=>{
    expect(student.isActive).toBe(false)
    makeStudentActive(student)

    expect(student.isActive).toBe(true)

})
test('student should live in country', ()=>{
    expect(student.address.city.countryTitle).toBe('Belarus')

})
