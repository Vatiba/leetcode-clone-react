import { LocationParent } from "entities/locations";
import { ProfileDto } from "entities/profile";

export function numberFormatter(number: number): string {
	if (!number)
		return '0';
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
	return Math.ceil((pageNumber - 1) * itemsPerPage);
}

export function removeUndefined(obj: object) {
	return Object.entries(obj)
		.filter(([_, value]) => value !== undefined)
		.reduce((obj, [key, value]) => {
			(obj as any)[key] = value;
			return obj;
		}, {});
}

export function concatUserName(firstName?: string | null, lastName?: string | null) {
	return `${firstName ? firstName : ""}${lastName ? ` ${lastName}` : ''}`;
}

export function getLocationString(location: LocationParent, loc: string): string {
	if (!location)
		return loc;

	return getLocationString(location.parent, `${loc ? `${loc}, ` : ''}${location.name}`);
}

export function getProfileProgrammingLang(langs: ProfileDto['langs']): { name: string; count: number }[] {
	return [
		{
			name: "C",
			count: langs.c__count
		},
		{
			name: "Java",
			count: langs.java__count
		},
		{
			name: "Node js",
			count: langs.node__count
		},
		{
			name: "Pascal",
			count: langs.pascal__count
		},
		{
			name: "Python",
			count: langs.python__count
		}
	]
}