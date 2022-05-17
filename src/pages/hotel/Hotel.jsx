import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./Hotel.css";
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"

const Hotel = () => {
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/289839259.jpg?k=feb252dc56525062714f974608f7038d55d1b0a0eb56a93d3857f67d2d51b3c8&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/289839259.jpg?k=feb252dc56525062714f974608f7038d55d1b0a0eb56a93d3857f67d2d51b3c8&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/289839259.jpg?k=feb252dc56525062714f974608f7038d55d1b0a0eb56a93d3857f67d2d51b3c8&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/289839259.jpg?k=feb252dc56525062714f974608f7038d55d1b0a0eb56a93d3857f67d2d51b3c8&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/289839259.jpg?k=feb252dc56525062714f974608f7038d55d1b0a0eb56a93d3857f67d2d51b3c8&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/289839259.jpg?k=feb252dc56525062714f974608f7038d55d1b0a0eb56a93d3857f67d2d51b3c8&o=&hp=1",
    },
  ];

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighLight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo) => (
              <div className="hotelImgWrapper">
                <img src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Grand Palace Hotel & Resorts Sylhet has a restaurant, fitness
                centre, a bar and shared lounge in Sylhet. An indoor swimming
                pool and a car rental service are available for guests. The
                accommodation features a 24-hour front desk, room service and
                currency exchange for guests. The hotel will provide guests with
                air-conditioned rooms offering a desk, a kettle, a minibar, a
                safety deposit box, a flat-screen TV and a private bathroom with
                a shower. At Grand Palace Hotel & Resorts rooms are equipped
                with bed linen and towels. A buffet breakfast is available each
                morning at the accommodation. Grand Palace Hotel & Resorts
                Sylhet offers a terrace.
              </p>
            </div>
            <div className="hotelDetailsPrice">
               <h1>Perfect for a 9-night stay!</h1>
               <span>Located in the real heart of Sylhet, this property has an excellent location of score of 9.8</span> 
               <h2>
                   <b>$945</b>(9 nights)
               </h2>
               <button>Reserve or Book now</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Hotel;
