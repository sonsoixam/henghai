// =======================================================================
// ẨN HIỆN MENU FIXED
window.onscroll = function () {
    //Code tạo hiệu ứng xuất hiện thanh màu đen khi scroll
    if (window.screen.width < 767.98) {
        if (document.body.scrollTop > 165 || document.documentElement.scrollTop > 165) {
            // translate(-50%,0)
            document.getElementById("headerFixed").style.transform = "translate(0,0)";
            document.getElementById("headerStandard").style.display = "none";

        } else {
            document.getElementById("headerFixed").style.transform = "translate(0,-100%)";
            document.getElementById("headerStandard").style.display = "block";
            var barIcon = document.querySelector('.bar-icon__fixed');
            barIcon.style.display = "block";
            var timeIcon = document.querySelector('.times-icon__fixed');
            timeIcon.style.display = "none";
            document.getElementById("navbarNavFixed").className = "navbar-collapse collapse";
            searchStandard = document.querySelector('.searchFixed-list').style.display = "none";
        }
    } else {
        // ẩn hiện menufixed_PC   
        //Code tạo hiệu ứng xuất hiện thanh màu đen khi scroll
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            // translate(-50%,0)
            document.getElementById("headerFixed_PC").style.transform = "translate(0,0)";
            document.getElementById("hederStandard_PC").style.display = "none";
        } else {
            document.getElementById("headerFixed_PC").style.transform = "translate(0,-100%)";
            document.getElementById("hederStandard_PC").style.display = "block";
        }
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
// =======================================================================

// =======================================================================
// ẨN HIỆN SERVICE TAG
function ShowAndHide() {
    var x = document.getElementById('header__middle-service_list');
    if (x.style.display == 'none') {
        x.style.display = 'flex';
    } else {
        x.style.display = 'none';
    }
}
document.querySelector('.header__middle-service-button').onclick = function () {
    ShowAndHide();
}
// =======================================================================