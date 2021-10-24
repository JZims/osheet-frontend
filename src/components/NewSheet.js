import React from 'react'
import SheetForm from './SheetForm'

function NewSheet(){

    const newChar = {
        info: {
            name:"", 
            class: [], 
            background:"", 
            playerName: "", 
            race: "", 
            age: 0,
            height: "", 
            weight: 0,
            eyeColor: "", 
            skin: "", 
            hair: "",
            alignment:"", 
            exp: 0
        }, 
        abilityScores: {
            strength: 0, 
            dexterity: 0, 
            constitution: 0,
            intelligence: 0, 
            wisdom: 0, 
            charisma: 0
        }, 
        inspiration: false, 
        proficiencyBonus: 0, 
        savingThrows: {
            strength: 0, 
            dexterity: 0, 
            constitution: 0,
            intelligence: 0, 
            wisdom: 0, 
            charisma: 0
        }, 
        skills: {

            acrobatics: {
                value: 0, 
                trained: false
            },
            animalHandling: {
                value: 0, 
                trained: false
            },
            arcana: {
                value: 0, 
                trained: false
            },
            athletics: {
                value: 0, 
                trained: false
            },
            deception: {
                value: 0, 
                trained: false
            },
            history: {
                value: 0, 
                trained: false
            },
            insight: {
                value: 0, 
                trained: false
            },
            intimidation: {
                value: 0, 
                trained: false
            },
            investigation: {
                value: 0, 
                trained: false
            },
            medicine: {
                value: 0, 
                trained: false
            },
            nature: {
                value: 0, 
                trained: false
            },
            perception: {
                value: 0, 
                trained: false
            },
            performance: {
                value: 0, 
                trained: false
            },
            persuasion: {
                value: 0, 
                trained: false
            },
            religion: {
                value: 0, 
                trained: false
            },
            sleightOfHand: {
                value: 0, 
                trained: false
            },
            stealth: {
                value: 0, 
                trained: false
            },
            survival: {
                value: 0, 
                trained: false
            },
        }, 
        passivePerception: 0, 
        armorClass: 0, 
        initiative: 0, 
        speed: 0, 
        currentHitPoints: 0, 
        temporaryHitPoints: 0, 
        hitDice: {
            die: "1d4", 
            amount: 0
        }, 
        deathSaves: {
            successes: 0, 
            failures: 0
        }, 
        personalityTraits: [], 
        ideals: [], 
        bonds: [], 
        flaws: [], 
        features: [], 
        attacks: [
            {
                atkName: "", 
                atkBonus: 0, 
                dmgType: ""
            }
        ],
        equipment: {
            platinum: 0, 
            gold: 0, 
            silver: 0, 
            copper: 0,
            items: [] 
        }, 
        languagesAndProficiencies: [], 
        pictureUrl:"", 
        backstory: "", 
        spells: {
            cantrips:[],
            firstLevel: [], 
            secondLevel: [], 
            thirdLevel: [], 
            fourthLevel: [], 
            fifthLevel: [], 
            sixthLevel: [], 
            seventhLevel: [],
            eigthLevel: [], 
            ninthLevel: []
        }, 
        spellcastingAbility: "", 
        spellSaveDC: 0 , 
        spellAttackBonus: 0
    }

    return(
        <div>
            <SheetForm />
        </div>
    )

}

export default NewSheet