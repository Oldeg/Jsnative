import {isNumber} from 'util';
import {StudentType} from '../02/02';

const sum = (a: number, b: number) => {
    return a + b
}
export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
            id: new Date().getTime(),
            title: skill
        }
    )
}
export const makeStudentActive =(student:StudentType) => {
    student.isActive = true;
}