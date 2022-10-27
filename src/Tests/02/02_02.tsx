import {isNumberObject} from 'util/types';
export type GovermentBuildingsType = {
    type: 'HOSPITAL' | 'FIRESTATION'
    budget: number
    stuffCount: number
    address: AddressType
}
export type StreetType = {
    title: string
}
export type AddressType = {
    number: number
    street: StreetType
}
export type  HouseType = {
    buildedAt:number
    repaired: boolean
    address: AddressType
}
export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovermentBuildingsType>
    citizensNumber: number
}