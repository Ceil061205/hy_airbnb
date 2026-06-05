import { createSlice } from "@reduxjs/toolkit";
import { getHomeGoodPriceData } from "@/services/modules/home"

export const fetchHomeDataAction = () => {
  return async (dispatch) => {
    const res = await getHomeGoodPriceData()
    dispatch(changGoodPriceInfoAction(res))
  }
}

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
  },
  reducers: {
    changGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
  },
})

export const { changGoodPriceInfoAction } = homeSlice.actions
export default homeSlice.reducer