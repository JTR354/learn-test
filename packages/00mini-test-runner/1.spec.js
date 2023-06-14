// import { it, expect } from 'vitest';
import {
	it,
	test,
	expect,
	beforeAll,
	afterAll,
	beforeEach,
	afterEach,
	describe,
} from './core';

describe('des 1', () => {
	it('this is first test', () => {
		expect(1).toBe(1);
		console.log('hello vitest');
	});
});

test('this is second test', () => {
	console.log('hello two');
	expect(2).toBe(2);
});
afterAll(() => {
	console.log(`after all`);
});
beforeAll(() => {
	console.log('before all 1');
});
beforeAll(() => {
	console.log('before all 2');
});

beforeEach(() => {
	console.log('before each');
});
afterEach(() => {
	console.log(`after each`);
});
