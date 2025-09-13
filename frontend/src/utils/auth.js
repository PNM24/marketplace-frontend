// Salvează user-ul în localStorage
export function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

// Ia user-ul din localStorage
export function getUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

// Șterge user-ul (logout)
export function logoutUser() {
  localStorage.removeItem("user");
}