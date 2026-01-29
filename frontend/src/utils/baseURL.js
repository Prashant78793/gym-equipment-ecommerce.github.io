const getBaseUrl = () => {
    // Use environment variable for deployed backend, fallback to localhost for development
    return process.env.VITE_API_BASE || "http://localhost:4000"
}

export default getBaseUrl;
