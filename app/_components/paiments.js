"use client";

import CheckoutPage from "../_components/CheckoutPage";
import convertToSubcurrency from "../_lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function PaymentModal({ onClose, amount, cabinName }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header avec bouton de fermeture */}
        <div className="bg-gradient-to-tr from-yellow-400 to-orange-950 text-white p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">Paiement</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 text-2xl"
          >
            &times;
          </button>
        </div>

        {/* Contenu avec défilement */}
        <div className="p-6 overflow-y-auto flex-1">
          <div className="mb-10">
            <h1 className="text-4xl text-black mb-2">{cabinName}</h1>
            <h2 className="text-2xl text-black">
              has requested
              <span className="font-bold"> ${amount}</span>
            </h2>
          </div>

          <Elements
            stripe={stripePromise}
            options={{
              mode: "payment",
              amount: convertToSubcurrency(amount),
              currency: "usd",
            }}
          >
            <CheckoutPage amount={amount} />
          </Elements>
        </div>
      </div>
    </div>
  );
}
