
export class Employee {
    private _ID: string;
    private _firstName: string;
    private _lastName: string;
    private _birthday: Date;
    private _address: string;
    private _position: string;

    constructor(ID: string, firstName: string, lastName: string, birthday: Date, address: string, position: string) {
        this._ID = ID;
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthday = birthday;
        this._address = address;
        this._position = position;
    }
    getID(): string {
        return this._ID;
    }
    setID(ID: string) {
        this._ID = ID;
    }
    getFirstName(): string {
        return this._firstName;
    }

    setFirstName(value: string) {
        this._firstName = value;
    }

    getLastName(): string {
        return this._lastName;
    }

    setLastName(value: string) {
        this._lastName = value;
    }

    getBirthday(): Date {
        return this._birthday;
    }

    setBirthday(value: Date) {
        this._birthday = value;
    }

    getAddress(): string {
        return this._address;
    }

    setAddress(value: string) {
        this._address = value;
    }

    getPosition(): string {
        return this._position;
    }

    setPosition(value: string) {
        this._position = value;
    }
}