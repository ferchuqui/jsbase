const cities = ['Ciudad de México', 'Bogotá', 'Lima', 'Buenos Aires'];

const randomString = () => {
    return cities[Math.floor(Math.random() * cities.length)];
};

describe('Probar funcionalidades de randomString', () => {

    test('Probar la funcionalidad', () => {
        expect(typeof (randomString())).toBe('string');
    });

    test('Comprobar que no existe una ciudad', () => {
        expect(randomString()).not.toMatch(/Cordoba/);
    });
});