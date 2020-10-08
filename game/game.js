$( document ).ready(function(){
    $( '.tabs li a' ).click(function(){
        $( '.tabs li a' ).removeClass('tabs-active')
        $( this ).addClass('tabs-active')
    })
})