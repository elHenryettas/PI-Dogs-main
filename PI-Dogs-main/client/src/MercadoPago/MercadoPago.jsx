import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCToken } from "./fetchCToken";

const FORM_ID = "payment-form";

export default function Producto({ items }) {
  const { id } = useParams();

  const obtenerPreferencia = useCallback(async () => {
    const res = await fetchCToken(`comprar/${id}`, { items }, "POST");
    if (res.global) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
      script.setAttribute("data-preference-id", res.global);
      const form = document.getElementById(FORM_ID);
      form.appendChild(script);
    }
  }, [id, items]);

  useEffect(() => {
    obtenerPreferencia();
  }, [obtenerPreferencia]);

  return (
    <div>
      <p>HOLAA</p>
      <form id={FORM_ID} method="GET" />
    </div>
  );
}
