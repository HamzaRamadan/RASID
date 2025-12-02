import  { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface Props {
  onAccess: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function RequestAccess({ onAccess }: Props) {
  const [show, setShow] = useState(true);
  const navigate = useNavigate(); 


  return (
    <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Section */}
      <div className="bg-[#0C1B27] text-white flex flex-col justify-center items-center px-6 sm:px-10 md:px-24 py-10">
        <img src="/images/logo RASID.png" alt="logo" className="w-48 mb-6" />
        <h1 className="text-3xl font-bold mb-2">
  RASID <span className="font-normal text-white">Platform</span>
</h1>

        <h2 className="text-xl font-semibold mb-6">Request Access</h2>
        <p className="mb-6 opacity-80 text-sm text-center md:text-left">
          Fill out the form to request access
        </p>

        <form className="space-y-4 w-full max-w-md mx-auto">
          {/* Name Fields */}
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <input
              className="flex-1 bg-transparent border border-[#E3E3E3] p-3 rounded-md text-sm outline-none focus:border-[#36C0C9] placeholder:text-[#E3E3E3]"
              placeholder="First Name"
            />
            <input
              className="flex-1 bg-transparent border border-[#E3E3E3] p-3 rounded-md text-sm outline-none focus:border-[#36C0C9] placeholder:text-[#E3E3E3]"
              placeholder="Last Name"
            />
          </div>

          {/* Email */}
          <input
            className="w-full bg-transparent border border-[#E3E3E3] p-3 rounded-md text-sm outline-none focus:border-[#36C0C9] placeholder:text-[#E3E3E3]"
            placeholder="Email"
          />

          {/* Phone & Organization */}
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <input
              className="flex-1 bg-transparent border border-[#E3E3E3] p-3 rounded-md text-sm outline-none focus:border-[#36C0C9] placeholder:text-[#E3E3E3]"
              placeholder="Phone Number"
            />
            <select className="flex-1 bg-transparent border border-[#E3E3E3] p-3 rounded-md text-sm outline-none focus:border-[#36C0C9] placeholder:text-[#E3E3E3]">
              <option className="text-black">Organization</option>
            </select>
          </div>

          {/* Password */}
          <div className="relative w-full">
            <input
              className="w-full bg-transparent border border-[#E3E3E3] p-3 pr-12 rounded-md text-sm outline-none focus:border-[#36C0C9] placeholder:text-[#E3E3E3]"
              placeholder="Password"
              type={show ? "text" : "password"}
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[#E3E3E3] hover:text-white"
              onClick={() => setShow(!show)}
            >
              {show ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </span>
          </div>

          {/* Confirm Password */}
          <div className="relative w-full">
            <input
              className="w-full bg-transparent border border-[#E3E3E3] p-3 pr-12 rounded-md text-sm outline-none focus:border-[#36C0C9] placeholder:text-[#E3E3E3]"
              placeholder="Confirm Password"
              type={show ? "text" : "password"}
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[#E3E3E3] hover:text-white"
              onClick={() => setShow(!show)}
            >
              {show ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </span>
          </div>

          {/* reCAPTCHA Style */}
          <div className="flex items-center gap-3 bg-white p-2 w-full sm:w-max rounded">
                  <input
      type="checkbox"
      className="appearance-none w-5 h-5 border-2 border-[#555555] rounded-sm checked:bg-[#36C0C9] checked:border-[#36C0C9] focus:outline-none 
                 checked:before:content-['✓'] checked:before:block checked:before:text-white checked:before:text-[10px] checked:before:text-center checked:before:leading-[1]"
    />
            <span className="text-sm text-gray-500">
              I'm not a <strong>robot</strong>
            </span>
            <img
              src="/images/robot.png"
              alt="not robot"
              className="w-10 sm:w-10"
            />
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center gap-2 text-sm">
            <label className="flex items-center cursor-pointer select-none relative">
          
              <input
      type="checkbox"
      className="appearance-none w-5 h-5 border-2 border-[#555555] rounded-sm checked:bg-[#36C0C9] checked:border-[#36C0C9] focus:outline-none 
                 checked:before:content-['✓'] checked:before:block checked:before:text-white checked:before:text-[10px] checked:before:text-center checked:before:leading-[1]"
    />
              <span className="ml-2 text-[#E3E3E3]">
                I agree to the{" "}
                <span className="underline cursor-pointer text-[#36C0C9]">
                  Terms & Conditions
                </span>
              </span>
            </label>
          </div>
          <button
  type="button"
  onClick={(e) => {
    e.preventDefault(); 
    navigate("/login"); 
  }}
  className="font-poppins cursor-pointer w-full bg-[#36C0C9] text-[18px] text-white p-3 rounded-md mt-4 font-semibold"
>
  Request Access
</button>


        </form>

        <p  onClick={() => navigate("/login")}
 className="mt-6 underline cursor-pointer text-[#36C0C9] text-[18px] font-poppins font-semibold text-center sm:text-left">
            
          Login
        </p>
      </div>

      {/* Right Image Section */}
      <div className="hidden md:block w-full h-full">
        <img
          src="/images/Request Access .png"
          className="w-full h-full object-cover"
          alt="Request Access"
        />
      </div>
    </div>
  );
}
