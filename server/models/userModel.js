import mongoose from 'mongoose';

const userSchema = new mongoose.Schema (
    {
        profileImage: { type: String },
        bannerImage: { type: String },
        username: { type: String, required: true, unique: true },
        websiteLink: { type: String },
        instagramLink: { type: String},
        twitterLink: { type: String},
        walletAddress: { type: String, required: true }
    }
)

const userModel = mongoose.model('UserModel',userSchema,'user')

export default userModel



