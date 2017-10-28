(function () {
    angular.module('app').controller('RecipeDetailController', RecipeDetailController);

    function RecipeDetailController(dataService, $location) {
        let vm = this;
        vm.recipe = {};
        vm.recipe.steps = [];
        vm.recipe.ingredients = [];
        vm.goHome = goHome;
        vm.addStep = addStep;
        vm.deleteStep = deleteStep;
        vm.saveRecipe = saveRecipe;
        vm.updateRecipe = updateRecipe;
        vm.addIngredient = addIngredient;
        vm.deleteIngredient = deleteIngredient;
        vm.path = $location.url().replace('/edit/', '').replace('/add', '');


        if (vm.path) {
            dataService.getRecipe(vm.path, function (res) {
                vm.recipe = res.data;
            });
        }

        dataService.getCatorgories(function (res) {
            vm.categories = res.data;
        });

        dataService.getCatorgories(function (res) {
            vm.categories = res.data;
        });

        dataService.getFoodItems(function (res) {
            vm.foodItems = res.data;
        });

        function saveRecipe(recipe) {
            dataService.saveRecipe(recipe, function () {
                vm.goHome();
            });
        }

        function updateRecipe(recipe) {
            dataService.updateRecipe(recipe, function () {
                vm.goHome();
            });
        }

        function goHome() {
            $location.path('/');
        }

        function deleteIngredient($index) {
            vm.recipe.ingredients.splice($index, 1);
        }

        function deleteStep($index) {
            vm.recipe.steps.splice($index, 1);
        }

        function addIngredient() {
            vm.recipe.ingredients.push({
                foodItem: '',
                condition: '',
                amount: ''
            });
        }

        function addStep() {
            vm.recipe.steps.push({ description: '' });
        }

    }//end of controller

})();//end of IIFE