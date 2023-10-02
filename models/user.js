import { Schema, model, models } from 'mongoose';

const UserSchema = newSchema({
    email: {
        type: String,
        unique: [true, 'Email already exists'],
        required:[true, 'Email is required'],
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
      },
    image:{
        type: String,
    }
});

// instead of creating a new model straight away (i.e model("User", UserSchema);)
// first look into the models.User and see if it's there
// only if its not there then create a new model 
// bc this code is called repeatedly but we don't want to remake the same model 
const User = models.User || model("User", UserSchema);

export default User;

