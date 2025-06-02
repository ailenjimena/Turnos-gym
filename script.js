const clasesDisponibles = ["Zumba", "Funcional", "Boxeo", "Yoga", "Calistenia"];
const horariosDisponibles = ["08:00", "10:00", "14:00", "18:00", "20:00"];
const maxCupos = 5;
let reservas = {};

// Inicializar estructura de reservas
for (let clase of clasesDisponibles) {
  reservas[clase] = {};
  for (let horario of horariosDisponibles) {
    reservas[clase][horario] = [];
  }
}

function reservarTurno() {
  const clase = document.getElementById('clase').value;
  const horario = document.getElementById('horario').value;

  // Cuadro de diálogo prompt para ingresar nombre del usuario
  let nombre = prompt(`Ingrese su nombre para reservar ${clase} a las ${horario}:`);

  if (!nombre) {
    alert("Debe ingresar un nombre para completar la reserva.");
    return;
  }

  // Validar si hay cupo disponible
  if (reservas[clase][horario].length >= maxCupos) {
    alert(`Lo sentimos, no hay más cupos disponibles para ${clase} a las ${horario}.`);
    return;
  }

  // Confirmar reserva con el usuario
  let confirmacion = confirm(`¿Confirmas tu reserva para ${clase} a las ${horario}, ${nombre}?`);
  if (!confirmacion) {
    alert("Reserva cancelada.");
    return;
  }

  // Registrar la reserva
  reservas[clase][horario].push(nombre);

  // Mostrar mensaje en la interfaz
  const mensaje = `✨ Turno reservado para <strong>${nombre}</strong> en <strong>${clase}</strong> a las <strong>${horario}</strong> hs. 🏋️‍♂️`;
  document.getElementById('resultado').innerHTML = mensaje;

  // Usar console.log para ver el estado de las reservas
  console.log("Estado actual de reservas:", reservas);
}
