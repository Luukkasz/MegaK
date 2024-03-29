import {pool} from "../utils/db";
import {ValidationError} from "../utils/error";
import {v4 as uuid} from "uuid";
import {FieldPacket} from "mysql2";
import {GiftEntity} from "../types";


export class GiftRecord implements GiftEntity{
    public id?: string
    public name: string
    public count: number

    constructor(obj: GiftEntity) {
        if (!obj.name || obj.name.length < 3 || obj.name.length > 55) {
            throw new ValidationError('Nazwa prezentu musi miec od 3 do 55 znaków.')
        }
        if (!obj.count || obj.count < 1 || obj.count >999999) {
            throw new ValidationError('Liczba sztuk prezentu powinna się mieścić w przedziale 1 - 999999.')
        }

        this.id = obj.id;
        this.name = obj.name;
        this.count = obj.count;
    }

    async insert(): Promise<string> {
        if (!this.id) {
            this.id = uuid();
        }

       await pool.execute("INSERT INTO `gifts` VALUES(:id, :name, :count)", {
            id: this.id,
            name: this.name,
            count: this.count,
        });

        return this.id;
    }

    static async listAll(): Promise<GiftRecord[]> {
        const [results] = (await pool.execute('SELECT * FROM `gifts`')) as [GiftRecord[], FieldPacket[]];
        // sprawdz
        return results.map(obj => new GiftRecord(obj));
    }

    static async getOne(id: string): Promise<null | GiftRecord> {
        const [results] = (await pool.execute('SELECT * FROM `gifts` WHERE `id` = :id ', {
            id,
        })) as [GiftRecord[], FieldPacket[]];
        return results.length === 0 ? null : new GiftRecord(results[0]);
    }

    async delete(): Promise<void> {
        const [results] = await pool.execute('DELETE FROM `gifts` WHERE `id` = :id', {
            id: this.id,
        })
    }

    async countGivenGifts(): Promise<number> {
        const [[result]] = (await pool.execute("SELECT COUNT(*) AS `count` FROM `children` WHERE `giftId` = :id", {
            id: this.id
        })) as [GiftRecord[], FieldPacket[]]

        return result.count;
    }
}