app
	.controller('PaintCtrl', function() {
		
		/*The set-up of the canvas*/
		var canvas = document.querySelector('#paint');
		var ctx = canvas.getContext('2d');
		 
		var sketch = document.querySelector('#sketch');
		var sketch_style = getComputedStyle(sketch);
		canvas.width = parseInt(sketch_style.getPropertyValue('width'));
		canvas.height = parseInt(sketch_style.getPropertyValue('height'));
		
		var mouse = {x: 0, y: 0};
		 
		/* Setting up the mouse */
		canvas.addEventListener('mousemove', function(e) {
		  mouse.x = e.pageX - this.offsetLeft;
		  mouse.y = e.pageY - this.offsetTop;
		}, false);
		
		ctx.lineWidth = 4;
		
		$("#colours img").click(function() {
			ctx.strokeStyle = $(this).attr("paint");
			ctx.lineWidth = $(this).attr("lineWidth") || 4;
			ctx.lineJoin = 'round';
			ctx.lineCap = 'round';
			$("#colours img").removeClass("colour_click");
			$(this).addClass("colour_click");	
		});
				
		canvas.addEventListener('mousedown', function(e) {
		    ctx.beginPath();
		    ctx.moveTo(mouse.x, mouse.y);
		 
		    canvas.addEventListener('mousemove', onPaint, false);
		}, false);
		 
		document.addEventListener('mouseup', function() {
		    canvas.removeEventListener('mousemove', onPaint, false);
		}, false);
		 
		var onPaint = function() {
		    ctx.lineTo(mouse.x, mouse.y);
		    ctx.stroke();
		};
				
	});
