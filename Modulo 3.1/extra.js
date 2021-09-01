const booking1 = { count: 3, price: 100, user: "John" };
const booking2 = { count: 5, price: 100 };

// Comparar dos reservas para mostrar la de mayor número de noches.

const reservaconmayornumeronoches = 
booking1.count > booking2.count ? booking1 : booking2;
