
const defaultEventName = "";
const defaultEventDate = new Date("2023-11-04T17:00:00");

// Muestra el nombre del evento en el elemento con ID "eventName"
const eventNameElement = document.getElementById("eventName");
eventNameElement.textContent = defaultEventName;

// Calcula la diferencia de tiempo entre la fecha predeterminada y la fecha y hora actual
const timeRemaining = timeDiff(defaultEventDate);

// Muestra la cantidad de días, horas y minutos restantes en el contenedor de eventos
const eventsContainer = document.getElementById("eventsContainer");
eventsContainer.innerHTML = `
    <div class="event">
        <div class="days">
            <div class="box">
                <span class="days-number">${timeRemaining.days}</span>
                <span class="date-text">días</span>
            </div>
        </div>
        <div class="hours">
        <div class="box">
            <span class="hours-number">${timeRemaining.hours}</span>
            <span class="hours-text">horas</span>
            </div>
        </div>
        <div class="minutes">
        <div class="box">
            <span class="minutes-number">${timeRemaining.minutes}</span>
            <span class="minutes-text">minutos</span>
            </div>
        </div>
    </div>
`;

// La función timeDiff calcula la diferencia de tiempo en días, horas y minutos
function timeDiff(targetDateTime) {
    const targetTime = targetDateTime.getTime();
    const currentTime = new Date().getTime();
    const timeDifference = targetTime - currentTime;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    return {
        days,
        hours,
        minutes
    };
}
