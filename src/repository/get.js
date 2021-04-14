import { axios } from 'boot/axios'

const resource = 'api/get/'

export default {
  ValidateUser: (USERNAME, PASSWORD) => axios.get(`${resource}ValidateUser?username=${USERNAME}&password=${PASSWORD}`),
  UserProfile: (USERNAME) => axios.get(`${resource}UserProfile?username=${USERNAME}`),

  UamDataSummary: (BRAND, VENDOR, SITE) => axios.get(`${resource}UamDataSummary?brand=${BRAND}&vendor=${VENDOR}&site=${SITE}`),
  UamDataAgents: (BRAND, VENDOR) => axios.get(`${resource}UamDataAgents?brand=${BRAND}&vendor=${VENDOR}`),
  UamDataAgentsDetailed: ({ BRAND, LOB, VENDOR, TABLE }) => axios.get(`${resource}UamDataAgentsDetailed?brand=${BRAND}&lob=${LOB}&vendor=${VENDOR}&table=${TABLE}`),
  UamDataAgentsDistinctCol: (BRAND, CATEGORY) => axios.get(`${resource}UamDataAgentsDistinctCol?brand=${BRAND}&category=${CATEGORY}`),

  UamDataHistoryDates: (BRAND, TYPE) => axios.get(`${resource}UamDataHistoryDates?brand=${BRAND}&type=${TYPE}`),
  UamDataSummaryHistory: (DATE, BRAND, VENDOR, SITE) => axios.get(`${resource}UamDataSummaryHistory?date=${DATE}&brand=${BRAND}&vendor=${VENDOR}&site=${SITE}`),

  IrabData: (VENDOR) => axios.get(`${resource}IrabData?vendor=${VENDOR}`),
  IrabDataSummary: (MONTH, VENDOR) => axios.get(`${resource}IrabDataSummary?month=${MONTH}&vendor=${VENDOR}`),

  PasswordData: () => axios.get(`${resource}PasswordData`),
  PasswordDataSummary: (MONTH) => axios.get(`${resource}PasswordDataSummary?month=${MONTH}`),

  OnehubData: () => axios.get(`${resource}OnehubData`)
}
