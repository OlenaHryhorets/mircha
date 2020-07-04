// Each Storage object provides access to a list of key/value pairs, which are sometimes called items.
//-length attribute returns number of pairs key/value
//-key(n) method must return the name of the nth key in the list
//-getItem(key) method must return the current value associated with the given key
//-setItem(key, value) method must add a new key/value pair, if it's not there, or set value to existing key,
//                     if it's not equal to those
//-removeItem(key) method must cause the key/value pair with the given key to be removed from the list
//                  associated with the object
//-clear() method must atomically cause the list associated with the object
//Each Storage object is associated with a list of key/value pairs when it is created, as defined in the
// sections on the sessionStorage and localStorage attributes
// These are two related mechanisms, similar to HTTP session cookies, for storing name-value pairs
// on the client side.
// localStorage and sessionStorage both extend Storage. There is no difference between them except for
// the intended "non-persistence" of sessionStorage. That is, the data stored in localStorage persists
// until explicitly deleted. Changes made are saved and available for all current and future visits to the site.
// Sites can add data to the session storage, and it will be accessible to any page
// from the same site opened in that window.

// Set the value in a local storage object
localStorage.setItem('name', "myName");

//Get the value from storage object
console.log(localStorage.getItem('name'));

//Delete the value from local storage object
//localStorage.removeItem(name); //Delete specifice obeject from local storage
//localStorage.clear(); //Delete all from local storage

//  When a new Document is created in a browsing context which has a top-level browsing context,
// the user agent must check to see if that top-level browsing context has a session storage area
// for that document's origin. If it does, then that is the Document's assigned session storage area.
// If it does not, a new storage area for that document's origin must be created, and then that is the
// Document's assigned session storage area. A Document's assigned storage area does not change during
// the lifetime of a Document
