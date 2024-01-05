import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginFetch } from "../../services/auth";
import { profileFetch } from "../../services/profile";

export const getCompanyInfo = createAsyncThunk("getCompanyInfo", async () => {
  const data = await profileFetch();
  return data;
});

export const signIn = createAsyncThunk("signIn", async (data, thunk) => {
  const profResponse = await loginFetch(data);
  localStorage.setItem("accessToken", profResponse.accessToken);
  thunk.dispatch(getCompanyInfo());
  return profResponse;
});

const initialState = {
  companyInfo: null,
  accountInfo: null,
  status: "",
};

const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    signOut: (state) => {
      state.accountInfo = null;
      state.companyInfo = null;
      localStorage.removeItem("accessToken");
    },
    dropStatus: (state) => {
      state.status = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.status = "pending";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.accountInfo = action.payload;
        state.status = "done";
      })
      .addCase(getCompanyInfo.fulfilled, (state, action) => {
        state.companyInfo = action.payload;
        state.status = "done";
      })
      .addMatcher(
        (action) =>
          [signIn.rejected, getCompanyInfo.rejected].includes(action.type),
        (state) => {
          state.status = "error";
        }
      );
  },
});

export const { signOut, dropStatus } = profile.actions;
export default profile.reducer;
