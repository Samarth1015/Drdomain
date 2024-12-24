export default function Card() {
  return (
    <div>
      <div className="max-w-sm p-4 bg-white rounded-lg shadow-md flex items-center space-x-4 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <div>
          <h4 className="text-lg font-semibold text-gray-800">Assessment</h4>
          <p className="text-gray-500">General foot health assessments.</p>
        </div>
        <div className="flex-shrink-0 w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-teal-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.121 18.364l-1.414-1.414a2 2 0 010-2.828l9.193-9.192a2 2 0 012.828 0l1.414 1.414a2 2 0 010 2.828l-9.193 9.192a2 2 0 01-2.828 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
