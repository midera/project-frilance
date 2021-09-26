import {makeAutoObservable} from "mobx";

export default class AdvertisementStore {
    constructor() {
        this._types = [
            {id: 1, title: "Type of work"},

        ]
        this._cityName = [
            {id: 1, city: "Kyiv"},
            {id: 2, city: "Dnipro"},
            {id: 3, city: "Lviv"},
            {id: 4, city: "Donetsk"},
            {id: 5, city: "Kharkiv"},
            {id: 6, city: "Vinnytsia"},
            {id: 7, city: "Zhytomyr"},
            {id: 8, city: "Zaporizhzhia"},
            {id: 9, city: "Ivano-Frankivsk"},
            {id: 10, city: "Luhansk"},
            {id: 11, city: "Odesa"},
            {id: 13, city: "Poltava"},
            {id: 14, city: "Rivne"},
            {id: 15, city: "Mykolaiv"},
            {id: 16, city: "Simferopol"},
            {id: 17, city: "Khmelnytskyi"},
            {id: 18, city: "Sumy"}]
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
            {
                id: 1,
                title: "Все",
                img: `https://d2e70e9yced57e.cloudfront.net/wallethub/images/posts/19455/how-long-does-it-take-to-build-credit.jpg`,
                rating: 4.2
            },
            {
                id: 2,
                title: "Сварочные работы",
                img: `https://d2e70e9yced57e.cloudfront.net/wallethub/images/posts/19455/how-long-does-it-take-to-build-credit.jpg`,
                rating: 4.2
            },
            {
                id: 3,
                title: "кладка кирпича",
                img: `https://d2e70e9yced57e.cloudfront.net/wallethub/images/posts/19455/how-long-does-it-take-to-build-credit.jpg`,
                rating: 4.2
            },
            {
                id: 4,
                title: "Установка ворот заборов",
                img: `https://d2e70e9yced57e.cloudfront.net/wallethub/images/posts/19455/how-long-does-it-take-to-build-credit.jpg`,
                rating: 4.2
            },
            {
                id: 5,
                title: "Кровельные работы",
                img: `https://d2e70e9yced57e.cloudfront.net/wallethub/images/posts/19455/how-long-does-it-take-to-build-credit.jpg`,
                rating: 4.2
            },
            {
                id: 6,
                title: "Бетонные работы",
                img: `https://d2e70e9yced57e.cloudfront.net/wallethub/images/posts/19455/how-long-does-it-take-to-build-credit.jpg`,
                rating: 4.2
            },
            {
                id: 7,
                title: "Строительство мелких конструций",
                img: `https://d2e70e9yced57e.cloudfront.net/wallethub/images/posts/19455/how-long-does-it-take-to-build-credit.jpg`,
                rating: 4.2
            },
            {
                id: 8,
                title: "Архитектура проектирование",
                img: `https://d2e70e9yced57e.cloudfront.net/wallethub/images/posts/19455/how-long-does-it-take-to-build-credit.jpg`,
                rating: 4.2
            },
            {
                id: 9,
                title: "Монтаж вентиляций",
                img: `https://d2e70e9yced57e.cloudfront.net/wallethub/images/posts/19455/how-long-does-it-take-to-build-credit.jpg`,
                rating: 4.2
            },
            {
                id: 10,
                title: "Монтаж вентиляций",
                img: `https://d2e70e9yced57e.cloudfront.net/wallethub/images/posts/19455/how-long-does-it-take-to-build-credit.jpg`,
                rating: 4.2
            },
            {
                id: 11,
                title: "Монтаж вентиляций",
                img: `https://d2e70e9yced57e.cloudfront.net/wallethub/images/posts/19455/how-long-does-it-take-to-build-credit.jpg`,
                rating: 4.2
            },
            {
                id: 12,
                title: "Монтаж вентиляций",
                img: `https://d2e70e9yced57e.cloudfront.net/wallethub/images/posts/19455/how-long-does-it-take-to-build-credit.jpg`,
                rating: 4.2
            },
            {
                id: 13,
                title: "Монтаж вентиляций",
                img: `https://d2e70e9yced57e.cloudfront.net/wallethub/images/posts/19455/how-long-does-it-take-to-build-credit.jpg`,
                rating: 4.2
            },
            {
                id: 14,
                title: "Монтаж вентиляций",
                img: `https://d2e70e9yced57e.cloudfront.net/wallethub/images/posts/19455/how-long-does-it-take-to-build-credit.jpg`,
                rating: 4.2
            },
            {
                id: 15,
                title: "Монтаж вентиляций",
                img: `https://d2e70e9yced57e.cloudfront.net/wallethub/images/posts/19455/how-long-does-it-take-to-build-credit.jpg`,
                rating: 4.2
            },


        ]
        this._profiles = [
            {id: 1, name: "Leanne Graham",img:`https://futureu.europa.eu/assets/decidim/default-avatar-43686fd5db4beed0141662a012321bbccd154ee1d9188b0d1f41e37b710af3cb.svg`},
            {id: 2, name: "Ervin Howell",img:`https://futureu.europa.eu/assets/decidim/default-avatar-43686fd5db4beed0141662a012321bbccd154ee1d9188b0d1f41e37b710af3cb.svg`},
            {id: 3, name: "Clementine Bauch",img:`https://futureu.europa.eu/assets/decidim/default-avatar-43686fd5db4beed0141662a012321bbccd154ee1d9188b0d1f41e37b710af3cb.svg`},
            {id: 4, name: "Patricia Lebsack",img:`https://futureu.europa.eu/assets/decidim/default-avatar-43686fd5db4beed0141662a012321bbccd154ee1d9188b0d1f41e37b710af3cb.svg`},
            {id: 5, name: "Chelsey Dietrich",img:`https://futureu.europa.eu/assets/decidim/default-avatar-43686fd5db4beed0141662a012321bbccd154ee1d9188b0d1f41e37b710af3cb.svg`},
            {id: 6, name: "Chelsey Dietrich",img:`https://futureu.europa.eu/assets/decidim/default-avatar-43686fd5db4beed0141662a012321bbccd154ee1d9188b0d1f41e37b710af3cb.svg`},
            {id: 7, name: "Chelsey Dietrich",img:`https://futureu.europa.eu/assets/decidim/default-avatar-43686fd5db4beed0141662a012321bbccd154ee1d9188b0d1f41e37b710af3cb.svg`},
            {id: 8, name: "Chelsey Dietrich",img:`https://futureu.europa.eu/assets/decidim/default-avatar-43686fd5db4beed0141662a012321bbccd154ee1d9188b0d1f41e37b710af3cb.svg`},
            {id: 9, name: "Chelsey Dietrich",img:`https://futureu.europa.eu/assets/decidim/default-avatar-43686fd5db4beed0141662a012321bbccd154ee1d9188b0d1f41e37b710af3cb.svg`},
            {id: 10, name: "Chelsey Dietrich",img:`https://futureu.europa.eu/assets/decidim/default-avatar-43686fd5db4beed0141662a012321bbccd154ee1d9188b0d1f41e37b710af3cb.svg`}

        ]
        this._selectedTypes = {}
        this._selectedCityName = {}
        this._selectedAdvertisementWork = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types;
    }

    setCityName(cityName) {
        this._cityName = cityName
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

    setSelectedCityName(name) {
        this._selectedCityName=name;
    }

    setSelectedAdvertisementWork(advert) {
        this._selectedAdvertisementWork = advert;
    }


    get types() {
        return this._types
    }

    get cityName() {
        return this._cityName;
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
    get selectedCityName() {
        return this._selectedCityName
    }


    get selectedAdvertisementWork() {
        return this._selectedAdvertisementWork
    }
}
