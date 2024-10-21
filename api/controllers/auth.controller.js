import dotenv from 'dotenv';
dotenv.config();
import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";
export const register=async (req,res)=>{
    const {username,email,password} = req.body;

    
    try{

        //Hashing the password
        const hashPassword =await bcrypt.hash(password, 10);
        console.log(hashPassword);
        
        //Creating a new user
        const newUser=await prisma.user.create({
            data:{
                username,
                email,
                password:hashPassword,
            }
        });

        console.log(newUser);
    
        res.status(201).json({message:"User registered successfully"});

    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Failed to create new user",error: error.message});
    }
}

export const login=async (req,res)=>{
    //db operations
    const {username,password} = req.body;
    try{
        //checking if user exists
        const user=await prisma.user.findUnique({
            where:{
                username
            }
        })

        if(!user)
            return res.status(401).json({message:"Invalid credentials"});

        //checking if password correct
        const isPasswordValid=await bcrypt.compare(password, user.password);

        if(!isPasswordValid)
            return res.status(401).json({message:"Invalid credentials"});
        

        //generate cookie token

        //res.setHeader("Set-Cookie","test="+"myValue").json("success");

        const age=1000*60*60*24*7;
        const token=jwt.sign({
            id:user.id,
            isAdmin:false,
        },process.env.JWT_SECRET_KEY,{expiresIn:age});

        const {password:userPassword,...userInfo}=user;


        res.cookie("token",token,{
            httpOnly:true,
            // secure:true
            maxAge:age
        }).status(200).json(userInfo);
    }
    catch(error){
        console.error(error);
        res.status(501).json({message:"Failed to login"});
    }

}


export const logout=(req,res)=>{
    res.clearCookie("token").status(200).json({message:"logout successfully"});

}

