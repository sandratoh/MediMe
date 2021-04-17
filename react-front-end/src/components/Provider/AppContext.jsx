import { useState, useEffect } from "react";
import axios from "axios";

export default function AppContext() {
  // Menu states
  const [menu, setMenu] = useState(false);

  // Doctor states
  const [doctors, setDoctors] = useState([]);

  // User states
  const [users, setUsers] = useState([]);
  const [userDetailId, setUserDetailId] = useState({});
  const [userEditId, setUserEditId] = useState({});

  // Users database calls
  const addUser = (formData) => {
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
    const { email, password } = formData;

    return axios
      .get("/api/users")
      .then((res) => {
        const users = res.data.users;
        const user = users.find((user) => user.email === email);

        if (user.password === password.password) {
          return user;
        }
        return null;
      })
      .catch((err) => console.log(err));
  };

  const refreshAllUsers = () => {
    return axios.get("/api/users").then((res) => {
      setUsers(res.data.users);
    });
  };

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

  useEffect(() => {
    console.log("hello from inside appContext useEffect");
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

  const appData = {
    // App menu exports
    menu,
    setMenu,
    // Doctor exports
    doctors,
    doctorExists,
    addDoctor,
    // User exports
    users,
    userDetailId,
    userEditId,
    setUserDetailId,
    setUserEditId,
    addUser,
    editUser,
    loginUser,
  };

  return appData;
}
