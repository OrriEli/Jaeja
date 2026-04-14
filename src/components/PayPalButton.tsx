"use client";

import { useEffect } from "react";

export default function PayPalButton() {
  useEffect(() => {
    const containerId = "paypal-container-WA5TVL9RU725J";
    const container = document.getElementById(containerId);
    if (!container || container.childElementCount > 0) return;

    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=BAA0sna-k9IdV5EleIu36w0sLwGe27Hl_eILB1gRpC7ZWHYFXevFVpgghZ_EVuIrgIiaUZMi8xuPWdSsUs&components=hosted-buttons&disable-funding=venmo&currency=EUR";
    script.async = true;
    script.onload = () => {
      (window as Window & { paypal?: { HostedButtons: (opts: { hostedButtonId: string }) => { render: (selector: string) => void } } }).paypal
        ?.HostedButtons({ hostedButtonId: "WA5TVL9RU725J" })
        .render(`#${containerId}`);
    };
    document.body.appendChild(script);
  }, []);

  return <div id="paypal-container-WA5TVL9RU725J" className="flex justify-center" />;
}
