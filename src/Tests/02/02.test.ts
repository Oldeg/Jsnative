import {CityType} from './02_02';

let city: CityType;
beforeEach(() => {
    city = {
        title: 'New Yorl',
        houses: [{
            buildedAt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'White street'
                }
            }
        },
            {
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Happy street'
                    }
                }
            }, {
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: 'Happy street'
                    }
                }
            }],
        governmentBuildings: [{
            type: 'HOSPITAL',
            budget: 200000,
            stuffCount: 200,
            address: {
                number: 100,
                street: {
                    title: 'Central Street'
                }

            }
        }, {
            type: 'FIRESTATION',
            budget: 500000,
            stuffCount: 1000,
            address: {
                number: 101,
                street: {
                    title: 'South Street'
                }

            }
        }],
        citizensNumber: 1000000
    }
})

test('test city should contains 3 houses', () => {
        expect(city.houses.length).toBe(3);

        expect(city.houses[0].buildedAt).toBe(2012);
        expect(city.houses[0].repaired).toBe(false);
        expect(city.houses[0].address.number).toBe(100);
        expect(city.houses[0].address.street.title).toBe('White street');

        expect(city.houses[1].buildedAt).toBe(2008);
        expect(city.houses[1].repaired).toBe(false);
        expect(city.houses[1].address.number).toBe(100);
        expect(city.houses[1].address.street.title).toBe('Happy street');

        expect(city.houses[2].buildedAt).toBe(2020);
        expect(city.houses[2].repaired).toBe(false);
        expect(city.houses[2].address.number).toBe(101);
        expect(city.houses[2].address.street.title).toBe('Happy street');

    }
)
test('test city should contains hospital and fire station', () => {
    expect(city.governmentBuildings.length).toBe(2);

    expect(city.governmentBuildings[0].type).toBe('HOSPITAL');
    expect(city.governmentBuildings[0].budget).toBe(200000);
    expect(city.governmentBuildings[0].stuffCount).toBe(200);
    expect(city.governmentBuildings[0].address.street.title).toBe('Central Street');
    expect(city.governmentBuildings[1].type).toBe('FIRESTATION');
    expect(city.governmentBuildings[1].budget).toBe(500000);
    expect(city.governmentBuildings[1].stuffCount).toBe(1000);
    expect(city.governmentBuildings[1].address.street.title).toBe('South Street');


})