function submitWaypoints() {
    var waypoints = [];
    var waypointInputs = document.querySelectorAll("input[id^='waypoint-']");
    for (var i = 0; i < waypointInputs.length; i++) {
      waypoints.push(waypointInputs[i].value);
    }
    // Store the waypoints in local storage or send them to the backend
    localStorage.setItem("waypoints", JSON.stringify(waypoints));
    window.location.href = "step3.html";
  }

function submitEndAddress() {
    var endAddress = document.getElementById("end-address").value;
    // Store the ending address in local storage or send it to the backend
    localStorage.setItem("endAddress", endAddress);
    window.location.href = "step4.html";
  }
function submitCargoCapacity() {
    var cargoCapacity = document.getElementById("cargo-capacity").value;
    // Store the cargo capacity in local storage or send it to the backend
    localStorage.setItem("cargoCapacity", cargoCapacity);
    window.location.href = "step5.html";
  }