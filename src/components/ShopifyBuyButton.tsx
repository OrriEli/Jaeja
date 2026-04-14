"use client";

import { useEffect } from "react";

const COMPONENT_ID = "product-component-1776194751309";

export default function ShopifyBuyButton() {
  useEffect(() => {
    // Prevent double-init from React StrictMode
    const node = document.getElementById(COMPONENT_ID);
    if (!node || node.childElementCount > 0) return;

    const w = window as Window & {
      ShopifyBuy?: {
        UI?: { onReady: (client: unknown) => Promise<{ createComponent: (type: string, opts: unknown) => void }> };
        buildClient: (opts: { domain: string; storefrontAccessToken: string }) => unknown;
      };
    };

    function ShopifyBuyInit() {
      const client = w.ShopifyBuy!.buildClient({
        domain: "qhaa4v-p5.myshopify.com",
        storefrontAccessToken: "eda7893a3a60ad640e94df55ed79e0a0",
      });
      w.ShopifyBuy!.UI!.onReady(client).then(function (ui) {
        ui.createComponent("product", {
          id: "8549049827520",
          node: document.getElementById(COMPONENT_ID),
          moneyFormat: "%7B%7Bamount_no_decimals%7D%7D%20kr",
          options: {
            product: {
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0",
                    "margin-bottom": "50px",
                  },
                  "text-align": "left",
                },
                title: { "font-size": "26px" },
                button: {
                  "font-family": "Nunito, sans-serif",
                  "font-weight": "bold",
                  ":hover": { "background-color": "#4ea44f" },
                  "background-color": "#57b658",
                  ":focus": { "background-color": "#4ea44f" },
                  "border-radius": "13px",
                  "padding-left": "40px",
                  "padding-right": "40px",
                },
                price: { "font-size": "18px" },
                compareAt: { "font-size": "15.3px" },
                unitPrice: { "font-size": "15.3px" },
              },
              buttonDestination: "checkout",
              layout: "horizontal",
              contents: { img: false, imgWithCarousel: true, description: false },
              width: "100%",
              text: { button: "Kaupa núna" },
            },
            productSet: {
              styles: {
                products: {
                  "@media (min-width: 601px)": { "margin-left": "-20px" },
                },
              },
            },
            modalProduct: {
              contents: {
                img: false,
                imgWithCarousel: true,
                button: false,
                buttonWithQuantity: true,
              },
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px",
                  },
                },
                button: {
                  "font-family": "Nunito, sans-serif",
                  "font-weight": "bold",
                  ":hover": { "background-color": "#4ea44f" },
                  "background-color": "#57b658",
                  ":focus": { "background-color": "#4ea44f" },
                  "border-radius": "13px",
                  "padding-left": "40px",
                  "padding-right": "40px",
                },
                title: {
                  "font-family": "Nunito, sans-serif",
                  "font-weight": "bold",
                  "font-size": "26px",
                  color: "#2B2D42",
                },
                price: {
                  "font-family": "Nunito, sans-serif",
                  "font-weight": "normal",
                  "font-size": "18px",
                  color: "#2B2D42",
                },
              },
              text: { button: "Bæta í körfu" },
            },
            option: {},
            cart: {
              styles: {
                button: {
                  "font-family": "Nunito, sans-serif",
                  "font-weight": "bold",
                  ":hover": { "background-color": "#4ea44f" },
                  "background-color": "#57b658",
                  ":focus": { "background-color": "#4ea44f" },
                  "border-radius": "13px",
                },
              },
              text: { total: "Samtals", button: "Greiða" },
            },
            toggle: {
              styles: {
                toggle: {
                  "font-family": "Nunito, sans-serif",
                  "font-weight": "bold",
                  "background-color": "#57b658",
                  ":hover": { "background-color": "#4ea44f" },
                  ":focus": { "background-color": "#4ea44f" },
                },
              },
            },
          },
        });
      });
    }

    function loadScript() {
      const script = document.createElement("script");
      script.async = true;
      script.src =
        "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
      (document.head || document.body).appendChild(script);
      script.onload = ShopifyBuyInit;
    }

    if (w.ShopifyBuy) {
      if (w.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
  }, []);

  return <div id={COMPONENT_ID} />;
}
