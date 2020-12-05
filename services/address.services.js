const {Address} = require('../models');

function create(attributes){
  
    return Address.create(attributes)
}

function list(){
    return Address.findAll()
}

function view(id){
    
    return Address.findOne({
        where : {
            id: id
        }
    }).then((address) => {
        return address;
    })
}
function update(id, attributes){
    
    return Address.update(attributes, {
        where : {
            id: id
        }, 
    }).then((address) => {
        return address;
    })
}
function destory(id){
    return Address.destory()
}

module.exports = {create,list,view,update,destory};