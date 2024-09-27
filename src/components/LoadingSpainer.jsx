

const LoadingSpainer = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <svg
                className="w-12 h-12 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
            >
                <g fill="#f97316">
                    <circle cx="32" cy="32" r="6" />
                    <path d="M32 0C29.8 0 27.7 0.5 25.7 1.4C27.7 3.8 30.6 5.1 33.7 5.1C36.7 5.1 39.6 3.8 41.6 1.4C39.6 0.5 37.5 0 35.3 0H32Z" />
                    <path d="M32 64C34.2 64 36.3 63.5 38.3 62.6C36.3 60.2 33.4 58.9 30.3 58.9C27.3 58.9 24.4 60.2 22.4 62.6C24.4 63.5 26.5 64 28.7 64H32Z" />
                    <path d="M64 32C64 34.2 63.5 36.3 62.6 38.3C60.2 36.3 58.9 33.4 58.9 30.3C58.9 27.3 60.2 24.4 62.6 22.4C63.5 24.4 64 26.5 64 28.7H64Z" />
                    <path d="M0 32C0 29.8 0.5 27.7 1.4 25.7C3.8 27.7 5.1 30.6 5.1 33.7C5.1 36.7 3.8 39.6 1.4 41.6C0.5 39.6 0 37.5 0 35.3V32Z" />
                </g>
            </svg>
            <div className="text-xl font-semibold mt-4">Loading...</div>
        </div>
    );
};

export default LoadingSpainer;