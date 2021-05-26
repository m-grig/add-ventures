// Main game info
class Player {
	constructor() {
		this.xp = 0;
		this.xpNext = 10;
		this.level = 1;
		this.money = 0;
		this.class = "unselected";
		this.renown = 0;
		this.poisoned = false;
		this.statMultipliers = {};
		this.stats = {};
		this.statBase = {};
	}
	advanceTurn() {//right now just has rotten food. Eventually includes other attributes and statuses
		this.rot();
		if (this.poisoned) {
			this.poison();
		}
	}
	poison() {
		statNumerators.hp -= 1;
		this.poisonCount -= 1;
		if (this.poisonCount < 1) {
			this.poisoned = false;
		};
	}
	rot() {
		decayFood();
	}
};
var player = new Player
var enemy = {};
var readyValue = false;
var bossCount = 25;
var bossBattle = false;
var merchInv = [];
var catName = "";
var coordinates = [15,47,""]; //N-S, E-W, Compass
var partySize = 1;

var gameState;
//Sound effects
var moneySound = new Audio("resources/sound/money.wav");
var equipSound = new Audio("resources/sound/equip.caf");
var deathSound = new Audio("resources/sound/death.mp3");
var attackSound = new Audio("resources/sound/attack.wav");
var mAttackSound = new Audio("resources/sound/monsterAttack.wav");
var missSound = new Audio("resources/sound/miss.wav");
var openMerSound = new Audio("resources/sound/openMerchant.wav");
var closeMerSound = new Audio("resources/sound/closeMerchant.wav");
var fleeSound = new Audio("resources/sound/flee.wav");
var eatSound = new Audio("resources/sound/eat.wav");
var songSound = new Audio("resources/sound/song.mp3");
var blipSound = new Audio("resources/sound/blip.aif");
var appear1Sound = new Audio("resources/sound/appear1.wav");
var appear2Sound = new Audio("resources/sound/appear2.wav");
var citSound = new Audio("resources/sound/cit.wav");
var lvlSound = new Audio("resources/sound/level1.wav");
var lvlTenSound = new Audio("resources/sound/level2.wav");
var winSound = new Audio("resources/sound/victory.wav");
var pickupSound = new Audio("resources/sound/pickup.wav");
var clickSound = new Audio("resources/sound/click.wav");
var clickSound2 = new Audio("resources/sound/click2.wav");
var denySound = new Audio("resources/sound/deny.wav");
var cookSound1 = new Audio("resources/sound/cook1.wav");
var cookSound2 = new Audio("resources/sound/cook2.wav");
var cookSound3 = new Audio("resources/sound/cook3.wav");
var cookSound4 = new Audio("resources/sound/cook4.wav");
var catSound1 = new Audio("resources/sound/meow1.wav");
var catSound2 = new Audio("resources/sound/meow2.wav");
//Inventory & equipment
var inventory = [];
//0-name 0-statUsed 1-power Buff
var equippedWeapon = {
	name:"Hands", 
	attackStat:4, 
	power:1, 
	buffs:{"speed":1},
	condition:"unlimited"
};

//Moves 0-name 1-stat 2-power
var pAbilities = [];
var moveSet = [
	["rushing fury", "", 10]
];

var statNames = ["Health","Diplomacy","Intelligence","Speed","Strength","Defense","Dedication","Luck"];
// 0-health 1-wisdom 2-diplomacy 3-perception
// 4-strength 5-agility 6-intelligence 
// 7-healing 8-dedication 9-luck

// 0-health 1-diplomacy 2-intelligence 3-speed
// 4-strength 5-defense 6-dedication 7-luck 
var playerClasses = {
	paladin: {
		hp: 3,
		diplomacy: 0,
		intelligence: 0,
		speed: 1,
		strength: 3,
		defense: 2,
		dedication: 3,
		luck: 0
	},
	historian: {
		hp: 1,
		diplomacy: 2,
		intelligence: 3,
		speed: 2,
		strength: 0,
		defense: 0,
		dedication: 2,
		luck: 2
	}, //ability that allows him to flee after an attack
	ranger: {
		hp: 1,
		diplomacy: 1,
		intelligence: 2,
		speed: 3,
		strength: 0,
		defense: 1,
		dedication: 1,
		luck: 3
	},
	oaf: {
		hp: 3,
		diplomacy: 0,
		intelligence: 0,
		speed: 1,
		strength: 3,
		defense: 2,
		dedication: 0,
		luck: 3
	},
	cleric: {
		hp: 1,
		diplomacy: 2,
		intelligence: 2,
		speed: 1,
		strength: 0,
		defense: 2,
		dedication: 3,
		luck: 1
	},
	outlaw: {
		hp: 2,
		diplomacy: 0,
		intelligence: 2,
		speed: 3,
		strength: 1,
		defense: 1,
		dedication: 0,
		luck: 3
	},
	decrepit: {
		hp: 3,
		diplomacy: 0,
		intelligence: 1,
		speed: 1,
		strength: 3,
		defense: 3,
		dedication: 1,
		luck: 0
	},
	soothsayer: {
		hp: 1,
		diplomacy: 2,
		intelligence: 3,
		speed: 2,
		strength: 1,
		defense: 1,
		dedication: 2,
		luck: 0
	},
	crustacean: {
		hp: 3,
		diplomacy: 0,
		intelligence: 1,
		speed: 3,
		strength: 3,
		defense: 2,
		dedication: 0,
		luck: 0
	},
	mechanic: {
		hp: 1,
		diplomacy: 0,
		intelligence: 3,
		speed: 3,
		strength: 1,
		defense: 1,
		dedication: 1,
		luck: 2
	},
	alchemist: {
		hp: 1,
		diplomacy: 1,
		intelligence: 3,
		speed: 1,
		strength: 1,
		defense: 1,
		dedication: 1,
		luck: 3
	},
	nativ: {
		hp: 2,
		diplomacy: 0,
		intelligence: 0,
		speed: 2,
		strength: 3,
		defense: 2,
		dedication: 2,
		luck: 2
	}
};

var chosenClass;
//Player stats
var stats = {
	base: {
		hp: 5,
		diplomacy: 1,
		intelligence: 1,
		speed: 1,
		strength: 1,
		defense: 1,
		dedication: 1,
		luck: 1
	},
	current: {
		hp: 5,
		diplomacy: 1,
		intelligence: 1,
		speed: 1,
		strength: 1,
		defense: 1,
		dedication: 1,
		luck: 1
	}
};
var statMultipliers = {
	hp: 1,
	diplomacy: 1,
	intelligence: 1, 
	speed: 1, 
	strength: 1, 
	defense: 1, 
	dedication: 1, 
	luck: 1
};
var statNumerators = {
	hp: 5, 
	diplomacy: 1, 
	intelligence: 1, 
	speed: 1, 
	strength: 1, 
	defense: 1, 
	dedication: 1, 
	luck: 1
};
var statDenominators = {
	hp: 5, 
	diplomacy: 1, 
	intelligence: 1, 
	speed: 1, 
	strength: 1, 
	defense: 1, 
	dedication: 1, 
	luck: 1
};
//Create statlist
var numerList = document.createElement('ul');
var denomList = document.createElement('ul');

var inBattle = false;

var spawnedMonster = {
	name:"",
	boss: false,
	weight: 1,
	level: 1,
	hp: 1,
	strength: 1,
	speed: 1,
	reward: {
		money: 0,
		items: {}
	}
};
var monsters = {
	//0-name 1-xp1 2-weight 3-lvl 4-hp 5-str 6-agi
	all:[
	["goblin",	10, 90, 1, 1, 1, 1],
	["man",		10, 70, 1, 2, 1, 1],
	["triplet",	10, 60, 1, 3, 1, 1],
	["fink",	10, 50, 1, 1, 1, 3],
	["haas",	10, 40, 1, 1, 2, 4],
	["punisher",10, 45, 1, 2, 3, 1],
	["heckler",	10, 40, 1, 4, 2, 1],
	["hound",	10, 40, 1, 1, 3, 3],
	["brute",	10, 40, 1, 3, 3, 3],
	["deformed",10, 30, 1, 3, 2, 1],
	["mimic",	10, 30, 1, 2, 2, 1],
	["guardian",10, 40, 1, 3, 3, 2],
	["miser",	10, 30, 1, 4, 1, 2]
	],
	forest:[
	["behemoth", 1, 5, 1, 7, 4, 3],
	["warlord", 10, 10, 1, 3, 5, 8],
	["fungus", 10, 30, 1, 3, 3, 5],
	["faerie", 10, 50, 1, 2, 2, 8],
	["weeping willow", 10, 60, 1, 4, 3, 2],
	["dwarf", 10, 70, 1, 2, 4, 2],
	["stag", 10, 60, 1, 4, 3, 2],
	["fumigator", 10, 50, 1, 2, 3, 2],
	["highlander", 10, 50, 1, 3, 2, 3],
	["asterlux", 10, 50, 1, 3, 2, 3]
	],

	coast:[
	["behemoth", 1, 1, 1, 8, 5, 2],
	["warlord", 10, 5, 1, 4, 2, 5],
	["khnum", 60, 75, 1, 2, 2, 3],
	["minotaur", 60, 50, 1, 5, 4, 2]
	],

	desert:[
	["behemoth", 1, 1, 1, 6, 5, 4],
	["warlord", 10, 5, 1, 2, 7, 3]
	],
	tundra:[
	["behemoth", 1, 90, 1, 10, 7, 1],
	["warlord", 10, 75, 1, 5, 3, 4]
	]
};

//stateful game states
class Fighting { //in battle
	constructor() {
		this.hitChance = Math.round((statNumerators.speed / spawnedMonster.speed)*90);
		if (this.hitChance > 100) {
			this.hitChance = 100;
		}
		this.dodgeChance = Math.round((spawnedMonster.speed / statNumerators.speed)*90);
		if (this.dodgeChance > 100) {
			this.dodgeChance = 100;
		}
		this.dodgeChance = 100-this.dodgeChance;

		this.fleeChance = Math.round((statNumerators.speed/spawnedMonster.speed)*80);
		if (this.fleeChance > 100) {
			this.fleeChance = 100;
		}
		if (statNumerators.speed > spawnedMonster.speed) {
			this.setAttack();
		} else {
			this.setDefend();
		};
		document.getElementById("actionButton").innerHTML = "FLEE<br>"+this.fleeChance+"%";
		document.getElementById("actionButton").style.display = "inline";
	}
	continue() {//flee
		flee();
	}
	setAttack() {
		this.attacking = true;
		document.getElementById("blockButton").style.display = "none";
		document.getElementById("attackButton").style.display = "inline";
		document.getElementById("attackButton").innerHTML = "ATTACK "+statNumerators.strength+"<br>"+this.hitChance+"% Hit";
	}
	setDefend() {
		this.attacking = false;
		document.getElementById("attackButton").style.display = "none";
		document.getElementById("blockButton").style.display = "inline";
		document.getElementById("blockButton").innerHTML = "DEFEND "+statNumerators.defense+"<br>"+this.dodgeChance+"% Dodge";
	}
	attack() {
		this.setDefend();
		let miss = Math.random() * (statNumerators.speed / spawnedMonster.speed);
		if (miss < .1) {
			missSound.play();
			//test if enemy is too agile
			if (10 * statNumerators.speed / spawnedMonster.speed < 1) {
				document.getElementById("gameText").innerHTML = "You are too slow to defeat this foe";
			} else {
				document.getElementById("gameText").innerHTML = "Oops, you missed!";
			};
		} else {
			attackSound.play();
			let power = Math.random()+1;
			let attackStatMap = {4:"strength",5:"speed",6:"combo"};
			let attackStat = attackStatMap[equippedWeapon.attackStat];
			console.log(attackStat,equippedWeapon.attackStat);
			if (attackStat === "combo") {
				attackStat = (statNumerators.speed+statNumerators.strength)/2;
				power = (power * attackStat * .2)+equippedWeapon.power;
			} else {
				power = (power * statNumerators[attackStat] * .2)+equippedWeapon.power;
			};
			power = Math.round(power);
			if (power < 1) {
				power = 1;
			};
			damageMonster(power);
		};
	}
	defend() {
		this.setAttack();
		monsterAttack();
	}
};
class Wilderness { //as you traverse the path
	constructor() {
		document.getElementById("attackButton").style.display = "none";
		document.getElementById("blockButton").style.display = "none";
		document.getElementById("actionButton").style.display = "inline";
		document.getElementById("actionButton").innerHTML = "Continue";
	}
	continue() {
		player.advanceTurn();
		//Update coordinates
		movePlayer();
		//decrease
		if (bossCount >= 1) {
			bossCount--;
		} else { //select boss monster
			bossCount = Math.random() * 5 + 25;
			bossCount = Math.round(bossCount);
			var i = Math.round(Math.random());
			var index = [i, document.getElementById("randomRegion").value];
			monsterSelection(index);
			bossBattle = true;
			gameState = new Fighting();
			return;
		};

		if (Math.random() > .8) {//20% chance to run into monster
			getRandomMonster();
			gameState = new Fighting();
		} else if (Math.random() > .9) {//8% chance to be in location
			let i = Math.random()*7;
			i = Math.round(i);
			visit(i);
		} else if (Math.random() >.9){
			let type = "food";
			let i = Math.round(Math.random() * (gameItems[type][0].length - 1));
			let item = Object.assign({}, gameItems[type][0][i]);
			item.type = type;
			addItem(item);

			i = Math.round(Math.random() * (phrase.obtain.length - 1));
			let text = phrase.obtain[i] + item.name;

			pickupSound.play();
			gameText(text);
			console.log(item);
			updateInventory();
		} else {
			clickSound.play();
			//calculate continue text
			if (bossCount > 5) {
				//health is good
				if (statNumerators.hp/statDenominators.hp > .5) {
					var i = Math.random() * (phrase.cont1.length - 1);
					i = Math.round(i);
					var n = phrase.cont1[i];
				} else {
					var i = Math.random() * (phrase.cont4.length - 1);
					i = Math.round(i);
					var n = phrase.cont4[i];
				};
			} else if (bossCount > 1) {
				var i = Math.random() * (phrase.cont2.length - 1);
				i = Math.round(i);
				var n = phrase.cont2[i];
			} else {
				var i = Math.random() * (phrase.cont3.length - 1);
				i = Math.round(i);
				var n = phrase.cont3[i];
			};
			gameText(n);
		};
	}
};
class City { //when you're visiting a museum, library, etc
	constructor() {
		citSound.play();
		if (bossCount < 5) {
			document.getElementById("gameText").innerHTML += " You enter with great relief.";
		};
		document.getElementById("actionButton").style.display = "inline";
		document.getElementById("actionButton").innerHTML = "Leave City";
		document.getElementById("exploreButton").style.display = "inline";
		document.getElementById("exploreButton").innerHTML = "Explore City";
		bossCount = Math.random() * 5 + 10;
		bossCount = Math.round(bossCount);
		document.getElementById("cityScreen").style.visibility = 'visible';

		//Give merchant new items
		updateBuyable();
	}
	continue() {//leave the city
		clickSound2.play();
		gameState = new Wilderness();
		document.getElementById("cityScreen").style.visibility = 'hidden';
		document.getElementById("actionButton").innerHTML = "Continue";
		document.getElementById("exploreButton").style.display = "none";
	}
	explore() {
		player.advanceTurn();
		document.getElementById("exploreButton").innerHTML = "Explore Further";
	}
};

function titleTheme() {
	songSound.loop = true;
	songSound.play();
};
function newGame() {
	blipSound.play();
	//Remove title screen
	document.getElementById("startScreen").innerHTML = "";
	document.getElementById("startScreen").style.visibility = "hidden";
	document.getElementById("classSelectScreen").style.visibility = "visible";
	songSound.pause();
	updateBuyable();
	gameState = new Wilderness();
	var n = Math.random() * (adj.names1.length - 1);
	n = Math.round(n);
	catName = adj.names1[n] + "ester";
};
//!!!Page load function!!!
function load() {
	if (localStorage.getItem("gameSave.txt")) {
		//Remove title screen
		songSound.pause();
		document.getElementById("startScreen").innerHTML = "";
		document.getElementById("startScreen").style.zIndex = -5;

		var saveLoad = localStorage.getItem("gameSave.txt").split(",");
		//Location before class selection
		coordinates[0] = parseInt(saveLoad[9]);
		coordinates[1] = parseInt(saveLoad[10]);
		coordinates[2] = saveLoad[11];
		document.getElementById("compass").value = coordinates[2];

		classSelection(saveLoad[0], saveLoad[6]);
		player.level = parseInt(saveLoad[1]);
		player.xp = parseInt(saveLoad[2]);
		player.xpNext = parseInt(saveLoad[3]);
		player.money = parseInt(saveLoad[5]);
		player.class = saveLoad[6];
		player.renown = parseInt(saveLoad[7]);
		catName = saveLoad[8];
		bossCount = saveLoad[12];
		document.getElementById("pLevel").innerHTML = player.level;
		document.getElementById("xpNow").innerHTML = player.xp;
		document.getElementById("money").innerHTML = "Money: " + player.money;
		document.getElementById("merchR").innerHTML = "Renown: " + player.renown;

		
		//Display player stats
		//updateStats();

		//Load inventory
		//inventory = Array.from(saveLoad[10]); or whatever 
		var loadInventory = localStorage.getItem("inventorySave.txt").split(",");
		var items = Array.from(loadInventory)
		for (let i = 1; i < items.length;) {
			let l = [items[0],items[1],items[2],items[3],items[4],items[5]];
			inventory.push(l);
			items.splice(0,6);
		};
		//set inventory values to numbers
		inventory.forEach(function (item){
			for (let i = 2; i < item.length; i++) {
				item[i] = parseInt(item[i]);
			};
		});

		//If player has any items eqipped
		updateInventory();
		if (saveLoad[4] !== "") {
			i = inventory.length-1;
			equip(i);
		};

		//enable compass
		if (statDenominators.intelligence > 49) {
			document.getElementById("compass").disabled = false;
		};
		document.getElementById("position").style.marginLeft = -coordinates[1]*2 + "px";
		document.getElementById("position").style.top = coordinates[0]*2 + "px";
	} else {
		alert("Save doesn't exist");
	};
};
function save() {
	clickSound.play();
	if (!chosenClass) {
		alert("You have done nothing worth saving");
	} else {
		document.getElementById("gameText").innerHTML = "Your progress has been saved.";
		var saveData = [];
		saveData[0] = chosenClass;
		saveData[1] = player.level;
		saveData[2] = player.xp;
		saveData[3] = player.xpNext;
		saveData[4] = equippedWeapon[4];//!I think this is the value? Maybe the index of the weapon
		saveData[5] = player.money;
		saveData[6] = player.class;
		saveData[7] = player.renown;
		saveData[8] = catName;
		saveData[9] = coordinates[0];
		saveData[10] = coordinates[1];
		saveData[11] = coordinates[2];
		saveData[12] = bossCount;
		localStorage.setItem("gameSave.txt", saveData);

		var inventorySave = Array.from(inventory);
		if (equippedWeapon.length !== 4) {//what does this do? It's checking to see if an item is equipped I think
			let item = Array.from(equippedWeapon);
			inventorySave.push(item);
		};
		localStorage.setItem("inventorySave.txt", inventorySave);
	};
};
function clearSave() {
	alert("Are you sure you want to do this?");
	localStorage.removeItem("gameSave.txt");
	localStorage.removeItem("inventorySave.txt");
};
//Stats info
function levelUp() {
	//document.getElementById("gameText").innerHTML = "<br>Reached level <b>"+player.level+"</b>";
	document.getElementById("gameText").innerHTML += "<br>Reached level <b>"+(player.level+1)+"</b>";
	player.level = player.level + 1;
	document.getElementById("pLevel").innerHTML = (player.level);
	if (player.level % 10 === 0) {
		lvlTenSound.play();
	} else {
		lvlSound.play();
	}
	//Increase XP till next level
	player.xpNext = player.xpNext * 1.3 + 20;
	player.xpNext = Math.round(player.xpNext);

	//set Denominators for stats
	for (const [key, value] of Object.entries(statMultipliers)) {
		statDenominators[key] += value;
	}
	//set Numerators for stats
	for (const [key, value] of Object.entries(statDenominators)) {
		statNumerators[key] = value;
	}
	updateStats();

	//enable compass
	if (document.getElementById("compass").disabled && statDenominators.intelligence > 49) {
		document.getElementById("compass").disabled = false;
	};
};
function createStats() {
	//create Numerators
	document.getElementById('statNumerators').appendChild(numerList);
	for (const [key, value] of Object.entries(statNumerators)) {
		let li = document.createElement('li');
		numerList.appendChild(li);
		li.innerHTML += value;
	}
	//create Denominators
	document.getElementById('statDenominators').appendChild(denomList);
	for (const [key, value] of Object.entries(statDenominators)) {
		let li = document.createElement('li');
		denomList.appendChild(li);
		li.innerHTML += value;
	}
};
function updateStats() {
	numerList.innerHTML = "";
	for (const [key, value] of Object.entries(statNumerators)) {
		let li = document.createElement('li');
		numerList.appendChild(li);
		li.innerHTML = value;
	}

	denomList.innerHTML = "";
	for (const [key, value] of Object.entries(statDenominators)) {
		let li = document.createElement('li');
		denomList.appendChild(li);
		li.innerHTML = value;
	}


};

function updateMoves() {
	document.getElementById("moveset").innerHTML = "";
	var label = document.createElement('label');
	label.innerHTML = "Moves:";
	document.getElementById("moveset").appendChild(label);
	var i = 0;

	pAbilities.forEach(function (item){
		var button = document.createElement('button');
		button.innerHTML = item[0];
		button.value = i;
		button.onclick = function() {useMove(item, button.value);};
		document.getElementById("moveset").appendChild(button);
		i++;
	});
};

//Inventory
function updateInventory() {
	document.getElementById("inventory").innerHTML = "";
	var label = document.createElement('label');
	label.innerHTML = "Inventory:";
	document.getElementById("inventory").appendChild(label);
	var i = 0
	//add items to inventory from "inventory" array
	inventory.forEach(function (item){
		//Add button for item to be used
		let button = document.createElement('button');
		button.innerHTML = "<b>"+item.name+"</b>";
		button.value = i;
		if (item.type === "weapon") {
			console.log("weapon:",item);
			button.title = "pwr: " + item.power;
			if (item.attackStat === 4) {
				button.style.background = "#B7978A"; 
			} else if (item.attackStat === 5){
				button.style.background = "#8DB78F"; 
			} else {
				button.style.background = "#8DB7C7"; 
			};
			button.innerHTML += "<br>Power: "+item.power;
		} else if (item.type === "food") {
			console.log("food",item)
			if (item.spoil < 1) {
				button.title = "Spoiled";
				button.style.background = "#BBD7A0"; 
			} else {
				button.title = "Heals: " + item.heals + " Uses: " + item.uses;
				button.style.background = "#D7CC91"; 
			};
			button.innerHTML += "<br>Heals: "+item.heals+" Uses: "+item.uses;
		} else if (item.type === "potion") {
			button.style.background = "#C98FBE"; 
			if (item[5] === "poison") {
				button.title = "Effect: " + item[2] + " damage" + " Uses: " + item[3];
				return;
			};
			button.title = "Effect: " + item[2] + " " + statNames[item[5]] + "Uses: " + item[3];
		};
		button.onclick = function() {useItem(item, button.value)};
		document.getElementById("inventory").appendChild(button);
		i++;
	});
	//var item = Array.from(gameItems[food1][0]);
};

function addItem(item) {	
	let inventoryItem = Object.assign({}, item);
	if (inventoryItem.type === "food") {
		inventoryItem.spoil = Math.round(Math.random()*10+5);
	}
	inventory.push(inventoryItem);
};

//it may be better to have a different use funciton for each item type that is given to the button when the item is obtained.
function useItem(item, i) {
	console.log(item);
	//Check whether or not player is in a battle
	if (!(gameState instanceof Fighting)) {
		readyValue = true;
	} else if (gameState.attacking === true) {
		gameState.setDefend();
	};
	if (readyValue) {
		readyness(false);
		//Check for item type
		if (item.type === "food") {
			if (player.class !== "Decrepit" && item.spoil < 1) {
				inventory[i].heals = inventory[i].heals*(-1);
				document.getElementById("gameText").innerHTML = "The " + item.name + " is spoiled and causes " + item.heals + " harm.";
				eat(i);
				return;
			};
			document.getElementById("gameText").innerHTML = "You consume the " + item.name + " and regain " + item.heals + " HP. The nourishment is palatable";
			eat(i);
			//If hp = 100, you toss the ___ aside with disdain
		} else if (item.type === "weapon") {
			equip(i);
		} else if (item.type === "potion") {
			if (item[5] === "poison") {
				if (gameState instanceof Fighting) {
					if (readyValue) {
						gameText("You aren't ready to do this!")
						return;
					};
					readyness(false);
					damageMonster(item[2]);
					gameText("You splash the poison in the " + spawnedMonster.name + "'s face. It reels back from " + item[2] + " damage.");
					inventory[i][3] -= 1;
					if (item[3] < 1) {
						inventory.splice(i,1);
					}
				} else {
					gameText("Don't drink this!");
				};
			} else {
				var l = item[5];
				statNumerators[l] += item[2];
				inventory[i][3] -= 1;
				if (item[3] < 1) {
					inventory.splice(i,1);
				}
				gameText("*Gulp* You feel your bones enriched with an unusual vigour.");
				updateStats();
			};

			updateInventory();
		} else {
			alert("Nothing Happens");
		};
	} else {
		alert("You can't do that right now.")
	};
};

function eat(i) {
	eatSound.play();
	var item = inventory[i];
	//See how many uses the food has left
	if (statNumerators.hp + item.heals > statDenominators.hp) {
		statNumerators.hp = statDenominators.hp;
	} else {
		statNumerators.hp += item.heals;
	};
	updateStats();
	if (inventory[i].uses <= 1) {
		inventory.splice(i,1);
		updateInventory();
	} else {
		inventory[i].uses -= 1;
	};
};

function equip(weapon) {
	if (player.class === "Alchemist") {//! NO. Get rid of this
		denySound.play();
		gameText("You lack the ability to equip this item.");
		return;
	};
	let item = Object.assign({},inventory[weapon]);//creates shallow copy instead of a deep one
	inventory.splice(weapon, 1);
	

	if (equippedWeapon.name !== "Hands") {
		//equippedWeapon.splice(5,1);
		let pushToInventory = Object.assign({}, equippedWeapon);
		inventory.push(pushToInventory);
	};

	equippedWeapon = item;
	//equippedWeapon.push(weapon);
	document.getElementById("gameText").innerHTML = "You equip the " + equippedWeapon.name + ".";
	equipSound.play();
	updateInventory();
	document.getElementById("equipped").innerHTML = "Equipped: " + equippedWeapon.name;
};



function attack() {//reference gameState that way player can't try to attack when it's not correct state
	gameState.attack();
};
function defend() {
	gameState.defend();
};

function damageMonster(power) {
	if (power >= spawnedMonster.hp) {
		//Monster is defeated
		document.getElementById("gameText").innerHTML = spawnedMonster.name + " has been defeated";
		let gainedLevel = gainXP(spawnedMonster.hp);
		spawnedMonster.hp = 0;
		document.getElementById("monsterLevel").innerHTML = spawnedMonster.hp;
		if (bossBattle) {
			var i = Math.random() * (phrase.cont5.length - 1);
			i = Math.round(i);
			var n = phrase.cont5[i];
			gameText(n);
			if (player.renown < 100) {
				player.renown += 1;
				document.getElementById("merchR").innerHTML = "Renown: " + player.renown;
				document.getElementById("gameText").innerHTML += " Your renown among the land grows.";
			};
			bossBattle = false;
		};
		document.getElementById("threatIcon").src = "resources/threatB.png"
		gameState = new Wilderness();
		monsterDeath(gainedLevel);
	} else {
		spawnedMonster.hp = spawnedMonster.hp - power;
		//monster attacks here
		document.getElementById("gameText").innerHTML = "You deal " + power + " damage.";
		gainXP(power);
		document.getElementById("monsterLevel").innerHTML = spawnedMonster.hp;
	};
}


function flee() {
	if (gameState instanceof Fighting) {
		if (player.class === "Historian") {
			readyness(true);
		};
		if (readyValue === true) {
			//Flee here
			fleeSound.play();
			//Check if item is dropped
			if (Math.random() < .3 && player.class !== "Outlaw" && inventory.length > 1) {
				var item = inventory.length - 1;
				item = Math.random()*item;
				item = Math.round(item);
				document.getElementById("gameText").innerHTML = "In your haste, you dropped your " + inventory[item].name;
				inventory.splice(item, 1);
				updateInventory();
			} else {
				document.getElementById("gameText").innerHTML = "You successfully escape!";
			};
			document.getElementById("monster").src = "resources/black.png";
			document.getElementById("monsterSelector").value = "";
			document.getElementById("monsterLevel").innerHTML = 0;
			document.getElementById("monsterHP").innerHTML = 0;
			document.getElementById("monsterSelector").disabled = false;
			document.getElementById("randomRegion").disabled = false;
			document.getElementById("randomButton").disabled = false;
			document.getElementById("threatIcon").src = "resources/threatB.png";
			readyness(false);
			gameState = new Wilderness;
		} else {
			alert("You can't do that right now");
		};
	} else {
		alert("There is nothing to flee");
	};
	
};
function death() {
	document.getElementById("gameOver").style.visibility = 'visible';
	document.getElementById("gameScreen").style.visibility = 'hidden';
	gameState = false;
}

//gaining XP
function gainXP(gained) {
	
	player.xp += gained;
	document.getElementById("xpNow").innerHTML = player.xp;
	if (player.xp >= player.xpNext) {
		levelUp();
		return true
	}
	return false
};

function readyness(ready) {
	readyValue = ready;
};

function clearText() {
	document.getElementById("gameText").innerHTML = "Make your move.";
};

//when Monster dies give XP and reward
function monsterDeath(gainedLevel) {
	//Clear screen
	document.getElementById("monster").src = "resources/black.png";
	document.getElementById("gameText").innerHTML = "You win!";
	document.getElementById("monsterSelector").value = "";
	document.getElementById("monsterHP").innerHTML = 0;
	document.getElementById("monsterSelector").disabled = false;
	document.getElementById("randomRegion").disabled = false;
	document.getElementById("randomButton").disabled = false;
	inBattle = false;
	if (!gainedLevel) {
		winSound.play();
	} else {
		document.getElementById("gameText").innerHTML += " Reached level <b>"+player.level+"</b>";
	}
	//Determine drop
	player.money += spawnedMonster.reward.money;
	document.getElementById("gameText").innerHTML += "<br>Gained "+spawnedMonster.reward.money+" gold";
	for (var i = Math.random(); i >.7 ;) {
		let item;
		if (i > .9) {
		//Weapons
			let type = "weapon";
			let itemLevel = Math.random()*5*(player.level/50);
			if (itemLevel > 5) {
				itemLevel = 5;
			};
			itemLevel = Math.ceil(itemLevel);
			let index = Math.round(Math.random()*(gameItems[type][itemLevel].length-1));
			item = Object.assign({}, gameItems[type][itemLevel][index]);
			item.type = type;
			addItem(item);
		} else {
		//Food
			let type = "food";
			let itemLevel = Math.ceil(Math.random()*3*(player.level/50));
			if (itemLevel > 5) {
				itemLevel = 5;
			}
			let index = Math.round(Math.random()*(gameItems[type][itemLevel].length-1));
			item = Object.assign({}, gameItems[type][itemLevel][index]);
			item.type = type;
			addItem(item);
		};
		document.getElementById("gameText").innerHTML += ", "+item.name;
		updateInventory();
		i = Math.random();
	};
	document.getElementById("gameText").innerHTML += " from "+spawnedMonster.name;
};
function monsterAttack() {
	readyness(true);
	miss = (Math.random()*10)*(spawnedMonster.speed / statNumerators.speed);
	if (miss < 1) {
		missSound.play();
		document.getElementById("gameText").innerHTML = "You evade " + spawnedMonster.name + "'s attack";
	} else {
		mAttackSound.play();
		let hitMin = Math.round(spawnedMonster.strength-spawnedMonster.strength*.5);
		let power = randIntBetween(hitMin, spawnedMonster.strength) - statNumerators.defense;
		if (power >= statNumerators.hp) {
			deathSound.play();
			death();
		} else if (power <= 0) {
			power =  0;
			document.getElementById("gameText").innerHTML = spawnedMonster.name + " landed its hit, and in its pathetic weakness it dealt no damage.";
			return;
		} else {
			statNumerators.hp -= power;
			document.getElementById("gameText").innerHTML = spawnedMonster.name + " dealt " + power + " damage.";
			updateStats();
		};	
	};
};


//Choose class:
function classSelection (selectedClass, name) {
	blipSound.play();
	document.getElementById("map").style.opacity = 1;
	player.class = name;
	chosenClass = selectedClass;

	for (const [key, value] of Object.entries(playerClasses[selectedClass])) {
		statMultipliers[key] = value;
	}

	//set Denominators for stats
	for (const [key, value] of Object.entries(statMultipliers)) {
		statDenominators[key] += value;
	}
	//set Numerators for stats
	for (const [key, value] of Object.entries(statDenominators)) {
		statNumerators[key] = value;
	}
	document.getElementById("classIcon").src = "resources/classes/" + selectedClass + ".png";
	createStats();
	document.getElementById("classSelection").innerHTML = name;
	document.getElementById("classSelectScreen").innerHTML = "";
	document.getElementById("classSelectScreen").style.visibility = 'hidden';
	document.getElementById("gameScreen").style.visibility = 'visible';
	if (player.class === "Alchemist") {
		player.money = 15;
		document.getElementById("money").innerHTML = "Money: " + player.money;
	};
	var sins = ["Greed","Lust","Gluttony"];
	var abilities = {
	//0-name 1-cooldown 2-duration 3-accuracy(0.0-1.0) 4-cost 5-attribute
		paladin:[["Enforcer",0],
		["Leader of The Pack",0]],

		historian:[["Record of The Past",0,0,1,0,0],//historian
		["Friend of Man",0,0,.3,5,2]],

		ranger:[[""],[""]],//ranger

		oaf:[[""],[""]],//oaf

		cleric:[["Conversion"]],//cleric

		outlaw:[[""],[""]],//outlaw

		decrepit:[[""],[""]],//decrepit

		soothsayer:[[""],[""]],//soothsayer

		crustacean:[[""],[""]],//crustacean

		mechanic:[[""],[""]],//mechanic

		alchemist:[[""],[""]],//alchemist

		nativ:[[""],[""]],//native

	};
	pAbilities = Array.from(abilities[selectedClass]);
	updateMoves();

	if (player.class === "Ranger") {
		document.getElementById("compass").disabled = false;
	};
};
function classDescription(selectedClass, name) {
	//blipSound.play();
	var i;
	var item = [
		["Thick boi. You are the champion of good. Though some may call you a blind follower, your moral compass has never failed. And where idealism falls short, your hulking frame enforces what is right.",
		"Paladin",
			["VIGILANT:<br>No enemy catches you off-guard. Critical hits against you will not land.<br>", "ENFORCER:", "LEADER OF THE PACK:"]
		],
		["Some may keep no record of wrongs, but you remember it all. With knowledge of the past, you can nearly predict the future.",
		"Historian",
			["QUICK THINKER:<br>You can flee from battle at any point.<br>","RECORD OF THE PAST:<br>Allows you to identify historic items without visiting a museum."]
		],
		["No bard is needed to proclaim your name, the bow sings songs of its own. Darting about with grace, your nimbleness is your greatest treasure has kept you alive in the wilderness.",
		"Ranger",
			["EXPEDITIONER/Navigator:<br>You are able to set your course before ever obtaining a compass.<br>","RECONNAISSANCE:<br>You know the reward a foe will provide upon it's defeat"]
		],
		["Clunky, yet.... stupid.",
		"Oaf",
			["CLUMSY:","BUMBLER:","BUMPKIN:<br>Too stupid to be tricked by an enemy."]
		],
		["A far cry from the heavy-handed methods of the Paladin, you bring life to those around you. Unwavering morals.",
		"Cleric",
			["ACCOUNTABILITY:<br>The hidden-sins of your teammates are revealed to you upon joining up.<br>","WILLING MARTYR:","CONVERSION:<br>If successful, the enemy is defeated and might give useful information."]
		],
		["No moral compass, but an unwavering sense of direction. This light fingered degenerate can become quite heavy handed when needed.",
		"Outlaw",
			["PICKPOCKET:","DECEPTION:","COWARDICE:<br>You flee from battle without ever dropping items."]
		],
		["This thick skinned remnant of the past often goes unnoticed. But is spry enough to spring into action and do nothing.",
		"Decrepit",
			["SPINES:","INVISIBLE:<br>Your unremarkable looks allow you to go undetected by monsters and law enforcement.<br>","COMPOSTER:<br>You may eat spoiled food with no ill effects."]
		],
		["In sooth, this Sayer is seer of future the player holds truth near. Yet truth is but a single grain. For proof is but one layer to knowledge, and power is to gain.",
		"Soothsayer",
			["DOOMSDAY:","FORESIGHT:","Retribution:"]
		],
		["You may think such a formidable foe would be loved by all, yet none is friend to the stench of rancid seafood.",
		"Crustacean",
			["EXOSKELETON: You cannot wear armor<br>","LOWER LIFEFORM:<br>You lack the intelligence for morality. Corruption does not affect you. You decide if you will choose it."]
		],
		["Works on things that wont exist for another 1400 years. Augmented rat.",
		"Mechanic",
			["RODENT:","DEFUSER:<br>You've seen every trap under the sun, and you've invented half of them. You haven't found one you can't dismantle yet.",]
		],
		["Potions, potions... A bit of a mad genius. Surprisingly resourceful, you will find the Alchemist to be spicier than most foes can take.",
		"Alchemist",
			["Fulminated Mercury:","Extractor:","CHRYSOPOEIA:<br>You begin your journey with 15 gold, and are able to tranform items to gold without visiting a merchant"]
		],
		["A race of giants who roam the grasslands as hunters of a terrifying demeanor. Gathers food, wields buffalos.",
		"Native",
			["Stampede:<br>You have the chance to land an attack twice every time you attack.<br>","MEDICINE-MAN<br>You have spent years studying the healing arts. +3 to all healing acts.","Lightfooted:"]
		]
	]
	//Clear previous
	document.getElementById("classDescrip").innerHTML = "";
	document.getElementById("attributes").innerHTML = "";
	document.getElementById("classDescrip").innerHTML = item[selectedClass][0];
	document.getElementById("title").innerHTML = item[selectedClass][1];
	document.getElementById("statImg").src = "resources/classes/stats/"+ item[selectedClass][1] + ".png";
	document.getElementById("classImg").src = "resources/classes/" + name + ".png"; 
	//Display attributes
	item[selectedClass][2].forEach(function (descrip){
		document.getElementById("attributes").innerHTML += descrip + "<br>";
	});
}
//Choose foe:
function monsterSelection (selection) {
	//Serve image and text
	index = selection[0];
	mClass = selection[1];
	document.getElementById("monster").src = "resources/monsters/" + mClass + index + ".png";
	let monSpawner = Array.from(monsters[mClass][index]);
	spawnedMonster.name = monSpawner[0];
	//monster level and stats 
	spawnedMonster.level = Math.round((Math.random()*2+.5)*player.level);

	spawnedMonster.xp1 = spawnedMonster.level*monSpawner[1];
	spawnedMonster.hp = spawnedMonster.level*monSpawner[4];
	spawnedMonster.strength = spawnedMonster.level*monSpawner[5];
	spawnedMonster.speed = spawnedMonster.level*monSpawner[6];
	spawnedMonster.reward.money = Math.round(Math.random()*spawnedMonster.level*2+1);
    //ensure enemy has hp
    if (spawnedMonster.hp < 1) {
    	spawnedMonster.hp = 1;
    };
	document.getElementById("gameText").innerHTML = "A " + spawnedMonster.name + " appears.";
	document.getElementById("monsterSelector").disabled = true;
	document.getElementById("randomRegion").disabled = true;
	document.getElementById("randomButton").disabled = true;


	document.getElementById("monsterHP").innerHTML = spawnedMonster.level;
	if (spawnedMonster.level < player.level) {
		document.getElementById("threatIcon").src = "resources/threatG.png";
	} else if (spawnedMonster.level < player.level * 1.5) {
		document.getElementById("threatIcon").src = "resources/threatY.png";
	} else {
		document.getElementById("threatIcon").src = "resources/threatR.png";
	};
	document.getElementById("monsterLevel").innerHTML = spawnedMonster.hp;
	readyness(true);
	inBattle = true;

	if (Math.random() > .5) {
		appear1Sound.play();
	} else {
		appear2Sound.play();
	};
};
function getRandomMonster() {
	var region = document.getElementById("randomRegion").value;
	//combine regions for "all"
	if (region === "all") {
		var i1 = monsters["all"].length;
		var i2 = monsters["forest"].length;
		var i3 = monsters["coast"].length;
		var i4 = monsters["desert"].length;
		var i5 = monsters["tundra"].length;
		var l = i1+i2+i3+i4+i5;
		var n = Math.random() * l;
		//alert(i1);
		if (n < i1) {
			var monsterForLevel = monsters["all"];
		}else if (n < i2) {
			var monsterForLevel = monsters["forest"];
			region = "forest";
		}else if (n < i3) {
			var monsterForLevel = monsters["coast"];
			region = "coast";
		}else if (n < i4) {
			var monsterForLevel = monsters["desert"];
			region = "desert";
		}else {
			var monsterForLevel = monsters["tundra"];
			region = "tundra";
		};
	} else { //pulls monsters from current region
		var i1 = monsters[region].length;
		var i2 = monsters["all"].length;
		var l = i1+i2;
		if (Math.random()*l < i1) {
			var monsterForLevel = monsters[region];
		} else {
			region = "all";
			var monsterForLevel = monsters[region];
		};
	};

	var monsterTotalWeight = 0, monsterCumWeight = 0, i;
	// sum up the weights
	for (i = 0; i < monsterForLevel.length; i++) {
		monsterTotalWeight += monsterForLevel[i][2];
	}
	var random = Math.floor(Math.random() * monsterTotalWeight);
    
	// now find which bucket our random value is in
	for (i = 0; i < monsterForLevel.length; i++) {
		monsterCumWeight += monsterForLevel[i][2];
		if (random < monsterCumWeight) {
			index = [i,region];
			document.getElementById("monsterSelector").value = i;
			monsterSelection(index);
			return;
			//document.getElementById("monsterSelector").value = "monster"
		}
	}
};
function advance() {
	gameState.continue();
};
function explore() {
	gameState.explore();
}
function visit(location) {
	var locations = [
	//0-value & file 1-Name 2-community/text 3-item or not
	["lib", "Library", "You obtain a mysterious book.", true, "book"],
	["uni", "University", "Inside you find knowledge that allows you to advance in your studies.", false],
	["meu", "Museum", "You return with a curious item.", true, "antique"],
	["cit", "City", false],
	["twn", "Town", false],
	["vil", "Village", false],
	["cab", "Cabin", "You leave with a grimy object in hand.", true, ],
	["tem", "Temple", "You are left with a new sense of meaning.", false,],
	];

	//Check if location is a city/town
	if (!locations[location][2]) {
		gameState = new City();
		var n = Math.random() * (phrase.location.length - 1);
		n = Math.round(n);
		var text = phrase.location[n];

		n = Math.random() * (adj.names1.length - 1);
		n = Math.round(n);
		text = text + "the " + locations[location][1] + " " + adj.names1[n];

		n = Math.random() * (adj.names1.length - 1);
		n = Math.round(n);
		text = text + adj.names2[n] + ".";

		document.getElementById("gameText").innerHTML = text;
		//random city pic
		document.getElementById("monster").src = "resources/" + locations[location][0] + ".png";
		return;
	};
	
	//Update game text
	var n = Math.random() * (phrase.location.length - 1);
	n = Math.round(n);
	var text = phrase.location[n];
	
	//decide phrasing for location
	if (Math.random() > .5 || location > 5) {
		n = Math.random() * (adj.cons.length - 1);
		n = Math.round(n);
		text = text + "a" + adj.cons[n] + " " + locations[location][1] + ". " + locations[location][2];
	} else {
		n = Math.random() * (adj.title.length - 1);
		n = Math.round(n);
		text = text + "the " + locations[location][1] + " of " + adj.title[n];

		n = Math.random() * (adj.title.length - 1);
		n = Math.round(n);
		text = text + " " + adj.title[n] + ". " + locations[location][2];
	};	
	document.getElementById("gameText").innerHTML = text;

	//show picture
	document.getElementById("monster").src = "resources/" + locations[location][0] + ".png";

	if (locations[location][3]) {
		n = Math.random() * 9;
		var item = {name:"Book", type:"book", dunno:n, uses:1, value:15};
		addItem(item);
		updateInventory();
	} else {
		var i = player.xpNext * .2;
		i = Math.round(i);
		gainXP(i);
	};
};
function movePlayer() {//updates player location on the map
	var l = Math.random();
	var i = Array.from(coordinates);
	if (l <.25) {
		coordinates[0] += 1;
	} else if (l <.5) {
		coordinates[0] -= 1;
	} else if (l <.75) {
		coordinates[1] += 1;
	} else {
		coordinates[1] -= 1;
	};


	if (coordinates[2] !== "") {
		if (coordinates[2] === "forest" && (coordinates[0] > 32 || coordinates[1] < 32)) {
			coordinates = Array.from(i);
			if (coordinates[0] > 32) {
				coordinates[0] -= 1;
			} else {
				coordinates[1] += 1;
			};
		} else if (coordinates[2] === "coast" && (coordinates[0] < 32 || coordinates[1] > 32)) {
			coordinates = Array.from(i);
			if (coordinates[0] < 32) {
				coordinates[0] += 1;
			} else {
				coordinates[1] -= 1;
			};
		} else if (coordinates[2] === "desert" && (coordinates[0] < 32 || coordinates[1] < 32)) {
			coordinates = Array.from(i);
			if (coordinates[0] < 32) {
				coordinates[0] += 1;
			} else {
				coordinates[1] += 1;
			};
		} else if (coordinates[2] === "tundra" && (coordinates[0] > 32 || coordinates[1] > 32)) {
			coordinates = Array.from(i);
			if (coordinates[0] > 32) {
				coordinates[0] -= 1;
			} else {
				coordinates[1] -= 1;
			};
		};
	};

	//keep player within bounds
	if (coordinates[0] < 5 || coordinates[0] > 60 || coordinates[1] < 5 || coordinates[1] > 60) {
			coordinates = Array.from(i);
			movePlayer();
	};

	//set location
	if (coordinates[0] > 32 && coordinates[1] > 32) {
		document.getElementById("randomRegion").value = "desert";
	} else if (coordinates[0] < 32 && coordinates[1] < 32) {
		document.getElementById("randomRegion").value = "tundra";
	} else if (coordinates[0] > 32 && coordinates[1] < 32) {
		document.getElementById("randomRegion").value = "coast";
	} else if (coordinates[0] < 32 && coordinates[1] > 32) {
		document.getElementById("randomRegion").value = "forest";
	};
	document.getElementById("position").style.marginLeft = -coordinates[1]*2 + "px";
	document.getElementById("position").style.top = coordinates[0]*2 + "px";
};
function setCompass(direction) {
	coordinates[2] = direction;
};


//Merchant functions:
function openMerchant() {
	openMerSound.play();
	document.getElementById("merchantView").style.opacity = 1;
	document.getElementById("merchantView").style.width = "400px";
	document.getElementById("merchM").innerHTML = "Money: " + player.money;
	document.getElementById("sell").innerHTML = "";
	//add items to purchase and sell
	updateSellable();
};
function closeMerchant() {
	closeMerSound.play();
	document.getElementById("merchantView").style.opacity = 0;
	document.getElementById("merchantView").style.width = "0px";
};
function updateSellable() {
	//Add sellable items
	if (inventory.length === 0) {
		document.getElementById("sell").innerHTML = "You have nothing to sell";
	} else {
		document.getElementById("sell").innerHTML = "";
		var i = 0
		inventory.forEach(function (item){
			let factor = statNumerators.diplomacy/300;
			let val = (1-factor)/10;
			val = val+factor;
			val = val * item.value;
			val = Math.ceil(val);
			//alternatively: (500/(600-lvl))/3

			//Add button for item to be used
			let button = document.createElement('button');
			button.innerHTML = "<b>"+item.name+"</b><br>Price: "+val+"";
			button.value = i;
			button.title = "Sell Price: " + val;
			button.onclick = function() {sellItem(item, button.value)};
			document.getElementById("sell").appendChild(button);
			i++;
		});
	};
	//Add items to buy
	if (merchInv.length < 1) {
		document.getElementById("buy").innerHTML = "Merchant has nothing left to sell";
	} else {
		var l = 0;
		document.getElementById("buy").innerHTML = "";
		
		merchInv.forEach(function(item) {
			let merchantIndex = l;
			//set sellprice
			var val = 1.1 - statNumerators.diplomacy/800;
			val = val * gameItems[item.type][item.level][item.index].value;
			val = Math.ceil(val);
			var button = document.createElement('button');
			button.innerHTML = "<b>"+gameItems[item.type][item.level][item.index].name+"</b><br>Cost: "+val+"";
			button.title = "Price: " + val;
			if (item.type === "weapon") {
				button.title += " pwr: " + gameItems[item.type][item.level][item.index].power;
			};
			button.onclick = function() {buyItem(item, merchantIndex)};
			document.getElementById("buy").appendChild(button);
			l++;
		});
	};
	
};
function updateBuyable() {
	merchInv = [];
	var l = Math.random() * 2 + 6;
	for (let i = 0; i < l; i++) {
		let item;
		if (Math.random() > .3) {
			item = {type:"food",level:0};
		} else {
			item = {type:"weapon",level:0};
		};
		//determine item level
		let n = Math.random()*player.level;
		if (n < 10) {
			item.level = 0;
		} else if (n < 20) {
			item.level = 1;
		} else if (n < 30) {
			item.level = 2;
		} else if (n < 40) {
			item.level = 3;
		} else if (n < 50) {
			item.level = 4;
		};
		n = Math.random() * (gameItems[item.type][item.level].length - 1);
		n = Math.round(n);
		item.index = n;
		merchInv.push(item);
	};
};

function sellItem(item, index) {
	moneySound.play();
	var factor = statNumerators.diplomacy/300;
	var price = (1-factor)/10;
	price = price+factor;
	price = price * inventory[index].value;
	price = Math.ceil(price);
	player.money += price;
	document.getElementById("money").innerHTML = "Money: " + player.money;
	document.getElementById("merchM").innerHTML = "Money: " + player.money;
	document.getElementById("gameText").innerHTML = "You sell the " + inventory[index].name + " for " + price + ".";
	inventory.splice(index,1);
	updateInventory();
	updateSellable();
};
function buyItem(item, index) {//index is the index in the merchant's inventory
	//Set item price
	let i = 1.1 - statNumerators.diplomacy/800;
	let value = gameItems[item.type][item.level][index].value;
	console.log('item cost',value);
	i = i * value;
	i = Math.ceil(i);
	if (player.money < i) {
		alert("You lack the funds to purchase this");
	} else {
		moneySound.play();
		let purchasedItem = Object.assign({}, gameItems[item.type][item.level][index]);
		purchasedItem.type = item.type;
		addItem(purchasedItem);
		merchInv.splice(index, 1);
		updateInventory();
		updateSellable();
		player.money -= i;
		document.getElementById("money").innerHTML = "Money: " + player.money;
	};
};

function openCook(first) {
	if (first!=="") {
		clickSound.play();
		gameText(catName +": 'Oh.. Back so soon? I mean, I won't stop you. Do you have anything better to make this time?'")
	};
	document.getElementById("cookScrn").style.zIndex = 3;
	if (inventory.length === 0) {
		gameText(catName + ": 'What are you doing here? Come back when you have some food for me!'");
		document.getElementById("cookables").innerHTML = "You have nothing to cook";
	} else {
		document.getElementById("cookables").innerHTML = "";
		var i = 0
		
		inventory.forEach(function (item){
			//Add button for food
			if (item.type === "food") {
			var button = document.createElement('button');
			button.innerHTML = item.name;
			button.value = i;
			button.title = "Sell Price: ";
			button.onclick = function() {cookItem(item, button.value)};
			document.getElementById("cookables").appendChild(button);
			
			}
			i++;
		});
	};
};
function closeCook() {
	clickSound2.play();
	document.getElementById("cookScrn").style.zIndex = -3;
	updateInventory();
};
function cookItem(item, index) {
	var buttons = Array.from(document.getElementById("cookables").children); 

	for (var i = 0; i < buttons.length; i++) {
		if (buttons[i].value === index) {
			var n = buttons[i].innerHTML;
			if (buttons[i].name === "") {
				buttons[i].innerHTML = "\u2022 " + n;
				//buttons[i].style.backgroundColor = "black";
				buttons[i].name = "1";
			} else {
				buttons[i].name = "";
				buttons[i].innerHTML = n.replace("\u2022 ","");
				//buttons[i].style.backgroundColor = "lightgray";
			};
		};
	};
};
function cook() {
	var i = Math.random();
	if (i < .25) {
		cookSound1.play();
	} else if (i < .5) {
		cookSound2.play();
	} else if (i < .75) {
		cookSound3.play();
	} else {
		cookSound4.play();
	};

	if (Math.random() < .3) {
		catSound1.play();
	} else if (Math.random() < .5){
		catSound2.play();
	};

	var buttons = Array.from(document.getElementById("cookables").children); 
	var valid = false;
	var item = {name:"Stew",type:"food",level:1,heals:0,uses:1,value:0,spoil:100};
	var factor = (statNumerators.intelligence+statNumerators.luck)/300;
	var count = 0;
	buttons.forEach(function(btn) {
		if (btn.name === "1") {
			var n = btn.value;
			n -= count;
			item.heals += inventory[n].heals;
			item.value += inventory[n].value;
			if (inventory[n].spoil < 1) {item.spoil = 0};
			inventory.splice(n, 1);
			valid = true;
			count += 1;
		};
	});
	item.heals = item.heals * factor;
	item.value = item.value+(item.value * factor);
	item.heals = Math.round(item.heals);
	item.value = Math.round(item.value);
	if (player.class === "Alchemist") {
		cookPotion(item);
		return
	};
	inventory.push(item);
	openCook("");
	if (item.spoil < 1) {
		if (player.class === "Decrepit") {
			gameText(catName +": 'Oh... You're gonna eat that? I think I'll pass.'")
			return;
		};
		gameText(catName +": 'Aw shucks. Looks like the food was spoiled. This stew is worthless.'");
	} else {
		gameText(catName +": 'What luck! Looks like you made some stew.'");
	};
}
function decayFood() {
	inventory.forEach(function(item) {
		if (item.type === "food" && item.spoil > 0) {
			item.spoil--;
			if (item.spoil < 1) {item.value = 0;};
		};
	});
	updateInventory();
}

function cookPotion(item) {
	item[1] = "potion";
	//Determine type of potion
	if (item[5] < 1) {
		item[0] = "Poison";
		item[5] = "poison";
	} else {
		item[5] = Math.round(Math.random()*9);
		item[0] = "Potion of " + statNames[item[5]];
	};
	if (item[2] < 1) {
		item[2] = 1;
	};

	item[3] = Math.round(Math.random() * 5 + 3);

	inventory.push(item);
	gameText(catName + ": Woah! What's this? I'm not eating any of that, but it probably could be useful.")
	openCook("");
}

function gameText(text) {
	document.getElementById("gameText").innerHTML = text;
};


//Utility functions:

function randIntBetween(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
