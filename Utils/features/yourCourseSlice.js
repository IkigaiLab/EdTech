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
  courses: [],
  loadings: false,
};

export const getCourse = createAsyncThunk(
  'course/getCourse',
  async (userid) => {
    const getallcourses = [];
    const getallyourcourses = [];
    console.log('hello');
    console.log(userid);
    const docRef = doc(db, 'users', userid);
    const querySnapshot = await getDoc(docRef);
    getallcourses.push(...querySnapshot.data().courses);
    console.log(getallcourses);
    for (let i = 0; i < getallcourses.length; i++) {
      const querySnapshots = await getDoc(doc(db, 'Course', getallcourses[i]));
      console.log(querySnapshots.data());
      getallyourcourses.push(querySnapshots.data());
    }
    console.log(getallyourcourses);
    return getallyourcourses;
  }
);

export const yourCourseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {},
  extraReducers: {
    [getCourse.pending]: (state) => {
      state.loadings = true;
    },
    [getCourse.fulfilled]: (state, { payload }) => {
      state.loadings = false;
      state.courses = payload;
    },
    [getCourse.rejected]: (state) => {
      state.loadings = false;
    },
  },
});

export const yourCourseReducer = yourCourseSlice.reducer;
