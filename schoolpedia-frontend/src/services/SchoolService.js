import http from "../http-common";

class SchoolDataService {
    getAll() {
        return http.get("/country/schools");
    }

    get(id) {
        return http.get(`/country/schools/${id}`);
    }

    create(data) {
        return http.post("/api/country/:id/schools", data);
    }

    update(id, data) {
        return http.put(`/country/schools/${id}`, data);
    }

    delete(id) {
        return http.delete(`/country/schools/${id}`);
    }
    deleteAll() {
        return http.delete(`/country/schools`);
    }

    findByTitle(title) {
        return http.get(`/country/schools?title=${title}`);
    }
}

export default new SchoolDataService();
