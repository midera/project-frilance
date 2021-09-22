import {makeAutoObservable} from "mobx";

export default class AdvertisementStore {
    constructor() {
        this._types = [
            {id: 1, title: "Type of work"},
            {id: 2, title: "Choose a city"},

        ]
        this._advertisementWork = [
            {id: 1, title: "Все"},
            {id: 2, title: "Сварочные работы"},
            {id: 3, title: "кладка кирпича"},
            {id: 4, title: "Установка ворот заборов"},
            {id: 5, title: "Кровельные работы"},
            {id: 6, title: "Бетонные работы"},
            {id: 7, title: "Строительство мелких конструций"},
            {id: 8, title: "Архитектура проектирование"},
            {id: 9, title: "Монтаж вентиляций"},
            {id: 10, title: "Буровые работы "},
            {id: 11, title: "Разноробочие"},
            {id: 12, title: "другие работы"}
        ]
        this._advertisementList = [
            {id: 1, title: "Все"},
            {id: 2, title: "Сварочные работы"},
            {id: 3, title: "кладка кирпича"},
            {id: 4, title: "Установка ворот заборов"},
            {id: 5, title: "Кровельные работы"},
            {id: 6, title: "Бетонные работы"},
            {id: 7, title: "Строительство мелких конструций"},
            {id: 8, title: "Архитектура проектирование"},
            {id: 9, title: "Монтаж вентиляций"},


        ]
        this._profiles = [
            {id: 1, name: "Leanne Graham"},
            {id: 2, name: "Ervin Howell"},
            {id: 3, name: "Clementine Bauch"},
            {id: 4, name: "Patricia Lebsack"},
            {id: 5, name: "Chelsey Dietrich"}

        ]
        this._selectedTypes = {}
        this._selectedAdvertisementWork = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types;
    }

    setAdvertisementList(list) {
        this._advertisementList = list;
    }

    setProfile(user) {
        this._profiles = user;
    }

    setSelectedTypes(type) {
        this._selectedTypes = type;
    }

    setSelectedAdvertisementWork(advert) {
        this._selectedAdvertisementWork = advert;
    }


    get types() {
        return this._types
    }

    get profiles() {
        return this._profiles
    }

    get advertisementWork() {
        return this._advertisementWork
    }

    get advertisementList() {
        return this._advertisementList
    }

    get selectedTypes() {
        return this._selectedTypes
    }

    get selectedAdvertisementWork() {
        return this._selectedAdvertisementWork
    }
}
