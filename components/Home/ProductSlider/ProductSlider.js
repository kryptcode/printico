import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Grid1 from "../../../public/assets/images/Grid1.png";
import Grid2 from "../../../public/assets/images/Grid2.png";
import Grid3 from "../../../public/assets/images/Grid3.png";
import Grid4 from "../../../public/assets/images/Grid4.png";
import Grid5 from "../../../public/assets/images/Grid5.png";
import Arrows from "./Arrows";
import "./Arrows";
import ProductContent from "./ProductContent";

const products = [
  { src: Grid1 },
  { src: Grid4 },
  { src: Grid3 },
  { src: Grid2 },
  { src: Grid5 },
  { src: Grid4 },
  { src: Grid3 },
  { src: Grid1 },
  { src: Grid2 },
  { src: Grid4 },
  { src: Grid2 },
  { src: Grid3 },
];

const ProductSlider = () => {
  const settings = {
    className: "center",
    // centerMode: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 3,
    slidesPerRow: 1,
    nextArrow: <Arrows direction="right" />,
    prevArrow: <Arrows direction="left" />,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='w-[90%] mx-auto '>
      <div>
        <h6 className='text-sm text-[#650088] font-bold mb-5 '>
          Our Products
        </h6>
        <div className='flex justify-between items-center'>
          <div className='text-4xl font-bold '>
          Shop The Most  <br /> Merch We Have Made.
          </div>
          <button className='bg-[#650088] text-white text-sm font-semibold px-6 py-2 rounded-md hover:opacity-70  '>
            Visit Store
          </button>
        </div>
      </div>

      <div>
        <Slider {...settings}>
        {products.map((item, i) => (
            <ProductContent key={i} product={item.src} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default ProductSlider