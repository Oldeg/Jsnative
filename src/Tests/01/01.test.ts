import {sum,mult} from "./01";
let a:number ;
let b:number ;
let c:number ;
let d:number ;

beforeEach(()=> {
    a=0
    b=1
    c=2
    d=3
})



test ('answer should be correct',() => {
    const result1 = sum(a,b)
    const result2 = sum(c,d)

    expect(result1).toBe(1)
    expect(result2).toBe(5)
})

test ('answer should be correct', () => {
    const result1 = mult(a,b)
    const result2 = mult(c,d)

    expect(result1).toBe(0)
    expect(result2).toBe(6)
})