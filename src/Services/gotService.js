export default class GoTService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    async getAllCharacters(page) {
        const res = await this.getResource(`/characters?page=${page}&pageSize=10`);
        return res.map(this._transformCharacter);
    }

    async getCharacter(id) {
        const char = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(char);
    }

    async getAllHouses() {
        const res = await this.getResource(`/houses?page=5&pageSize=10`);
        return res.map(this._transformHouse);
    }

    async getHouses(id) {
        const house = await this.getResource(`/houses/${id}`);
        return this._transformHouse(house);
    }

    async getAllBooks() {
        const res = await this.getResource(`/books?page=5&pageSize=10`);
        return res.map(this._transformBook);
    }

    async getBooks(id) {
        const book = await this.getResource(`/books/${id}`);
        return this._transformBook(book);
    }

    _transformCharacter(char) {
        return {
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

const got = new GoTService();
got.getAllCharacters()
    .then(res => res.forEach(item => {
        console.log(item.name);
    }));

got.getCharacter(777)
    .then(res => console.log(res));