import { CustomerLayout } from "@/components/layouts/CustomerLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <CustomerLayout>
        <div className="container mx-auto py-12">
          <h1 className="text-3xl font-bold text-neve-primary mb-8">Your Cart</h1>
          <div className="text-center text-neve-text">
            Your cart is empty
          </div>
        </div>
      </CustomerLayout>
    );
  }

  return (
    <CustomerLayout>
      <div className="container mx-auto py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-neve-primary">Your Cart</h1>
          <Button variant="destructive" onClick={clearCart}>
            Clear Cart
          </Button>
        </div>
        <div className="grid gap-6">
          {items.map((item) => (
            <Card key={item.name}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <CardTitle className="text-neve-primary">{item.name}</CardTitle>
                      <p className="text-sm text-neve-text mt-1">{item.description}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(item.name)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.name, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.name, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-lg font-bold text-neve-accent">
                    ${(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex justify-end">
          <Card>
            <CardContent className="p-6">
              <p className="text-xl font-bold text-neve-primary">
                Total: ${total}
              </p>
              <Button className="w-full mt-4">
                Proceed to Checkout
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </CustomerLayout>
  );
};

export default Cart;