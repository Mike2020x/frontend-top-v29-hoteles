export default function calcularCostoReserva(checkIn, checkOut, guests) {
  const duracionEstadia = Math.ceil(
    (checkOut - checkIn) / (1000 * 60 * 60 * 24)
  ); // Duración de la estadía en días
  const numeroHabitaciones = Math.ceil(guests / 2); // Suponiendo que 2 personas pueden compartir una habitación

  // Factores adicionales
  const porcentajeImpuesto = 0.1; // Porcentaje de impuesto (10%)
  const costoAdicionalPorPersona = 20; // Costo adicional por persona
  const descuentoEstadiaLarga = 0.1; // Porcentaje de descuento por estadía larga (10%)
  const descuentoPrecioPasado = 0.2; // Porcentaje de descuento basado en el precio pasado (20%)

  // Cálculo del costo base por noche con factores adicionales

  let precioBasePorNoche = Math.ceil(Math.random() * 100) + 100;
  let costoBasePorNoche = precioBasePorNoche;
  if (guests > 1) {
    costoBasePorNoche += costoAdicionalPorPersona * (guests - 2); // Se aplican costos adicionales por cada persona adicional
  }

  if (duracionEstadia >= 7) {
    costoBasePorNoche -= costoBasePorNoche * descuentoEstadiaLarga; // Se aplica el descuento por estadía larga
  }

  // Cálculo del costo total de la reserva
  let total = duracionEstadia * costoBasePorNoche * numeroHabitaciones;
  const impuesto = total * porcentajeImpuesto;
  total += impuesto  // Se agrega el impuesto al costo total
  const costoTotal = total.toString();

  // Cálculo del precio pasado con descuento
  const pasado = Math.ceil(precioBasePorNoche * numeroHabitaciones);
  const precioPasado = pasado.toString()
  const descuento = precioPasado * descuentoPrecioPasado
  const descuentoFinal = Math.ceil(
    precioPasado - descuento
  );
  const precioConDescuento = descuentoFinal.toString()

  return {
    costoTotal,
    precioPasado,
    precioConDescuento,
    duracionEstadia,
    descuento,
    impuesto,
    precioBasePorNoche
  };
}

// Ejemplo de uso con un solo huésped
// const checkIn = new Date('2023-07-01');
// const checkOut = new Date('2023-07-05');
// const guests = 1;
