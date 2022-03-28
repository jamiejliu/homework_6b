// create new appointment object
function appt(type, date, time) {
    this.type = type;
    this.date = date;
    this.time = time;
}


// store appointment type
function getType() {
    var type = document.querySelector('input[name="appointmentType"]:checked').value;
    sessionStorage.setItem("apptType", type);
    console.log(type);
}


// store appointment date
function getDate() {
    var dropDown = document.getElementById("dateDropdown");
    var date = dropDown.value;
    sessionStorage.setItem("apptDate", date);
    console.log(date);
}


// store appointment time
function getTime() {
    var time = document.querySelector('input[name="time"]:checked').value;
    sessionStorage.setItem("apptTime", time);
    console.log(time);
}

//call type, date, time
function confirmTypeDateTime() {
    getType();
    getDate();
    getTime();
}

// update confirmation page
function confirmAppointmentType() {
    var type = sessionStorage.getItem("apptType");
    document.getElementById("appt-type").textContent = type;
}

function confirmAppointmentDate() {
    var date = sessionStorage.getItem("apptDate");
    document.getElementById("appt-date").textContent = date;
}

function confirmAppointmentTime() {
    var time = sessionStorage.getItem("apptTime");
    document.getElementById("appt-time").textContent = time;
}


// store new appointment in array
function newAppointment() {
    var appts = JSON.parse(localStorage.getItem("appts"));
    if (appts === null) {
        appts = [];
    }

    console.log(appts);
    var type = sessionStorage.getItem("apptType");
    var date = sessionStorage.getItem("apptDate");
    var time = sessionStorage.getItem("apptTime");
    var newAppt = appt(type, date, time);
    newAppt = new appt(type, date, time);
    console.log(newAppt);
    appts.push(newAppt);
    console.log(appts);
    localStorage.setItem("appts",JSON.stringify(appts));
}

