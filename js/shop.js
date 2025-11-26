$(document).ready(function() {
    $('.cart-add').on('click', function(event){
        event.preventDefault();
        const card = $(this).closest('.shopping-col');
        const subject = card.find('.product-title').text().trim();
        const category = card.data('category');
        const params = new URLSearchParams({ subject, category });
        const url = 'contact-style-2.html?' + params.toString() + '#rfq';
        window.location.href = url;
    });

    const applyFilter = (cat) => {
        const items = $('.shopping-col');
        if (cat === 'all') {
            items.parent().show();
            return;
        }
        items.each(function(){
            const match = $(this).data('category') === cat;
            $(this).parent()[match ? 'show' : 'hide']();
        });
    };

    $('.cat-item ul li a').on('click', function(e){
        e.preventDefault();
        const cat = $(this).data('cat');
        $('.cat-item ul li').removeClass('active');
        $(this).closest('li').addClass('active');
        applyFilter(cat);
    });

    $('.search-sidebar .form-control').on('input', function(){
        const q = $(this).val().trim().toLowerCase();
        const items = $('.shopping-col');
        if(!q) {
            const active = $('.cat-item ul li.active a').data('cat') || 'all';
            applyFilter(active);
            return;
        }
        items.each(function(){
            const title = $(this).find('.product-title').text().toLowerCase();
            $(this).parent()[title.indexOf(q) !== -1 ? 'show' : 'hide']();
        });
    });
});