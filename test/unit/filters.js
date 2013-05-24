'use strict';

/* jasmine specs for filters go here */

describe('filter', function () {
    beforeEach(angular.mock.module('langApp'));

    describe('sortChars', function () {
        
        it('should sort a string characters',
            inject(function (sortCharsFilter) {
                expect(sortCharsFilter('mcba')).toEqual('abcm');
            })
        );

    });
    
});

