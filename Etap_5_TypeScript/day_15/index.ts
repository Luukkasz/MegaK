import {Restaurant} from "./restaurant";
import {RestaurantsEventName, RestaurantTableCountChangeCallback} from "./types/restaurant-events";

const megaRestaurant = new Restaurant();
let tablesCount = 25;

megaRestaurant
    .on(RestaurantsEventName.Open, () => console.log('Otwarto restaurację.'))
    .on(RestaurantsEventName.Close, () => console.log('Zamknięto restaurację.'))
    .on(RestaurantsEventName.TableCountUpdate, ((change) => {
        tablesCount += change;
        console.log(`Dostepnych stolików ${tablesCount}.`);
    }) as RestaurantTableCountChangeCallback);

megaRestaurant.open(); // "Otwarto restaurację."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 24."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 23."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 22."

megaRestaurant.cancelTableReservation(); // "Dostepnych stolików: 23."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 22."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 21."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 20."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 19."

megaRestaurant.cleanupTable(); // "Dostepnych stolików: 20."

megaRestaurant.close(); // "Zamknięto restaurację."