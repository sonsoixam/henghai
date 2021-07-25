// ẩn hiện menufixed
window.onscroll = function () {
    //Code tạo hiệu ứng xuất hiện thanh màu đen khi scroll
    if (document.body.scrollTop > 98 || document.documentElement.scrollTop > 98) {
        // translate(-50%,0)
        document.getElementById("headerFixed").style.transform = "translate(0,0)";
        document.getElementById("hederStandard").style.display = "none";
        var barIcon = document.querySelector('.bar-icon');
        barIcon.style.display = "block";
        var timeIcon = document.querySelector('.times-icon');
        timeIcon.style.display = "none";
        document.getElementById("navbarNav").className = "navbar-collapse collapse";
        searchStandard = document.querySelector('.searchStandard-list').style.display = "none";
    } else {
        document.getElementById("headerFixed").style.transform = "translate(0,-100%)";
        document.getElementById("hederStandard").style.display = "block";
        var barIcon = document.querySelector('.bar-icon__fixed');
        barIcon.style.display = "block";
        var timeIcon = document.querySelector('.times-icon__fixed');
        timeIcon.style.display = "none";
        document.getElementById("navbarNavFixed").className = "navbar-collapse collapse";
        searchStandard = document.querySelector('.searchFixed-list').style.display = "none";
    }
}

document.querySelector('.bar-icon').onclick = function () {
    ChangeIconMenuStandard_barIcon();
}
document.querySelector('.times-icon').onclick = function () {
    ChangeIconMenuStandard_timeIcon();
}
document.querySelector('.bar-icon__fixed').onclick = function () {
    var barIcon = document.querySelector('.bar-icon__fixed');
    barIcon.style.display = "none";
    var timeIcon = document.querySelector('.times-icon__fixed');
    timeIcon.style.display = "block";
}
document.querySelector('.times-icon__fixed').onclick = function () {
    var barIcon = document.querySelector('.bar-icon__fixed');
    barIcon.style.display = "block";
    var timeIcon = document.querySelector('.times-icon__fixed');
    timeIcon.style.display = "none";
}
// đóng mở menu button
function ChangeIconMenuStandard_barIcon() {
    var barIcon = document.querySelector('.bar-icon');
    barIcon.style.display = "none";
    var timeIcon = document.querySelector('.times-icon');
    timeIcon.style.display = "block";
}
function ChangeIconMenuStandard_timeIcon() {
    var barIcon = document.querySelector('.bar-icon');
    barIcon.style.display = "block";
    var timeIcon = document.querySelector('.times-icon');
    timeIcon.style.display = "none";    
}

// Search menu
// HeaderStandard
var searchStandard = document.querySelector('.searchStandard-list').style.display;
if(searchStandard == "block"){
    document.querySelector('.input-searchStandard').style.borderBottomLeftRadius = "0";
    document.querySelector('.button-searchStandar').style.borderBottomRightRadius = "0";
}
// HeaderFixed

var searchFixed = document.querySelector('.searchFixed-list').style.display;
if(searchFixed == "block"){
    document.querySelector('.input-searchFixed').style.borderBottomLeftRadius = "0";
    document.querySelector('.button-searchFixed').style.borderBottomRightRadius = "0";
}
