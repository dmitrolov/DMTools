var gremmy = getPlayerGremmy();
function getPlayerGremmy(){
	char = new Character("Оксана", "Гремми", "Женский", 20);
	setRaceGnome(char);
	setSubRaceGnomeRock(char);

	char.height 	= 4;
	char.weight 	= 40;
	char.alignment 	= "Хаот-нейт (ХН)";
	
	char.background = "Мудрец";
	char.imgURL 	= "img/charGen/characters/GnomeRockMageWoman.jpg";
	
	char.abilityScores.strength 		= 8;
	char.abilityScores.dexterity 		= 12;
	char.abilityScores.constitution 	= 15;
	char.abilityScores.intelligence 	= 17;
	char.abilityScores.wisdom 			= 13;
	char.abilityScores.charisma 		= 10;

	char.abilityScores.strengthMod 		= getAttributeModificator(char.abilityScores.strength);
	char.abilityScores.dexterityMod 	= getAttributeModificator(char.abilityScores.dexterity);
	char.abilityScores.constitutionMod 	= getAttributeModificator(char.abilityScores.constitution);
	char.abilityScores.intelligenceMod 	= getAttributeModificator(char.abilityScores.intelligence);
	char.abilityScores.wisdomMod 		= getAttributeModificator(char.abilityScores.wisdom);
	char.abilityScores.charismaMod 		= getAttributeModificator(char.abilityScores.charisma);

	char.skillsProficiency.Investigation = true;

	return char;
}
console.log(gremmy);
$(document).ready(function () {
	currentPlayer = gremmy;
  // setCurrentPlayer(gremmy);
  buildAboutCharacterInfo();
  buildAbilityScores();
});
function buildAboutCharacterInfo() {
	$(dom.characterImage).append(`<img src=${currentPlayer.imgURL} alt="charImage" width="100%">`);
	$(dom.characterAboutInfo).append(`
		<table border="1" width="100%">
			<tr>
				<td>Пол</td>
				<td>${currentPlayer.sex}</td>
			</tr>
			<tr>
				<td>Возраст</td>
				<td>${currentPlayer.humanAge*currentPlayer.ageMod}</td>
			</tr>
			<tr>
				<td>Рост</td>
				<td>${currentPlayer.height} фута</td>
			</tr>
			<tr>
				<td>Вес</td>
				<td>${currentPlayer.weight} фунтов</td>
			</tr>
			<tr>
				<td>Расса</td>
				<td>${currentPlayer.raceName}</td>
			</tr>
			<tr>
				<td>Подвид</td>
				<td>${currentPlayer.subRaceName}</td>
			</tr>
			<tr>
				<td>Характер</td>
				<td>${currentPlayer.alignment}</td>
			</tr>
			<tr>
				<td>История</td>
				<td>${currentPlayer.background}</td>
			</tr>
		</table>
	`)
}
function buildAbilityScores() {
	$(dom.characterAbilityScores).append(`
		<table class="bigTable" border="1" cellpadding="1" cellspacing="0">
			<tr>
				<th colspan="2">Характеристика</th>
				<th>Бонус</th>
				<th>Навык</th>
				<th>Влад</th>
				<th>Пасс</th>
			</tr>
			<tr border="1px">
				<td>Сила</td>
				<td>${currentPlayer.abilityScores.strength}</td>
				<td>${currentPlayer.abilityScores.strengthMod}</td>
				<td>Атлетика</td>
				<td></td>
				<td>9</td>
			</tr>
			<tr>
				<td rowspan="3">Ловкость</td>
				<td rowspan="3">${currentPlayer.abilityScores.dexterity}</td>
				<td rowspan="3">${currentPlayer.abilityScores.dexterityMod}</td>
				<td>Акробатика</td>
				<td></td>
				<td>11</td>
			</tr>
			<tr>
				<td>Ловкость рук</td>
				<td></td>
				<td>11</td>
			</tr>
			<tr>
				<td>Скрытность</td>
				<td></td>
				<td>11</td>
			</tr>
			<tr>
				<td>Телосложение</td>
				<td>${currentPlayer.abilityScores.constitution}</td>
				<td>${currentPlayer.abilityScores.constitutionMod}</td>
				<td>Выносливость</td>
				<td></td>
				<td>12</td>
			</tr>
			<tr>
				<td rowspan="5">Интеллект</td>
				<td rowspan="5">${currentPlayer.abilityScores.intelligence}</td>
				<td rowspan="5">${currentPlayer.abilityScores.intelligenceMod}</td>
				<td>Анализ</td>
				<td>2</td>
				<td>15</td>
			</tr>
			<tr>
				<td>История</td>
				<td>2</td>
				<td>15</td>
			</tr>
			<tr>
				<td>Магия</td>
				<td>2</td>
				<td>15</td>
			</tr>
			<tr>
				<td>Природа</td>
				<td></td>
				<td>13</td>
			</tr>
			<tr>
				<td>Религия</td>
				<td></td>
				<td>13</td>
			</tr>
			<tr>
				<td rowspan="5">Мудрость</td>
				<td rowspan="5">${currentPlayer.abilityScores.wisdom}</td>
				<td rowspan="5">${currentPlayer.abilityScores.wisdomMod}</td>
				<td>Внимательность</td>
				<td></td>
				<td>11</td>
			</tr>
			<tr>
				<td>Выживание</td>
				<td></td>
				<td>11</td>
			</tr>
			<tr>
				<td>Медицина</td>
				<td></td>
				<td>11</td>
			</tr>
			<tr>
				<td>Проницательность</td>
				<td>2</td>
				<td>13</td>
			</tr>
			<tr>
				<td>Уход за животными</td>
				<td></td>
				<td>11</td>
			</tr>
			<tr>
				<td rowspan="4">Харизма</td>
				<td rowspan="4">${currentPlayer.abilityScores.charisma}</td>
				<td rowspan="4">${currentPlayer.abilityScores.charismaMod}</td>
				<td>Выступление</td>
				<td></td>
				<td>10</td>
			</tr>
			<tr>
				<td>Запугивание</td>
				<td></td>
				<td>10</td>
			</tr>
			<tr>
				<td>Обман</td>
				<td></td>
				<td>10</td>
			</tr>
			<tr>
				<td>Убеждение</td>
				<td></td>
				<td>10</td>
			</tr>
		</table>
		`);
}
var dom = {
	characterImage: '#charImage',
	characterAboutInfo: '#charAboutInfo',

	characterAbilityScores: '#abilityScores',
}


var scarlet = {
	charName: "Скарлет",
	imgURL: "https://i.pinimg.com/originals/5c/a3/6b/5ca36b7a8dac7d48d35676ef42dcb7c3.jpg"
}
var currentPlayer = null;