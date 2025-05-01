import { Request, Response } from 'express';
import User from '../models/user'; 

const createCurrentUser = async (req: Request, res: Response) => {
    // 1. check if the user already exists
    // 2. if not, create a new user
    // 3. return the user object to the calling client
 
try { 
    const { auth0Id } = req.body; // 1. check if the user already exists
    const existingUser = await User.findOne({ auth0Id }); // 2. if not, create a new user
   
    if (existingUser) {
        return res.status(200).send();
    }
    
    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json(newUser.toObject()); // 3. return the user object to the calling client
} catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating user" });

        console.log({ message: "User already exists" });
    console.log({ message: "Error creating user"})
    res.status(500).json({ message: "Error creating user" });
}
};

export default { createCurrentUser, };
