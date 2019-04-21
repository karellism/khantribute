export default {
    getItem(key: any) {
        if (localStorage) {
            return localStorage.getItem(key);
        }
        return null;
    },
    setItem(key: any, value: any) {
        if (localStorage) {
            localStorage.setItem(key, value);
        }
    }
};
