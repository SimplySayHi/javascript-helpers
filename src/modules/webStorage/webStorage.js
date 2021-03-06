
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

if( isAvailable ){
    // setObject METHOD FOR HTML STORAGE -> EG: localStorage.setObject( name, JSobj )
    // TO STORE A JS OBJECT ( AS JSON STRING ) INSIDE THE STORAGE
    Storage.prototype.setObject = function( key, value ) {
        this.setItem( key, JSON.stringify(value) );
    }

    // getObject METHOD FOR HTML STORAGE -> EG: localStorage.getObject( name )
    // RETURN THE DATA ( STORED AS JSON STRING ) AS JS OBJECT
    Storage.prototype.getObject = function( key ) {
        var value = this.getItem( key );
        return value && JSON.parse( value );
    }
}

export default { isAvailable }
