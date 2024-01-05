import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { histogramsFetch } from "../../services/objectSearch";
import { publicationFetch } from "../../services/publication";
import { documentsFetch } from "../../services/documents";
import { objectSearchToSummary } from "../../utils/objectSearchToSummary";
import { returnIdsArray } from "../../utils/ReturnIdsArray";

export const getHistogramInfo = createAsyncThunk(
  "histogram/getHistogramInfo",
  async (body) => {
    const data = await histogramsFetch(body);
    return objectSearchToSummary(data.data);
  }
);

export const getPublication = createAsyncThunk(
  "histogram/getPublication",
  async (body) => {
    const data = await publicationFetch(body);
    return returnIdsArray(data);
  }
);

export const getDocuments = createAsyncThunk(
  "histogram/getDocuments",
  async (body) => {
    return documentsFetch(body);
  }
);

const initialState = {
  histogramInfo: null,
  status: "",
  publicationIds: [],
  documents: [],
};

const histogramSlice = createSlice({
  name: "histogram",
  initialState,
  reducers: {
    dropDocumentsInfo: (state) => {
      state.publicationIds = [];
      state.documents = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHistogramInfo.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getHistogramInfo.fulfilled, (state, action) => {
        state.histogramInfo = action.payload;
        state.documents = [];
        state.status = "done";
      })
      .addCase(getHistogramInfo.rejected, (state) => {
        state.status = "error";
      })
      .addCase(getPublication.fulfilled, (state, action) => {
        state.publicationIds = action.payload;
      })
      .addCase(getDocuments.fulfilled, (state, action) => {
        state.documents.push(...action.payload);
      });
  },
});

export const { dropDocumentsInfo } = histogramSlice.actions;
export default histogramSlice.reducer;
