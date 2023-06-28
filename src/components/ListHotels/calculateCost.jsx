export default function calcularCostoReserva(checkIn, checkOut, guests) {
  const precioBasePorNoche = 100; // Math.ceil((Math.random()) * 100 + 100)
  const duracionEstadia = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24)); // Duración de la estadía en días
  const numeroHabitaciones = Math.ceil(guests / 2); // Suponiendo que 2 personas pueden compartir una habitación

  // Factores adicionales
  const porcentajeImpuesto = 0.1; // Porcentaje de impuesto (10%)
  const costoAdicionalPorPersona = 20; // Costo adicional por persona
  const descuentoEstadiaLarga = 0.1; // Porcentaje de descuento por estadía larga (10%)
  const descuentoPrecioPasado = 0.2; // Porcentaje de descuento basado en el precio pasado (20%)

  // Cálculo del costo base por noche con factores adicionales
  let costoBasePorNoche = precioBasePorNoche;
  if (guests > 1) {
    costoBasePorNoche += costoAdicionalPorPersona * (guests - 2); // Se aplican costos adicionales por cada persona adicional
  }

  if (duracionEstadia >= 7) {
    costoBasePorNoche -= costoBasePorNoche * descuentoEstadiaLarga; // Se aplica el descuento por estadía larga
  }

  // Cálculo del costo total de la reserva
  let costoTotal = duracionEstadia * costoBasePorNoche * numeroHabitaciones;
  costoTotal += costoTotal * porcentajeImpuesto; // Se agrega el impuesto al costo total

  // Cálculo del precio pasado con descuento
  const precioPasado = precioBasePorNoche * numeroHabitaciones;
  const precioConDescuento = precioPasado - (precioPasado * descuentoPrecioPasado);

  return {
    costoTotal,
    precioPasado,
    precioConDescuento,
  };
}

// Ejemplo de uso con un solo huésped
// const checkIn = new Date('2023-07-01');
// const checkOut = new Date('2023-07-05');
// const guests = 1;


