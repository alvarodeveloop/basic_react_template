import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dispatch } from 'redux'
import axios from 'axios'
import { AuthSession } from './AuthPage.interface'
import { toast } from 'react-toastify'

const initialState: AuthSession = {
  isLoading: false,
  isAuthenticated: false,
  hasError: false,
}

export const AuthSessionSlice = createSlice({
  name: 'authSession',
  initialState,
  reducers: {
    initialCondition: (state) => {
      state.isLoading = false
    },
    makeSession: (state) => {
      state.isLoading = true
    },
    sessionSuccess: (state) => {
      state.isAuthenticated = true
      state.isLoading = false
      state.hasError = false
    },
    sessionError: (state) => {
      state.hasError = true
    },
  },
})

export const { initialCondition, makeSession, sessionSuccess, sessionError } =
  AuthSessionSlice.actions

export const dispatchAuthSession =
  (username: number, password: number) =>
  async (dispatch: Dispatch): Promise<void> => {
    dispatch(makeSession())
    try {
      const dataToSend = {
        username,
        password,
      }
      const response = await axios.post('/api/auth/login', dataToSend)
      dispatch(sessionSuccess())
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message)
        dispatch(sessionError())
      }
    }
  }

export default AuthSessionSlice.reducer
