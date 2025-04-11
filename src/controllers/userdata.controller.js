import { UserData } from "../models/userdata.model.js";

const submitData = async (req,res) => {
    const {Name, phone, address, city, state, country, pincode, securitycode, 
        deliveryinstruction, isbillingaddress} = req.body;

    if(!Name || !phone || !pincode) {
        return res.status(400).json({message: "please fill the required field"});
    }

    const doc = await UserData.create({
        name: Name,
        phone: phone,
        address: address || "",
        city: city || "",
        state: state || "",
        country: country || "",
        pincode: pincode || "",
        securityCode: securitycode || "",
        deliveryInstruction: deliveryinstruction || "",
        isBillingAddress: isbillingaddress
    })

    if(!doc) {
        return res.status(500).json({message:"something went wrong! try again"})
    }

    return res.status(200).json({doc});
}

export {submitData}