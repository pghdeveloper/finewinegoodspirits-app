import Repository from "./Repository";
const resource = "/winespirits";

export default {
    getCounties() {
        return Repository.get(`${resource}/counties/all`);
    },
    getSalesDetails(county) {
        return Repository.get(`${resource}/${county}`);
    }
};