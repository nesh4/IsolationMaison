app.service("saveService", ['$http', function ($http) {

    return {
        save: function (formData) {
            if (!formData.horraire) formData.horraire = null;
            $http.post("http://localhost:5000/save", formData).then(function () {});
        },

        getForm: function (cb) {
            $http.get("/getForm").then(function (d) {
                cb(d);
            });
        }
    }

}]);
