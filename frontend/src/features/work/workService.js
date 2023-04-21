import axios from "axios"

const API_URL =  "/api/locumdays"

// Log locum day
const createWork = async ( workData, token) => {
      const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
      }

      const response = await axios.post(API_URL, workData, config)

      return response.data
}

const workService = {
    createWork
}

export default workService