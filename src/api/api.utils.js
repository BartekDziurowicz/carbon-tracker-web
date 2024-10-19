export const createBaseUrl = () => {
    if (window.location.host.includes('localhost')) {
        return 'http://localhost:8080';
    } else {
        return `${window.location.protocol}//${window.location.host}`;
    }
};