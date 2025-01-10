import { CustomerLayout } from "@/components/layouts/CustomerLayout";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const { user, logout } = useAuth();

  return (
    <CustomerLayout>
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold text-neve-primary mb-8">Your Profile</h1>
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
          <div className="space-y-4">
            <div>
              <h2 className="font-semibold">Name</h2>
              <p>{user?.first_name} {user?.last_name}</p>
            </div>
            <div>
              <h2 className="font-semibold">Email</h2>
              <p>{user?.email}</p>
            </div>
            <div>
              <h2 className="font-semibold">Role</h2>
              <p className="capitalize">{user?.role}</p>
            </div>
            <Button onClick={logout} variant="destructive" className="w-full">
              Logout
            </Button>
          </div>
        </div>
      </div>
    </CustomerLayout>
  );
};

export default Profile;