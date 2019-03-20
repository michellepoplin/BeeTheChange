import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';


class Paypal extends React.Component {
    render() {
        const onSuccess = (payment) => {
            console.log("The payment succeeded!", payment);
        }

        const onCancel = (data) => {
            console.log('The payment was cancelled!', data);
        }

        const onError = (err) => {
            console.log("Error!", err);
        }

        let env = 'sandbox';
        let currency = 'USD';
        let total = 1;
        const client = {
            sandbox: 'Ae1TuBIRdR2SR7tMD0tGtxUTfGYcP2ueaDqjW42PO6yhbB0A7Pee8rkoqOplZT1pXTqyuG80259SyKq'
        }
        return (
            <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
        );
    }
}

export default Paypal;