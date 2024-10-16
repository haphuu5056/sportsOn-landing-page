import { CiCircleCheck } from "react-icons/ci";
import Link from "next/link";
 const SuccessMessage =()=> {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <div className="w-16 h-16 bg-green-100 flex justify-center items-center rounded-full mb-4">
        <CiCircleCheck className="text-green-500 text-6xl" />
      </div>
      <h1 className="text-4xl  text-primary mb-2">Email Verified </h1>
      <p className="text-gray-600 text-lg">
        Your email has been verified. You can now sign up for the app.
      </p>
      <Link
        href="/"
        className="bg-primary text-white py-2 px-6 rounded-lg mt-8 hover:bg-primary-dark"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
export default SuccessMessage;