import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getFirestore,
  getDocs,
  getDoc,
  doc,
  arrayUnion,
  collection,
  setDoc,
  updateDoc,
} from 'firebase/firestore';

const db = getFirestore();

const initialState = {
  singlepracticeproblem: [],
  loadings: false,
};

export const getpracticeproblembyid = createAsyncThunk(
  'problems/getproblem/byid',
  async (vardata) => {
    const { problemid, userid } = vardata;
    const querySnapshot = await getDocs(collection(db, 'practiceproblem'));
    let id = '';
    console.log(querySnapshot);
    console.log(querySnapshot.docs.length);
    const docs = querySnapshot.docs;
    for (let i = 0; i < docs.length; i++) {
      id = docs[i].id;
    }
    console.log(id, problemid);
    const querySnapshoting = await getDoc(
      doc(db, `practiceproblem/${id}/problems`, problemid)
    );
    console.log(querySnapshoting.data());
    const test = [];
    console.log(userid);

    const docRefs = doc(db, 'users', userid);
    const querySnapsho = await getDoc(docRefs);
    test.push(...querySnapsho.data().practiceproblems);
    console.log(test);
    const hell = test.find((v) => v.id === problemid);
    console.log(hell);
    console.log(hell.code);
    console.log(hell.output);
    return {
      ...querySnapshoting.data(),
      code: hell.code,
      output: hell.output,
    };
  }
);

export const addcodepracticeproblembyid = createAsyncThunk(
  'problems/addcodetproblem/byid',
  async (vardata) => {
    const { problemid, userid, code, codeoutput } = vardata;
    const test = [];
    const docRefs = doc(db, 'users', userid);
    const querySnapsho = await getDoc(docRefs);
    test.push(...querySnapsho.data().practiceproblems);
    console.log(test);
    test.find((v) => v.id === problemid).status = true;
    test.find((v) => v.id === problemid).code = code;
    test.find((v) => v.id === problemid).output = codeoutput;
    await updateDoc(docRefs, {
      practiceproblems: test,
    });
  }
);

export const practiceproblemideSlice = createSlice({
  name: 'singlepracticeproblem',
  initialState,
  reducers: {},
  extraReducers: {
    [getpracticeproblembyid.pending]: (state) => {
      state.loadings = true;
    },
    [getpracticeproblembyid.fulfilled]: (state, { payload }) => {
      state.loadings = false;
      state.singlepracticeproblem = payload;
    },
    [getpracticeproblembyid.rejected]: (state) => {
      state.loadings = false;
    },

    [addcodepracticeproblembyid.pending]: (state) => {
      state.loadings = true;
    },
    [addcodepracticeproblembyid.fulfilled]: (state) => {
      state.loadings = false;
    },
    [addcodepracticeproblembyid.rejected]: (state) => {
      state.loadings = false;
    },
  },
});

export const practiceproblemideSliceReducer = practiceproblemideSlice.reducer;
