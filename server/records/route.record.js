const {pool} = require("../utils/db");
const {ValidationError} = require("../utils/error");
const {v4: uuid} = require('uuid');

class RouteRecord {
    constructor(obj) {

        if (!obj.date || !obj.startpoint || !obj.endpoint || !obj.duration ) {
            throw new ValidationError('przesłane dane nie są kompletne');
        }
        this.id = obj.id;
        this.date = obj.date;
        this.startpoint = obj.startpoint;
        this.endpoint = obj.endpoint;
        this.duration = obj.duration;

    }

    async insert() {
        if (!this.id) {
            this.id = uuid();
        }

        await pool.execute("INSERT INTO `routeslist`(id, date, startpoint, endpoint, duration) VALUES (:id, :date, :startpoint, :endpoint, :duration)", {
            id: this.id,
            date: this.date,
            startpoint: this.startpoint,
            endpoint: this.endpoint,
            duration: this.duration,

        });
        return this.id;
    }
    static async listSelected(month, year) {
       const [results] = await pool
           .execute("SELECT * FROM `routeslist` WHERE EXTRACT(YEAR FROM `date`) = :year AND EXTRACT(MONTH" +
             " FROM`date`) = :month ORDER BY `date` DESC", {
               month,
               year,
           });


       return results.map(obj => new RouteRecord(obj));
    }
    static async deleteOne(id) {
         await pool.execute("DELETE FROM `routeslist` WHERE `id` = :id", {
            id,
        });

    }

}

module.exports = {
    RouteRecord,
}