const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const API_BASE_URL = 'https://api.spotify.com/v1';

const CLIENT_ID = 'YOUR_CLIENT_ID_HERE';
const REDIRECT_URI = 'http://localhost:3000/callback';

// Scopes that we need to request authorization for
const SCOPES = ['user-read-private', 'playlist-read-private', 'user-library-read'];

/**
 * Get the access token from the URL hash after being redirected from Spotify
 * following a successful authorization request.
 */
export function getAccessTokenFromUrlHash() {
    const hash = window.location.hash;
    const match = hash.match(/access_token=([^&]*)/);
    return match?.[1] || null;
}

/**
 * Check if the user has already granted authorization to our app.
 */
export function isAuthorized() {
    return !!localStorage.getItem('spotify_access_token');
}

/**
 * Redirect the user to Spotify to start the authorization process.
 */
export function login() {
    const queryParams = {
        client_id: CLIENT_ID,
        response_type: 'token',
        redirect_uri: REDIRECT_URI,
        scope: SCOPES.join(' '),
    };
    const queryString = Object.entries(queryParams)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');
    window.location.href = `${AUTH_ENDPOINT}?${queryString}`;
}

/**
 * Get a user's playlists from the Spotify API.
 *
 * @param {string} accessToken - The user's access token.
 * @param {number} limit - The maximum number of playlists to retrieve (default 50).
 * @returns {Array} An array of playlist objects.
 */
export async function getPlaylists(accessToken, limit = 50) {
    const response = await fetch(`${API_BASE_URL}/me/playlists?limit=${limit}`, {
        headers: { 'Authorization': `Bearer ${accessToken}` },
    });
    const data = await response.json();
    return data.items;
}

/**
 * Get the user's profile information from the Spotify API.
 *
 * @param {string} accessToken - The user's access token.
 * @returns {Object} The user object.
 */
export async function getUserInfo(accessToken) {
    const response = await fetch(`${API_BASE_URL}/me`, {
        headers: { 'Authorization': `Bearer ${accessToken}` },
    });
    const data = await response.json();
    return data;
}
export const getPlaylistTracks = async (accessToken, playlistId) => {
    // your code here
};
