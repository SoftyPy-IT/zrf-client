import { Skeleton } from "@mui/material";
import Container from "../Container";

const SliderSkeleton = () => {
  return (
    <div className="slider-container">
      <div className="sliderWrap lg:h-[600px] md:h-[300px] h-[200px] relative overflow-hidden">
        {/* Background image skeleton */}
        {/* <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          sx={{ position: "absolute", inset: 0 }}
        /> */}

        {/* Content overlay skeleton */}
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-md space-y-3">
              <Skeleton variant="text" height={40} width="80%" />
              <Skeleton variant="text" height={25} width="100%" />
              <Skeleton variant="text" height={25} width="90%" />
              <Skeleton
                variant="rectangular"
                height={40}
                width={120}
                sx={{ borderRadius: "999px", marginTop: "12px" }}
              />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default SliderSkeleton;
