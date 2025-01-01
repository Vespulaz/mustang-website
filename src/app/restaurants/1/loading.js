export default function Loading() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="relative h-64 md:h-96 bg-gray-200 animate-pulse" />

            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-md p-6 -mt-16 relative">
                    <div className="h-8 bg-gray-200 rounded w-3/4 mb-4 animate-pulse" />

                    <div className="space-y-4">
                        <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
                        <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
                        <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />

                        <div className="mt-6">
                            <div className="h-6 bg-gray-200 rounded w-1/4 mb-2 animate-pulse" />
                            <div className="h-20 bg-gray-200 rounded w-full animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}