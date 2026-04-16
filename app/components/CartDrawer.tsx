"use client";

import { useEffect } from "react";

import { formatNaira, getCartTotal } from "@/app/lib/cart";
import { MinusIcon, PlusIcon, ShoppingBagIcon, TrashIcon, XIcon } from "@/app/lib/icons";

import { useCart } from "./CartProvider";

export function CartDrawer() {
  const { clearCart, isOpen, items, removeItem, setIsOpen, updateQuantity } = useCart();
  const subtotal = getCartTotal(items);
  const deliveryFee = items.length === 0 ? 1200 : subtotal > 15000 ? 0 : 1200;
  const total = subtotal + deliveryFee;
  const restaurantName = items[0]?.restaurantName;

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [setIsOpen]);

  return (
    <>
      <button
        type="button"
        aria-label="Close cart overlay"
        className={`cart-overlay fixed inset-0 bg-black/60 backdrop-blur-sm ${
          isOpen ? "cart-overlay-open pointer-events-auto" : "cart-overlay-closed pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />
      <aside
        aria-hidden={!isOpen}
        className={`cart-panel fixed right-0 top-0 bottom-0 z-[60] flex h-full w-full max-w-[400px] flex-col border-l border-[var(--border)] bg-[var(--bg-card)] ${
          isOpen ? "cart-panel-open" : "cart-panel-closed"
        }`}
      >
        <div className="border-b border-[var(--border)] px-6 py-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[18px] font-semibold text-[var(--cream)]">Your Order</p>
              {restaurantName ? (
                <p className="mt-1 text-[14px] text-[var(--muted)]">{restaurantName}</p>
              ) : null}
            </div>
            <button
              type="button"
              aria-label="Close cart"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-[var(--border)] p-2 text-[var(--muted)] transition-colors duration-300 hover:text-[var(--cream)]"
            >
              <XIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="scrollbar-subtle flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--bg-subtle)] text-[var(--muted)]">
                <ShoppingBagIcon className="h-7 w-7" />
              </div>
              <p className="mt-5 text-[16px] font-medium text-[var(--cream)]">Your cart is empty</p>
              <p className="mt-2 max-w-[220px] text-[14px] leading-6 text-[var(--muted)]">
                Add dishes from any restaurant to build your order.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 rounded-2xl border border-[var(--border)] bg-[var(--bg-subtle)] p-3">
                  <img
                    src={item.image}
                    alt={item.dishName}
                    className="h-14 w-14 rounded-xl object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[15px] font-medium text-[var(--cream)]">{item.dishName}</p>
                        <p className="mt-1 text-[14px] text-[var(--amber)]">{formatNaira(item.price)}</p>
                      </div>
                      <button
                        type="button"
                        aria-label={`Remove ${item.dishName}`}
                        onClick={() => removeItem(item.id)}
                        className="rounded-full p-1 text-[var(--muted)] transition-colors duration-300 hover:text-[var(--cream)]"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-2 py-1">
                        <button
                          type="button"
                          aria-label={`Decrease ${item.dishName} quantity`}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--cream)]"
                        >
                          <MinusIcon className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-5 text-center text-[14px] font-medium text-[var(--cream)]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label={`Increase ${item.dishName} quantity`}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--cream)]"
                        >
                          <PlusIcon className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="text-[14px] font-medium text-[var(--cream)]">
                        {formatNaira(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-[var(--border)] bg-[var(--bg-subtle)] px-6 py-6">
          <div className="space-y-3 text-[14px] text-[var(--muted)]">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>{formatNaira(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Delivery</span>
              <span>{deliveryFee === 0 ? "Free" : formatNaira(deliveryFee)}</span>
            </div>
          </div>
          <div className="my-4 h-px bg-[var(--border)]" />
          <div className="flex items-center justify-between text-[16px] font-semibold text-[var(--cream)]">
            <span>Total</span>
            <span className="text-[var(--amber)]">{formatNaira(total)}</span>
          </div>
          <button
            type="button"
            disabled={items.length === 0}
            onClick={() => {
              if (items.length === 0) {
                return;
              }

              window.alert("Order placed! This is a demo site.");
              clearCart();
              setIsOpen(false);
            }}
            className="mt-5 w-full rounded-xl bg-[var(--amber)] px-5 py-3.5 text-[14px] font-semibold uppercase tracking-[0.06em] text-[var(--bg-primary)] transition-colors duration-300 hover:bg-[var(--amber-hover)] disabled:cursor-not-allowed disabled:bg-[rgba(212,144,60,0.45)]"
          >
            Place Order
          </button>
          <p className="mt-3 text-center text-[11px] italic text-[var(--muted)]">
            Demo only — no real orders processed
          </p>
        </div>
      </aside>
    </>
  );
}
