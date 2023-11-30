import { Route, Routes } from "react-router-dom";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Forum from "../Pages/Forum";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/forum" element={<Forum />} />
    </Routes>
  );
};

export default MainRoutes;
