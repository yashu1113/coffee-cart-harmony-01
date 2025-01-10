import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import { CartDialog } from "../CartDialog";
import { LoginDialog } from "../LoginDialog";

export const CustomerLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const [cartOpen, setCartOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neve-background">
      <nav className="bg-neve-primary text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            NeveCafe
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => setCartOpen(true)}>
              <ShoppingCart className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => user ? null : setLoginOpen(true)}
            >
              <User className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <CartDialog open={cartOpen} onOpenChange={setCartOpen} />
      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
    </div>
  );
};