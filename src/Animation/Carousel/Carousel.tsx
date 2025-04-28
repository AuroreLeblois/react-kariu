import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import type { CarouselProps } from "./Carousel.types";
import { useTheme } from "../../Theme/ThemeProvider";

/**
 * Carrousel using custom element
 * 
 * How to use :
 * 
 * ```tsx
 * import { Carousel } from "react-kariu";
 * 
 * <Carousel items={items} renderItem={(item) => 
 *  <Card title={typedItem.title}> <img src={typedItem.image} alt={typedItem.title} /></Card>
 *  />
 * ```
 */
function Carousel<T>(props: CarouselProps<T>) {
  const { colors } = useTheme();
  const { id, items, renderItem, spaceBetween = 0, loop = true, delay = 3000 } = props;

  if (!items.length) return null;

  // ----------------------------------------------------------------------

  if (items.length === 1) {
    const singleItem = items[0];
    if (singleItem) {
      return renderItem(singleItem);
    }
    return null;
  }

  return (
    <Swiper
      style={{
        // @ts-ignore
        "--swiper-pagination-bullet-active": colors.primary.light,
        "--swiper-pagination-bullet-inactive-color": colors.text.lighter ,
        "--swiper-pagination-bullet-inactive-opacity": "0.6",
        "--swiper-pagination-bullet-opacity": "1",
        "--swiper-pagination-bullet-size": "0.55rem",
        "--swiper-pagination-bullet-horizontal-gap": "0.25rem",
        "--swiper-navigation-color": colors.primary.light,
        "--swiper-theme-color": colors.primary.light
      }}
      id={id}
      className="swiper-react-kariu"
      slidesPerView={1}
      spaceBetween={spaceBetween}
      loop={loop}
      autoplay={{
        delay,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination, EffectFade]}
    >
      {items.map((item, idx) => {
        const key = `carousel-item-${idx}`;
        return <SwiperSlide key={key}>{renderItem(item)}</SwiperSlide>;
      })}
    </Swiper>
  );
}

// ----------------------------------------------------------------------

export default Carousel;
