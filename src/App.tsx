import AdminInfo from "./components/AdminInfo";
import UserInfo from "./components/UserInfo";
import type { Info, AdminInfoList } from "./types";

const App = () => {
  const user: Info = {
    id: 1,
    name: "zayn",
    email: "zayn123@gmail.com",
  };

  const admin: AdminInfoList = {
    id: 2,
    name: "ayeza",
    email: "ayeza123@gmail.com",
    role: "admin",
    lastLogin: new Date(),
  };

  return (
    <div>
      <UserInfo user={user} />
      <AdminInfo admin={admin} />
    </div>
  );
};

export default App;
