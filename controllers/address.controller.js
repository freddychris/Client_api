const AddressServices = require('../services/address.services')

const create = (req, res)=>{
    return AddressServices.create(req.body).then((result)=>{
        res.send(result)
    }).catch((error)=>{
        console.log('errror is', error);
        res.send(error)
    })
}
const list = (req, res)=>{
    return AddressServices.list().then((result)=>{
        res.send(result)
    }).catch((error)=>{
        console.log('errror is', error);
        res.send(error)
    })
}
const view = (req, res)=>{
    var test = req.params.addresses_id
    return AddressServices.view(test).then((result)=>{
        res.send(result)
    }).catch((error)=>{
        console.log('errror is', error);
        res.send(error)
    })
}
const update = (req, res)=>{
    var test = req.params.addresses_id;
    var attributes = req.body;
  
    return AddressServices.update(test,attributes).then((result)=>{
        res.send(result)
    }).catch((error)=>{
        console.log('errror is', error);
        res.send(error)
    })
}
const destroy = (req, res)=>{
    var addressId = req.params.addresses_id
    return AddressServices.destroy(addressId).then((result)=>{
        res.send({message: "DELETED SUCCESSFULLY"})
    }).catch((error)=>{
        console.log('errror is', error);
        res.send(error)
    })
}

module.exports = {create,list,view,update,destroy}