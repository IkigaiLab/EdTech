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
  mytrackbyid: [],
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
      const docRef = doc(db, 'tracks', querySnapshots.data().tracks[i].id);
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

export const getMyTrackById = createAsyncThunk(
  'tracks/getMyTrackById',
  async (vardata) => {
    const { trackid, userid } = vardata;
    const allTracks = [];
    const docRef = doc(db, 'users', userid);
    const querySnapshots = await getDoc(docRef);
    console.log(querySnapshots.data().tracks);

    for (let i = 0; i < querySnapshots.data().tracks.length; i++) {
      if (querySnapshots.data().tracks[i].id === trackid) {
        allTracks.push(...querySnapshots.data().tracks[i].Days);
        console.log('match');
        console.log(querySnapshots.data().tracks[i].Days);
        for (let j = 0; j < querySnapshots.data().tracks[i].Days.length; j++) {
          // console.log(querySnapshots.data().tracks[i].Days[j].submodules);
          for (
            let k = 0;
            k < querySnapshots.data().tracks[i].Days[j].submodules.length;
            k++
          ) {
            console.log(
              querySnapshots.data().tracks[i].Days[j].submodules[k].topics
            );
            console.log(
              'Submodule id :',
              querySnapshots.data().tracks[i].Days[j].submodules[k].id
            );
            let submoduleid =
              querySnapshots.data().tracks[i].Days[j].submodules[k].id;
            for (
              let m = 0;
              m <
              querySnapshots.data().tracks[i].Days[j].submodules[k].topics
                .length;
              m++
            ) {
              console.log(
                'Topics id :',
                querySnapshots.data().tracks[i].Days[j].submodules[k].topics[m]
                  .id
              );
              let topocid =
                querySnapshots.data().tracks[i].Days[j].submodules[k].topics[m]
                  .id;
              const querySnapshoting = await getDoc(
                doc(db, `finalsubmodules/${submoduleid}/topics`, topocid)
              );
              if (allTracks[j].submodules[k].id === submoduleid) {
                // alert("id matched")
                if (allTracks[j].submodules[k].topics[m].id === topocid) {
                  // alert("topic is matched")
                  allTracks[j].submodules[k].topics[m].name =
                    querySnapshoting.data().name;
                }
              }
              console.log(querySnapshoting.data());
            }
          }
        }
      }
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

    [getMyTrackById.pending]: (state) => {
      state.loadings = true;
    },
    [getMyTrackById.fulfilled]: (state, { payload }) => {
      state.loadings = false;
      state.mytrackbyid = payload;
    },
    [getMyTrackById.rejected]: (state) => {
      state.loadings = false;
    },
  },
});

export const myTrackReducer = myTrackSlice.reducer;
