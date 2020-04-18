
const getJSON = ( data ) => {
    try{
        const obj = JSON.parse(data);
        return obj;
    } catch(e){
        return false;
    }
};

const getXML = ( data ) => {
    try{
        const obj = new DOMParser().parseFromString(data, 'text/xml');
        return obj;
    } catch(e){
        return false;
    }
}

export const parseResponse = ( xhr ) => {
    const data = xhr.responseText;
    const isXML = xhr.responseXML !== null;
    return getJSON(data) || (isXML ? getXML(data) : data);
}
