import "./index.scss";
import Room from "../../components/Room/Room";
import Star from "../../components/star/Star";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faHeart,
  faShareFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import RoomCard from "../../components/Room/RoomCard";
import { useHotel } from "../../context";
import Loading from "../../components/loading/Loading";
import { useEffect } from "react";
import HotelsSlider from "../../components/slider/Slider";
import { roomImages } from "../../assets/images";
import ContactInfo from "../../components/contactInfo/contactInfo";


export default function HotelSingle() {
  const { state, dispatch } = useHotel();
  const { hotels, selectedHotel: hotel, selectedRooms: rooms } = state;

  useEffect(() => {
    async function fetchRooms() {
      try {
        if (hotel) {
          const id = hotel.hotelId;
          const [roomResponse, contactsInfoResponse] = await Promise.all([
            fetch(`${import.meta.env.VITE_BASE_URL}/api/room/${id}`),
            fetch(`${import.meta.env.VITE_BASE_URL}/api/contactInfo/${id}`),
          ]);
          const roomData = await roomResponse.json();
          const contactsInfoData = await contactsInfoResponse.json();
          const { title, description, pastPrice, actualPrice } = roomData;
          const { email, phone } = contactsInfoData;

          // Clonar el array original para evitar modificarlo directamente
          const availableIndexes = roomImages.map((_, index) => index);

          let imageRooms = [];

          for (let i = 0; i < 5; i++) {
            // Genera un número aleatorio entre 0 y availableIndexes.length - 1
            const randomIndex = Math.floor(
              Math.random() * availableIndexes.length
            );
            const selectedIndex = availableIndexes[randomIndex];
            const randomImageUrl = roomImages[selectedIndex];
            imageRooms.push(randomImageUrl);

            // Eliminar el índice seleccionado del array de índices disponibles
            availableIndexes.splice(randomIndex, 1);
          }

          const rooms = {
            id,
            title,
            images: imageRooms,
            description,
            pastPrice,
            actualPrice,
            email,
            phone,
          };

          dispatch({ type: "SELECT_ROOMS", payload: rooms });
        }
      } catch (error) {
        // Corregido: "hotels" -> "hotel" en el mensaje de error
        console.error("Error fetching hotel names:", error);
      } finally {
        dispatch({ type: "LOADING", payload: false });
      }
    }

    fetchRooms();
  }, [dispatch, hotel]);

  if (state.loading) {
    return <Loading />;
  }

  return (
    <div className="content__hotelSingle">
      <div className="content__hotelSingle--room">
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
            <div>
              <p>{hotel.address}</p>
              <div className="free__buttons">
                <button>Free Wifi</button>
                <button>Free Breakfast</button>
              </div>
            </div>
          </div>
          <div className="hotelSingle__payment">
            <h3 className="title__short">{hotel.cost} / Per Night</h3>
            <p className="title__big">
              <font size="6">{hotel.cost}</font> / Per Night
            </p>
            <button className="hotelSingle__show book__now">
              Book This Now
            </button>
          </div>
        </div>
        <div className="content__hotelSingle--images">
          <div className="content__hotelSingle--principal"
            style={{ backgroundImage: `url('${hotel.image}')` }}>
            <select className="selected-label left">
              <FontAwesomeIcon icon={faAngleRight} rotation={180} />
            </select>
            <select className="selected-label right">
              <FontAwesomeIcon icon={faAngleRight} />
            </select>
            <p className="view-all">
              Hotel Images
            </p>
          </div>
          <div className="hotelSingle__show">
            <div className="content__hotelSingle--secondary"
              style={{ backgroundImage: `url(${rooms.images[0]})` }}>
              <p className="view-all">
                Room Image
              </p>
            </div>
            <div className="content__hotelSingle--secondary"
              style={{ backgroundImage: `url(${rooms.images[1]})` }}>
              <p className="view-all">
                Room Image
              </p>
            </div>
          </div>
        </div>
        <RoomCard />
        <ContactInfo />
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
        <div className="hotelSingle__rooms">
          <Room
            title="Deluxe Room"
            image={`${rooms.images[2]}`}
            beforePrice="$1250"
            nowPrice="$1000"
          />
          <Room
            title="Suite Room"
            image={`${rooms.images[3]}`}
            beforePrice="$1350"
            nowPrice="$1100"
          />
          <Room
            title="Royal Room"
            image={`${rooms.images[4]}`}
            beforePrice="$1950"
            nowPrice="$1800"
          />
        </div>
        <div>
          <HotelsSlider hotels={hotels} id={hotel.hotelId} />
        </div>
      </div>
    </div>
  );
}
