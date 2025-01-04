export default function Card({ title, description }) {
  return (
    <div>
      <div className="max-w-sm p-4 bg-white rounded-lg shadow-md flex items-center space-x-4 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <div>
          <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
          <p className="text-gray-500">{description}</p>
        </div>
        <div className="flex-shrink-0   rounded-lg flex items-center justify-center">
          <img
            src="thesis.webp "
            className="h-24 w-28 object-cover rounded-lg
          "
          ></img>
        </div>
      </div>
    </div>
  );
}
