export default {
    formId: 'ReviewShipment',
    formField: {
        senderFirst: {
            name: 'senderFirst',
            label: 'First Name*',
            requiredErrorMsg: 'The first name of the sender is required'
        },
        senderLast: {
            name: 'senderLast',
            label: 'Last Name*',
            requiredErrorMsg: 'The last name of the sender is required'
        },
        senderPhone: {
            name: 'senderPhone',
            label: 'Phone Number*',
            requiredErrorMsg: 'The phone of the sender is required'
        },
        senderAddress: {
            name: 'senderAddress',
            label: 'Address Line*',
            requiredErrorMsg: 'The address of the sender is required'
        },
        senderCity: {
            name: 'senderCity',
            label: 'City*',
            requiredErrorMsg: 'City is required'
        },
        senderState: {
            name: 'senderState',
            label: 'State/Province/Region*',
            requiredErrorMsg: 'State/Province/Region is required'
        },
        senderZip: {
            name: 'senderZip',
            label: 'Zip Code*',
            requiredErrorMsg: 'Zip code is required',
            invalidErrorMsg: 'Zip code is not valid (e.g. 12345)'
        },
        senderCountry: {
            name: 'senderCountry',
            label: 'Country*',
            requiredErrorMsg: 'Country is required'
        },
        weight: {
            name: 'weight',
            label: 'Package Weight*',
            requiredErrorMsg: 'Package weight is required'
        },
        length: {
            name: 'length',
            label: 'Package Length*',
            requiredErrorMsg: 'Package length is required'
        },
        height: {
            name: 'height',
            label: 'Package Height*',
            requiredErrorMsg: 'Package height is required'
        },
        width: {
            name: 'width',
            label: 'Package Width*',
            requiredErrorMsg: 'Package width is required'
        },
        instructions: {
            name: 'instructions',
            label: 'Additional Instructions',
        },
        recipientFirst: {
            name: 'recipientFirst',
            label: 'First Name*',
            requiredErrorMsg: 'The first name of the recipient is required'
        },
        recipientLast: {
            name: 'recipientLast',
            label: 'Last Name*',
            requiredErrorMsg: 'The last name of the recipient is required'
        },
        recipientPhone: {
            name: 'recipientPhone',
            label: 'Phone Number*',
            requiredErrorMsg: 'The phone number of the recipient is required'
        },
        recipientAddress: {
            name: 'recipientAddress',
            label: 'Address Line*',
            requiredErrorMsg: 'The address of the recipient is required'
        },
        recipientCity: {
            name: 'recipientCity',
            label: 'City*',
            requiredErrorMsg: 'City is required'
        },
        recipientState: {
            name: 'recipientState',
            label: 'State/Province/Region*',
            requiredErrorMsg: 'State/Province/Region is required'
        },
        recipientZip: {
            name: 'recipientZip',
            label: 'Zip Code*',
            requiredErrorMsg: 'Zip code is required',
            invalidErrorMsg: 'Zip code is not valid (e.g. 12345)'
        },
        recipientCountry: {
            name: 'recipientCountry',
            label: 'Country*',
            requiredErrorMsg: 'Country is required'
        },
    }
};
