// tạo id cho thẻ bộ nhớ và màu trong các Card
//HOME PAGE
CreateActiveSellingProductsMenu(".swiper-wrapper");
// LIST PRODUCTS
CreateActiveListProductsMenu(".products__item");
// tạo menu active cho thẻ bộ nhớ và màu
function CreateActiveListProductsMenu(className) {
    var selector0 = className + ' ' + '.card-body';
    var list = document.querySelectorAll(selector0);

    for (var i = 0; i < list.length; i++) {
        list[i].children[1].children[1].id = "memoryCard-" + i;
        var curentMemoryListProductID = "#" + list[i].children[1].children[1].id;

        ChangeActiveMemoryClass(curentMemoryListProductID);
        list[i].children[2].children[0].id = "colorCard-" + i;
        var curentColorID = "#" + list[i].children[2].children[0].id;
        ChangeActiveColorClass(curentColorID);
    }
}
function CreateActiveSellingProductsMenu(className) {
    var selector1 = className + ' ' + '.card-body';
    var list = document.querySelectorAll(selector1);
    for (var i = 0; i < list.length; i++) {
        list[i].children[1].children[0].id = "memoryCard-" + i;
        var curentMemoryID = "#" + list[i].children[1].children[0].id;
        ChangeActiveMemoryClass(curentMemoryID);
        list[i].children[2].children[0].id = "colorCard-" + i;
        var curentColorID = "#" + list[i].children[2].children[0].id;
        ChangeActiveColorClass(curentColorID);
    }
}
function ChangeActiveMemoryClass(id) {
    // thẻ ul
    var mainNav = document.querySelector(id);

    //các thẻ con
    var listNav = mainNav.getElementsByTagName("a");

    for (var i = 0; i < listNav.length; i++) {
        listNav[i].addEventListener("click", function () {
            //tìm thẻ đang được gắn class active
            var selector = id + ' ' + '.active';
            var current = document.querySelector(selector);
            //Xóa class active của thẻ đang được gắn
            current.className = current.className.replace("active", "");
            //thêm class active vào cho thẻ li được click                
            this.className += " active";
        });
    }
}
function ChangeActiveColorClass(id) {
    // thẻ ul
    var mainNav = document.querySelector(id);

    //các thẻ con
    var listNav = mainNav.getElementsByTagName("img");

    for (var i = 0; i < listNav.length; i++) {
        listNav[i].addEventListener("click", function () {
            //tìm thẻ đang được gắn class active
            var selector = id + ' ' + '.active';
            var current = document.querySelector(selector);
            //Xóa class active của thẻ đang được gắn            
            current.className = current.className.replace("active", "");
            //thêm class active vào cho thẻ li được click                
            this.className += "active";
        });
    }
}

ChangeActiveColorClassWithThumb(".product__color-Tablet");
ChangeActiveColorClassWithThumb(".product__color-PC");
function ChangeActiveColorClassWithThumb(className) {
    var productColor = document.querySelector(className);
    //các thẻ con
    var listLI = productColor.getElementsByTagName("li");
    for (var i = 0; i < listLI.length; i++) {
        listLI[i].addEventListener("click", function () {
            //tìm thẻ đang được gắn class active
            var activeClassName = className + " " + ".active";                       
            var liActive = document.querySelector(activeClassName);
            //Xóa class active của thẻ đang được gắn            
            liActive.className = liActive.className.replace("active", "");
            //thêm class active vào cho thẻ li được click                
            this.className += " active";
        });
    }
}
