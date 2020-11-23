import ReviewShipmentModel from './ReviewShipmentModel';

const {
    formField: {
        senderFirst,
        senderLast,
        senderPhone,
        senderAddress,
        senderCity,
        senderState,
        senderZip,
        senderCountry,
        weight,
        length,
        height,
        width,
        instructions,
        
        recipientFirst,
        recipientLast,
        recipientPhone,
        recipientAddress,
        recipientCity,
        recipientState,
        recipientZip,
        recipientCountry,
        status,
        deliveryNumber,
        date,
        clientID,
        driver
    }
} = ReviewShipmentModel;

export default {
    [senderFirst.name]: '',
    [senderLast.name]: '',
    [senderPhone.name]: '',
    [senderAddress.name]: '',
    [senderCity.name]: '',
    [senderState.name]: '',
    [senderCountry.name]: '',
    [senderZip.name]: '',
    [weight.name]: '',
    [length.name]: '',
    [height.name]: '',
    [width.name]: '',
    [instructions.name]: '',
    [recipientFirst.name]: '',
    [recipientLast.name]: '',
    [recipientPhone.name]: '',
    [recipientAddress.name]: '',
    [recipientCity.name]: '',
    [recipientState.name]: '',
    [recipientZip.name]: '',
    [recipientCountry.name]: '',
};
