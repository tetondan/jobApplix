angular.module('myApp.applicationCont', [])
.controller('ApplicationController', function($state, $scope, $http, $location, customTemplate, AppDataServices){
    //collect all info and store it in info object
    $scope.template = customTemplate.data;
    $scope.appDirective = 0;
    $scope.form = {}
    $scope.canAdvance = true;
    $scope.businessData = customTemplate.data.businessId[0];
    $scope.application = {};
    $scope.application.businessId = customTemplate.data.businessId[0]._id;
    $scope.application.education = {
        highschool: {
          type: 'High School',
          schoolName: '',
          location: '',
          yearsCompleted: '',
          fieldOfStudy: '',
          degree: ''
        },
        college: {
          type: 'College or University',
          schoolName: '',
          location: '',
          yearsCompleted: '',
          fieldOfStudy: '',
          degree: ''
        },
        tradeSchool: {
          type: 'Trade or Vocational School',
          schoolName: '',
          location: '',
          yearsCompleted: '',
          fieldOfStudy: '',
          degree: ''
        }
      };
    $scope.application.workReferences = [];
    $scope.application.personalReferences = [];
    $scope.advanceApplication = function(){
      var count = $scope.appDirective
      count++
      $scope.appDirective = count;
    }
    $scope.reverseApplication = function(){
      var count = $scope.appDirective
      count--
      $scope.appDirective = count;
    }

    $scope.addWorkReference = function(){
      if($scope.application.workReferences.length < 3 ){
        $scope.application.workReferences.push({
          employerName: '',
          address: '',
          title: '',
          duties: '',
          startDate: '',
          endDate: '',
          startingPay: '',
          endingPay: '',
          reasonForLeaving: '', 
          supervisorName: '',
          phoneNumer: '',
          canContact: false
        })
      }
    }

    $scope.addPersonalReference = function(){
      if($scope.application.personalReferences.length < 3 ){
        $scope.application.personalReferences.push({
          name: '',
          relationship: '',
          phone: '',
          email: '',
          address: '',
          yearsKnown: 0
        })
      }
    }
    $scope.posAndAvailChecker = (!$scope.template.position && !$scope.template.fullOrPartime && !$scope.template.backgroundCheck && 
                                 !$scope.template.drugTest && !$scope.template.custom1 && !$scope.template.custom2 && !$scope.template.availability &&
                                 !$scope.template.anyPosition && !$scope.template.referalSource);
    $scope.prevHistoryChecker = (!$scope.template.fired && !$scope.template.crimes && !$scope.template.appliedBefore && !$scope.template.everEmployed
                                  && !$scope.template.currentlyEmployed);
    $scope.empInfoChecker = (!$scope.template.physicalLimitation && !$scope.template.authWorkInUS && 
                            !$scope.template.validDriversLicense && !$scope.template.overFourteen && !$scope.template.overSixteen && 
                            !$scope.template.overEighteen && !$scope.template.overTwentyone && !$scope.template.overtime && 
                            !$scope.template.permanent && !$scope.template.otherLanguages && !$scope.template.adequateTrans && !$scope.template.relativesEmployed);
    $scope.specSkillsChecker = (!$scope.template.specializedSkills && !$scope.template.computerRepair && !$scope.template.softwareExperience && 
                                !$scope.template.proffesionalCerts && !$scope.template.typingSpeed && !$scope.template.veteran && 
                                !$scope.template.dateAvailableToBeinWork && !$scope.template.otherComments && !$scope.template.specialInterests);
    //submit application to server. 
    $scope.submit = function(){
      var application = $scope.application;
      application.education.highschool.type = undefined;
      application.education.college.type = undefined;
      application.education.tradeSchool.type = undefined;
      AppDataServices.submitApplication(application)
        .then( function (data) {
          $scope.advanceApplication();
         //redirect user to page thanking them for submitting an application and supplying a link to return to main page.
        });
    };

    window.onbeforeunload = function(){
      return 'Using the back button will delete all of your info. Please use the back button at the bottom of the page. Are you sure you want to leave?';
    };
  })