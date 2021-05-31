var gameItems = {
	//Food	"name"			type	heals	uses	value	spoil
	food:[	
		[
		{name: "Celery",			level:1, heals:3,	uses:1,	value:1, 	spoil:1},
		{name: "Mealy Apple",		level:1, heals:4,	uses:1,	value:1, 	spoil:1},
		{name: "Fish",				level:1, heals:10,	uses:1,	value:2, 	spoil:1},
		{name: "Saltine Cracker",	level:1, heals:5,	uses:1,	value:1, 	spoil:1},
		{name: "Kelp",				level:1, heals:2,	uses:1,	value:1, 	spoil:1},
		{name: "Crusty Bread",		level:1, heals:3,	uses:3,	value:3, 	spoil:1},
		{name: "Goober Peas",		level:1, heals:8,	uses:1,	value:2, 	spoil:1},
		{name: "Melon",				level:1, heals:4,	uses:1,	value:1, 	spoil:1},
		{name: "Lentils",			level:1, heals:5,	uses:2,	value:2, 	spoil:1},
		{name: "Locust",			level:1, heals:17,	uses:1,	value:5, 	spoil:1},
		{name: "Leftover Meatloaf",	level:1, heals:4,	uses:3,	value:3, 	spoil:1},
		{name: "Vinegar",			level:1, heals:12,	uses:1,	value:4, 	spoil:1},
		{name: "Corn on the Cob",	level:1, heals:3,	uses:3,	value:3, 	spoil:1}
		],
		[
		{name: "Eel",				level:2, heals:20,	uses:1,	value:10,	spoil:1},
		{name: "Sardine",			level:2, heals:15,	uses:1,	value:5, 	spoil:1},
		{name: "Cluster of Dates",	level:2, heals:12,	uses:1,	value:4, 	spoil:1},
		{name: "Turmeric",			level:2, heals:26,	uses:1,	value:12,	spoil:1},
		{name: "Corn off the Cob",	level:2, heals:8,	uses:1,	value:7, 	spoil:1},
		{name: "Soggy Sandwich",	level:2, heals:10,	uses:2,	value:5, 	spoil:1},
		{name: "Cured Pork",		level:2, heals:45,	uses:1,	value:15,	spoil:1},
		{name: "Sausage Link",		level:2, heals:70,	uses:5,	value:45,	spoil:1},
		{name: "Minister's Marrow",	level:2, heals:18,	uses:3,	value:22,	spoil:1},
		{name: "Goat's Milk",		level:2, heals:5,	uses:3,	value:6, 	spoil:1},
		{name: "Porrage",			level:2, heals:11,	uses:2,	value:7, 	spoil:1},
		{name: "Hearty Gruel",		level:2, heals:24,	uses:1,	value:7, 	spoil:1},
		{name: "Bone Broth",		level:2, heals:30,	uses:1,	value:8, 	spoil:1},
		{name: "Cheese Wheel",		level:2, heals:14,	uses:1,	value:11,	spoil:1}
		],
		[
		{name: "Minstrel's Minestrone",	level:3, heals:12,		uses:3,		value:16, 	spoil:1},
		{name: "Fish & Chips",			level:3, heals:30,		uses:1,		value:21, 	spoil:1},
		{name: "Cob with no Corn",		level:3, heals:25,		uses:1,		value:18, 	spoil:1},
		{name: "Gooseberry Cobbler",	level:3, heals:15,		uses:2,		value:15, 	spoil:1},
		{name: "Liver Pudding",			level:3, heals:35,		uses:1,		value:16, 	spoil:1},
		{name: "Nigiri",				level:3, heals:22,		uses:1,		value:10, 	spoil:1},
		{name: "Beef Tallow",			level:3, heals:35,		uses:1,		value:16, 	spoil:1},
		{name: "Custard",				level:3, heals:44,		uses:1,		value:16, 	spoil:1},
		{name: "Dense Loaf",			level:3, heals:15,		uses:5,		value:37, 	spoil:1},
		{name: "Shepherd's Pie",		level:3, heals:55,		uses:2,		value:55, 	spoil:1},
		{name: "Leg of Mutton",			level:3, heals:75,		uses:1,		value:38, 	spoil:1},
		{name: "Flask of Ointment",		level:3, heals:1000,	uses:7,		value:7000, 	spoil:1},
		{name: "Fermented Rat",			level:3, heals:-45,		uses:1,		value:16, 	spoil:1}, //heavy stat boost
		{name: "Manna",					level:3, heals:5,		uses:1000000000,value:50000,spoil:100}
		],
		[
		{name: "Caviar",				level:4, heals:80,	uses:3,	value:645, 	spoil:1},
		{name: "Grated Cabbage",		level:4, heals:96,	uses:2,	value:64, 	spoil:1},
		{name: "Stromboli",				level:4, heals:40,	uses:3,	value:160, 	spoil:1},
		{name: "Collard Greens",		level:4, heals:70,	uses:1,	value:85, 	spoil:1},
		{name: "Foix Gras Goose",		level:4, heals:112,	uses:1,	value:825, 	spoil:1},
		{name: "Flapjacks",				level:4, heals:35,	uses:3,	value:112, 	spoil:1},
		{name: "Quail Eggs",			level:4, heals:90,	uses:3,	value:250, 	spoil:1},
		{name: "Goji Berry",			level:4, heals:72,	uses:2,	value:75, 	spoil:1},
		{name: "Smoked Salmon",			level:4, heals:99,	uses:1,	value:150, 	spoil:1},
		{name: "Cornucopia",			level:4, heals:8000,uses:7,	value:10000,spoil:1},
		{name: "Spicy Kebob",			level:4, heals:85, uses:1,	value:130, 	spoil:1}, //heavy stat boost
		{name: "Isica Omentata",		level:4, heals:104,	uses:8,	value:5000,	spoil:1}
		]
	],
	//food5
	//ugali, flatbread, honey cakes, dancing sugarplums, mayonnaise,

	//weapons							4-str 5-agi 6-both
	//	Name				type		stat	power	value
	weapon: [ 
		[//lvls 1-15
	//Daggers
		{name: "Shank",			level:1,	attackStat:5,	power:1,	value:4, 	buffs:{speed:1}},
		{name: "Stone Dagger",	level:1,	attackStat:4,	power:1,	value:12, 	buffs:{speed:1}},
		{name: "Butter Knife",	level:1,	attackStat:6,	power:1,	value:5, 	buffs:{speed:1}},
		{name: "Rusty Dagger",	level:1,	attackStat:4,	power:1,	value:15, 	buffs:{speed:1}},
		{name: "Smooth Tusk",	level:1,	attackStat:6,	power:2,	value:33, 	buffs:{speed:1,diplomacy:1}},
	//Swords
		{name: "Corroded Shortsword",level:1,attackStat:6,	power:2,	value:22, 	buffs:{}},
		{name: "Akinaka",		level:1,	attackStat:6,	power:3,	value:40, 	buffs:{}},
		{name: "Copper Shortsword",level:1,	attackStat:6,	power:3,	value:55, 	buffs:{}},
	//Blunt
		{name: "Club",			level:1,	attackStat:4,	power:4,	value:17, 	buffs:{speed:-1}},
		{name: "Heavy Rock",	level:1,	attackStat:4,	power:3,	value:2, 	buffs:{speed:-1}},
		{name: "Cudgel",		level:1,	attackStat:6,	power:4,	value:10, 	buffs:{speed:-1}},
		{name: "Boot on Stick",	level:1,	attackStat:4,	power:15,	value:1, 	buffs:{strength:1,speed:-1}},//make most powerful lvl1 weapon
	//Pole Weapon
		{name: "Staff",			level:1,	attackStat:4,	power:3,	value:12, 	buffs:{defense:1}},
	//Ranged
		{name: "Rocks",			level:1,	attackStat:5,	power:1,	value:3, 	buffs:{}},
		{name: "Darts",			level:1,	attackStat:5,	power:2,	value:13, 	buffs:{}},
		{name: "Crude Shortbow",level:1,	attackStat:5,	power:3,	value:40, 	buffs:{}},
	//Other
		{name: "Sharpened Potato",level:1,	attackStat:6,	power:0,	value:-1,	buffs:{intelligence:-1,diplomacy:-1,luck:4}}
		],//15
		[ //16-30
	//Daggers
		{name: "Jagged Tusk",	level:2,	attackStat:4,	power:3,	value:40, 	buffs:{}},
		{name: "Bronze Dagger",	level:2,	attackStat:6,	power:3,	value:24, 	buffs:{}},
		{name: "Dirk",			level:2,	attackStat:5,	power:3,	value:44, 	buffs:{}}, 
	//Swords
		{name: "Broadsword",	level:2,	attackStat:4,	power:4,	value:60, 	buffs:{}},
		{name: "Scimitar",		level:2,	attackStat:6,	power:3,	value:75, 	buffs:{speed:1}},
		{name: "Sica",			level:2,	attackStat:4,	power:5,	value:81, 	buffs:{}},
	//Blunt
		{name: "Spiked Club",	level:2,	attackStat:4,	power:6,	value:21, 	buffs:{}},
		{name: "Flail",			level:2,	attackStat:6,	power:7,	value:33, 	buffs:{}},
		{name: "Brass Knuckles",level:2,	attackStat:4,	power:4,	value:12, 	buffs:{}},
	//Pole Weapon
		{name: "Spear",			level:2,	attackStat:4,	power:5,	value:55, 	buffs:{}},
		{name: "falx",			level:2,	attackStat:6,	power:6,	value:20, 	buffs:{}},
	//Ranged
		{name: "Sling",			level:2,	attackStat:5,	power:3,	value:20, 	buffs:{}},
		{name: "Rope Dart",		level:2,	attackStat:5,	power:4,	value:33, 	buffs:{}},
		{name: "Blowgun",		level:2,	attackStat:5,	power:5,	value:40, 	buffs:{}},
		{name: "Pine Shortbow",	level:2,	attackStat:5,	power:6,	value:57, 	buffs:{}},
		],//15
		[//31-45
	//Daggers
		{name: "Iron Dagger",	level:3,	attackStat:5,	power:4,	value:10, 	buffs:{}},
		{name: "Tanto",			level:3,	attackStat:5,	power:4,	value:10, 	buffs:{}},
		{name: "Polished Iron Dagger",level:3,attackStat:5,	power:4,	value:20, 	buffs:{}},
	//Swords
		{name: "Longsword",		level:3,	attackStat:4,	power:5,	value:20, 	buffs:{}},
		{name: "Spatha",		level:3,	attackStat:6,	power:6,	value:20, 	buffs:{}},
		{name: "Claymore",		level:3,	attackStat:4,	power:7,	value:20, 	buffs:{speed:-1}},
		{name: "Katana",		level:3,	attackStat:4,	power:7,	value:20, 	buffs:{diplomacy:1}},
	//Blunt
		{name: "Adze",			level:3,	attackStat:4,	power:8,	value:20, 	buffs:{}},
		{name: "Mace",			level:3,	attackStat:4,	power:8,	value:20, 	buffs:{}},
		{name: "Whip",			level:3,	attackStat:5,	power:8,	value:20, 	buffs:{}},
	//Pole Weapon
		{name: "Pole-Axe",		level:3,	attackStat:4,	power:7,	value:20, 	buffs:{}},
	//Ranged
		{name: "Bolas",			level:3,	attackStat:5,	power:7,	value:20, 	buffs:{}},
		{name: "Yew Bow",		level:3,	attackStat:5,	power:8,	value:20, 	buffs:{}},
		{name: "Crossbow",		level:3,	attackStat:4,	power:9,	value:20, 	buffs:{}},
		{name: "Maple Longbow",	level:3,	attackStat:6,	power:10,	value:20, 	buffs:{}},
		],//15
		[//46-60
	//Daggers
		{name: "Ornate Dagger",	level:4,	attackStat:5,	power:6,	value:400, 	buffs:{}},
		{name: "Seax",			level:4,	attackStat:6,	power:6,	value:20, 	buffs:{}},
		{name: "Karambit",		level:4,	attackStat:5,	power:6,	value:20, 	buffs:{}},
	//Swords
		{name: "Estoc",			level:4,	attackStat:4,	power:8,	value:20, 	buffs:{}},
		{name: "Falcata",		level:4,	attackStat:6,	power:9,	value:20, 	buffs:{}},
		{name: "Maquahuitl",	level:4,	attackStat:4,	power:11,	value:20, 	buffs:{}},
		{name: "Khopesh",		level:4,	attackStat:4,	power:12,	value:20, 	buffs:{}},
	//Blunt
		{name: "King's Mace",	level:4,	attackStat:4,	power:10,	value:20, 	buffs:{}},
		{name: "Warhammer",		level:4,	attackStat:4,	power:12,	value:20, 	buffs:{}},
		{name: "Spiked Flail",	level:4,	attackStat:6,	power:15,	value:20, 	buffs:{}},
	//Pole Weapon
		{name: "Halberd",		level:4,	attackStat:4,	power:12,	value:20, 	buffs:{}},
	//Ranged
		{name: "Altatl",		level:4,	attackStat:6,	power:12,	value:20, 	buffs:{}},
		{name: "Meteor Hammer",	level:4,	attackStat:6,	power:15,	value:20, 	buffs:{}},
		{name: "Yew Longbow",	level:4,	attackStat:5,	power:15,	value:20, 	buffs:{}},
		{name: "Heavy Crossbow",level:4,	attackStat:4,	power:18,	value:20, 	buffs:{speed:-1}},
		],//15
	//w5 - Historic Weapons
	//w6 - Legendary Weapons
	//Historic artifact, can be examined for effects
		[//61-80
		//Daggers
		{name: "Seax of Beagnoth",	level:5,	attackStat:6,	power:100,	value:20, 	buffs:{}},
		{name: "Ulu",				level:5,	attackStat:5,	power:100,	value:20, 	buffs:{}},
		{name: "Surmene Knife",		level:5,	attackStat:5,	power:100,	value:20, 	buffs:{}},
		{name: "Scythe of Cronus",	level:5,	attackStat:4,	power:100,	value:20, 	buffs:{}},
		{name: "Carnwennan",		level:5,	attackStat:4,	power:100,	value:20, 	buffs:{}},
		{name: "Dagger of Rostam",	level:5,	attackStat:4,	power:100,	value:20, 	buffs:{}},
		{name: "Kris Taming Sari",	level:5,	attackStat:4,	power:100,	value:20, 	buffs:{}},
		{name: "Misericorde",		level:5,	attackStat:4,	power:100,	value:20, 	buffs:{}},
		//Blunt&Axes
		{name: "Zeus' Labrys",		level:5,	attackStat:4,	power:100,	value:20, 	buffs:{}},
		{name: "Chentu",			level:5,	attackStat:4,	power:100,	value:20, 	buffs:{}},
		{name: "Sharur",			level:5,	attackStat:4,	power:100,	value:20, 	buffs:{}},
		{name: "Heracles' Club",	level:5,	attackStat:4,	power:100,	value:20, 	buffs:{}},
		//Pole Weapons
		{name: "Trident of Poseidon",level:5,	attackStat:4,	power:100,	value:20, 	buffs:{}},
		{name: "Otegine",			level:5,	attackStat:4,	power:100,	value:20, 	buffs:{}},
		{name: "Spear of Lugh",		level:5,	attackStat:4,	power:100,	value:20, 	buffs:{}},
		{name: "Areadbhar",			level:5,	attackStat:4,	power:100,	value:20, 	buffs:{}},
		{name: "Aram",				level:5,	attackStat:4,	power:90,	value:20, 	buffs:{}},
		{name: "Gungnir",			level:5,	attackStat:4,	power:90,	value:20, 	buffs:{}},
		{name: "Maltet",			level:5,	attackStat:4,	power:90,	value:20, 	buffs:{}},
		{name: "Ruyi Jingu Bang",	level:5,	attackStat:4,	power:90,	value:20, 	buffs:{}},
		{name: "Was",				level:5,	attackStat:4,	power:90,	value:20, 	buffs:{}}, //scepter from egyptian...
		//Swords
		{name: "Tizona",			level:5,	attackStat:4,	power:90,	value:20, 	buffs:{}},//El Cid's sword
		{name: "Sword of Essen",	level:5,	attackStat:4,	power:90,	value:20, 	buffs:{}},
		{name: "Sword of St. Wenceslas",level:5,attackStat:4,	power:90,	value:12, 	buffs:{}},
		{name: "Guy of Warwick's Sword",level:5,attackStat:4,	power:90,	value:12, 	buffs:{}},
		{name: "Sabre of Charlemagne",level:5,	attackStat:4,	power:90,	value:12, 	buffs:{}},//false legend
		{name: "Lobera",			level:5,	attackStat:4,	power:90,	value:4040, buffs:{}},
		{name: "Joyeuse",			level:5,	attackStat:4,	power:90,	value:40, 	buffs:{}},
		{name: "Legbiter",			level:5,	attackStat:4,	power:90,	value:40, 	buffs:{}},
		{name: "Sword of Mars",		level:5,	attackStat:4,	power:90,	value:40, 	buffs:{}},
		//Ranged
		{name: "Xiuhcoatl",			level:5,	attackStat:5,	power:100,	value:40, 	buffs:{}},
		{name: "Mistletoe",			level:5,	attackStat:5,	power:100,	value:40, 	buffs:{}},
		{name: "Sagitta",			level:5,	attackStat:5,	power:100,	value:40, 	buffs:{}},
		{name: "Fail-Not",			level:5,	attackStat:5,	power:100,	value:40, 	buffs:{}},
		{name: "Kongo",				level:5,	attackStat:5,	power:100,	value:40, 	buffs:{}},
		{name: "Thunderbolt",		level:5,	attackStat:5,	power:100,	value:40, 	buffs:{}},
		{name: "Trident of Poseidon",level:5,	attackStat:5,	power:100,	value:40, 	buffs:{}},
		//{name: "Cootie Gras",		level:5,	attackStat:6,	power:150,	value:5000,	buffs:{}}
		]//37 Divide in half and give another level of legendheals:
	],
	weapon6: [//81+ Legendary weapons. only obtainable through boss battles
	],

	armor1: [
	{name: "Tattered Shirt"},
	{name: "Loin Cloth"},
	{name: "Grimy Cloak"},
	{name: "Trousers"}
	],
	armor2: [
	{name: "Laced Bloomers"}
	],
	armor3: [
	],
	armor4: [
	],
	armor5: [
	]
};


var effects = {
	//special items only have prefix or suffix, rare items have both or one and a special name, 
	//historic and legendary items have custom name
	prefix: [
		{name:"Sparkling ", boosts:{intelligence:1}},
		{name: "Felix's ", boosts:{diplomacy:1}},
		{name: "Harkening ",boosts:{speed:2}},
		{name: "Graceful ",boosts:{speed:1}},
		{name: "Fortifying ", boosts:{health:5}},
		{name: "Harriot's ", boosts:{dedication:2}},
		{name: "Kamakazie ", boosts:{health:-5,strength:4,speed:4}},
		{name: "Shocking", boosts:{speed:1}},
		{name: "Fortune's ", boosts:{luck:1}},
	],
	suffix: [
		{name: " Grandiose", boosts:{}},
		{name: " of Lightness", boosts:{speed:2}},
		{name: " of Shadows", boosts:{dedication:-2,speed:1,intelligence:1}},
		{name: " of Quickening", boosts:{speed:2,luck:1,diplomacy:1,strength:-1}},
		{name: " a La Mode", boosts:{speed:-1,defense:1,intelligence:1}},//al dente, a la carte, au gratin, am I hungry or something?
		{name: " of Burden", boosts:{speed:-2,strength:2,defense:2}},
		{name: " De Magnifique", boosts:{diplomacy:1,intelligence:1}},
		{name: " of Resolve", boosts:{dedication:3}}
	],
	name: [
		{name:"Bane", boosts:{strength:2}}
	]
};
/*
health
diplomacy
intelligence
speed
strength
defense
dedication
luck
combo
*/
/*Extra weapons
Ji: chinese pole-dagger
Dory: hoplite wide blade Spear*/
