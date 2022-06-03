import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; //..step 1 async
import axios from "axios"; //..step2 async

const initialState = {
  loading: false,
  users: [],
  error: "",
};

//..step 3 axios
// generates pending, fulfilled and rejected action types

export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);
});

//..step4 axios action creater

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

//..step 5
export default userSlice.reducer;

//.step 6 in store.js file
