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

// export const trackEnrolment = createAsyncThunk(
//   'track/trackenrolment',
//   async (data) => {
//     const { trackid, userid } = data;
//     console.log(trackid);
//     console.log(userid);
//     const docRef = doc(db, 'users', userid);
//     const docRefer = doc(db, 'tracks', trackid);
//     const querySnap = await getDoc(docRefer);
//     console.log(querySnap.data());
//     console.log(querySnap.data().name);

//     if (docRef) {
//       const querySnapshot = await getDoc(docRef);
//       console.log(querySnapshot.data());
//       if (querySnapshot.data().tracks.length > 0) {
//         console.log('length is not zero');
//         let flag = 0;
//         querySnapshot.data().tracks.map((item) => {
//           if (item.id === trackid) {
//             console.log('already enrolled');
//             flag = 1;
//           }
//         });
//         if (flag != 0) {
//           return 'already enrolled';
//         } else {
//           return 'successful';
//         }
//       } else {
//         const trackData = [];
//         const daywisemodulesData = [];
//         let modulessubtopicData = [];
//         for (let i = 0; i < querySnap.data().Days.length; i++) {
//           console.log(querySnap.data().Days[i]);
//           modulessubtopicData = [];
//           for (let j = 0; j < querySnap.data().Days[i].submodules.length; j++) {
//             const query = await getDoc(querySnap.data().Days[i].submodules[j]);
//             console.log(query.data());
//             const querys = query.data();
//             modulessubtopicData.push({ id: query.id, ...querys });
//           }
//           console.log(modulessubtopicData);
//           daywisemodulesData.push({ submodules: modulessubtopicData });
//         }
//         console.log(modulessubtopicData);
//         console.log(daywisemodulesData);
//         trackData.push({
//           id: trackid,
//           name: querySnap.data().name,
//           Days: daywisemodulesData,
//         });
//         console.log(trackData);
//         await updateDoc(docRef, {
//           tracks: trackData,
//         });
//         return 'successful';
//       }
//     }
//     return 'unsuccessful';
//   }
// );

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
    console.log(querySnap.data().name);

    if (docRef) {
      const querySnapshot = await getDoc(docRef);
      console.log(querySnapshot.data());
      if (querySnapshot.data().tracks.length > 0) {
        console.log('length is not zero');
        let flag = 0;
        querySnapshot.data().tracks.map((item) => {
          if (item.id === trackid) {
            console.log('already enrolled');
            flag = 1;
          }
        });
        if (flag != 0) {
          return 'already enrolled';
        } else {
          return 'successful';
        }
      } else {
        const trackData = [];
        const moduleswiseData = [];
        let modulessubtopicData = [];
        for (let i = 0; i < querySnap.data().submodules.length; i++) {
          console.log(querySnap.data().submodules[i]);
          modulessubtopicData = [];
          const query = await getDoc(querySnap.data().submodules[i].submodule);
          console.log(query.data());
          console.log(query);
          const querys = query.data();
          modulessubtopicData.push({ id: query.id, ...querys });
          console.log(modulessubtopicData);
          moduleswiseData.push(...modulessubtopicData);
        }
        console.log(modulessubtopicData);
        console.log(moduleswiseData);
        trackData.push({
          id: trackid,
          name: querySnap.data().name,
          submodules: moduleswiseData,
        });
        console.log(trackData);
        await updateDoc(docRef, {
          tracks: trackData,
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
