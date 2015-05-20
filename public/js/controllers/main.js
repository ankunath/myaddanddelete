angular.module('todoController', [])

    // inject the Todo service factory into our controller
    .controller('mainController', function($scope, $http, Todos) {
        //console.log("this is 1st=============== "+formData+ "\n");
        $scope.formData = {};
console.log("this is 2st=============== "+$scope.formData.text+ "\n");
        // GET =====================================================================
        // when landing on the page, get all todos and show them
        // use the service to get all the todos
        Todos.get()
            .success(function(data) {
                $scope.todos = data;
            });
console.log("this is 3st=============== "+$scope.formData.text+ "\n");
        // CREATE ==================================================================
        // when submitting the add form, send the text to the node API
        $scope.createTodo = function() {

            // validate the formData to make sure that something is there
            // if form is empty, nothing will happen
            // people can't just hold enter to keep adding the same to-do anymore
            


console.log("this is 4st=============== "+$scope.formData.text+ "\n");
            if ($scope.formData) {

                // call the create function from our service (returns a promise object)
                Todos.create($scope.formData)

                    // if successful creation, call our get function to get all the new todos
                    .success(function(data) {
                        $scope.formData = {}; // clear the form so our user is ready to enter another
                        $scope.todos = data; // assign our new list of todos
                    });
                    console.log("this is 5st=============== "+ $scope.formData.text+ "\n");
            }
        };
//my function=================================================================

$scope.checkTodo = function() {
    console.log("========in checktodo======================");

            // validate the formData to make sure that something is there
            // if form is empty, nothing will happen
            // people can't just hold enter to keep adding the same to-do anymore


                // call the create function from our service (returns a promise object)
                if($scope.formData.flag===true)
                Todos.checking($scope.formData);


        };

//ending===================================================

        // DELETE ==================================================================
        // delete a todo after checking it
        $scope.deleteTodo = function(id) {
            Todos.delete(id)
                // if successful creation, call our get function to get all the new todos
                .success(function(data) {
                    $scope.todos = data; // assign our new list of todos
                });
        };
    });