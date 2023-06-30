const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require("./models/Users");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://preethisri26:r90So3DlbaazCieS@cluster0.webbxsn.mongodb.net/merntutorial?retryWrites=true&w=majority")
// mongoose.connect(
//     "mongodb+srv://user123:r90So3DlbaazCieS@cluster0.j7fql.mongodb.net/merntutorial?retryWrites=true&w=majority"
//   );
// r90So3DlbaazCieS

app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
  });

  app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
  
    res.json(user);
  });

app.listen(3001, () => {
    console.log('Server is running on port : 3001');
});