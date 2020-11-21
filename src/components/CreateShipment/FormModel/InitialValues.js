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
        
        recipinetFirst,
        recipientLast,
        recipientPhone,
        recipientAddress,
        recipientCity,
        recipientState,
        recipientZip,
        recipientCountry,
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
    [senderZip.name]: 0,
    [weight.name]: 0,
    [length.name]: 0,
    [height.name]: 0,
    [width.name]: 0,
    [instructions.name]: '',
    [recipinetFirst.name]: '',
    [recipientLast.name]: '',
    [recipientPhone.name]: '',
    [recipientAddress.name]: '',
    [recipientCity.name]: '',
    [recipientState.name]: '',
    [recipientZip.name]: '',
    [recipientCountry.name]: '',
};
