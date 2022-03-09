let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
let user_time = sessionStorage.getItem("time");
let total_points=sessionStorage.getItem("total");
let total=total_points*10;
let time=user_time+" Sec";

document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.points").innerHTML = user_points;
document.querySelector("span.time_taken").innerHTML = time;
document.querySelector("span.total").innerHTML = total;