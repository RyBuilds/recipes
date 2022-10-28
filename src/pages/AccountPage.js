import { UserAuth } from "../context/AuthContext";

function AccountPage() {
  const { user } = UserAuth();

  return (
    <div className="container centre">
      <h1>Welcome, {user?.displayName || user?.email}</h1>
    </div>
  );
}

export default AccountPage;
