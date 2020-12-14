import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3080/api',
})

export const insertSeat = payload => api.post(`/cafe`, payload)
export const getAllSeats = () => api.get(`/cafes`)
export const updateSeatById = (id, payload) => api.put(`/cafe/${id}`, payload)
export const deleteSeatById = id => api.delete(`/cafe/${id}`)
export const getSeatById = id => api.get(`/cafe/${id}`)

const apis = {
    insertSeat,
    getAllSeats,
    updateSeatById,
    deleteSeatById,
    getSeatById,
}

export default apis