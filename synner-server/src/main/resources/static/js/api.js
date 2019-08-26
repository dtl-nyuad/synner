var Synner = angular.module('Synner');

Synner.service('API', ['Parameters', '$resource', '$q', function (Parameters, $resource, $q) {

  this.apiRoot = Parameters.DEBUG ? Parameters.SERVER.DEBUG : Parameters.SERVER.PRODUCTION;

  this.generateReq = null;

  this.genRes = $resource('api/generator', null, {
    post: {
      method: 'POST',
      cancellable: true
    }
  });
  this.generate = function (req, successCb, errorCb) {
    if (this.generateReq !== null) this.generateReq.$cancelRequest();
    this.generateReq = this.genRes.post(req, successCb, errorCb);
  };

  this.getInfo = function (successCb) {
    var res = $resource('api/generator', null, {
      get: {
        method: 'GET',
      }
    });

    res.get(successCb);
  };

  this.infer = function (req, successCb, errorCb) {
    var res = $resource('api/infer', null, {
      post: {
        isArray: true,
        method: 'POST',
      },
    });

    res.post(req, successCb, errorCb);
  };

  this.downloadrequest = function (req, successCb, errorCb) {
    var res = $resource('api/downloadrequest', null, {
      post: {
        method: 'POST'
      }
    });

    res.post(req, successCb, errorCb);
  };

}]);