import {makeAutoObservable} from "mobx";

export default class AdvertisementStore {
    constructor() {
        this._types = [
            {id: 1, title: "оголошення1"},
            {id: 2, title: "оголошення2"},
            {id: 3, title: "оголошення3"},
            {id: 4, title: "оголошення4"},
            {id: 5, title: "оголошення5"}

        ]
        this._profiles = [
            {id: 1, name: "Leanne Graham"},
            {id: 2, name: "Ervin Howell"},
            {id: 3, name: "Clementine Bauch"},
            {id: 4, name: "Patricia Lebsack"},
            {id: 5, name: "Chelsey Dietrich"}

        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types;
    }

    setProfile(user) {
        this._profiles = user;
    }

    get types() {
        return this._types
    }

    get profiles() {
        return this._profiles
    }
}
