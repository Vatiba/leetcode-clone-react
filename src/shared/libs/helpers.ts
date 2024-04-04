export function numberFormatter(number: number): string {
	const suffixes = ["", "K", "M", "B", "T"];
	const exponent = Math.floor(Math.log(Math.abs(number)) / Math.log(1000));
	const divided = number / Math.pow(1000, exponent);
	const rounded = Math.floor(divided) === divided ? divided.toString() : divided.toFixed(1); // Check for decimal digits
	return rounded + suffixes[exponent];
}

/**
 * 
 * @param min 0
 * @param max 100
 * @returns number
 */
export function generateRandom(min = 0, max = 100) {

	// find diff
	let difference = max - min;

	// generate random number 
	let rand = Math.random();

	// multiply with difference 
	rand = Math.floor(rand * difference);

	// add with min value 
	rand = rand + min;

	return rand;
}

export function getPageOffset(pageNumber: number, itemsPerPage: number): number {
	// Handle edge cases (negative page or zero items per page)
	if (pageNumber <= 0 || itemsPerPage <= 0) {
		throw new Error("Invalid arguments: pageNumber and itemsPerPage must be positive integers");
	}

	// Calculate the offset by subtracting 1 from the page number 
	// (since offset starts from 0) and multiplying by itemsPerPage
	return (pageNumber - 1) * itemsPerPage;
}

export function removeUndefined(obj: object) {
	return Object.entries(obj)
		.filter(([_, value]) => value !== undefined)
		.reduce((obj, [key, value]) => {
			(obj as any)[key] = value;
			return obj;
		}, {});
}