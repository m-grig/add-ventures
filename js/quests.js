quests = {
    combat: {

    },
    task: [
        {title:"Chop wood for {name}",
            text:{
                introduction:"I have come across some fine timber out here. Imagine that! Well... I'm not the brawny working type. Maybe you are. If you're willing to chop this up for me, I will reward you as handsomly as I look",
                accept:"Excellent! You won't regret this.",//split out to random array general to all quests?
                decline:"Really? You're going to just walk away from an opportunity like this? Very well.",
                complete:"Thank you kindly. If I was stronger than you, I'd take the wood and split without giving you so much as a glance. But clearly you are well equipped. Therefore I am forced to part with my precious possessions. I resent you."
            },
            skill:{//roll against this with player stats. Increasing 
                strength:1, 
                dedication:2
            },
            reward:["smallItem","money"]//choose randomly from here
        },
        {title:"Fix broken {item}",
            text:{
                introduction:"I have come across some fine timber out here. Imagine that! Well... I'm not the brawny working type. Maybe you are. If you're willing to chop this up for me, I will reward you as handsomly as I look",
                accept:"Excellent! You won't regret this.",//split out to random array general to all quests?
                decline:"Really? You're going to just walk away from an opportunity like this? Very well.",
                complete:"Thank you kindly. If I was stronger than you, I'd take the wood and split without giving you so much as a glance. But clearly you are well equipped. Therefore I am forced to part with my precious possessions. I resent you."
            },
            skill:{//roll against this with player stats. Increasing 
                strength:1, 
                dedication:2
            },
            reward:["smallItem","money"]//choose randomly from here
        },
        {title:"Take {item} to {relation}",
        text:
    ]
}