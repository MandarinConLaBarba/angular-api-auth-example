var productRepository = require('../../../lib/repositories/productRepository'),
    responseHelper = require('../responseHelper');

module.exports = function(req, res) {

    responseHelper.handle(productRepository.getAll(), res);

};