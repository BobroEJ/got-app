export default class GoTService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = async (page) => {
        const res = await this.getResource(`/characters?page=${page}&pageSize=10`);
        return res.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const char = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(char);
    }

    getAllHouses = async (page) => {
        const res = await this.getResource(`/houses?page=${page}&pageSize=10`);
        return res.map(this._transformHouse);
    }

    getHouses = async (id) => {
        const house = await this.getResource(`/houses/${id}`);
        return this._transformHouse(house);
    }

    getAllBooks = async (page) => {
        const res = await this.getResource(`/books?page=1&pageSize=12`);
        return res.map(this._transformBook);
    }

    getBooks = async (id) => {
        const book = await this.getResource(`/books/${id}`);
        return this._transformBook(book);
    }

    _transformCharacter(char) {
        return {
            id: char.url.slice(char.url.lastIndexOf('/')).slice(1),
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released,
        }
    }
}

