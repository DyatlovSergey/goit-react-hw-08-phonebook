import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const signUp = createAsyncThunk("auth/signUp", async (values) => {
  try {
    const { data } = await axios.post("/users/signup", values);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const signIn = createAsyncThunk("auth/signIn", async (values) => {
  try {
    const { data } = await axios.post("/users/login", values);
    console.log(data);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

export const refreshCurrentUser = createAsyncThunk(
  "auth/current",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const savedToken = state.auth.token;
    if (savedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(savedToken);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
