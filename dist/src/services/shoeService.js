import { faker } from "@faker-js/faker";
export const generateReactInfinityData = () => {
    // Generate random data for Nike React Infinity
    const generatedShoeData = {
        brand: 'Nike',
        model: 'reactinfinity',
        color: 'Red', // Random color from faker
        price: faker.number.int({ min: 130, max: 240 }), // Random price between 130 and 240
    };
    return generatedShoeData;
};
export const generateAirMaxData = () => {
    // Generate random data for Nike React Infinity
    const generatedShoeData = {
        brand: 'Nike',
        model: 'airmax',
        color: 'Blue', // Random color from faker
        price: faker.number.int({ min: 130, max: 340 }), // Random price between 130 and 240
    };
    return generatedShoeData;
};
export const generateCortezData = () => {
    // Generate random data for Nike React Infinity
    const generatedShoeData = {
        brand: 'Nike',
        model: 'cortez',
        color: 'White', // Random color from faker
        price: faker.number.int({ min: 190, max: 420 }), // Random price between 130 and 240
    };
    return generatedShoeData;
};
export const generateAirForceData = () => {
    // Generate random data for Nike React Infinity
    const generatedShoeData = {
        brand: 'Nike',
        model: 'airforce1',
        color: 'White & Black', // Random color from faker
        price: faker.number.int({ min: 80, max: 130 }), // Random price between 130 and 240
    };
    return generatedShoeData;
};
//# sourceMappingURL=shoeService.js.map