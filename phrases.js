var phrase = {
	location:["You come across ", "Your path brings you to ", "You find yourself in front of ", "You arrive at ", "You spot ", "On the horizon you see ", "You stumble upon ", "You happen upon ", "As fate would have it, you find ","You enter ","You are beckoned by "],
	obtain:["You gain ","You obtain ","In a stroke of luck, you find ","You pick up ","A pleasant surprise! you find ","What luck! ","You are happy to find ","What is this? ", "Look at this! It's "],
	eatin:["The nourishment is palatable","It's gross","And lick your lips."],
	//Good health
	cont1:["There is a lovely glow about you.","Your gait is full of energy.","You continue on your way.","Nothing of significance happens","Time passes as expected.","You continue your business unhindered.","Business as usual.","Everything is as it should be.","The air is pleasant.","You carry on with your head held high."],
	//Approaching boss
	cont2:["Doubt creeps into your mind.","You wonder how far you have come.","You feel a sense of impending.","The horizon is filled with uneasiness.","Your heart is full of unrest.","The sky darkens as you feel your willpower waver.","You wish you were home.","A voice inside questions if you should turn back.","You know you are not welcome in this land.","You go forward, though you fear for the worst."],
	//Boss appearing
	cont3:["Darkness approaches","Your breath draws short","You feel the cold fingers of darkness wrap around your heart.","Evil is nigh.","An ominous voice unheard beckons."],
	//Low hp
	cont4:["Your body cries out for rest from your travels.","You feel an intense need to find sustanence.","You wonder when you last ate.","You press on, though you have no strength.","You feel drained of all vigour.","Your feet feel heavy.","Your feet grow weary.","Your step falters.","Your strength wavers.","You grow weary as strength saps from your bones."],
	//Defeating a boss
	cont5:["The sky clears as life returns to your surroundings.","Triumph is yours, for evil has been vanquished.","Relief washes over you as your foe sinks into the ground.","A great scourge has been removed from the land."],
	encounter:[//starts with opening context: "among x you " + ...
		"come across",
		"run into",
		"encounter",
		"happen to see",
		"spot",
		"see",
		"spy",
		"bumble into",
		"nearly overlook"
	],
	meetNpc: [//used as opening context for meeting npcs
		"Among the rabble",
		"As you continue your path",
		"As fate would have it",
		"An unusual encounter,",
		"What is this,",
		"How unexpected,",
		"You don't get this every day,",
		"This is unusual,"
	],
	victory:[
		" has been defeated",
		" falls to the ground",
		" crumbles before you",
		" perishes"
	]
};


var adj = {
	cons:["n imposing","n uninhabited","n elusive","n abandoned","n inviting","n exceptional","n immaculate"," splendid"," unique"," well-maintained"," delapidated"," lost"," empty"," strange"," remote"," beautiful"," large"," busy"," quaint"," popular"," distinguished","n ornate"," traditional"," secluded"," successful"," wonderful"," rare"," suitable"," sufficient"," famous"," civil"," curious"," lonely"," remarkable"," suspicious"," local"," major"," hidden"," pleasant"," solitary"],
	title:["Civil","Financial","Commerce","Commercial","Primary","Southern","Literature","Western","North","Classical","National","Lower","First","Standard","Independent","Upper","Eastern","Proper","Municipal","Technical","Prior","Cavandor","Administration","Public","General","Sector","Henondal","Capital","Community","High","Divisions","Common","Alchinol","Gerraway","Principle"],
	names1:["Bar","Gar","Cor","Klip","Mel","Gip","Ver","Shil","Max","Grip","Mis","Ash","Astro","Imel","Lex","Dax","Sylv","Rex"],
	names2:["amear","con","laft","slet","slin","pen","kilm","rider","-cispel","-kimlet","enteen","ion","kum","ket","kelet","icus","lus","sus","em","in","ul"]

};

var alphabet = {
	vowels:["a","e","i","o","u"],
	consonants:["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"]
};

var pronouns = {
	male: {
		po: "him",//pronoun object "dog of him"
		pp: "his",//pronoun possessive "dog is his"
		ap: "his",//adjectival possessive "his dog"
		ps: "he"//pronoun subject "he is dog"
	},
	female: {
		po: "her",
		pp: "hers",
		ap: "her",
		ps: "she"
	},
	neuter: {
		po: "it",
		pp: "its",
		ap: "its",
		ps: "it"
	}
}