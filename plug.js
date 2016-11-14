 (function(win,doc,$){
	function CusScrollBar(options){
		this._init(options);
	}
	$.extend(CusScrollBar.prototype,{
		_init:function(options){
			var self = this;
			self.options={
				scrollDir      : "y",	//滚动方向
				contSelector   : "" ,	//滚动内容选择器
				barSelector    : "" ,	//滚动条选择器
				sliderSelector : "" ,	//滚动滑块选择器
				wheelStep	   : "10", //滚轮步长
			},
			$.extend(true,self.options,options||{});
			self._initDomEvent();
			return self;
		},
		_initDomEvent:function(){
			var opts = this.options;
			this.$cont = $(opts.contSelector);
			this.$slider = $(opts.sliderSelector);
			this.$bar = opts.barSelector ? $(opts.barSelector) : self.  $slider.parent();
			this.$doc = $(doc);
			this._initSliderDragEvent()._bindContScroll();
		},
		_initSliderDragEvent:function(){
			 var slider = this.$slider;
			 var slef = this;
			 sliderEl = slider[0];
			 if(sliderEl){
			 	var doc = this.$doc ,
			 	dragStartPagePosition,
			 	dragStartScrollPosition,
			 	dragContBarRate;
			 	function mousemoveHnader(e){
			 		e.preventDefault();
			 		if(dragStartPagePosition == null){
			 			return;
			 		}
			 		sliderEl.scrollTo( dragStartScrollPosition + (e.pageY - dragStartPagePosition)*dragContBarRate );
			 	};
			 	slider.on("mousedown.scroll",function(e){
			 		 e.preventDefault();
			 		  dragStartPagePosition = e.pageY;
			 		  dragStartScrollPosition = self.$cont[0].scrollTop();
			 		  dragContBarRate = self.getMaxScrollPosition()/self.getMaxSliderPositon();
			 		 doc.on("mousemove.scroll",mousemoveHnader).on("mouseup",function(){
			 		 	doc.off(".scroll")
			 		 })
			 	})

			 }
		},
		_bindContScroll:function(){
			var self = this;
			self.$cont.on("scroll",function(){
				var sliderEl = self.$slider && self.$slider[0];
				if(sliderEl){
					sliderEl.style.top = -self.getSliderPosition() + "px";
				};
			});
			return self;
		},
		getSliderPosition(){
			var self = this,
			maxSliderPosition = getMaxSliderPositon();
			return Math.min(maxSliderPosition ,maxSliderPosition*self.$cont[0].scrollTop()/self.getMaxScrollPosition);
		},
		getMaxScrollPosition:function(){
			var self = this;
			return Math.max(self.$cont.Height() ,self.$cont[0].scrollHeight())-self.$cont.Height();
		},
		getMaxSliderPositon:function(){
			var self = this;
			return self.$bar.Height()-self.$slider.Height();
		},
		scrollTo:function(positionVal){
			var self = this;
			self.$cont.scrollTop(positionVal)
		}

	})
	win.CusScrollBar = CusScrollBar;
})(window,document,jQuery)