import Container from "@/components/share/Container";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import PhotoGallery from "./PhotoGallery";
import VideoGallery from "./VideoGallery";

const GallerySection = () => {
  return (
    <Container>
      <div className="my-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-20">
          <div>
            <VideoGallery />
          </div>
          <div>
            <PhotoGallery />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default GallerySection;
