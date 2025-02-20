import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ["admin", "user"],
        required: true
    }
});

userSchema.pre("save", async function(next) {
    if(this.isModified("password")){
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
})

const User = mongoose.model('User', userSchema);
export default User;