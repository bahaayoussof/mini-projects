import { isEven } from "./math";

describe("isEven", () => {
	it("isEven should return true if given an even number", () => {
		const result = isEven(2);
		expect(result).toEqual(true);
	});

	it("isEven should return false if given an odd number", () => {
		const result = isEven(1);
		expect(result).toEqual(false);
	});
});
