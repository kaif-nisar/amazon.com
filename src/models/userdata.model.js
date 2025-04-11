import mongoose, {Schema} from "mongoose";

const userDataSchema = new Schema({
    name: String,
    phone: String,
    address: String,
    pincode: String,
    city: String,
    state: String,
    country: String,
    securityCode:String,
    deliveryInstruction: String,
    isBillingAddress:{type:Boolean, default: false}
},
{
    timestamps: true
}
);

const UserData = mongoose.model("UserData", userDataSchema);

export {UserData};