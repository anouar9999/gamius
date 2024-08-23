"use client"
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    setError(true); // For demonstration purposes
    router.push("/")
  };

  return (
    <div className="flex h-screen">
      {/* Left side - Background Image */}
      <div className="relative w-2/3		 overflow-hidden">
        <Image
          src="https://img.freepik.com/free-photo/cool-scene-with-futuristic-dragon-creature_23-2151201656.jpg"
          alt="Epic background"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900"></div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-1/3	 bg-gray-900 flex items-center justify-center">
        <div className="max-w-md w-full px-6">
        <h1 className="text-7xl font-custom text-white  text-center">GAMIUS</h1>

          <h2 className="text-2xl font-semibold text-white text-center pt-6  mb-8"></h2>
          {error && (
            <p className="text-red-500 text-sm mb-4">Oops! Wrong email or password!</p>
          )}
          <form onSubmit={handleSubmit} className="space-y-4 mt-4 ">
            <div className="relative">
              <input
                type="email"
                placeholder="hamed@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 cut-corners"
              />
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 cut-corners"
              />
              <button className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                {/* You can add an eye icon here for password visibility toggle */}
              </button>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm text-gray-300">Remember me</label>
            </div>
            <button type="submit" className="w-full bg-[#ff4700] text-white py-2 rounded hover:bg-orange-700 transition duration-200 cut-corners relative overflow-hidden">
              <span className="relative z-10">Login</span>
            </button>
          </form>
          <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
            <a href="#" className="hover:text-white">Forgot password?</a>
            <span>Or</span>
            <div className="flex space-x-2">
              {/* Add Google and Discord icons here */}
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-gray-400">
            Dont have an account? <a href="/auth/auth1/register" className="text-[#ff4700] hover:underline">Register now!</a>
          </p>
        </div>
      </div>
      <style jsx global>{`
        .cut-corners {
          clip-path: polygon(
            0 0,
            calc(100% - 10px) 0,
            100% 10px,
            100% 100%,
            10px 100%,
            0 calc(100% - 10px)
          );
        }
        input.cut-corners::before,
        input.cut-corners::after {
          content: '';
          position: absolute;
          background-color: #1f2937; /* Tailwind's gray-800 */
          z-index: 1;
        }
        input.cut-corners::before {
          top: 0;
          right: 0;
          width: 12px;
          height: 12px;
          transform: translateY(-1px) translateX(1px);
        }
        input.cut-corners::after {
          bottom: 0;
          left: 0;
          width: 12px;
          height: 12px;
          transform: translateY(1px) translateX(-1px);
        }
        button.cut-corners::before,
        button.cut-corners::after {
          content: '';
          position: absolute;
          background-color: #ea580c; /* Tailwind's orange-600 */
          z-index: 1;
        }
        button.cut-corners::before {
          top: 0;
          right: 0;
          width: 12px;
          height: 12px;
          transform: translateY(-1px) translateX(1px);
        }
        button.cut-corners::after {
          bottom: 0;
          left: 0;
          width: 12px;
          height: 12px;
          transform: translateY(1px) translateX(-1px);
        }
        button.cut-corners:hover::before,
        button.cut-corners:hover::after {
          background-color: #c2410c; /* Tailwind's orange-700 */
        }
      `}</style>
    </div>
  );
}