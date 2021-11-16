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

export const getAllCourse = async () => {
  const allcourses = [];
  const querySnapshot = await getDocs(collection(db, 'Course'));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, ' => ', doc.data());
    allcourses.push({ id: doc.id, ...doc.data() });
  });
  return allcourses;
};

export const getIntroCourse = async (id) => {
  console.log(id);
  let courseIntro;
  const querySnapshot = await getDocs(collection(db, `Course/${id}/Enrolment`));
  const querySnapshots = await getDoc(doc(db, 'Course', id));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, ' => ', doc.data());
    courseIntro = { ...doc.data() };
  });
  let specificCourse = { courseIntro, ...querySnapshots.data() };
  console.log(specificCourse);
  return specificCourse;
};

export const CourseEnrollment = async (courseid, userid) => {
  console.log(courseid);
  console.log(userid);
  const docRef = doc(db, 'users', userid);
  if (docRef) {
    await updateDoc(docRef, {
      courses: arrayUnion(courseid),
    });
    return 'successful';
  }
  return 'unsuccessful';
};

export const getmyCourse = async (userid) => {
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
};

export const getAllCourseTracking = async () => {
  const allCoursesData = [];
  const allcourses = [];
  const querySnapshot = await getDocs(collection(db, 'Course'));
  querySnapshot.forEach(async (doc) => {
    console.log(doc.id, ' => ', doc.data());
    allcourses.push(doc.data());
    let structure = { id: doc.id, ...doc.data() };
    if (structure.Structure) {
      let courseStructureData = await getDoc(structure.Structure);
      if (courseStructureData.exists()) {
        structure.courseStructureData = {
          courseStructureID: courseStructureData.id,
          ...courseStructureData.data(),
        };
        for (let i = 0; i < courseStructureData.data().modules.length; i++) {
          let submodules = await getDoc(
            courseStructureData.data().modules[i].submodule
          );
          structure.submodules = {
            submodulesID: submodules.id,
            ...submodules.data(),
          };
          console.log('helo');
          console.log(submodules.data());
        }
        console.log(courseStructureData.data().modules[0].submodule);
      }
      allCoursesData.push(structure);
    } else {
      allCoursesData.push(structure);
    }

    console.log(allCoursesData);
  });
  return allCoursesData;
};
