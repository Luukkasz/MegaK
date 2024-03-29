import {ValidationError} from "../utils/error";
import {v4 as uuid} from "uuid";
import {pool} from "../utils/db";
import {FieldPacket} from "mysql2";


export class ChildRecord {
    public id?: string
    public name: string
    public giftId: string

    constructor(obj: ChildRecord) {
        if (!obj.name || obj.name.length < 3 || obj.name.length > 25) {
            throw new ValidationError('Imię musi miec od 3 do 55 znaków.')
        }


        this.id = obj.id;
        this.name = obj.name;
        this.giftId = obj.giftId
    }

    async insert(): Promise<string> {
        if (!this.id) {
            this.id = uuid();
        }

        await pool.execute("INSERT INTO `children`(`id`,`name`) VALUES(:id, :name)", {
            id: this.id,
            name: this.name,
        });

        return this.id;
    }

    static async listAll(): Promise<ChildRecord[]> {
        const [results] = (await pool.execute('SELECT * FROM `children` ORDER BY `name` ASC')) as [ChildRecord[], FieldPacket[]];
        return results.map(obj => new ChildRecord(obj));
    }

    static async getOne(id: string): Promise<null | ChildRecord> {
        const [results] = (await pool.execute('SELECT * FROM `children` WHERE `id` = :id ', {
            id,
        })) as [ChildRecord[], FieldPacket[]];
        return results.length === 0 ? null : new ChildRecord(results[0]);
    }

    async update(): Promise<string> {
        await pool.execute("UPDATE `children` SET `name` = :name, `giftId` = :giftId WHERE `id` = :id", {
            id: this.id,
            name: this.name,
            giftId: this.giftId,
        });

        return this.id;
    }
}