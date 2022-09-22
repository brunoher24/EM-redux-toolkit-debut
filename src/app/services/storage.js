const STORAGE_NAME = "myFirstAppWithReduxToolkit2404"; 

const StorageService = () => ({

    checkIfExists(stored) {
        let data = stored;
        if(!data) {
            data = JSON.stringify({
                token: ""
            });
            window.localStorage[STORAGE_NAME] = data;
        }
        // console.log(data);
        return data;
    },

    get(){
        const data = this.checkIfExists(window.localStorage[STORAGE_NAME]);
        return JSON.parse(data);
    },

    set(itemName, itemValue){
        const data = JSON.parse(this.checkIfExists(window.localStorage[STORAGE_NAME]));
        data[itemName] = itemValue;
        window.localStorage[STORAGE_NAME] = JSON.stringify(data);
    }
});

export default StorageService;