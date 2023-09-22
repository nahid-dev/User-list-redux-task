import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUserData = createAsyncThunk("getUsers", async () => {
  const res = await fetch("allUsers.json");
  const result = await res.json();
  return result;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.users = payload;
      })
      .addCase(getUserData.rejected, (state, { payload }) => {
        state.loading = true;
        state.error = payload;
      });
  },
});

export default userSlice.reducer;
