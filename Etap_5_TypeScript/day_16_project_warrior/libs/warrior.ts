export class Warrior {
    constructor(
        private _name: string,
        private _hitPoints: number,
        private _hp:number
    ) {};

    set hp(hp: number) {
        this._hp = hp;
    }

    get hp(): number {
        return this._hp;
    }

    get hitPoints(): number {
        return this._hitPoints;
    }

    get name(): string {
        return this._name;
    }

    levelUp(): void {
        this._hitPoints *= 1.1;
        this._hp *= 1.1;
    }
}