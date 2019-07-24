$(document).ready ( function(){
	$.getScript("js/allSpells.js", function() {
		allSpells.map(function(spell) {
			if (spell.ru.name == "Друзья") {console.log(spell)};
		})
	})


	$(dom.charRace).change(function() {
		let chosenRace = $(dom.charRace).val();
		console.log(chosenRace);
		setRace(chosenRace);
		console.log(playerCharacter);
		// for(var key in race){
		// 	if (key == chosenRace) {
		// 		console.log(race[key].names[0])
		// 	}
		// }
	});
});
var dom = {
	charRace: "#charRace",
}



// The fastest finder function
function containsSimple(arr, elem) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === elem) {
			return true;
		}
	}
	return false;
}
