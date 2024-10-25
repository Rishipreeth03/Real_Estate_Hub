import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";
export const getPosts=async (req,res)=>{
    const query=req.query;
    console.log(query);
    try{
        const posts=await prisma.post.findMany({
            where:{
                city:query.city||undefined,
                type:query.type||undefined,
                property:query.property||undefined,
                city:query.city||undefined,
                bedroom:parseInt(query.bedroom)||undefined,
                price:{
                    gte:parseInt(query.minPrice)||0,
                    lte:parseInt(query.maxPrice)||1000000
                }

            }
        });
        setTimeout(()=>{

            res.status(200).json(posts);
        },1500);
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Failed to get posts"})
    }
}

export const getPost = async (req,res)=>{
    const id=req.params.id;
    try{
        const post=await prisma.post.findUnique({
            where:{id},
            include:{
                postDetail:true,
                user:{
                    select:{
                    
                        username:true,
                        avatar:true
                    }
                    
                }
            }
        });
        let userId;
        const token=req.cookies.token;
        if(!token){
            userId=null;
        }
        else{
            await jwt.verify(token,process.env.JWT_SECRET_KEY,async(err,payload)=>{
                if(err){
                    userId=null;
                }
                else{
                    userId=payload.id;
                }
            });
            
        }

        const saved=await prisma.savedPost.findUnique({
            where:{
                userId_postId:{
                    postId:id,
                    userId
                }
            }
        })

        res.status(200).json({...post,isSaved:saved?true:false});
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Failed to get post"})
    }
}

export const addPost=async (req,res)=>{
    const body=req.body;
    const tokenUserId=req.userId;
    try{
        const newPost=await prisma.post.create({
            data:{
                ...body.postData,
                userId:tokenUserId,
                postDetail:{
                    create:body.postDetail,
                }
            }
        })
        res.status(201).json(newPost);

    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Failed to add post"})
    }
}

export const updatePost=async (req,res)=>{
    try{
        res.status(200).json();
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Failed to update post"})
    }
}

export const deletePost=async (req,res)=>{
    const id=req.params.id;
    const tokenUserId=req.userId;
    try{
        const post=await prisma.post.findUnique({
            where:{
                id
            }
        })
        if(post.userId!==tokenUserId){
            return res.status(403).json({message:"Not authorized to update this post"})
        }
        await prisma.post.delete({
            where:{
                id
            }
        })
        res.status(204).json({message:"Post deleted"}); //No content status code
       
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Failed to delete post"})
    }
}