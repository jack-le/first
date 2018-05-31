/**
	*var exaple = [
	*	{
	*		title: 'title',
	*		content: '',
	*		id:1
	*	}
	*]
*/

(function($){
  var tab = function(dom, val){
    val = $.isArray(val)?val:[];
    var titles = '',content='';
    val.forEach(function(val){
            titles+= '<div class="title" data="'+val.id+'">'+val.title+'</div>';

            content+= '<div class="content" id="'+val.id+'">'+val.content+'</div>';
    })
    $(dom).html('<div class="titleWarp">'+titles+'</div>'+
      '<div class="contentWarp" >'+content+'</div>')
    var box = $(dom);
    box.find('.title').on('click',function(el){
       box.find('.title').removeClass('active')
      $(this).addClass('active')
      var id=$(this).attr('data')
      box.find('.content').hide()
      $('#'+id).show()
    })
    box.find('.title').eq(0).trigger("click")
  }
  $.extend({'tab':tab})
})(jQuery)








