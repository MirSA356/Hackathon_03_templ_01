
import FontsShowcase from "@/components/Fonts";
import Hero from "@/components/Hero";
import NewArivel from "@/components/arrivals";
import BestSelling from "@/components/Selling";
import Dress from "@/components/dress";
import CustomerCarousel from "@/components/Customer";
import Products from "./products/page";
import Top_sell from "./products/sell";
import Product from "./products/page";


export default function Home() {
  return (
    <div>
   
   <Hero/>
   <FontsShowcase/>
   {/* <NewArivel/> 
   <BestSelling/> */}
   <Products/>
   {/* <Product/> */}
   <Top_sell/>
   <Dress/>
   <CustomerCarousel/>
   </div>
  );
}
