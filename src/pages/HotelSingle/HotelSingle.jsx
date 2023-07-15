import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faHeart,
  faShareFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import Room from "../../components/Room/Room";
import Star from "../../components/star/Star";
import RoomCard from "../../components/Room/RoomCard";
import ContactInfo from "../../components/contactInfo/contactInfo";
import HotelsSlider from "../../components/slider/Slider";
import Loading from "../../components/loading/Loading";
import { useHotel } from "../../context";
import { roomImages } from "../../assets/images";
export default function HotelSingle() {
  const {
    state: { hotels, selectedHotel: hotel, selectedRooms: rooms, loading },
    dispatch,
  } = useHotel();
  // Estado para controlar el índice de la imagen actual
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    async function fetchRooms() {
      try {
        if (hotel) {
          const id = hotel.hotelId;
          const contactsInfoResponse = await fetch(
            `${import.meta.env.VITE_BASE_URL}/api/contactInfo/${id}`
          );
          const contactsInfoData = await contactsInfoResponse.json();
          const { email, phone } = contactsInfoData;

          const availableIndexes = roomImages.map((_, index) => index);
          let imageRooms = [];

          for (let i = 0; i < 5; i++) {
            const randomIndex = Math.floor(
              Math.random() * availableIndexes.length
            );
            const selectedIndex = availableIndexes[randomIndex];
            const randomImageUrl = roomImages[selectedIndex];
            imageRooms.push(randomImageUrl);

            availableIndexes.splice(randomIndex, 1);
          }

          const rooms = {
            id,
            images: imageRooms,
            pastPrice: hotel.pastPrice,
            actualPrice: hotel.actualPrice,
            email,
            phone,
          };

          dispatch({ type: "SELECT_ROOMS", payload: rooms });
        }
      } catch (error) {
        console.error("Error fetching hotel names:", error);
      } finally {
        dispatch({ type: "LOADING", payload: false });
      }
    }

    fetchRooms();
  }, [dispatch, hotel]);

  if (loading) {
    return <Loading height="100vh" />;
  }

  // Función para manejar el clic del botón de flecha izquierda
  const handleLeftArrowClick = () => {
    if (imageIndex === 0) {
      // Si ya estamos en la primera imagen, retrocedemos al final del array de imágenes
      setImageIndex(rooms.images.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  };

  // Función para manejar el clic del botón de flecha derecha
  const handleRightArrowClick = () => {
    if (imageIndex === rooms.images.length - 1) {
      // Si ya estamos en la última imagen, volvemos al inicio del array de imágenes
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };

  return (
    <div className="content__hotelInfo">
      <div className="content__hotelSingle">
        <div className="navbar__hotelSingle">
          <div className="box__hotelSingle">
            <div className="content__hotelSingle--title">
              <h2>{hotel.title}</h2>
              <div className="star__show">
                <Star />
              </div>
              <button>
                <FontAwesomeIcon icon={faShareFromSquare} />
              </button>
              <p className="text__show">Share</p>
              <button>
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <p className="text__show">Save</p>
            </div>
            <div className="content__hotelSingle--address">
              <p>{hotel.address}</p>
              <div className="free__buttons">
                <button>Free Wifi</button>
                <button>Free Breakfast</button>
              </div>
            </div>
          </div>
          <div className="hotelSingle__payment">
            <h3 className="title__short">$ {hotel.actualPrice} / Per Night</h3>
            <p className="title__big">
              <font size="5">$ {hotel.actualPrice}</font> / Per Night
            </p>
            <button className="hotelSingle__show book__now">
              Book This Now
            </button>
          </div>
        </div>
        <div className="content__hotelInfo--room">
          <div className="content__hotelSingle--room">
            <div className="content__hotelSingle--images">
              <div
                className="content__hotelSingle--principal"
                style={{
                  backgroundImage: `url('${hotel.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <button
                  className="selected-label left"
                  onClick={handleLeftArrowClick}
                >
                  <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <button
                  className="selected-label right"
                  onClick={handleRightArrowClick}
                >
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
                <p className="view-all">Hotel Images</p>
              </div>
              <div className="hotelSingle__show">
                <div
                  className="content__hotelSingle--secondary"
                  style={{
                    backgroundImage: `url(${rooms.images[0]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <p className="view-all">Room Image</p>
                </div>
                <div
                  className="content__hotelSingle--secondary"
                  style={{
                    backgroundImage: `url(${rooms.images[1]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <p className="view-all">Room Image</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content__hotelSingle--menu">
            <h4>ROOMS</h4>
            <h4>ABOUT</h4>
            <h4>FACILITY</h4>
            <h4>LOCATION</h4>
            <h4>REVIEWS</h4>
            <h4>POLICIES</h4>
          </div>
          <div className="hotelSingle__body">
            <div className="hotelSingle__body--info">
              <div className="hotelSingle__rooms">
                <Room
                  title="Deluxe Room"
                  image={`${rooms.images[2]}`}
                  beforePrice={`$${rooms.pastPrice}`}
                  nowPrice={`$${rooms.actualPrice}`}
                />
                <Room
                  title="Suite Room"
                  image={`${rooms.images[3]}`}
                  beforePrice={`$${(rooms.pastPrice * 1.5).toString()}`}
                  nowPrice={`$${(rooms.actualPrice * 1.5).toString()}`}
                />
                <Room
                  title="Royal Room"
                  image={`${rooms.images[4]}`}
                  beforePrice={`$${(rooms.pastPrice * 2).toString()}`}
                  nowPrice={`$${(rooms.actualPrice * 2).toString()}`}
                />
              </div>
              <div className="content__hotelSingle--extras">
                <RoomCard />
                <ContactInfo
                  address={hotel.address}
                  email={rooms.email}
                  phone={rooms.phone}
                />
              </div>
            </div>
            <div>
              <HotelsSlider hotels={hotels} id={hotel.hotelId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

HotelSingle.propTypes = {
  hotels: PropTypes.arrayOf(
    PropTypes.shape({
      hotelId: PropTypes.string,
      image: PropTypes.string,
      title: PropTypes.string,
      location: PropTypes.string,
      description: PropTypes.string,
      reviews: PropTypes.string,
      pastPrice: PropTypes.string,
      actualPrice: PropTypes.string,
    })
  ),
  id: PropTypes.string,
};

// Propiedades por defecto para las propTypes
HotelSingle.defaultProps = {
  hotels: [],
  id: "",
};
