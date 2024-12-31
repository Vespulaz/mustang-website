import React, { useState } from 'react';
import Button from './components/ui/Button';
import Input from './components/ui/Input';
import Label from './components/ui/Label';
import Checkbox from './components/ui/Checkbox';
import { Eye } from 'lucide-react';

function App() {
    const [isRegister, setIsRegister] = useState(false);

    return (
        <div className="flex min-h-screen">
            {/* Left side - Image */}
            <div className="relative w-1/2">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                        alt="Food background"
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-8 left-8 text-white text-2xl font-bold">
                        Delicious food, delicious me
                    </div>
                </div>
            </div>

            {/* Right side - Form */}
            <div className="w-1/2 p-8 flex flex-col">
                <div className="self-end flex gap-2">
                    <Button
                        variant={!isRegister ? "default" : "ghost"}
                        onClick={() => setIsRegister(false)}
                    >
                        Login
                    </Button>
                    <Button
                        variant={isRegister ? "default" : "ghost"}
                        onClick={() => setIsRegister(true)}
                    >
                        Register
                    </Button>
                </div>

                <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h1 className="text-2xl font-bold">Welcome!</h1>
                            {isRegister && (
                                <p className="text-gray-500">
                                    Create account to send feedback, set your favorite restaurants, and so on!
                                </p>
                            )}
                        </div>

                        <form className="space-y-4">
                            {isRegister && (
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input
                                        id="email"
                                        placeholder="Enter your Email Address"
                                        type="email"
                                    />
                                </div>
                            )}

                            <div className="space-y-2">
                                <Label htmlFor="username">Username</Label>
                                <Input
                                    id="username"
                                    placeholder="Enter your username"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="Enter your password"
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                                    >
                                        <Eye className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <Label htmlFor="terms">Remember me</Label>
                            </div>

                            <Button className="w-full">
                                {isRegister ? 'Create Account' : 'Sign In'}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
