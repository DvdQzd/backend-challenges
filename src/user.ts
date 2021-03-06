/**
 * Creates a new User instance.
 *
 * @class The User class
 * @constructor
 * @public
 */

class User {
	/**
	 * Create an user.
	 *
	 * @public
	 * @param {string} name - Username.
	 * @param {string} lastName - User's last name.
	 * @param {{ name: string, author: string }[]} books - User's books.
	 * @param {string[]} pets - User's pets.
	 */
	constructor(
		private _name: string,
		private _lastName: string,
		private _books: { name: string; author: string }[],
		private _pets: string[]
	) {}

	/**
	 * Getter to get the full name of the user
	 *
	 * @public
	 * @returns {string} User's first name and the user's last name concatenated
	 */
	get fullName(): string {
		return `${this._name} ${this._lastName}`;
	}

	/**
	 * Getter to get the number of pets the user has
	 *
	 * @public
	 * @returns {number} The length of the pets array
	 */
	get countPets(): number {
		return this._pets.length;
	}

	/**
	 * Getter to get the name of the user's books
	 *
	 * @public
	 * @returns {string[]} The name value of the books objects
	 */
	get bookNames(): string[] {
		return this._books.map((book) => book.name);
	}

	/**
	 * Getter to get the pets array
	 *
	 * @public
	 * @returns {string[]} The pets array
	 */
	get pets(): string[] {
		return this._pets;
	}

	/**
	 * Getter to get the books array
	 *
	 * @public
	 * @returns {string[]} The books array
	 */
	get books(): { name: string; author: string }[] {
		return this._books;
	}

	/**
	 * Setter to append a new pet to the pets array
	 *
	 * @public
	 * @param {string} name - The Pet's name
	 */
	set pet(name: string) {
		this._pets.push(name);
	}

	/**
	 * Setter to append a new book to the books array
	 *
	 * @public
	 * @param {{ name: string, author: string }} book - The book to be added
	 */
	set book(book: { name: string; author: string }) {
		this._books.push(book);
	}
}

export default User;
