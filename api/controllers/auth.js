import { db } from "../connect.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const register = (req, res)=>{

    // CHECK USER IF EXISTS
     const q = "SELECT * FROM users WHERE username = ?"

     db.query(q,[req.body.username], (err, data)=>{
        if(err) return res.status(500).send(err)
        if(data.length) return res.status(409).send("User already exists!")
        
        //CREATE A NEW USER
            //HASH the password
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(req.body.password, salt)

            const q = "INSERT INTO users (`username`, `email`,`password`,`name`) VALUE(?)"

            const values = [req.body.username, req.body.email, hashedPassword, req.body.name]
            db.query(q,[values],(err)=>{
                if(err) return res.status(500).send(err, data)
                return res.status(200).send("User has been created.");
            });
     })

}

export const login = (req, res)=>{

    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q,[req.body.username], (err, data)=>{
        if(err) return res.status(500).send(err)
        if(data.length === 0) return res.status(404).send("User not found!");

        const checkpassword = bcrypt.compareSync(req.body.password, data[0].password)
    
        if(!checkpassword) return res.status(400).send("Wrong password or username")
    
        const token = jwt.sign({id:data[0].id}, "secretkey");
        
        const{password, ...others} = data[0]
     
        res.cookie("accessToken", token,{
            httpOnly: true,
        }).status(200).send(others);
    });


};
 
export const logout = (req, res)=>{

}