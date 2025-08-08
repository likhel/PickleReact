import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    isLoading: false,
    error: null,
  },
  reducers: {
    setUser(state, action) {
      // Store user data in localStorage when set
      state.user = action.payload;
      state.isLoading = false;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem('user');
      localStorage.removeItem('jwtToken'); // Ensure JWT is removed
      state.isLoading = false;
    },
    setLoading(state, action) {
      // Clear error when a new loading process starts
      if (action.payload) {
        state.error = null;
      }
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setUser, logout, setLoading, setError } = authSlice.actions;

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      const response = await fetch('/api/auth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Login failed with status: ${response.status}`);
      }

      const userData = await response.json(); // Assuming API returns user data
      // Assuming the JWT is in a 'token' field in the response
      if (userData && userData.access) { // Changed to check for 'access' field
        localStorage.setItem('jwtToken', userData.access); // Store the 'access' token
      }
      dispatch(setUser(userData.user));
      dispatch(setError(null)); // Clear any previous errors
      return userData.user; // Optional: return data if needed
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setUser(null)); // Clear user on login failure
      throw error; // Re-throw to let createAsyncThunk handle rejection
    } finally {
      dispatch(setLoading(false));
    }
  }
);
export default authSlice.reducer;
