var meishi = require('../index');
var assert = require('assert');

describe('meishi', function () {

	before(function () {

		meishi.name = 'Andrei Borza';
		meishi.phone = '555-1234567';
		meishi.email = 'andrei@example.com';

	});

	describe('.handOut()', function () {

		it('should return a string containing all props', function () {

			assert.notEqual(meishi.handOut().indexOf('Andrei Borza'), -1);
			assert.notEqual(meishi.handOut().indexOf('andrei@example.com'), -1);
			assert.notEqual(meishi.handOut().indexOf('555-1234567'), -1);

		});

	});

	describe('add non string/number props', function () {

		it('should return a string containing all string/number props', function () {


			var testFunc = function () { consoe.log('This is a test'); };
			meishi.test = testFunc;

			assert.notEqual(meishi.handOut().indexOf('Andrei Borza'), -1);
			assert.notEqual(meishi.handOut().indexOf('andrei@example.com'), -1);
			assert.notEqual(meishi.handOut().indexOf('555-1234567'), -1);
			assert.equal(meishi.handOut().indexOf(testFunc), -1);

		});

	});

});
