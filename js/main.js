//Xử lí sự kiện khi click vào dung lượng
$('.card__memory-item').on('click', function (e) {
    e.preventDefault();
    //lấy dung lượng
    var capacity = this.getAttribute('data-capacity');
    console.log(capacity);
    //lấy id sản phẩm
    var product_id = this.closest('.card.swiper-slide').getAttribute('data-id');
    console.log(product_id);
})


//Xử lí sự kiện khi click vào màu
$('.card__color-item').on('click', function (e) {
    e.preventDefault();
    //lấy dung lượng đang active
    var active_capacity = $(this).closest('.card.swiper-slide').find('.memory-item.active')
        .parent()[0].getAttribute('data-capacity');
    console.log(active_capacity);
    //lấy màu
    var color = this.getAttribute('data-color');
    console.log(color);
    //lấy id sản phẩm
    var product_id = this.closest('.card.swiper-slide').getAttribute('data-id');
    console.log(product_id);
})

//Search auto suggest
$('#search').on('keyup', function (e) {
    var keyword = $(this).val();
    if (keyword) {
        $.ajax({

        })
        var html = ``; // dữ liệu trả về từ backend qua ajax
        $('.searchStandard-list.header__search-list').show();
    } else {
        $('.searchStandard-list.header__search-list').hide();
    }
})

// lấy data-subcategory
var listNavLink = document.querySelectorAll('.nav-link');
for (var item of listNavLink) {
    item.addEventListener("click", function (e) {
        console.log(e.target.getAttribute("data-subcategory"));
    });
}





