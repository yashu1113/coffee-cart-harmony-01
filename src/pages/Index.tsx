import { CustomerLayout } from "@/components/layouts/CustomerLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";

const menuItems = [
  {
    name: "Classic Espresso",
    description: "Rich and bold single shot of pure coffee essence",
    price: "$3.50",
    category: "Hot Coffee",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&q=80"
  },
  {
    name: "Caramel Macchiato",
    description: "Espresso with steamed milk and vanilla, topped with caramel",
    price: "$4.50",
    category: "Specialty Drinks",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&h=300&q=80"
  },
  {
    name: "Iced Americano",
    description: "Chilled espresso with cold water and ice",
    price: "$3.75",
    category: "Cold Coffee",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&h=300&q=80"
  },
  {
    name: "Matcha Green Tea Latte",
    description: "Premium matcha green tea with steamed milk",
    price: "$4.75",
    category: "Tea",
    image: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=400&h=300&q=80"
  },
  {
    name: "Mocha Frappuccino",
    description: "Blended coffee with rich chocolate and whipped cream",
    price: "$5.25",
    category: "Blended Drinks",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&q=80"
  },
  {
    name: "Chai Tea Latte",
    description: "Spiced black tea with steamed milk and honey",
    price: "$4.25",
    category: "Tea",
    image: "https://images.unsplash.com/photo-1530373239000-f4ce5928a575?w=400&h=300&q=80"
  }
];

const Index = () => {
  const { addToCart } = useCart();

  return (
    <CustomerLayout>
      <div 
        className="relative h-[50vh] bg-neve-primary flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to NeveCafe</h1>
          <p className="text-xl md:text-2xl">Discover our amazing coffee selection</p>
        </div>
      </div>
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-neve-primary text-center mb-8">
          Our Menu
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-neve-primary">{item.name}</CardTitle>
                  <span className="text-lg font-bold text-neve-accent">{item.price}</span>
                </div>
                <span className="text-sm text-neve-accent/80">{item.category}</span>
              </CardHeader>
              <CardContent>
                <p className="text-neve-text mb-4">{item.description}</p>
                <Button 
                  onClick={() => addToCart(item)}
                  className="w-full"
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </CustomerLayout>
  );
};

export default Index;