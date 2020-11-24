# dTracker, A Tracking System For Online Success

We are currently designing a truck-tracking delivery system for small transportation businesses. Since many of these small companies rely on a paper-based system to manage their transactions, our plan is to create a web-based application that not only allows them to keep track of these transactions but also that facilitates an electronic bookkeeping of such records.

## Functionality

The team recently implemented the user platform of the application. This allows any user, or customer, to create an account to create and manage their shipments. That is to say, after going through the sign-up procress (no current charge at the moment), the user will have access to an account where he/she will be able to make request to the delivery companies in question&mdash;the company platform is in progress, not fully yet implemented.

In managing their transactions, or orders, the users will be able to cancel their orders (even if they are already in progress), see who the drivers who are the delivering their packages are, and have access to a `Track Shipment` feature, which is connected to a Google API. In essence, they wil be able to see where the driver's are at on the map and get an estimate of the ETA of their orders.

## Creating a Shipment

When creating a shipment, the users will have to input the information of the person who is sending the shipment (this means that even if I am the account owner, I could request a shipment in behalf of someone else), and then provide information about the recipient. After the two steps, which will be rendered in Material UI forms, a third step will proceed with a summary of the order. If everything checks out and the user want to place his/her order, a confirmation order (randomly generated using prime numbers), will be sent to the user and the order will be automatically displayed in the user's dashboard.

All this information will be linked to a database&mdash;we used Firebase as a third-party API&mdash;which will then be linked to the company side, once it is fully implemented.

## Other Caveats

Our application also supports a `Contact Form` feature, where any user (with or without an account) can send a message to the developers (to the company or companies in the future) by inputting his contact information. The application also supports an `auto-complete` feature for logged in users, allowing them to search for specific transactions order numbers (useful for users who have made many orders). The application is fully responsive and is being currently hosted using AWS Amplify: https://login.d2fd9n0vznwop8.amplifyapp.com/

## Future Work

As mentioned, the team is planning to implement a company-side platform for the application. This platform will actually be composed of two sub-platforms (management and drivers). The management platform will deal with everything related to handling transactions and the actual electronic bookkeepping (i.e., they will control the database). The driver platform is where drivers will get updates on where they have to go, what packages they have to deliver. They will also have access to a realtime tracking feature, their schedule for the day, and they will be able to communicate with clients.

## Technologies Used

|--|--|
|JavaScript Framework|React|
|CSS Framework|Material UI|
|Database API|Firebase|
|Deployment Architecture|AWS Amplify|
|Other APIs|Google Maps|
