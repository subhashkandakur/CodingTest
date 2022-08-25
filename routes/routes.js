
const projuctRouteController = require('../api/routeController/productController')




module.exports = function (app) {

  app.post('/addProduct',projuctRouteController.createProject)

  app.post('/addtagging',projuctRouteController.createTagging)

  app.post('/Removetagging',projuctRouteController.removeTagging)

  app.get('/gettagSpecial', projuctRouteController.countTagSpecial)

 

}