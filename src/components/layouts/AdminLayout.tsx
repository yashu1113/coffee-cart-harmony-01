import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-neve-background">
      <nav className="bg-neve-primary text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
            <Link to="/admin" className="text-xl font-bold">
              NeveCafe Admin
            </Link>
          </div>
          <Button onClick={handleLogout} variant="ghost">
            Logout
          </Button>
        </div>
      </nav>
      <main className="container mx-auto py-8">{children}</main>
    </div>
  );
};