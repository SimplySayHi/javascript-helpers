
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
        // TO STORE A JS OBJECT ( AS JSON STRING ) INSIDE WEB STORAGE
        Storage.prototype.setObject = function( key, value ) {
            this.setItem( key, JSON.stringify(value) );
        }

        // RETURN THE DATA ( STORED AS JSON STRING ) AS JS OBJECT
        Storage.prototype.getObject = function( key ) {
            const value = this.getItem( key );
            return value && JSON.parse( value );
        }
    }
}

export default { extend, isAvailable }
