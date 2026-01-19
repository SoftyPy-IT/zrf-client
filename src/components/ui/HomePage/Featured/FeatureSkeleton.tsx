import Container from "@/components/share/Container";
import { Skeleton } from "@mui/material";

const FeatureSliderSkeleton = () => {
  return (
    <Container>
      <div className="lg:relative -top-24 z-10">
        <div className="bg-white lg:p-2 shadow-md lg:mt-0 mt-10">
          <div className="flex gap-4 p-2">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="w-full">
                <div className="flex flex-col md:flex-row gap-3 bg-green-600 p-5 items-center md:h-[180px]">
                  {/* Text section */}
                  <div className="flex-1 space-y-3 order-2 md:order-1 w-full">
                    <Skeleton variant="text" width="80%" height={28} />
                    <Skeleton variant="text" width="100%" height={18} />
                    <Skeleton variant="text" width="90%" height={18} />
                    <Skeleton
                      variant="rectangular"
                      width={90}
                      height={28}
                      sx={{ borderRadius: "999px", marginTop: "8px" }}
                    />
                  </div>

                  {/* Image section */}
                  <Skeleton
                    variant="rectangular"
                    width={128}
                    height={112}
                    className="order-1 md:order-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FeatureSliderSkeleton;
