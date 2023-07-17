export default function calcularCostoHotel() {
  const reviews = Math.ceil(Math.random() * 10000);

  // Cálculo del costo total de la reserva
  let total = Math.ceil(Math.random() * 101) + 100;
  const impuesto = Math.ceil(total * 0.1); // Porcentaje de impuesto (10%)
  const precioPasado = total + impuesto  // Se agrega el impuesto al costo total

  // Cálculo del precio pasado con descuento
  const descuento = Math.ceil(precioPasado * 0.2) // Porcentaje de descuento basado en el precio pasado (20%)
  const precioActual = Math.ceil(precioPasado - descuento);

  return {
    reviews,
    precioPasado, // precio normal
    precioActual, // precio a pagar
  };
}
