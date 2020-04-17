import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const initialState = {
  loading: false,
  hasErrors: false,
  data: [],
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getData: state => {
      state.loading = true
    },
    getDataSuccess: (state, { payload }) => {
      state.data = payload
      state.loading = false
      state.hasErrors = false
    },
    getDataFailure: state => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

export const { getData, getDataSuccess, getDataFailure } = dataSlice.actions

export const dataSelector = state => state.data

export default dataSlice.reducer

export function fetchData() {
  return async dispatch => {
    dispatch(getData())

    try {
      const response = await axios.get('https://api.eia.gov/series/?api_key=f8e294cce8855b7fa91bbbd11f0e31e4&series_id=ELEC.GEN.ALL-CA-97.M')
      const array = await response.data.series
      const data = array.map(x => x.data)[0];
      const objectData = data.map(e => { return { date: e[0], generate: e[1], unit: "kWa" }})

      dispatch(getDataSuccess(objectData))
    } catch (error) {
      dispatch(getDataFailure())
    }
  }
}