import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const createSchool = payload => api.post(`/school`, payload)
export const getSchools = () => api.get(`/schools`)
export const updateSchoolById = (id, payload) => api.put(`/shool/${id}`, payload)
export const deleteSchoolById = id => api.delete(`/school/${id}`)
export const getSchoolById = id => api.get(`/school/${id}`)

const apis = {
    createSchool,
    getSchools,
    updateSchoolById,
    deleteSchoolById,
    getSchoolById
}

export default apis
