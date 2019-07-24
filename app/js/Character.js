function Character(playerName, characterName, sex, humanAge) {
	this.playerName = playerName;		// Имя игрока
	this.characterName = characterName;	// Имя персонажа
	this.sex = sex;						// Пол персонажа
	this.humanAge = humanAge;			// Возраст персонажа по человеческим меркам

	this.abilityScores = {
		strength: 0,
		dexterity: 0,
		constitution: 0,
		intelligence: 0,
		wisdom: 0,
		charisma: 0,

		strengthMod: 0,
		dexterityMod: 0,
		constitutionMod: 0,
		intelligenceMod: 0,
		wisdomMod: 0,
		charismaMod: 0,
	}

	this.skillsProficiency = { 	// Владение навыками
		Athletics: false,		// Атлетика

		Acrobatics: false,		// Акробатика
		SleightOfHand: false,	// Ловкость рук
		Stealth: false,			// Скрытность

		Endurance: false,		// Выносливость

		Investigation: false,	// Анализ
		History: false,			// История
		Arcana: false,			// Магия
		Nature: false,			// Природа
		Religion: false,		// Религия

		Perception: false,		// Внимательность
		Survival: false,		// Выживание
		Medicine: false,		// Медицина
		Insight: false,			// Проницательность
		AnimalHandling: false,	// Уход за животными
		
		Performance: false,		// Выступление
		Intimidation: false,	// Запугивание
		Deception: false,		// Обман
		Persuasion: false,		// Убеждение	
	}

	this.abilities = [];
}