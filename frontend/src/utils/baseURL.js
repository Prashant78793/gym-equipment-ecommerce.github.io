const getBaseUrl = () => {
    return import.meta.env.VITE_API_BASE || "https://ai-based-gym-equipment.onrender.com";
}

export default getBaseUrl;
