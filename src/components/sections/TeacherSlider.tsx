import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { teachers } from '@/data/teachers.js'
import Image from 'next/image'

const TeacherSlide = () => {
  return (
    <section className="bg-white pt-16 pb-16">
      <div className="relative max-w-7xl mx-auto px-4 pb-4 focus:outline-none sm:px-3 md:px-5">
        <h2 className="title">Professores</h2>
        <hr className="custom-hr" />
        <div className="hidden md:block">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className="mt-10 mb-3"
          >
            {teachers.map((teacher) => (
              <SwiperSlide
                key={teacher.id}
                className="flex flex-col justify-center shadow-xl px-6 py-8 rounded-3xl text-center text-violeta"
              >
                <div className="h-24 w-24 relative text-center m-auto mb-6">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h4 className="text-2xl font-semibold mb-2">{teacher.name}</h4>
                <div
                  dangerouslySetInnerHTML={{ __html: teacher.biography }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="block md:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className="mt-10 mb-3"
          >
            {teachers.map((teacher) => (
              <SwiperSlide
                key={teacher.id}
                className="flex flex-col justify-center shadow-xl px-6 py-8 rounded-3xl text-center text-violeta"
              >
                <div className="h-24 w-24 relative text-center m-auto mb-6">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h4 className="text-2xl font-semibold mb-2">{teacher.name}</h4>
                <div
                  dangerouslySetInnerHTML={{ __html: teacher.biography }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default TeacherSlide
