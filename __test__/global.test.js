const text = 'Hola Mundo';
const fruits = ['manzanas', 'melon', 'banana'];
test('Debe contener un texto', () => {
  expect(text).toMatch(/Mundo/);
});
test('tenemos una banana', () => {
  expect(fruits).toContain('banana');
});
test('mayor que', () => {
  expect(10).toBeGreaterThan(9);
});
test('El valor es verdadero', () => {
  expect(true).toBeTruthy();
});
// Reverse strings function
const reverseString = (str, cb) => {
  cb(
    str
      .split('')
      .reverse()
      .join('')
  );
};

// Test callbacks
test('The callback should return a reversed word', () => {
  reverseString('Platzi', str => {
    expect(str).toBe('iztalP');
  });
});

const reverseString2 = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error('Error'));
    }
    resolve(
      str
        .split('')
        .reverse()
        .join('')
    );
  });
}
test('Probar una promesa', () => {
  return reverseString2('Hola').then(string => {
    expect(string).toBe('aloH');
  });
});


test('Probar Async/Await', async()=>{
  const string = await reverseString2('Hola');
  expect(string).toBe('aloH');
});
// afterEach(() => {
//   console.log("Despues de cada prueba");
// });

// afterAll(() => {
//   console.log("Despues de todas las pruebas");
// });

// beforeEach(() => {
//   console.log("Antes de cada prueba");
// });

// beforeAll(() => {
//   console.log("Antes de todas las pruebas");
// });