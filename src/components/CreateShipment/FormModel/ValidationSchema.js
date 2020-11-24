import * as Yup from 'yup';
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
        [senderCountry.name]: Yup.string().required(`${senderCountry.requiredErrorMsg}`),
        [weight.name]: Yup.string().required(`${weight.requiredErrorMsg}`),
        [length.name]: Yup.string().required(`${length.requiredErrorMsg}`),
        [height.name]: Yup.string().required(`${height.requiredErrorMsg}`),
        [width.name]: Yup.string().required(`${width.requiredErrorMsg}`),
    }),

    Yup.object().shape({
        [recipientFirst.name]: Yup.string().required(`${recipientFirst.requiredErrorMsg}`),
        [recipientLast.name]: Yup.string().required(`${recipientLast.requiredErrorMsg}`),
        [recipientPhone.name]: Yup.string().required(`${recipientPhone.requiredErrorMsg}`),
        [recipientAddress.name]: Yup.string().required(`${recipientAddress.requiredErrorMsg}`),
        [recipientCity.name]: Yup.string().nullable().required(`${recipientCity.requiredErrorMsg}`),
        [recipientState.name]: Yup.string().nullable().required(`${recipientState.requiredErrorMsg}`),
        [recipientZip.name]: Yup.string().required(`${recipientZip.requiredErrorMsg}`).test('len', `${recipientZip.invalidErrorMsg}`, val => val && val.length === 5),
        [recipientCountry.name]: Yup.string().required(`${recipientCountry.requiredErrorMsg}`),
    }),
];
