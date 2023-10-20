const clientSchema = require("../model/clientSchema");

module.exports = {
  create: async (req, res) => {
    try {
      const { clientFirstName, clientLastName, clientage, phone, address } =
        req.body;
      const clientCreate = new clientSchema({
        clientFirstName: clientFirstName,
        clientLastName: clientLastName,
        clientage: clientage,
        phone: phone,
        address: address,
      });

      const saveData = await clientCreate.save();
      console.log(saveData);
      res.json({ msg: "New User Created" });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
  userGet: async (req, res) => {
    try {
      const getUser = await clientSchema.find();
      if (getUser) {
        res.status(200).json({ msg: "all data reterived", getUser });
      }
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
  userUpdate: async (req, res) => {
    try {
      const { clientFirstName, clientLastName, address } = req.body;
      const userID = req.query.id;
      const userUpdate = await clientSchema.findByIdAndUpdate(
        { _id: userID },
        { $set: { clientFirstName, clientLastName, address } },
        { new: true }
      );

      if (userUpdate) {
        res.status(200).json({ MSG: "USER UPDATED" });
      }
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
  userDelete: async (req, res) => {
    try {
        const delteUser=req.query.id
        const userDelete=await clientSchema.findByIdAndDelete({_id:delteUser})
        if(userDelete){
            res.status(200).json({ msg: "cleint deleted" });
        }
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
};
