import { CustomerLayout } from "@/components/layouts/CustomerLayout";

const Index = () => {
  return (
    <CustomerLayout>
      <div className="relative h-[50vh] bg-neve-primary flex items-center justify-center text-white">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Menu items will go here */}
          <div className="text-center text-neve-text">
            Coming soon...
          </div>
        </div>
      </div>
    </CustomerLayout>
  );
};

export default Index;