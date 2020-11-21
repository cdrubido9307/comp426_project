import * as Yup from 'yup';
import moment from 'moment';
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

export default [
    Yup.object().shape({
        [senderFirst.name]: Yup.string().required(`${senderFirst.requiredErrorMsg}`),
        [senderLast.name]: Yup.string().required(`${senderLast.requiredErrorMsg}`),
        [senderPhone.name]: Yup.string().required(`${senderPhone.requiredErrorMsg}`),
        [senderAddress.name]: Yup.string().required(`${senderAddress.requiredErrorMsg}`),
        [senderCity.name]: Yup.string().nullable().required(`${senderCity.requiredErrorMsg}`),
        [senderState.name]: Yup.string().nullable().required(`${senderState.requiredErrorMsg}`),
        [senderZip.name]: Yup.string().required(`${senderZip.requiredErrorMsg}`).test('len', `${senderZip.invalidErrorMsg}`, val => val && val.length === 5),
        [senderCountry.name]: Yup.string().nullable().required(`${senderCountry.requiredErrorMsg}`)
    }),
];
