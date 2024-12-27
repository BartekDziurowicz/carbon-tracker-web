export const createBaseUrl = () => {
    if (window.location.host.includes('localhost')) {
        return 'http://localhost:8080/api';
    } else {
        return 'http://act-alb-627176500.eu-west-1.elb.amazonaws.com/api';
    }
};

export const getUserCredentials = () => {
    return JSON.parse(sessionStorage.getItem("userCredentials"));
}