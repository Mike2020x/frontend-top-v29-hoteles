export default function calcularCostoRoom(
  checkIn,
  checkOut,
  guests,
  types,
  keep
) {
  const duracionEstadia = Math.ceil(
    (checkOut - checkIn) / (1000 * 60 * 60 * 24)
  ); // Duración de la estadía en días
  const numeroHabitaciones = Math.ceil(guests / 2); // Suponiendo que 2 personas pueden compartir una habitación

  // Cálculo del costo base por noche con factores adicionales
  let costoAdicionalPorPersona = 0;
  let precioBasePorNoche = keep; // mantener el precio base para dar sentido real

  switch (types) {
    case "SINGLE":
      costoAdicionalPorPersona = 20; // Costo adicional por persona
      break;
    case "DOUBLE":
      costoAdicionalPorPersona = 30;
      precioBasePorNoche += 100;
      break;
    case "FAMILY":
      costoAdicionalPorPersona = 40;
      precioBasePorNoche += 200;
      break;
  }

  let costoBasePorNoche = precioBasePorNoche;
  let personasAdicionales = "";
  let costoAdicional = 0;
  let cantidadPersonas = 0;

  // Se aplica un costo adicional si hay dos personas por cada habitación
  if (guests > 0) {
    switch (guests) {
      case 2:
      case 3:
        personasAdicionales = 1;
        break;
      case 4:
      case 5:
        personasAdicionales = 2;
        break;
      case 6:
      case 7:
        personasAdicionales = 3;
        break;
      case 8:
      case 9:
        personasAdicionales = 4;
        break;
      case 10:
        personasAdicionales = 5;
        break;
      default:
        personasAdicionales = 0;
    }

    costoAdicional = costoAdicionalPorPersona * cantidadPersonas;
    costoBasePorNoche += costoAdicional;
  }

  // Solo se aplica si la estadía es mayor o igual a una semana
  let descuentoEstadiaLarga = 0;

  // Se aplica el descuento por estadía larga del 10%
  if (duracionEstadia >= 7) {
    descuentoEstadiaLarga = Math.ceil(costoBasePorNoche * 0.1);
    costoBasePorNoche -= descuentoEstadiaLarga;
  }

  // Cálculo del costo total de la reserva
  let total = duracionEstadia * costoBasePorNoche * numeroHabitaciones;
  const impuesto = Math.ceil(total * 0.1); // Porcentaje de impuesto (10%)
  const precioPasado = total + impuesto; // Se agrega el impuesto al costo total

  // Cálculo del precio pasado con descuento
  const descuento = Math.ceil(precioPasado * 0.2); // Porcentaje de descuento basado en el precio pasado (20%)
  const precioActual = Math.ceil(precioPasado - descuento);

  return {
    duracionEstadia, // numero de días
    numeroHabitaciones, // una habitacion puede tener 1 o 2 personas
    costoAdicionalPorPersona, // Si hay dos personas en una habitación
    precioBasePorNoche, // depende del tipo de hotel
    personasAdicionales, // cantidad de personas adicionales
    costoAdicional, // generado por las personas adicionales
    descuentoEstadiaLarga, // si se reserva de una semana a más
    costoBasePorNoche, // depende del número de personas
    total, // costo de reserva de habitaciones de hotel
    impuesto, // impuesto tributario destinado al gobierno
    precioPasado, // precio normal
    descuento, // descuento por promoción
    precioActual, // precio a pagar
  };
}

// Ejemplo de uso con un solo huésped
// const checkIn = new Date('2023-07-01');
// const checkOut = new Date('2023-07-05');
// const guests = 1;
