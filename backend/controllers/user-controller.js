import { UserModel } from "../db/models/user-schema.js"
import { hashing } from "../utils/encrypt.js"
export const userController={
    async login(request, response){
        const userInfo=request.body
        
            console.log("login page");
            //const docs=await UserModel.find({}).exec();
        const doc= await UserModel.findOne({'email':userInfo.email}).exec();
        console.log(doc)
        if(doc&&doc._id){
            const plainpasswrd=userInfo.password;
            const dbPassword=doc.password;
            if(hashing.matchPassword(plainpasswrd, dbPassword)){
                response.json({message:'Welcome'+doc.name})
            }
            else{
                response.json({message:'Invalid'})
            }
        }
        
        
        
        //console.log('Request is ', body)
        // if(userInfo.userID==userInfo.password){
        //     response.json({message: 'Welcome '+userInfo.userID})
        // }
        // else{
        //     response.json({message: 'Invalid ID'})
        // }
        // response.json({message:'Login'})
    // catch(err){
    //     console.log('Error Login',err)
    // }
},
    async register(request, response){
        
        const userInfo=request.body
        
        userInfo.password=hashing.passwordHash(userInfo.password)
        const doc=await UserModel.create(userInfo)
        
        if(doc&&doc._id){
            response.json({message:'Registered Successfully'})
        }
        else{
            response.json({message:'Problem'})
        }
        
        
        },
        catch(err){
            console.log("error", err)
        
    },

    
    profile(request, response){
        const userName=request.params.username;
        console.log('All params', userName)
        response.json({message:userName+' profile'})
    },
    changePassword(request, response){
        response.json({message:'Change'})
    }
    
}
//const uri = "mongodb+srv://abcd123:<password>@cluster1.k0zgrhc.mongodb.net/?retryWrites=true&w=majority";