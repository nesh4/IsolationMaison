app.controller('ThankController', function ($scope, scopeService) {
    $scope.getMessages = function () {

        if ($scope.form.electicite) {
            $scope.typeEligibilite = "non";
            $scope.message = "votre type de chauffage n'est pas pris en charge";

            return;
        }

        if ($scope.form.dep) {
            $scope.typeEligibilite = "medium";
            $scope.message = "votre departement n'est pas encore pris en charge";
            return;
        }

        if ($scope.form.maison) {
            $scope.typeEligibilite = "non";
            $scope.message = "l'isolation pour 1 euro n'est pas pris en charge dans les appartements";
            return;
        }

        switch ($scope.form.salary) {
            case ("low"):
                $scope.typeEligibilite = "oui";
                $scope.message = "l'isolation pour 1 euro n'est pas pris en charge dans les appartements";
                break;
            case ("medium"):
                $scope.typeEligibilite = "medium";
                $scope.message = "vous beneficiez d'une reduction partiel";
                break;
            case ("high"):
                $scope.typeEligibilite = "non";
                $scope.message = "vous ne beneficiez pas de la reduction";
                break;
        }
    }

    if ($scope.form) {
        $scope.form = scopeService.form;
        $scope.getMessages();
    }

    $scope.sendCoordoner = function () {

    }
});
