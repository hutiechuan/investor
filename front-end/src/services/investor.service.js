import http from "../http-common";
class InvestorDataService {
  getAll() {
    return http.get("/investor");
  }
  
}
export default new InvestorDataService();