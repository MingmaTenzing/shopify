
import CheckoutContainer from "../../../components/CheckoutContainer";
import NewsLetter from "../../../components/NewsLetter";


type Props = {};

function YourCart({}: Props) {

  return (
    <div>
      <div className=" bg-[#f8f8f8]   p-10 space-y-2 ">
        <div className=" flex  space-x-2">
          <p className=" text-sm text-gray-500">Home</p>
          <p className=" text-sm text-gray-500">-</p>
          <p className=" text-sm">Your Cart</p>
        </div>
        <div>
          <p className=" font-bold text-5xl">Your Cart</p>
        </div>
      </div>

      <div className=" md:flex md:justify-center md:space-x-10 mt-10">

      <section id="cart items  section" className=" md:w-[50%]">
    
       
     
      </section>
      <div className=" md:w-[40%]">
      <CheckoutContainer />

      </div>
  
      </div>
      
      <div className=" pt-10">

      <NewsLetter />
      </div>
      
    </div>
  );
}
export default YourCart;
