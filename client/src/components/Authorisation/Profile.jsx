import { useAuth } from "@/context/AuthContext";

const Profile = () => {
  const { user, logout } = useAuth();

  // loading / not logged in
  if (!user) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        Please login to view your profile
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-md border rounded-xl p-6 shadow-lg">

        {/* Avatar */}
        <div className="flex flex-col items-center gap-3">
          <img
            src={`https://ui-avatars.com/api/?name=${user.username}&background=000&color=fff`}
            alt="avatar"
            className="w-24 h-24 rounded-full border"
          />

          <h2 className="text-xl font-semibold">
            {user.username}
          </h2>

          <p className="text-sm text-shadow-white">
            {user.email}
          </p>
        </div>

        {/* Divider */}
        <div className="my-6 border-t" />

        {/* Details */}
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">User ID</span>
            <span className="font-medium truncate max-w-[180px]">
              {user._id}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Account</span>
            <span className="font-medium">Active</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6">
          <button
            onClick={logout}
            className="w-full py-2 rounded-md border text-red-600 font-semibold hover:bg-red-700 hover:text-black transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
