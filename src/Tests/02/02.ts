type TechnologiesType = {
    id: number
    title: string
}
type LocalCityType = {
    cityTitle:string
    countryTitle: string
}
type AddressType = {
    streetTitle: string
    city: LocalCityType
}
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}

 export const student: StudentType = {
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

