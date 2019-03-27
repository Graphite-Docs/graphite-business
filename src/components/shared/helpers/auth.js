const blockstack = require('blockstack');

export function handleSignIn(e) {
    const origin = window.location.origin;
    e.preventDefault();
    blockstack.redirectToSignIn(origin, origin + '/manifest.json', ['store_write', 'publish_data'])
}