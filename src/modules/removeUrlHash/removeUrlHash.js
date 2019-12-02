
export default () => {
    let url = window.location.href,
        newUrl = url.substring(0, url.indexOf('#')) || url;

    history.replaceState(null, null, newUrl);
}
