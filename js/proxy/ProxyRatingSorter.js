class ProxyRatingSorter {
    constructor() {
        this.cache = [];
    }

    async sorter(movies, orderBy) {
        const cachedData = this.cache.find((e) => e.key === orderBy);

        //verif si déjà présent dans le cache. Si oui, on le return directement
        if (cachedData) {
            console.log("Get from cache");
            return cachedData;
        }

        //si pas dans le cache, on appelle l'api
        const uncachedData = await RatingSorterApi.sorter(movies, orderBy);
        this.cache.push(uncachedData);
        return uncachedData;
    }
}
