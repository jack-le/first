var Accordion = function(el, multiple) { //下拉菜单效果
         this.el = el || {};
         this.multiple = multiple || false;
         var menu = this.el.find('.menu-first');
         var data = window.localStorage.getItem("collapsepoint");
         if (data != null) {
             var arr = data.split("|");
             menu.parent().eq(parseInt(arr[1])).find(".menu-second").show().children().eq(parseInt(arr[0])).find(".point").show();
         } else {
             var index = window.localStorage.getItem("collapse");
             index && menu.eq(index).next().show();
         }

         menu.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
     };
     Accordion.prototype.dropdown = function(e, index) {
         var $el = e.data.el;
         $this = $(this),
             $next = $this.next();
         $next.slideToggle();
         $this.parent().toggleClass('open');
         window.localStorage.setItem("collapse", $this.parent().index());
         if (!e.data.multiple) {
             $el.find('.menu-second').not($next).slideUp().parent().removeClass('open');
         };
         $('.menu-first').each(function() {
             $(this).removeClass('active')
         })
         $this.addClass('active');
     };
