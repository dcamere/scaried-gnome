window.onload=start;

function start() {
	var game = document.getElementById('game');
			var box = document.getElementById('box');

			var keys ={};
			keys.LEFT = 37;
			keys.RIGHT = 39;
			keys.UP = 38;
			keys.DOWN = 40;
			keys.SPACE = 32;

			var character = {
				x: 100,
				y: 100,
				speedMultiplier: 20,
				element: box
			};

			document.body.onkeyup = document.body.onkeydown = function(e){
				var kc = e.keyCode || e.which;
				keys[kc] = e.type == 'keydown';
				console.log(e.keyCode);
			};

			var moveCharacter = function(dx, dy){
				character.x += (dx||0)* character.speedMultiplier;
				character.y += (dy||0)* character.speedMultiplier;
				character.element.style.left = character.x + 'px';
				character.element.style.top = character.y + 'px';
			}

			var degrees = 20;
			var rotateCharacter = function(){
				degrees++;
				character.element.style.transform = 'rotate('+degrees+'deg)';
			}
			//Por desarrollar
			var onCollide = function(character,dx,dy){

			}

			var detectCharacterMovement = function(){
				if(keys[keys.LEFT]){
					moveCharacter(-1, 0);
				}
				else if(keys[keys.RIGHT]){
					moveCharacter(1,0);
				}
				else if(keys[keys.UP]){
					moveCharacter(0 , -1)
				}
				else if(keys[keys.DOWN]){
					moveCharacter(0 , 1);
				}
				else if(keys[keys.SPACE]){
					rotateCharacter();
				}
			};
			setInterval(function(){
				detectCharacterMovement();
			}, 1000/24);
}