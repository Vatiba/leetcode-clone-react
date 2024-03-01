export function numberFormatter(number: number): string {
	const suffixes = ["", "K", "M", "B", "T"];
	const exponent = Math.floor(Math.log(Math.abs(number)) / Math.log(1000));
	const divided = number / Math.pow(1000, exponent);
	const rounded = Math.floor(divided) === divided ? divided.toString() : divided.toFixed(1); // Check for decimal digits
	return rounded + suffixes[exponent];
}