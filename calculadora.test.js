const { sumar, multiplicar } = require('./calculadora');

describe('Pruebas de la Calculadora', () => {
  test('sumar 2 + 3 debe devolver 5', () => {
    expect(sumar(2, 3)).toBe(5);
  });

  test('multiplicar 2 * 3 debe devolver 6', () => {
    expect(multiplicar(2, 3)).toBe(6);
  });

  test('divide 10 / 2 para igualar 5', () => {
  expect(dividir(10, 2)).toBe(5);
  });

  test('retorna mensaje de error al dividir entre cero', () => {
  expect(dividir(10, 0)).toBe("Error: división por cero");
  });
