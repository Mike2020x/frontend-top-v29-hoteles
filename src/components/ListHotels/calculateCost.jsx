export default function calcularCostoReserva(checkIn, checkOut, guests, type) {
  const duracionEstadia = Math.ceil(
    (checkOut - checkIn) / (1000 * 60 * 60 * 24)
  ); // Duración de la estadía en días
  const numeroHabitaciones = Math.ceil(guests / 2); // Suponiendo que 2 personas pueden compartir una habitación

  // Cálculo del costo base por noche con factores adicionales
  let costoAdicionalPorPersona = 0; // Costo adicional por persona
  let precioBasePorNoche = 0

  if(type) {
    switch(type) {
      case "Double Room":
        costoAdicionalPorPersona = 30
        precioBasePorNoche = Math.ceil(Math.random() * 151) + 150;
        break
      case "Family Room":
        costoAdicionalPorPersona = 40
        precioBasePorNoche = Math.ceil(Math.random() * 201) + 200;
        break
    }
  } else {
    costoAdicionalPorPersona = 20
    precioBasePorNoche = Math.ceil(Math.random() * 101) + 100;
  }

  let costoBasePorNoche = precioBasePorNoche;
  let personasAdicionales = "";
  let costoAdicional = 0;
  let cantidadPersonas = 0;

// Se aplica un costo adicional si hay dos personas por cada habitación
if (guests > 1) {
  switch (guests) {
    case 2:
    case 3:
      personasAdicionales = "Additional cost of 1 guest";
      cantidadPersonas = 1;
      break;
    case 4:
    case 5:
      personasAdicionales = "Additional cost of 2 guests";
      cantidadPersonas = 2;
      break;
    case 6:
    case 7:
      personasAdicionales = "Additional cost of 3 guests";
      cantidadPersonas = 3;
      break;
    case 8:
    case 9:
      personasAdicionales = "Additional cost of 4 guests";
      cantidadPersonas = 4;
      break;
    default:
      personasAdicionales = "Additional cost of 5 guests";
      cantidadPersonas = 5;
  }

  costoAdicional = costoAdicionalPorPersona * cantidadPersonas;
  costoBasePorNoche += costoAdicional;
}


  // Solo se aplica si la estadía es mayor o igual a una semana
  let descuentoEstadiaLarga = 0

  // Se aplica el descuento por estadía larga del 10%
  if (duracionEstadia >= 7) {
    descuentoEstadiaLarga = Math.ceil(costoBasePorNoche * 0.1)
    costoBasePorNoche -= descuentoEstadiaLarga
  }

  // Cálculo del costo total de la reserva
  let total = duracionEstadia * costoBasePorNoche * numeroHabitaciones;
  const impuesto = Math.ceil(total * 0.1); // Porcentaje de impuesto (10%)
  const precioPasado = total + impuesto  // Se agrega el impuesto al costo total

  // Cálculo del precio pasado con descuento
  const descuento = Math.ceil(precioPasado * 0.2) // Porcentaje de descuento basado en el precio pasado (20%)
  const precioActual = Math.ceil(precioPasado - descuento);

  return {
    duracionEstadia, // en días
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
