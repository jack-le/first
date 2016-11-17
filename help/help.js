    $(document).ready(function() {
        $('.inactive').on("click", function() {
            var self = $(this);
            if (self.siblings('ul').css('display') == 'none') {
                self.parent('li').siblings('li').removeClass('inactives');
                self.addClass('inactives');
                self.siblings('ul').slideDown(100);
                var $aul = self.parents('li').siblings('li').children('ul');
                if ($aul.css('display') == 'block') {
                    $aul.parent('li').children('a').removeClass('inactives');
                    $aul.slideUp(100);
                }
            } else {
                self.removeClass('inactives');
                self.siblings('ul').slideUp(100);
                var $ali = self.siblings('ul').children('li');
                $ali.children('a').addClass('inactives');
                $ali.children('ul').slideUp(100);
                $ali.children('a').removeClass('inactives');
            }
        })
        $(".menu_list").click(function() {
            $(".warp .list").toggleClass("menu_show")
        });
        $(".warp .content").on("click",function(){
            $(".warp .list").removeClass("menu_show");
        })
    });
