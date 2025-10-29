import React from 'react';
import bgImg from '../assets/bgImage.png';
import logo from '../assets/logo.svg';
import group_user from '../assets/group_users.png';
import { Star } from 'lucide-react';
import { SignIn } from '@clerk/clerk-react';

const Login = () => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row relative">
            {/* Background Image */}
            <img
                src={bgImg}
                alt="Background"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />

            {/* Left Branding Section */}
            <div className="flex-1 flex flex-col items-start justify-between p-6 md:p-10 lg:pl-40 relative z-10">
                <img src={logo} alt="Logo" className="h-12 object-contain" />
                <div>
                    <div className="flex items-center gap-3 max-md:mt-10">
                        <img src={group_user} alt="Users" className="h-8 md:h-10" />
                        <div>
                            <div className="flex">
                                {Array(5)
                                    .fill(0)
                                    .map((_, i) => (
                                        <Star
                                            key={i}
                                            className="size-4 md:size-4.5 text-transparent fill-amber-500"
                                        />
                                    ))}
                            </div>
                            <p className="text-sm md:text-base text-gray-700">
                                Used by 100+ Students and Teachers
                            </p>
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-indigo-950 to-indigo-800 bg-clip-text text-transparent mt-6">
                        Students and Teachers Truly Connected
                    </h1>
                    <p className="text-xl md:text-2xl text-indigo-900 max-w-md mt-4">
                        Connect with your department community on Department Portal
                    </p>
                </div>
                <span className="md:h-10" />
            </div>

            {/* Right Login Form Section */}
            <div className="flex-1 flex items-center justify-center p-6 sm:p-10 relative z-10">
                <SignIn></SignIn>
            </div>
        </div>
    );
};

export default Login;
