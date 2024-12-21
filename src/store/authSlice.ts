import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
    status: boolean
}

const initialState: AuthState = {
    status: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<boolean>) => {
            state.status = action.payload
        }
    }
})

export const { setAuth } = authSlice.actions

export default authSlice.reducer

