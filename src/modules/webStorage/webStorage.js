
const isAvailable = (() => {
    const mod = 'check_storage';
    try {
        localStorage.setItem(mod, mod);
        localStorage.removeItem(mod);
        return true;
    } catch(e) {
        return false;
    }
})();

const extend = () => {
    if( isAvailable ){
        // RETURN THE STORED DATA AS JS OBJECT
        Storage.prototype.getObject = function( key ) {
            const value = this.getItem( key );
            return value && JSON.parse( value );
        }

        // TO STORE A JS OBJECT INSIDE WEB STORAGE
        Storage.prototype.setObject = function( key, value ) {
            this.setItem( key, JSON.stringify(value) );
        }


        // TO MERGE A JS OBJECT INSIDE WEB STORAGE
        Storage.prototype.mergeItem = function( name, object ) {
            const objectClone = JSON.parse(JSON.stringify(object));
            const storageObj = this.getObject(name) || {};
            this.setItem( name, JSON.stringify({...storageObj, ...objectClone}) );
        }
    }
}

export default { extend, isAvailable }
