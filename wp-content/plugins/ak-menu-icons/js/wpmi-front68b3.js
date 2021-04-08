(function ($) {
    $(document).ready(function () {
        $('.wpmicons-set').each(function(){
           var iposition = $(this).attr('data-iposition');
			var eanimation = $(this).attr('data-eanimation');
			var animationtype = $(this).attr('data-animation');
           if(!$(this).closest('li').hasClass('wpmi-iposition-'+iposition)){
            $(this).closest('li').addClass('wpmi-each-menu-item wpmi-iposition-'+iposition);
           }
			if(eanimation == 1){
				if(!$(this).closest('li').hasClass('wpmi-enable-animation')){
                $(this).closest('li').addClass('wpmi-enable-animation '+animationtype);
               }
		}
        });
  });//$(function () end
}(jQuery));
