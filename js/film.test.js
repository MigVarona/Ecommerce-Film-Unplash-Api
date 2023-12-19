// film.test.js
const { fetchData, createCardsAndModals, addToCart } = require('./film');

// Mock para la función fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ /* mock data aquí */ }),
  })
);

// Mock para jQuery
global.$ = jest.fn();

// Mock para localStorage y window.location
const localStorageMock = {
  setItem: jest.fn(),
};

Object.defineProperty(global, 'localStorage', { value: localStorageMock });

Object.defineProperty(window, 'location', {
  value: { href: '' },
});

describe('fetchData', () => {
  test('debería cargar datos de manera asíncrona', async () => {
    const data = await fetchData();
    // Asegúrate de que los datos sean los esperados
    expect(data).toEqual(/* mock data esperado */);
  });
});

describe('createCardsAndModals', () => {
  test('debería crear tarjetas y modales', () => {
    const mockData = [{ /* datos de ejemplo */ }];
    createCardsAndModals(mockData);

    // Asegúrate de que se hayan llamado a las funciones adecuadas
    expect($.fn.append).toHaveBeenCalled(); // jQuery append
  });

  // Puedes añadir más pruebas según sea necesario
});

describe('addToCart', () => {
  test('debería almacenar el ítem seleccionado y redirigir a checkout.html', () => {
    const mockData = [{ /* datos de ejemplo */ }];
    const index = 0;

    addToCart(index);

    // Verifica que localStorage.setItem se llame con los argumentos correctos
    expect(localStorage.setItem).toHaveBeenCalledWith('selectedItem', JSON.stringify(mockData[index]));

    // Verifica que window.location.href se establezca en 'checkout.html'
    expect(window.location.href).toBe('checkout.html');
  });
});
