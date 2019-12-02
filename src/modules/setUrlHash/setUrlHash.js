
export default ( hashValue = '' ) => {
    if( hashValue && hashValue.trim() ){
        history.pushState( null, document.title, '#'+hashValue );
    }
}
