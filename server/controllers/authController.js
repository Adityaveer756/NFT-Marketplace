import userModel from "../models/userModel.js"

const login = async (req, res) => {
    const user = await userModel.findOne({ walletAddress: req.body.walletAddress })
    console.log(user)
    if(!user){
        res.sendStatus(401)//unauthorized
    }else{
        
    }
    
}

export default login