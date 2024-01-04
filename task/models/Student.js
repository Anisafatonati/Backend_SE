// import database
const db = require('../config/database');

// membuat class model Student
class Student {

    /**
     * Method untuk menampilkan semua data student
     */
    static all(){
        // return Promise sebagai solusi Asynchronous
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM students`;
            db.query(query, (err, results) => {
                return resolve(results);
            });
        });
    }

    static all() {
        // return promise sebagai solusi asycronus
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM students`;
            db.query(query, (err, results) => {
                resolve(results);
            });
        });
    } 
    
    static async create(data) {
        const id = await new Promise((resolve, reject) => {
          const sql = "INSERT INTO students SET ?";
          db.query(sql, data, (err, results) => {
            resolve(results.insertId);
          });
        });
    
        return new Promise((resolve, reject) => {
          const sql = "SELECT * FROM students WHERE id = ?";
          db.query(sql, id, (err, results) => {
            resolve(results);
          });
        });       
    }
    
    //mengupdate data student
    static async update(id, data) {
        await new Promise((resolve, reject) => {
            const sql = "UPDATE students SET ? WHERE id = ?";
            db.query(sql, [data, id], (err, resutls) => {
                resolve(results);
            });
        });
        
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM students WHERE id = ?";
            db.query(sql, id, (err, resutls) => {
                //destructing array
                const[student] = resutls;
                resolve(student);
            });
        });
    }

    static delete(id) {
            return new Promise((resolve, reject) => {
                const sql = 'DELETE FROM students WHERE id = ?';
                db.query(sql, (err, results) => {
                    resolve(results);
            });
        });        
    }

    //mencari data berdasarkan id
        static find(id) {
            return new Promise((resolve, reject) => {
                const sql = "SELECT * FROM students WHERE id = ?";
                db.query(sql, (err, results) => {
                    // destructing array
                    const [student] = results;
                    resolve(student);
            });
        });
    }
}


// export class Student
module.exports = Student;