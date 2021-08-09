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
        $.ajax({})
        var html = ``; // dữ liệu trả về từ backend qua ajax
        $('.searchStandard-list.header__search-list').show();
    } else {
        $('.searchStandard-list.header__search-list').hide();
    }
})
// $(".header__search").on('focusout', function (e) {
//     console.log('clicked ra ngoài');
//     // $('.searchStandard-list.header__search-list').hide();
// })

$('#search2').on('keyup', function (e) {
    var keyword = $(this).val();
    if (keyword) {
        $.ajax({})
        var html = ``; // dữ liệu trả về từ backend qua ajax
        $('.searchFixed-list.header__search-list').show();
    } else {
        $('.searchFixed-list.header__search-list').hide();
    }
})


// lấy data-subcategory
var listNavLink = document.querySelectorAll('.nav-link');
for (var item of listNavLink) {
    item.addEventListener("click", function (e) {
        console.log(e.target.getAttribute("data-subcategory"));
    });
}

// ẩn hiện search list standard
var searchStandardFocusOut;
$('.header__search .searchStandard-list').click(function()
{
    clearTimeout(searchStandardFocusOut);                  
});

$('.header__search').focusout(function()
{
    searchStandardFocusOut = setTimeout(function() {$('.header__search .searchStandard-list').hide()}, 150);
});

$('.header__search').attr('tabIndex', -1);
$('.header__search .searchStandard-list').hide();

// ẩn hiện search list fixed

var searchFixeddFocusOut;
$('.header__searchFixed .searchFixed-list').click(function()
{
    clearTimeout(searchFixeddFocusOut);                  
});

$('.header__searchFixed').focusout(function()
{
    searchFixeddFocusOut = setTimeout(function() {$('.header__searchFixed .searchFixed-list').hide()}, 150);
});

$('.header__searchFixed').attr('tabIndex', -1);
$('.header__searchFixed .searchFixed-list').hide();

