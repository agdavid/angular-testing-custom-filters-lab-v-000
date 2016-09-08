describe('Favorite Food Filter', function () {
	var $controller, favoriteFood;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');

    //set var to actual filter
    favoriteFood = $filter('favoriteFood');
	}));

  it('should return the correct array of objects where object.favoriteFood is the listed food', function() {
    expect(favoriteFood([{animal: 'pig', favoriteFood: 'pizza'},{animal: 'cow', favoriteFood: 'taco'}],'pizza')).toEqual([{animal: 'pig', favoriteFood: 'pizza'}]);
    expect(favoriteFood([{animal: 'pig', favoriteFood: 'pizza'},{animal: 'cow', favoriteFood: 'taco'}],'pizza').length).toEqual(1);
  });
	
});
