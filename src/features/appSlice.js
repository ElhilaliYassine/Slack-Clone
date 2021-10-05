import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    roomId: null
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        enterRoom: (state, action) => {
            state.roomId = action.payload.roomId
        }
    }
});

export const {
    enterRoom
} = appSlice.actions
export const selectRoomId = state => state.reducer.roomId
export default appSlice.reducer