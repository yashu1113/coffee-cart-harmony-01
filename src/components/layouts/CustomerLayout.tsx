import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

export const CustomerLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-neve-background">
      <nav className="bg-neve-primary text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            NeveCafe
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-6 w-6" />
              </Button>
            </Link>
            <Link to={user ? "/profile" : "/login"}>
              <Button variant="ghost" size="icon">
                <User className="h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
};