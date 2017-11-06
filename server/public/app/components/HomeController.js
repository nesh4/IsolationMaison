app.controller('HomeController', function ($scope, $mdDialog, saveService, $location, scopeService) {
    $scope.message = 'Hello from HomeController';
    $scope.getVideoList = function () {
        return [
            {
                url: "https://www.youtube.com/embed/eEOscZF2zdM?rel=0",
                imgUrl: "assets/img/logo-tf1.png",
                name: "tf1"
      },
            {
                url: "https://www.youtube.com/embed/pTaR9e8wBxU?rel=0",
                imgUrl: "assets/img/logo-fr2.png",
                name: "fr2"
      },
            {
                url: "https://www.youtube.com/embed/ZVqm-FmL22c?rel=0",
                imgUrl: "assets/img/logo-fr3.png",
                name: "fr3"
      },
            {
                url: "https://www.youtube.com/embed/hPUHGxKCaNE?rel=0",
                imgUrl: "assets/img/logo-c8.png",
                name: "c8"
      },
            {
                url: "https://www.youtube.com/embed/0x0Nun2oD2w?rel=0",
                imgUrl: "assets/img/logo-bfm.png",
                name: "bfm"
      }
    ];
    }
    $scope.getHeatingMethod = function () {
        return [
            {
                name: "gaz",
                displayName: "Gaz naturel"
      },
            {
                name: "electricite",
                displayName: "Electricité ou pompe à chaleur"
      },
            {
                name: "gpl",
                displayName: "GPL"
      },
            {
                name: "bois",
                displayName: "Bois"
      },
            {
                name: "fioul",
                displayName: "Fioul"
      },
            {
                name: "autre",
                displayName: "Autre"
      }
    ];
    };
    $scope.getDepartmentList = function () {
        $.getJSON("app/shared/json/departments.json", function (Data) {
            var array = [];

            for (var i in Data) {
                array.push({
                    value: i,
                    displayName: i + " - " + Data[i].name
                });
            }

            array.sort(compareDepartment);
            $scope.departmentList = array;

        });

    };
    $scope.getPersonInHome = function () {
        return [
            {
                value: 1,
                display: "1"
      },
            {
                value: 2,
                display: "2"
      },
            {
                value: 3,
                display: "3"
      },
            {
                value: 4,
                display: "4"
      },
            {
                value: 5,
                display: "5"
      },
            {
                value: 6,
                display: "6"
      },
            {
                value: 7,
                display: "7"
      },
            {
                value: 8,
                display: "8"
      }
    ];
    };

    $scope.getConversionTableForParis = function () {
        return [
            {
                count: 1,
                salaryLow: "19 803",
                salaryHigh: "24 107"
      },
            {
                count: 2,
                salaryLow: "29 066",
                salaryHigh: "35 382"
      },
            {
                count: 3,
                salaryLow: "34 906",
                salaryHigh: "42 495"
      },
            {
                count: 4,
                salaryLow: "40 758",
                salaryHigh: "49 620"
      },
            {
                count: 5,
                salaryLow: "46 630",
                salaryHigh: "56 765"
      },
            {
                count: 6,
                salaryLow: "52 490",
                salaryHigh: "63 901"
      },
            {
                count: 7,
                salaryLow: "58 350",
                salaryHigh: "71 037"
      },
            {
                count: 8,
                salaryLow: "64 210",
                salaryHigh: "78 173"
      }
    ];
    }

    $scope.getConversionTable = function () {
        return [
            {
                count: 1,
                salaryLow: "14 308",
                salaryHigh: "18 342"
      },
            {
                count: 2,
                salaryLow: "20 925",
                salaryHigh: "26 826"
      },
            {
                count: 3,
                salaryLow: "25 166",
                salaryHigh: "32 260"
      },
            {
                count: 4,
                salaryLow: "29 400",
                salaryHigh: "37 690"
      },
            {
                count: 5,
                salaryLow: "33 652",
                salaryHigh: "43 141"
      },
            {
                count: 6,
                salaryLow: "37 893",
                salaryHigh: "48 575"
      },
            {
                count: 7,
                salaryLow: "42 134",
                salaryHigh: "54 009"
      },
            {
                count: 8,
                salaryLow: "46 375",
                salaryHigh: "59 443"
      }
    ];
    }


    $scope.getFormDefaultValue = function () {
        return {
            eligibilite: {}
        };
    }
    $scope.getArrayNotInDep = function () {
        return [
      "04",
      "07",
        "09",
        "12",
        "16",
        "17",
        "18",
        "22",
        "24",
        "26",
        "29",
        "31",
        "32",
        "33",
        "35",
        "36",
        "37",
        "40",
        "41",
        "44",
        "46",
        "47",
        "48",
        "49",
        "50",
        "53",
        "56",
        "64",
        "65",
        "72",
        "79",
        "81",
        "82",
        "84",
        "85",
        "86",

        "06",
        "11",
        "13",
        "20",
        "30",
        "34",
        "66",
        "83"
    ]
    };
    $scope.setSalaryOptions = function () {
        $scope.salaryOptions = [
            {
                value: "low",
                label: "Salaire plus petit que " + $scope.salaryLow
      },
            {
                value: "medium",
                label: "Salaire entre " + $scope.salaryLow + " et " + $scope.salaryHigh
      },
            {
                value: "high",
                label: "Salaire plus grand que " + $scope.salaryHigh
      }
    ];
    };

    $scope.salaryLow = 0;
    $scope.salaryHigh = 0;
    $scope.setSalaryOptions();
    $scope.form = $scope.getFormDefaultValue();
    $scope.error = {
        departementError: false,
        heatError: false,
        countError: false,
        typeError: false,
        salError: false
    };

    $scope.videoListUrl = $scope.getVideoList();
    $scope.videoUrl = $scope.videoListUrl[0].url;

    $scope.arrayNotInDep = $scope.getArrayNotInDep();
    $scope.tblConversionCountPersonToSalary = $scope.getConversionTable();
    $scope.radioHeatingMethod = $scope.getHeatingMethod();
    $scope.getDepartmentList();
    $scope.personInHome = $scope.getPersonInHome();

    $scope.onTestClick = function (form) {
        if (form.$valid) {

            if (!$scope.form.comble) {
                $scope.form.comble = 0;
            }
            if (!$scope.form.garage) {
                $scope.form.garage = 0;
            }
            if (!$scope.form.sousSols) {
                $scope.form.sousSols = 0;
            }
            if (!$scope.form.videSanitaire) {
                $scope.form.videSanitaire = 0;
            }

            $scope.form.totalArea = $scope.form.comble + $scope.form.garage + $scope.form.sousSols + $scope.form.videSanitaire;

            if ($scope.form.totalArea < 1) {
                $scope.showErrorFunc("Veuillez entrer une surface a isoler");
                return;
            }

            setEligibilite();

            $scope.sendCoordoner();

        } else {
            $scope.showErrorFunc("Veuillez entrer tout les champs obligatoire");

            form.$setSubmitted();
            $scope.error.departementError = !form.departement.$valid;
            $scope.error.heatError = !form.heat.$valid;
            $scope.error.countError = !form.count.$valid;
            $scope.error.typeError = !form.type.$valid;
            $scope.error.salError = !form.salaire.$valid;


        }
    }

    setEligibilite = function () {
        if ($scope.arrayNotInDep.indexOf($scope.form.department) > -1) {
            $scope.form.dep = false;
        } else {
            $scope.form.dep = true;
        }

        if ($scope.form.heatMethod == 'electricite') {
            $scope.form.electicite = true;
        } else {
            $scope.form.electicite = false;
        }

        if ($scope.form.maisonType == "appartement") {
            $scope.form.maison = false;
        } else {
            $scope.form.maison = true;
        }
    };

    $scope.showErrorFunc = function (msg) {
        Materialize.toast(msg, 4000, 'rounded');

    };

    $scope.showSuccessFunc = function (msg) {
        $scope.showSuccess = true;
        $scope.successMessage = msg;
        $scope.showError = false;
    };

    $scope.onVideoButtonClick = function (url) {
        console.log($scope.form);
        $scope.videoUrl = url;
    };

    $scope.changePersonCount = function (b) {
        if (b)
            $scope.error.countError = !$scope.testEligibilite.count.$valid;

        if ($scope.form.department && $scope.form.personInHome) {
            var person = $scope.form.personInHome;
            var table = [];

            if ($scope.form.department == "75") {
                table = $scope.getConversionTableForParis();
            } else {
                table = $scope.tblConversionCountPersonToSalary;
            }

            $scope.form.salary = null;

            for (var conversion in table) {
                if (table[conversion].count == person) {
                    $scope.salaryLow = table[conversion].salaryLow;
                    $scope.salaryHigh = table[conversion].salaryHigh;
                }
            }

            $scope.setSalaryOptions();
        }
    }

    function compareDepartment(a, b) {
        if (a.value < b.value)
            return -1;
        if (a.value > b.value)
            return 1;
        return 0;
    }


    $scope.showAlert = function (ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        // Modal dialogs should fully cover application
        // to prevent interaction outside of dialog
        $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title('Votre revenu annuel')
            .textContent('Veuillez entrer votre département et le nombre de personnes habitant dans votre maison.')
            .ariaLabel('Alert Dialog Demo')
            .ok('Ok')
            .targetEvent(ev)
        );
    };

    $scope.sendCoordoner = function () {
        saveService.save($scope.form);
        scopeService.form = $scope.form;
        $location.path("/thanks");
    };

    $('#panelPrecios [data-toggle="tooltip"]').tooltip({
        animated: 'fade',
        placement: 'right',
        html: true
    });

    $scope.changeHeat = function () {
        $scope.error.heatError = !$scope.testEligibilite.heat.$valid;
    }
    $scope.changeDep = function () {
        $scope.error.departementError = !$scope.testEligibilite.departement.$valid;
    }
    $scope.changeType = function () {
        $scope.error.typeError = !$scope.testEligibilite.type.$valid;
    }
    $scope.changeSal = function () {
        $scope.error.salError = !$scope.testEligibilite.salaire.$valid;
    }
});
