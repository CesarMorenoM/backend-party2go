import {user} from '../models/user'

const adduser = async (req,res)=>{
    try {
        if (body.name == null) {
            return res.status(400).send('The name is required');
          }
          const response = await user.create({
              name,
              email,
              km
          })
          res.send(response)
    } catch (error) {
        
    }
}
const getUsers = async (req,res)=>{
    try {
        if (body.name == null) {
            return res.status(400).send('The name is required');
          }
          const response = await user.findAll()
          res.send(response)
    } catch (error) {
        return res.status(500)
    }
}
export  {adduser, getUsers}

//addd