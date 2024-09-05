export const cleanLink = (url) => {
    let u = url.replace("https://", "");
    u = u.replace("http://", "");
    u = u.replace("www.", "");
    u = u.replace(/\/$/, "");
    return u;
};