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
  specifictrack: [],
  loadings: false,
  trackEnrol: '',
};

export const getSpecificTrack = createAsyncThunk(
  'track/getTrackById',
  async (trackid) => {
    const docRef = doc(db, 'tracks', trackid);
    const querySnapshot = await getDoc(docRef);

    console.log(querySnapshot);
    console.log(querySnapshot.data());

    return {
      id: querySnapshot.id,
      name: querySnapshot.data().name,
      description: querySnapshot.data().description,
    };
  }
);

export const trackEnrolment = createAsyncThunk(
  'track/trackenrolment',
  async (data) => {
    const { trackid, userid } = data;
    console.log(trackid);
    console.log(userid);
    const docRef = doc(db, 'users', userid);
    const docRefer = doc(db, 'tracks', trackid);
    const querySnap = await getDoc(docRefer);
    console.log(querySnap.data());

    for (let i = 0; i < querySnap.data().Days.length; i++) {
      console.log(querySnap.data().Days[i]);
      for (let j = 0; j < querySnap.data().Days[i].submodules.length; j++) {
        const query = await getDoc(querySnap.data().Days[i].submodules[j]);
        console.log(query.data());
      }
    }

    if (docRef) {
      const querySnapshot = await getDoc(docRef);
      console.log(querySnapshot.data());
      if (querySnapshot.data().tracks.length > 0) {
        console.log('length is not zero');
        let flag = 0;
        querySnapshot.data().tracks.map((id) => {
          if (id === trackid) {
            console.log('already enrolled');
            flag = 1;
          }
        });
        if (flag != 0) {
          return 'already enrolled';
        } else {
          await updateDoc(docRef, {
            tracks: arrayUnion(trackid),
          });
          return 'successful';
        }
      } else {
        await updateDoc(docRef, {
          tracks: arrayUnion(trackid),
        });
        return 'successful';
      }
    }
    return 'unsuccessful';
  }
);

export const trackInfoSlice = createSlice({
  name: 'specifictrack',
  initialState,
  reducers: {},
  extraReducers: {
    [getSpecificTrack.pending]: (state) => {
      state.loadings = true;
    },
    [getSpecificTrack.fulfilled]: (state, { payload }) => {
      state.loadings = false;
      state.specifictrack = payload;
    },
    [getSpecificTrack.rejected]: (state) => {
      state.loadings = false;
    },

    [trackEnrolment.pending]: (state) => {
      state.loadings = true;
    },
    [trackEnrolment.fulfilled]: (state, { payload }) => {
      state.loadings = false;
      state.trackEnrol = payload;
    },
    [trackEnrolment.rejected]: (state) => {
      state.loadings = false;
    },
  },
});

export const trackInfoReducer = trackInfoSlice.reducer;
