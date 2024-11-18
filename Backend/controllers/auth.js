import { db } from '../connect.js'
import bcrypt from 'bcrypt'


export const register = () => {
    //check is user exist or not
    const q = "SELECT FROM users WHERE username= ?"
    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err)
        if (data.length) res.status(409).send("User already exist")

        //if no tthen make a new user
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt)

        const q = "INSERT INTO users(`username`,`email`,`password`,`name`) VALUE ?"
        const values = [res.body.username, res.body.email, hashedPassword, res.body.name]
        db.query(q, [values], (err, data) => {
            return res.status(200).json("User has been created")
        })
    })
};
export const login = () => {

};
export const logout = () => {

};