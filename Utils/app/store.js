import { configureStore } from '@reduxjs/toolkit';
import { addCommentReducer } from '../features/addCommentSlice';
import { addLikeReducer } from '../features/addLikeSlice';
import { addPostReducer } from '../features/addPostSlice';
import { allPostsReducer } from '../features/allPostsSlice';
import { myprofileSliceReducer } from '../features/community/myprofileSlice';
import { peopletofollowReducer } from '../features/community/peopletofollowslice';
import { socialfeedSliceReducer } from '../features/community/socialfeedSlice';
import { userprofileSliceReducer } from '../features/community/userprofileSlice';
import counterReducer from '../features/counterSlice';
import { deletePostReducer } from '../features/deletePostSlice';
import { exploreTrackReducer } from '../features/exploreTrackSlice';
import { myTrackReducer } from '../features/myTrackSlice';
import { practiceproblemideSliceReducer } from '../features/practiceproblemideSlice';
import { practiceproblemsReducer } from '../features/practiceproblemsSlice';
import { trackInfoReducer } from '../features/trackInfoSlice';
import { yourCourseReducer } from '../features/yourCourseSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    courses: yourCourseReducer,
    tracks: exploreTrackReducer,
    specifictrack: trackInfoReducer,
    allmytracks: myTrackReducer,
    posts: allPostsReducer,
    post: addPostReducer,
    addcomment: addCommentReducer,
    addlike: addLikeReducer,
    deletepost: deletePostReducer,
    problems: practiceproblemsReducer,
    singlepracticeproblem: practiceproblemideSliceReducer,
    followpeople: peopletofollowReducer,
    userdatafollow: myprofileSliceReducer,
    userprodata: userprofileSliceReducer,
    personaliseposts: socialfeedSliceReducer,
  },
});
