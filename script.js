'use strict';

const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers // podemos passar calculos nos parametros como default
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  bookings.push(booking);
  console.log(booking);
};
createBooking('LH123');
createBooking('LH123', undefined, 1000); // se quisermos nao definir o numero de passageiros e chamarmos o default
