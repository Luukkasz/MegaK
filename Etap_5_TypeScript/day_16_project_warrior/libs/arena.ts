import {Warrior} from "./warrior";

enum ActiveWarrior {
    First,
    Second,
}

export class Arena {
    activeWarrior: ActiveWarrior = ActiveWarrior.Second;
    constructor(
        public warrior1:Warrior,
        public warrior2:Warrior
    ) {
        if (!(warrior1 instanceof Warrior)) {
            throw new Error('warrior1 must be an instance of Warrior class!');
        };

        if (!(warrior2 instanceof Warrior)) {
            throw new Error('warrior2 must be an instance of Warrior class!');
        };

        this.warrior1 = warrior1;
        this.warrior2 = warrior2;
        this.activeWarrior = 2;
    };

    fight(): Warrior | null {
        const attacker = this.activeWarrior === ActiveWarrior.First ? this.warrior1 : this.warrior2;
        const attacked = this.activeWarrior === ActiveWarrior.First ? this.warrior2 : this.warrior1;
        const attackingHitPoints = attacker.hitPoints;
        const attackedOldHp = attacked.hp;
        const attackedNewHp = attackedOldHp - attackingHitPoints;
        console.log(attacker.name, 'is attacking', attacked.name, 'and how he has', attackedNewHp, 'hp');
        attacked.hp = attackedNewHp;
        this.activeWarrior = this.activeWarrior === ActiveWarrior.First
            ? ActiveWarrior.Second
            : ActiveWarrior.First;

        if (attackedNewHp <= 0) {
            console.log(attacked.name, 'goes to Valhalla');
            return attacker;
        }
        return null;
    }
}