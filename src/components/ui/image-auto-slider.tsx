import img1 from "@/assets/ai-art/ai-art-1.jpg";
import img2 from "@/assets/ai-art/ai-art-2.jpg";
import img3 from "@/assets/ai-art/ai-art-3.jpg";
import img4 from "@/assets/ai-art/ai-art-4.jpg";
import img5 from "@/assets/ai-art/ai-art-5.jpg";
import img6 from "@/assets/ai-art/ai-art-6.jpg";
import img7 from "@/assets/ai-art/ai-art-7.jpg";
import img8 from "@/assets/ai-art/ai-art-8.jpg";
import img9 from "@/assets/ai-art/ai-art-9.jpg";
import img10 from "@/assets/ai-art/ai-art-10.jpg";

export const Component = () => {
  // Images for the infinite scroll - using imported assets
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images]; // Reduced duplication since we have more images now

  return (
    <>
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right 30s linear infinite;
        }

        .scroll-container {
          /* Mask removed to ensure visibility */
        }

        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .image-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
      `}</style>

      <div className="w-full h-full bg-black relative overflow-hidden flex items-center justify-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-0" />

        {/* Scrolling images container */}
        <div className="relative z-10 w-full flex items-center justify-center py-8">
          <div className="scroll-container w-full max-w-6xl overflow-hidden">
            <div className="infinite-scroll flex gap-6 w-max">
              {duplicatedImages.map((image, index) => (
                <div
                  key={index}
                  className="image-item flex-shrink-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-xl overflow-hidden shadow-2xl border border-gray-800"
                >
                  <img
                    src={image}
                    alt={`Gallery image ${(index % images.length) + 1}`}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-20" />
      </div>
    </>
  );
};
