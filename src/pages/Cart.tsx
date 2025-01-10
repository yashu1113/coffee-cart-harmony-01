import { CustomerLayout } from "@/components/layouts/CustomerLayout";

const Cart = () => {
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
};

export default Cart;