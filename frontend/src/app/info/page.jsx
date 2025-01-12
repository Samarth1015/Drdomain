export default function Info() {
  return (
    <div className="flex w-full h-screen pr-8 pl-8 mt-20">
      <div className="bio-written w-1/2 bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 text-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-opacity-90 relative overflow-hidden">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        libero dolorem itaque labore corrupti dolorum reiciendis, facere quasi
        nulla maxime molestiae magni ipsum enim debitis, commodi aliquid.
        Itaque, debitis aliquam. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Accusantium vero voluptatibus nobis quaerat deserunt
        rerum aperiam labore rem suscipit architecto consequatur error assumenda
        hic, atque reiciendis, sint minima. Dolorem, corrupti. Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Officia laudantium, aperiam
        reprehenderit voluptatibus illo iste eius facere molestias eveniet
        praesentium adipisci, asperiores doloribus? Voluptatem ab commodi quidem
        modi consequatur debitis. {/* Glowing effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-40 animate-glow"></div>
      </div>
      <div className="author flex justify-center w-1/2">
        <div
          className="
          
        "
        >
          <img
            src="dr.png"
            alt="Author Image"
            className="rounded-full w-40 h-40 object-cover border-4 border-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}
