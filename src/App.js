import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Slide } from './Slide';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { Switch } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

library.add(fas, faTwitter, faFontAwesome)



function App() {

  const [items , setItems] = useState([])
  const [limit,setLimit] = useState(10)
  const [showMore , setShowMore] = useState(false)
  const [error , setError] = useState(false)

  // Fetch data whenever the limit changes
  useEffect(() => {
    getData();
  }, [limit]);

  const getData = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products?limit=${limit}`);
      setItems(res.data.products);
    } catch (error) {
      console.log(error);
      toast.error("An error occurred ! Please try again.", {
        theme: "colored"
      })
      setError(true)
    }
  };

  const handleShowMore = () => {
    setLimit((prevValue) => prevValue + 10);// Increase the limit by 10
    setShowMore(false);
    getData(); // Fetch new data immediately when the button is clicked
  };
  
  
  // Responsive Carousel
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1200, min: 855 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 855, min: 0 },
      items: 1
    }
  };
  
  // Togggle Autoplay switch
  const [checked, setChecked] = useState(false);

  const toggle =(() => {
    checked?setChecked(false):setChecked(true)
  })

  // Show More Button at last slide
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    if(currentSlide >= limit-3){
      setShowMore(true)
    }
  }

  return (
    <>
    <header className=' heading text-center text-8xl mb-4 pt-4 text-white font-[roboto-slab] underline underline-offset-8 max-[1069px]:text-6xl max-[653px]:text-4xl'>
      Dynamic Content Carousel
    </header>

    <div className='text-right mr-8'>
      <label className='text-xl text-white font-[roboto-slab] italic'>Autoplay</label>
    <Switch onClick={toggle} className='bg-slate-500'/>
    </div>

    <Carousel responsive={responsive}
    swipeable={true}
    draggable={true}  
    showDots={true}
    autoPlay={checked}
    autoPlaySpeed={1500}
    customButtonGroup={<ButtonGroup />}>
      {
        items?.map((item)=>{
          return(
            <Slide key={item.id} item={item}/>
          )               
        })
      }   
    </Carousel>
    {
      showMore?
      <div className='text-center relative'>
        <button onClick={handleShowMore}
        className='showMore bg-slate-500 text-white font-[roboto-slab] text-xl p-2 rounded-md absolute right-12 bottom-[-15px] h-10 flex items-center'>Show More...</button>
      </div>
      :
      null
    }
    {
      error?<div className='flex h-96 items-center justify-center'>

      </div>:null
    }

    <ToastContainer 
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
      
    </>
  );
}

export default App;
