//mongodb+srv://deba:<password>@nodejs-tutorial.9qpxeas.mongodb.net/?retryWrites=true&w=majority&appName=nodejs-tutorial

const mongoose = require("mongoose");



mongoose.connect('mongodb+srv://deba:D123456781!@nodejs-tutorial.9qpxeas.mongodb.net/?retryWrites=true&w=majority&appName=nodejs-tutorial')

const db = mongoose.connection;

db.on("error", (error)=>{
    console.log(error);
})

db.once("open", async ()=>{
        console.log("Database Connected")


        //CRUD

    // CREATE READ UPDATE DELETE

    // to perform CRUD OPERATIONS

    // 1 CREATE A SCHEMA, 2. CREATE A MODEL, 3. PERFORM THE OPERATION

    // we want to make a user schema

    const userSchema = new mongoose.Schema({
        firstName: String,
        lastName: String,
        age: Number,
        isMarried: Boolean,
    })

    // step 2 making a model

    const User = mongoose.model('user', userSchema)


    // // create a new user?
    // // C of the CRUD - CREATE
    // const newUser = new User({
    //     firstName: "Jessie",
    //     lastName: "Ludwig",
    //     age: 45,
    //     isMarried: false,
    // })


    // // newUser.save().then((_user)=>{
    // //     console.log("new user: ", _user)
    // // }).catch((e)=>{
    // //     console.log(e)
    // // })

    // try {
    //   const _user =   await newUser.save()
    //   console.log("new user: ", _user)
    // } catch (error) {
    //     console.log(error, "error in creating user")
    // }

    // // READ PART

    // try {
    //     const foundUser = await User.find({
            
    //     })

    //     console.log(foundUser)
    // } catch (error) {
    //     console.log(error, "error in finding a user")
    // }


    // UPDATE

    // try {
    //    const updatedUser = await User.findOneAndUpdate({
    //         firstName: "Jessie"
    //     },{
    //         $inc: {
    //             age: -5,
    //             // isMarried: true,
    //         }
    //     },{
    //         new: true, // returns the current state of the user after update
    //     })

    //     console.log(updatedUser, "UPDATED USER")
    // } catch (error) {
    //     console.log(error, "error in updating")
    // }


    // DELETE A USER

    // const deletedUser = 

    try {
        const deletedUser = await User.findOneAndDelete({firstName: "Jessie"});

        console.log("this user has been deleted: ", deletedUser)
    } catch (error) {

        console.log(error, "User has been deleted");
        
    }

})

