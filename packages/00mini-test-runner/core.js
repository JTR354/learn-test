const tests = [];
const onlySet = [];

export function test(name, callback) {
	tests.push({ name, callback });
}

test.only = function (name, callback) {
	onlySet.push({ name, callback });
};

export const it = test;

export function expect(target) {
	return {
		toBe(expected) {
			if (target !== expected) {
				throw new Error(
					`failed: target is ${target}, expected is ${expected}`,
				);
			}
		},
	};
}

const beforeAlls = [];
export function beforeAll(callback) {
	beforeAlls.push(callback);
}

const afterAlls = [];
export function afterAll(callback) {
	afterAlls.push(callback);
}

const beforeEachSet = [];
export function beforeEach(callback) {
	beforeEachSet.push(callback);
}

const afterEachSet = [];
export function afterEach(callback) {
	afterEachSet.push(callback);
}

/**
 * sample
 * @param {*} name
 * @param {*} callback
 */
export function describe(name, callback) {
	console.info(`=`.repeat(10) + name + '='.repeat(10));
	callback();
}

export function run() {
	for (const beforeAllCallback of beforeAlls) {
		beforeAllCallback();
	}
	const suit = onlySet.length ? onlySet : tests;
	for (const test of suit) {
		for (const beforeEachCallback of beforeEachSet) {
			beforeEachCallback();
		}
		try {
			test.callback();
			console.info(`${test.name} is ok!`);
		} catch (error) {
			console.info(`${test.name}=>${error.message}`);
		}
		for (const afterEachCallback of afterEachSet) {
			afterEachCallback();
		}
	}

	for (const afterAllCallback of afterAlls) {
		afterAllCallback();
	}
}
