import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getFirestore,
  getDocs,
  getDoc,
  doc,
  arrayUnion,
  collection,
  updateDoc,
} from 'firebase/firestore';

const db = getFirestore();

const initialState = {
  allmytracks: [],
  loadings: false,
};

export const getAllMyTracks = createAsyncThunk(
  'tracks/getAllMyTracks',
  async (userid) => {
    const allTracks = [];
    const docRef = doc(db, 'users', userid);
    const querySnapshots = await getDoc(docRef);
    console.log(querySnapshots.data().tracks);
    for (let i = 0; i < querySnapshots.data().tracks.length; i++) {
      console.log(i);
      const docRef = doc(db, 'tracks', querySnapshots.data().tracks[i]);
      const querySnapshot = await getDoc(docRef);
      console.log(querySnapshot);
      console.log(querySnapshot.data());

      allTracks.push({
        id: querySnapshot.id,
        name: querySnapshot.data().name,
        description: querySnapshot.data().description,
        duration: querySnapshot.data().duration,
      });
    }
    console.log(allTracks);
    return allTracks;
  }
);

export const myTrackSlice = createSlice({
  name: 'allmytracks',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllMyTracks.pending]: (state) => {
      state.loadings = true;
    },
    [getAllMyTracks.fulfilled]: (state, { payload }) => {
      state.loadings = false;
      state.allmytracks = payload;
    },
    [getAllMyTracks.rejected]: (state) => {
      state.loadings = false;
    },
  },
});

export const myTrackReducer = myTrackSlice.reducer;
