describe('removeAllVowels Filter', function () {
	var $controller, removeAllVowels;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');

    //set var to actual fitler
    removeAllVowels = $filter('removeAllVowels');
	}));

  it('should remove all the vowels from a string', function() {
    expect(removeAllVowels('umbrella')).toEqual('mbrll');
    expect(removeAllVowels('aeiou').length).toEqual(0);
  });

});
