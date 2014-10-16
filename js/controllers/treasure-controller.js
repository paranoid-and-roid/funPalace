app
	.controller('TreasureCtrl', function() {
		
		//First, the function to drag the image across. This is based on thenewboston's HTML5 tutorials.		

		function dragAndDrop() {
			mypic = document.getElementById("doctors");
			mypic.addEventListener("dragstart", startDrag, false);
			mypic.addEventListener("dragend", endDrag, false);
			topper = document.getElementById("topper");
			topper.addEventListener("dragover", function(e){e.preventDefault();}, false);	
			topper.addEventListener("drop", dropped, false);
		}
		
		function endDrag(e) {
			pic = e.target;
		}
		
		function startDrag(e) {
			var code = '<img src = "images/spin_doctors.jpg" />';
			  e.dataTransfer.setData("Text", code);
		}
		
		function dropped(e) {
			e.preventDefault();	
			topper.innerHTML = e.dataTransfer.getData("Text");
			 $("#bottomer").css("visibility", "visible").hide().fadeIn(1500);
			    $("#doctors").addClass("trans");
				  $("#topper").css("background", "#ff0");
				    $("#picture p").fadeOut("slow");
					  $("#picture div").slideUp("slow");
		}
				  
		$("#bottomer").click(function() {
			$("#roll_box").css("visibility", "visible");
		});
			
		$("#roll_box").mouseenter(function() {
			$("#bottomer").slideUp(1000);
		});
		
		$("#roll_box").click(function() {
			$("#top").slideUp(1000);
				$("#gradient").show(4000);
		
		setTimeout(function() {	
			$("#gradient").text("Almost there. Now all you have to do is click in here and we will reveal all!");
			},4000);
		});
		
		$("#gradient").click(function() {
			disco();
			
			setTimeout(function() {
			  $("#gradient").text("That's right! The song was called TWO PRINCES").css("background", "#f00").css("color", "#ff0");
			},5000);
			setTimeout(function() {
			  $("#gradient").text("Thank you for playing! We'll have another musical question for you shortly").css("background", "#ff0").css("color", "#f00");
			},13000);	
		});
		
		//The stickman figure is based on code from Introducing HTML5, by Bruce Lawson and Remy Sharp
		
		function disco() {
			
		$("#bottom").mouseenter(function() {
			$("#disco").fadeIn();
		});
		$("#bottom").mouseleave(function() {
			$("#disco").fadeOut();
		});
			
		var discoSong =	document.getElementById("disco");
			//$("#disco").show();
			discoSong.volume = .5;
			discoSong.play();
		
			var x = document.getElementById('dancer');
			disco = x.getContext('2d');
			
			//FIRST GUY
			disco.fillStyle = '#0ff';
			disco.fillRect(0,0, 700, 250);
			
			disco.beginPath();
			disco.arc(100, 50, 30, 0, Math.PI*2, true);
			disco.fillStyle = '#fff';
			disco.fill();	
			
			disco.beginPath();  //stickman's smile
			disco.strokeStyle = '#f00';
			disco.lineWidth = 3;
			disco.arc(100,50,20,0,Math.PI, false);
			disco.stroke();
			
			disco.beginPath();
			disco.fillStyle = '#c00';
			//start the left eye
			disco.arc(90,45,3,0,Math.PI*2, true);
			disco.fill();
			disco.moveTo(110, 45);
			//draw the right eye
			disco.arc(110,45,3,0,Math.PI*2, true);
			disco.fill();
			disco.stroke();
			
			disco.beginPath(); //stickman's body and right leg
			disco.strokeStyle = '#fff';
			disco.moveTo(100, 80);
			disco.lineTo(100, 170);
			disco.stroke();
			disco.beginPath();  //stickman's legs
			disco.moveTo(50, 230);
			disco.lineTo(90, 200);
			disco.lineTo(100, 170);
			disco.lineTo(120, 230);
			disco.stroke();
			disco.beginPath(); //stickman's arms
			disco.moveTo(50, 90);
			disco.lineTo(70, 120);
			disco.lineTo(100, 120);
			disco.lineTo(160, 180);
			disco.stroke();
			setTimeout(disco2, 1000);
			
			//SECOND GUY
			function disco2() {
			disco.fillStyle = '#fc0';
			disco.fillRect(0,0, 700, 250);
			
			disco.beginPath();
			disco.arc(150, 50, 30, 0, Math.PI*2, true);
			disco.fillStyle = '#fff';
			disco.fill();	
			
			disco.beginPath();  //stickman's smile
			disco.strokeStyle = '#f00';
			disco.lineWidth = 3;
			disco.arc(150,50,20,0,Math.PI, false);
			disco.stroke();
			
			disco.beginPath();
			disco.fillStyle = '#c00';
			//start the left eye
			disco.arc(140,45,3,0,Math.PI*2, true);
			disco.fill();
			disco.moveTo(160, 45);
			//draw the right eye
			disco.arc(160,45,3,0,Math.PI*2, true);
			disco.fill();
			disco.stroke();
			
			disco.beginPath(); //stickman's body and right leg
			disco.strokeStyle = '#fff';
			disco.moveTo(150, 80);
			disco.lineTo(150, 190);
			disco.stroke();
			disco.beginPath();  //stickman's legs
			disco.moveTo(90, 240);
			disco.lineTo(110, 200);
			disco.lineTo(150, 190);
			disco.lineTo(170, 220);
			disco.lineTo(200, 240);
			disco.stroke();
			disco.beginPath(); //stickman's arms
			disco.moveTo(90, 100);
			disco.lineTo(120, 130);
			disco.lineTo(150, 110);
			disco.lineTo(190, 110);
			disco.lineTo(210, 180);
			disco.stroke();
			setTimeout(disco3, 1000);
			}
			
			//THIRD GUY
			function disco3() {
			disco.fillStyle = '#6f3';
			disco.fillRect(0,0, 700, 250);
			
			disco.beginPath();
			disco.arc(200, 50, 30, 0, Math.PI*2, true);
			disco.fillStyle = '#fff';
			disco.fill();	
			
			disco.beginPath();  //stickman's smile
			disco.strokeStyle = '#f00';
			disco.lineWidth = 3;
			disco.arc(200,50,20,0,Math.PI, false);
			disco.stroke();
			
			disco.beginPath();
			disco.fillStyle = '#c00';
			//start the left eye
			disco.arc(190,45,3,0,Math.PI*2, true);
			disco.fill();
			disco.moveTo(210, 45);
			//draw the right eye
			disco.arc(210,45,3,0,Math.PI*2, true);
			disco.fill();
			disco.stroke();
			
			disco.beginPath(); //stickman's body and right leg
			disco.strokeStyle = '#fff';
			disco.moveTo(200, 80);
			disco.lineTo(200, 170);
			disco.stroke();
			disco.beginPath();  //stickman's legs
			disco.moveTo(150, 240);
			disco.lineTo(160, 200);
			disco.lineTo(200, 170);
			disco.lineTo(200, 200);
			disco.lineTo(240, 240);
			disco.stroke();
			disco.beginPath(); //stickman's arms
			disco.moveTo(150, 70);
			disco.lineTo(170, 110);
			disco.lineTo(200, 110);
			disco.lineTo(240, 110);
			disco.lineTo(260, 140);
			disco.stroke();
			setTimeout(disco4, 1000);
			}
			//FOURTH GUY
			function disco4() {
			disco.fillStyle = '#F66';
			disco.fillRect(0,0, 700, 250);
			
			disco.beginPath();
			disco.arc(250, 50, 30, 0, Math.PI*2, true);
			disco.fillStyle = '#fff';
			disco.fill();	
			
			disco.beginPath();  //stickman's smile
			disco.strokeStyle = '#f00';
			disco.lineWidth = 3;
			disco.arc(250,50,20,0,Math.PI, false);
			disco.stroke();
			
			disco.beginPath();
			disco.fillStyle = '#c00';
			//start the left eye
			disco.arc(240,45,3,0,Math.PI*2, true);
			disco.fill();
			disco.moveTo(260, 45);
			//draw the right eye
			disco.arc(260,45,3,0,Math.PI*2, true);
			disco.fill();
			disco.stroke();
			
			disco.beginPath(); //stickman's body
			disco.strokeStyle = '#fff';
			disco.moveTo(250, 80);
			disco.lineTo(250, 170);
			disco.stroke();
			disco.beginPath();  //stickman's legs
			disco.moveTo(200, 240);
			disco.lineTo(210, 200);
			disco.lineTo(250, 170);
			disco.lineTo(290, 200);
			disco.lineTo(300, 240);
			disco.stroke();
			disco.beginPath(); //stickman's arms
			disco.moveTo(190, 70);
			disco.lineTo(220, 110);
			disco.lineTo(280, 110);
			disco.lineTo(320, 70);
			disco.stroke();
			setTimeout(disco5, 1000);
			}	
			
			//FIFTH GUY
			function disco5() {
			disco.fillStyle = '#ccf';
			disco.fillRect(0,0, 700, 250);
			
			disco.beginPath();
			disco.arc(300, 50, 30, 0, Math.PI*2, true);
			disco.fillStyle = '#fff';
			disco.fill();	
			
			disco.beginPath();  //stickman's smile
			disco.strokeStyle = '#f00';
			disco.lineWidth = 3;
			disco.arc(300,50,20,0,Math.PI, false);
			disco.stroke();
			
			disco.beginPath();
			disco.fillStyle = '#c00';
			//start the left eye
			disco.arc(290,45,3,0,Math.PI*2, true);
			disco.fill();
			disco.moveTo(310, 45);
			//draw the right eye
			disco.arc(310,45,3,0,Math.PI*2, true);
			disco.fill();
			disco.stroke();
			
			disco.beginPath(); //stickman's body
			disco.strokeStyle = '#fff';
			disco.moveTo(300, 80);
			disco.lineTo(300, 170);
			disco.stroke();
			disco.beginPath();  //stickman's legs
			disco.moveTo(240, 130);
			disco.lineTo(300, 170);
			disco.lineTo(310, 200);
			disco.lineTo(350, 230);
			disco.stroke();
			disco.beginPath(); //stickman's arms
			disco.moveTo(250, 70);
			disco.lineTo(300, 110);
			disco.lineTo(350, 70);
			disco.stroke();
			
			$("canvas").append("<p>That's right. It was <em>Two Princes</em></p>");
			
			
			setTimeout(disco6, 1000);
			}	
			
			//SIXTH GUY	
			function disco6() {
			disco.fillStyle = '#0ff';
			disco.fillRect(0,0, 700, 250);
			
			disco.beginPath();
			disco.arc(350, 50, 30, 0, Math.PI*2, true);
			disco.fillStyle = '#fff';
			disco.fill();	
			
			disco.beginPath();  //stickman's smile
			disco.strokeStyle = '#f00';
			disco.lineWidth = 3;
			disco.arc(350,50,20,0,Math.PI, false);
			disco.stroke();
			
			disco.beginPath();
			disco.fillStyle = '#c00';
			//start the left eye
			disco.arc(340,45,3,0,Math.PI*2, true);
			disco.fill();
			disco.moveTo(360, 45);
			//draw the right eye
			disco.arc(360,45,3,0,Math.PI*2, true);
			disco.fill();
			disco.stroke();
			
			disco.beginPath(); //stickman's body and right leg
			disco.strokeStyle = '#fff';
			disco.moveTo(350, 80);
			disco.lineTo(350, 170);
			disco.stroke();
			disco.beginPath();  //stickman's legs
			disco.moveTo(300, 230);
			disco.lineTo(340, 200);
			disco.lineTo(350, 170);
			disco.lineTo(370, 230);
			disco.stroke();
			disco.beginPath(); //stickman's arms
			disco.moveTo(300, 90);
			disco.lineTo(320, 120);
			disco.lineTo(350, 120);
			disco.lineTo(410, 180);
			disco.stroke();
			setTimeout(disco7, 1000);
			}
			
			//SEVENTH GUY
			function disco7() {
			disco.fillStyle = '#fc0';
			disco.fillRect(0,0, 700, 250);
			
			disco.beginPath();
			disco.arc(400, 50, 30, 0, Math.PI*2, true);
			disco.fillStyle = '#fff';
			disco.fill();	
			
			disco.beginPath();  //stickman's smile
			disco.strokeStyle = '#f00';
			disco.lineWidth = 3;
			disco.arc(400,50,20,0,Math.PI, false);
			disco.stroke();
			
			disco.beginPath();
			disco.fillStyle = '#c00';
			//start the left eye
			disco.arc(390,45,3,0,Math.PI*2, true);
			disco.fill();
			disco.moveTo(410, 45);
			//draw the right eye
			disco.arc(410,45,3,0,Math.PI*2, true);
			disco.fill();
			disco.stroke();
			
			disco.beginPath(); //stickman's body and right leg
			disco.strokeStyle = '#fff';
			disco.moveTo(400, 80);
			disco.lineTo(400, 190);
			disco.stroke();
			disco.beginPath();  //stickman's legs
			disco.moveTo(340, 240);
			disco.lineTo(360, 200);
			disco.lineTo(400, 190);
			disco.lineTo(420, 220);
			disco.lineTo(450, 240);
			disco.stroke();
			disco.beginPath(); //stickman's arms
			disco.moveTo(340, 100);
			disco.lineTo(370, 130);
			disco.lineTo(400, 110);
			disco.lineTo(440, 110);
			disco.lineTo(460, 80);
			disco.stroke();
			setTimeout(disco8, 1000);
			}
			
			//EIGHTH GUY
			function disco8() {
			disco.fillStyle = '#6f3';
			disco.fillRect(0,0, 700, 250);
			
			disco.beginPath();
			disco.arc(450, 50, 30, 0, Math.PI*2, true);
			disco.fillStyle = '#fff';
			disco.fill();	
			
			disco.beginPath();  //stickman's smile
			disco.strokeStyle = '#f00';
			disco.lineWidth = 3;
			disco.arc(450,50,20,0,Math.PI, false);
			disco.stroke();
			
			disco.beginPath();
			disco.fillStyle = '#c00';
			//start the left eye
			disco.arc(440,45,3,0,Math.PI*2, true);
			disco.fill();
			disco.moveTo(460, 45);
			//draw the right eye
			disco.arc(460,45,3,0,Math.PI*2, true);
			disco.fill();
			disco.stroke();
			
			disco.beginPath(); //stickman's body and right leg
			disco.strokeStyle = '#fff';
			disco.moveTo(450, 80);
			disco.lineTo(450, 170);
			disco.stroke();
			disco.beginPath();  //stickman's legs
			disco.moveTo(400, 240);
			disco.lineTo(410, 200);
			disco.lineTo(450, 170);
			disco.lineTo(450, 200);
			disco.lineTo(490, 240);
			disco.stroke();
			disco.beginPath(); //stickman's arms
			disco.moveTo(400, 70);
			disco.lineTo(420, 110);
			disco.lineTo(450, 110);
			disco.lineTo(490, 110);
			disco.lineTo(510, 140);
			disco.stroke();
			setTimeout(disco9, 1000);
			}
			//NINTH GUY
			function disco9() {
			disco.fillStyle = '#F66';
			disco.fillRect(0,0, 700, 250);
			
			disco.beginPath();
			disco.arc(500, 50, 30, 0, Math.PI*2, true);
			disco.fillStyle = '#fff';
			disco.fill();	
			
			disco.beginPath();  //stickman's smile
			disco.strokeStyle = '#f00';
			disco.lineWidth = 3;
			disco.arc(500,50,20,0,Math.PI, false);
			disco.stroke();
			
			disco.beginPath();
			disco.fillStyle = '#c00';
			//start the left eye
			disco.arc(490,45,3,0,Math.PI*2, true);
			disco.fill();
			disco.moveTo(510, 45);
			//draw the right eye
			disco.arc(510,45,3,0,Math.PI*2, true);
			disco.fill();
			disco.stroke();
			
			disco.beginPath(); //stickman's body
			disco.strokeStyle = '#fff';
			disco.moveTo(500, 80);
			disco.lineTo(500, 170);
			disco.stroke();
			disco.beginPath();  //stickman's legs
			disco.moveTo(450, 240);
			disco.lineTo(460, 200);
			disco.lineTo(500, 170);
			disco.lineTo(540, 200);
			disco.lineTo(550, 240);
			disco.stroke();
			disco.beginPath(); //stickman's arms
			disco.moveTo(440, 70);
			disco.lineTo(470, 110);
			disco.lineTo(530, 110);
			disco.lineTo(570, 70);
			disco.stroke();
			setTimeout(disco10, 1000);
			}	
			
			//TENTH GUY
			function disco10() {
			disco.fillStyle = '#ccf';
			disco.fillRect(0,0, 700, 250);
			
			disco.beginPath();
			disco.arc(550, 50, 30, 0, Math.PI*2, true);
			disco.fillStyle = '#fff';
			disco.fill();	
			
			disco.beginPath();  //stickman's smile
			disco.strokeStyle = '#f00';
			disco.lineWidth = 3;
			disco.arc(550,50,20,0,Math.PI, false);
			disco.stroke();
			
			disco.beginPath();
			disco.fillStyle = '#c00';
			//start the left eye
			disco.arc(540,45,3,0,Math.PI*2, true);
			disco.fill();
			disco.moveTo(560, 45);
			//draw the right eye
			disco.arc(560,45,3,0,Math.PI*2, true);
			disco.fill();
			disco.stroke();
			
			disco.beginPath(); //stickman's body
			disco.strokeStyle = '#fff';
			disco.moveTo(550, 80);
			disco.lineTo(550, 170);
			disco.stroke();
			disco.beginPath();  //stickman's legs
			disco.moveTo(490, 130);
			disco.lineTo(550, 170);
			disco.lineTo(560, 200);
			disco.lineTo(600, 230);
			disco.stroke();
			disco.beginPath(); //stickman's arms
			disco.moveTo(500, 70);
			disco.lineTo(550, 110);
			disco.lineTo(600, 70);
			disco.stroke();
			setTimeout(disco2, 1000);
			}	
		}
		
		dragAndDrop();
});

