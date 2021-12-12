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
  tracks: [],
  loadings: false,
};

export const getAllTracks = createAsyncThunk('track/getTrack', async () => {
  const alltrackData = [];
  const querySnapshot = await getDocs(collection(db, 'tracks'));
  console.log(querySnapshot);
  querySnapshot.forEach(async (doc) => {
    // let data = doc.data();
    let trackdata = { id: doc.id, ...doc.data() };
    console.log(trackdata);
    console.log(trackdata.evaluations);
    // if (trackdata.evaluations[0]) {
    //   console.log('in evaluation');
    //   let trackEvaluationData = await getDoc(trackdata.evaluations[0]);
    //   console.log(trackEvaluationData.data());
    //   let track = trackEvaluationData.data();
    //   alltrackData.push({
    //     id: doc.id,
    //     name: doc.name,
    //     master: doc.master,
    //     duration: doc.duration,
    //     evaluations: track,
    //   });
    // } else {
    //   alltrackData.push({
    //     id: doc.id,
    //     name: doc.name,
    //     master: doc.master,
    //     duration: doc.duration,
    //   });
    // }
    alltrackData.push({
      id: doc.id,
      name: doc.data().name,
      master: doc.data().master,
      duration: doc.data().duration,
      description: doc.data().description,
    });
  });
  console.log(alltrackData);
  return alltrackData;
});

export const exploreTrackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllTracks.pending]: (state) => {
      state.loadings = true;
    },
    [getAllTracks.fulfilled]: (state, { payload }) => {
      state.loadings = false;
      state.tracks = payload;
    },
    [getAllTracks.rejected]: (state) => {
      state.loadings = false;
    },
  },
});

export const exploreTrackReducer = exploreTrackSlice.reducer;
