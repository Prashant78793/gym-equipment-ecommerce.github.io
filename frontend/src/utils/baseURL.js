const getBaseUrl = () => {
    // Prefer explicit env URL (works on Render or any host).
    // In development, fallback to localhost.
    // In production, default to Render backend URL if not set.
    if (import.meta.env.VITE_API_BASE) {
        return import.meta.env.VITE_API_BASE;
    }
    return import.meta.env.MODE === 'development'
        ? 'http://localhost:4000'
        : 'https://ai-based-gym-equipment.onrender.com';
}

export default getBaseUrl;
