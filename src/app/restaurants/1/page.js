import React from 'react';
import { Star, MapPin, Phone, Clock, Share2, BookmarkPlus, MessageSquare, Image } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';

const Page = () => {
    return (
        <div className="min-h-screen bg-white">
            {/*/!* Header *!/*/}
            {/*<header className="bg-[#FFF7E6] py-3 px-4">*/}
            {/*    <div className="max-w-7xl mx-auto flex justify-between items-center">*/}
            {/*        <h1 className="text-[#FF8C00] font-bold text-2xl">MUSTANG</h1>*/}
            {/*        <nav className="flex gap-6">*/}
            {/*            <a href="#" className="text-[#B8860B]">Add review</a>*/}
            {/*            <a href="#" className="text-[#B8860B]">Favorites</a>*/}
            {/*            <a href="#" className="text-[#B8860B]">Account</a>*/}
            {/*            <a href="#" className="text-[#B8860B]">Sign out</a>*/}
            {/*        </nav>*/}
            {/*    </div>*/}
            {/*</header>*/}
            <Header />

            <main className="max-w-7xl mx-auto px-4 py-6">
                {/* Restaurant Info Section */}
                <div className="flex gap-8 mb-8">
                    <div className="w-1/3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="https://down-vn.img.susercontent.com/vn-11134513-7ras8-m4g10fdgypb483@resize_ss576x330"
                            alt="KOI Thé - Vincom Center"
                            className="w-full h-64 object-cover rounded-lg"
                        />
                    </div>

                    <div className="w-2/3">
                        <h2 className="text-2xl font-bold mb-4">KOI Thé - Vincom Center</h2>

                        <div className="grid grid-cols-5 gap-4 mb-6">
                            <div className="text-center">
                                <div className="font-semibold">Venue</div>
                                <div className="text-[#FF8C00]">4.8/5</div>
                            </div>
                            <div className="text-center">
                                <div className="font-semibold">Service</div>
                                <div className="text-[#FF8C00]">4.8/5</div>
                            </div>
                            <div className="text-center">
                                <div className="font-semibold">Rated</div>
                                <div className="text-[#FF8C00]">4.8/5</div>
                            </div>
                            <div className="text-center">
                                <div className="font-semibold">Price</div>
                                <div className="text-[#FF8C00]">4.8/5</div>
                            </div>
                            <div className="text-center">
                                <div className="font-semibold">Comment</div>
                                <div className="text-[#FF8C00]">100</div>
                            </div>
                        </div>

                        <div className="space-y-2 text-gray-600">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5" />
                                <span>Tầng Hầm 3,  B3 - 08 - 09 Vincom Center, 72 Lê Thánh Tôn, P. Bến Nghé,  Quận 1, TP. HCM</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-5 h-5" />
                                <span>0641 234 567</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5" />
                                <span>09:30 - 22:00</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Comments Section */}
                <div className="grid grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Top Comments</h3>
                        <div className="space-y-4">
                            {[1, 2, 3].map((_, index) => (
                                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                                        <div>
                                            <div className="font-semibold">Username {index+1}</div>
                                            <div className="flex text-[#FF8C00]">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 fill-current" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600">This is a good place</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Leave your rate and comment here:</h3>
                        <div className="bg-[#FF4500] p-6 rounded-lg">
                            <div className="flex justify-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-8 h-8 text-white" />
                                ))}
                            </div>
                            <textarea
                                className="w-full h-32 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8C00]"
                                placeholder="Write your comment here..."
                            />
                            <div className="flex justify-end mt-2">
                                <button className="flex items-center gap-2 text-white">
                                    <Image className="w-5 h-5" />
                                    Add photo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Menu Section */}
                <section className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Menu</h3>
                    <div className="grid grid-cols-4 gap-4">
                        {[...Array(8)].map((_, index) => (
                            <div key={index} className="border rounded-lg p-2 relative">
                                <img
                                    src="https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwexyv938bfd98"
                                    alt="Menu item"
                                    className="w-full h-40 object-cover rounded"
                                />
                                <div className="absolute top-4 right-4 space-y-2">
                                    <button className="bg-white p-1 rounded-full shadow">
                                        <Share2 className="w-4 h-4" />
                                    </button>
                                    <button className="bg-white p-1 rounded-full shadow">
                                        <BookmarkPlus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Venue Section */}
                <section>
                    <h3 className="text-xl font-bold mb-4">Venue</h3>
                    <div className="grid grid-cols-3 gap-4">
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="rounded-lg overflow-hidden">
                                <img
                                    src="https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwexyvc4zmxlef"
                                    alt="Venue"
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Page;