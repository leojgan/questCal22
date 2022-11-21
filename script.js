// GLOBAL FUNCTIONS
// const str = this.traits.str;
const diceRoll = (n = 20) => Math.floor(Math.random() * n + 1);

// CLASSES
class PlayerCharacter {
    constructor(pcName, pcRace, pcClass, skills = [], pcLevel = 1, virtue = 0, gold = 3 * diceRoll(6), inventory = []) {
        this.pcName = pcName;
        this.pcRace = pcRace;
        this.pcClass = pcClass;
        this.pcLevel = pcLevel;
        this.virtue = virtue;
        this.gold = gold;
        this.inventory = inventory;
        this.skills = skills;

        this.stats = {
            hp:  0,
            def: 0,
            atk: 0,
            dmg: 0,
        }

        this.traits = {
            strength:     0,
            dexterity:    0,
            constitution: 0,
            intellect:    0,
            wisdom:       0,
            charisma:     0,
        }

        this.abilities = {
        }

        this.rolls = {
            atkRoll: 0,
            skillRoll: 0,
            saveRoll:0
        }

    }

    buildStats(hp, def, atk, dmg) {
        this.stats.hp  = hp;
        this.stats.def = def;
        this.stats.atk = atk;
        this.stats.dmg = dmg;
    }
    buildTraits(str, dex, con, int, wis, cha) {
        this.traits.strength     = str;
        this.traits.dexterity    = dex;
        this.traits.constitution = con;
        this.traits.intellect    = int;
        this.traits.wisdom       = wis;
        this.traits.charisma     = cha;
    };

    skillCheck(trait, skill, dn = 20) {
        const currentRoll = diceRoll(dn);
        let skillMod = 0;
        if(skill) {
            skillMod = this.skills.find(activeSkill => activeSkill === skill) ? 2 : 0;
        }
        console.log(this.traits[trait]);
        console.log(skillMod);
        console.log(currentRoll);
        console.log(this.traits[trait] + currentRoll + skillMod);
    }

    combatCheck(ac, hp, atk, dmgHigh, dmgLow = 0) {
        const [x, d] = this.stats.dmg.split("d");
        // const playerAtkRoll = diceRoll();
        const playerAtkRoll = 10;
        let playerAtk = playerAtkRoll + this.stats.atk + ((this.atkBonus && this.atkBonus != 0) ? this.atkBonus : 0);
        console.log(playerAtk)
        let isSuccess = true;
        // let isAttacked = false;

        // Evaluate Attack Roll
        if (playerAtk >= ac) {
            console.log(`${(playerAtk === 20 ? "Dirty 20" : playerAtk)}: Attack Successful`);
            if (playerAtkRoll === 20) {
                console.log("CRITICAL HIT!");
                playerAtk *= 2;
            }
        } else {
            console.log(playerAtkRoll === 1 ? "Critical Fail" : `Attack misses by ${ac - playerAtk}`);
            isSuccess = false;
        }
        // Calculate Damage Roll
        if(isSuccess) {
            // If the attack is successful: roll player damage, compare player damage to monster hp
        }
        console.log(playerAtk)
    }
}

// PLAYER CHARACTER CREATION -- SYNTAX
const syntax = new PlayerCharacter("Syntax 12B047-2", "Machine", "Artificer", ["locksmith", "student", "investigator"]);
syntax.gold += 8;

syntax.buildStats(11, 13, 2, "1d8");
syntax.buildTraits(1,1,1,2,-2,-3);

syntax.abilities.artillerist = function() {
    syntax.gold -= 1;
    syntax.atkRoll += 1;
};

syntax.abilities.tinkerer = function() {
    syntax.gold -= 1;
    syntax.skillRoll += 1;
};

// syntax.combatCheck(10,3,12,2,1);

syntax.combatCheck(10, 3, 12, 2, 1);