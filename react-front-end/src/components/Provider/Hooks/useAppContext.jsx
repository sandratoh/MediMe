// Libraries
import { useState, useEffect } from "react";
import axios from "axios";

export default function useAppContext() {
  // App menu states
  const [menu, setMenu] = useState(false);

  // Doctor states
  const [doctors, setDoctors] = useState([]);

  // User states
  const [users, setUsers] = useState([]);
  const [userDetailId, setUserDetailId] = useState({});
  const [userEditId, setUserEditId] = useState({});

  // Doctor database calls
  const doctorExists = (name) => {
    return doctors.find((doctor) => doctor.name === name) ? true : false;
  };

  const addDoctor = (formData) => {
    return axios
      .post("/api/doctors", formData)
      .then(() => refreshAllDoctors())
      .catch((err) => console.log(err));
  };

  const refreshAllDoctors = () => {
    return axios.get("/api/doctors").then((res) => {
      setDoctors(res.data.doctors);
    });
  };

  // Users database calls
  const addUser = (formData) => {
    console.log('formData from addUser in app context: ', formData)

    return axios
      .post("/api/users", formData)
      .then((res) => {
        refreshAllUsers();

        return res;
      })
      .catch((err) => console.log(err));
  };

  const editUser = (formData) => {
    return axios
      .put(`/api/users/${userDetailId}`, formData)
      .then((res) => {
        refreshAllUsers();

        return res;
      })
      .catch((err) => console.log(err));
  };

  const loginUser = (formData) => {
    return axios
      .post("/api/users/login", formData)
      .then((res) => {
        console.log('res login user:', res)
        return res;
      })
      .catch((err) => console.log(err));
  };

  const refreshAllUsers = () => {
    return axios.get("/api/users").then((res) => {
      setUsers(res.data.users);
    });
  };

  useEffect(() => {
    const apiDoctorsUrl = "/api/doctors";
    const apiAllUsersUrl = "api/users";

    Promise.all([axios.get(apiDoctorsUrl), axios.get(apiAllUsersUrl)]).then(
      (res) => {
        const doctors = res[0].data.doctors;
        const users = res[1].data.users;
        setDoctors(doctors);
        setUsers(users);
        return;
      }
    );
  }, []);

  // App exports
  const appData = {
    // App menu
    menu,
    setMenu,
    // Doctor
    doctors,
    doctorExists,
    addDoctor,
    // User
    users,
    userDetailId,
    userEditId,
    setUserDetailId,
    setUserEditId,
    addUser,
    editUser,
    loginUser,
  };

  console.log('UserDetailId', userDetailId)
  return appData;
}
