import userModel from "../models/userModel.js"


const register = async (req,res) => {
    console.log(req.body)
    try{
      
      await userModel.create({
        profileImage: req.body.selectedProfileImage,
        bannerImage: req.body.selectdeBannerImage,
        username: req.body.userInfo.username,
        websiteLink: req.body.userInfo.webLink,
        instagramLink: req.body.userInfo.instaLink,
        twitterLink: req.body.userInfo.twitterLink,
        walletAddress: req.body.account
      })
      res.json({status: 'ok'}) 
  
    }catch(err){
  
      res.json({status: 'error', error: `${err}`})
  
    }
  }

  export default register