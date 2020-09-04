Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(),0,1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay())/7);
} 

function sjekkVeke() {
    thisDate = new Date()
    week = thisDate.getWeek().toString()
    document.getElementById("veke").innerHTML = "week = " + week
    document.getElementById("dobbeltime").innerHTML = "dobbeltime = " + (week % 2 == 0)
}

document.addEventListener('DOMContentLoaded', function() {
    sjekkVeke();
});