var quests = {
    combat: [
        {title:"Vanquish foe",
            text:{
                introduction:"Hi-ho. A great monster has murdered my {relation}. Would you kindly avenge them? Bring justice to this land.",
                accept:"Excellent! You won't regret this.",//split out to random array general to all quests?
                decline:"Oh... Apparantly I am a great fool. I didn't take you for a coward.",
                complete:"Good job."
            },
            skill:{//roll against this with player stats. Increasing 
                strength:1, 
                dedication:2
            },
            reward:["smallItem","money"]//choose randomly from here
        }
    ],
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
                introduction:"It appears it's my lucky day. I was making use of my {item}, when it seems to have vanished into thin air. Could you help me track it down?",
                accept:"A wise choice to be sure.",//split out to random array general to all quests?
                decline:"Shocker. I'd say I'm disappointed, but I'm sure you get that enough already.",
                complete:"You fixed it it! I am greatly indebted to you. This is all I have to repay you."
            },
            skill:{//roll against this with player stats. Increasing 
                strength:1, 
                dedication:2
            },
            reward:["smallItem","money"]//choose randomly from here
        },
        {title:"Take {item} to {relation}",
        text:{
            introduction:"Hey bro, you wanna help me get my {item} to my {relation} or what?",
            accept:"Okay cool.",//split out to random array general to all quests?
            decline:"Really? You're going to just walk away from an opportunity like this? Very well.",
            complete:"Very good. I'm glad you didn't just walk away with it. It's far more valuable than anything I could've awarded you with."
        }
        },
        {title:"Find {item} for {name}",
        text:{
            introduction:"Are you ever a sight for sore eyes. My {relation} asked me to watch over their {item}. I seem to have lost it. Either you help me find it, or I blame its disappearance on you. Capiche?",
            accept:"Okay cool.",//split out to random array general to all quests?
            decline:"Really? You're going to just walk away from an opportunity like this? Very well.",
            complete:"I must say I am surprised."
        }
        }
    ]
}