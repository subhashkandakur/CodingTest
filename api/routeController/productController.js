const projectController = require('../controller/productController')
const genRes = require('../services/genre')

exports.createTagging = async (req, res) => {
    try {
            const project = await projectController.createTagging(req.body.productId,
                { year: req.body.year, tagId:req.body.tagId }
                )
     console.log(project)
            if (project) {
                return res.send(genRes.generateResponse(true, "Tagging Created Successfully ", 200, project));
            } else {
                return res.send(genRes.generateResponse(false, "Tagging  Creation unsuccessfully", 400,));
            }
        
    } catch (error) {

        return res.send(genRes.generateResponse(false, error.message, 400, null));
    }

}



exports.createProject = async (req, res) => {
    try {

     const productOBj= {
        productId:req.body.productId,
        name:req.body.name,
        description:req.body.description,
        tagSpecial:req.body.tagSpecial,
        rating:req.body.rating,
        tagging: [ { year: req.body.year, tagId:req.body.tagId }]

     }
              

            const project = await projectController.createProduct(productOBj )
     console.log(project)
            if (project) {
                return res.send(genRes.generateResponse(true, "Product Created Successfully ", 200, project));
            } else {
                return res.send(genRes.generateResponse(false, "Product Creation unsuccessfully", 400,));
            }
        
    } catch (error) {

        return res.send(genRes.generateResponse(false, error.message, 400, null));
    }

}


exports.removeTagging = async (req, res) => {
    try {

            const project = await projectController.removeTagging(req.body.productId,
                { year: req.body.year}
                )
     console.log(project)
            if (project) {
                return res.send(genRes.generateResponse(true, "Remove tagging Successfully ", 200, project));
            } else {
                return res.send(genRes.generateResponse(false, "Remove tagging unsuccessfully", 400,));
            }
        
    } catch (error) {

        return res.send(genRes.generateResponse(false, error.message, 400, null));
    }

}


exports.countTagSpecial= async (req, res) => {
    try {
            const project = await projectController.countTagSpecial( )
     console.log(project)
            if (project) {
                return res.send(genRes.generateResponse(true, "Fetched Data Successfully ", 200, project));
            } else {
                return res.send(genRes.generateResponse(false, "Fetching Data unsuccessfully", 400,));
            }
        
    } catch (error) {

        return res.send(genRes.generateResponse(false, error.message, 400, null));
    }

}
