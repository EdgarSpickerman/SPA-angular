(function () {
    angular.module('app').controller('RecipesController', RecipesController);

    function RecipesController(dataService, $location) {
        let vm = this;
        vm.gotoSaveRecipe = gotoSaveRecipe;
        vm.deleteThisRecipe = deleteThisRecipe;
        vm.getRecipeByCategory = getRecipeByCategory;
        vm.getRecipes = getRecipes;
        vm.getCatorgories = getCatorgories;
        vm.getRecipes();
        vm.getCatorgories();

        function gotoSaveRecipe() {
            $location.url('/add')
        }

        function getRecipes() {
            dataService.getRecipes(function (res) {
                vm.recipes = res.data;
            });
        }

        function getCatorgories() {
            dataService.getCatorgories(function (res) {
                vm.categories = res.data;
            });
        }

        function deleteThisRecipe(recipe, $index) {
            dataService.deleteThisRecipe(recipe, function () {
                vm.recipes.splice($index, 1);
            });
        }

        function getRecipeByCategory(category) {
            if (category !== undefined) {
                dataService.getRecipeByCategory(category, function (res) {
                    vm.recipes = res.data;
                });
            } else {
                vm.getRecipes();
            }
        }

    };//end of controller
})();//end of IIFE