import { AdminLayout } from "@/components/layouts/AdminLayout";

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="grid gap-6">
        <h1 className="text-3xl font-bold text-neve-primary">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Today's Orders</h2>
            <p className="text-3xl font-bold text-neve-primary">0</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Active Menu Items</h2>
            <p className="text-3xl font-bold text-neve-primary">0</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Loyalty Members</h2>
            <p className="text-3xl font-bold text-neve-primary">0</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;