export const createBaseUrl = () => {
    if (window.location.host.includes('localhost')) {
        return 'http://localhost:8080';
    } else {
        return process.env.REACT_APP_BACKEND_URL;
    }
};

export const getUserCredentials = () => {
    return JSON.parse(sessionStorage.getItem("userCredentials"));
}