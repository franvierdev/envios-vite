/*import whatsapp from '../imgs/whatsapp.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export function Pata() {

const phoneNumbers = [
    { label: "Atención al Cliente", number: "+58 412 1111111" },
    { label: "Soporte Técnico", number: "+58 414 2222222" },
    { label: "Ventas Directas", number: "+58 424 3333333" }
  ];

  return <div className="col-span-full flex justify-center bg-gradient-to-t from-green-700 via-green-700/70 to-transparent text-center mt-9 py-12 ">
    <img src={whatsapp} className="bg-green-600/60 rounded-full w-8" alt="..."></img>
    <h2 className="text-2xl font-semibold text-gray-100 text-shadow">

      +51 971 755 780
      {/* +51 982 898 638}
      {/* +57 302 7080728}
    </h2>
  </div >

}*/
import whatsapp from '../imgs/whatsapp.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export function Pata() {

  const phoneNumbers = [
    { label: "Atención al Cliente", number: "+58 412 1111111" },
    { label: "Soporte Técnico", number: "+58 414 2222222" },
    { label: "Ventas Directas", number: "+58 424 3333333" }
  ];

  return <div className="col-span-full flex justify-center  text-center mt-9 py-12 ">
    <div className="w-full max-w-sm mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="mySwiper rounded-xl  p-4 shadow-sm bg-gradient-to-t from-green-700 via-green-700/70 to-transparent"
      >
        {phoneNumbers.map((phone, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center py-8">
              <p className="text-sm text-gray-500 font-semibold uppercase">
                {phone.label}
              </p>
              <a
                href={`tel:${phone.number}`}
                className="text-2xl font-semibold text-gray-100 text-shadow"
              >
                {phone.number}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div >

}