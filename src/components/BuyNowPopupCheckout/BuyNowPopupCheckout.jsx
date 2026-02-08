import React, { useState, useEffect } from "react";
import axios from "axios";

const BuyNowPopupCheckout = ({ product }) => {
    const [showModal, setShowModal] = useState(false);
    const [checkoutHtml, setCheckoutHtml] = useState("<p>Loading checkout...</p>");
    const [couponCode, setCouponCode] = useState("");
    const [couponMsg, setCouponMsg] = useState("");
    const [showLogin, setShowLogin] = useState(false);
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [loginMsg, setLoginMsg] = useState("");
    const [authToken, setAuthToken] = useState(null);

    const openPopupCheckout = async () => {
        setShowModal(true);
        setCheckoutHtml("<p>Loading checkout...</p>");
        setCouponMsg("");

        try {
            // 1️⃣ Optional: Empty cart first
            await axios.post("/?wc-ajax=empty_cart");

            // 2️⃣ Add product to cart
            await axios.post(
                "/?wc-ajax=add_to_cart",
                new URLSearchParams({ product_id: product.id, quantity: 1 })
            );

            // 3️⃣ Load checkout form
            const res = await axios.get("/?wc-ajax=checkout");
            setCheckoutHtml(res.data);
            } catch (error) {
            console.error("Error loading checkout:", error);
            setCheckoutHtml("<p>Error loading checkout. Try again.</p>");
        }
    };

    const applyCoupon = async () => {
        try {
        const res = await axios.post(
            "/?wc-ajax=apply_coupon",
            new URLSearchParams({ coupon_code: couponCode })
        );
        if (res.data && res.data.messages) {
            setCouponMsg(res.data.messages[0].text);
        } else {
            setCouponMsg("Coupon applied!");
        }

        // Reload checkout totals
        const checkoutRes = await axios.get("/?wc-ajax=checkout");
        setCheckoutHtml(checkoutRes.data);
        } catch (err) {
        setCouponMsg("Invalid coupon");
        }
    };

    const handleSignIn = async () => {
        setLoginMsg("");
        try {
            const res = await axios.post("/wp-json/jwt-auth/v1/token", {
                username: loginEmail,
                password: loginPassword,
            });

            if (res.data && res.data.token) {
                setAuthToken(res.data.token);
                axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
                setLoginMsg("Signed in successfully");
            } else {
                setLoginMsg("Unable to sign in");
            }
        } catch (err) {
            setLoginMsg(err.response?.data?.message || "Login failed");
        }
    };

    useEffect(() => {
        if (authToken) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
        }
    }, [authToken]);

    return (
        <>
            <button
                type="button" 
                onClick={(e) => {
                    e.preventDefault(); 
                    openPopupCheckout();
                }}
                className="buy-now-btn custom-button custom-secondary-button button-small"
                >
                Buy Now
            </button>

            {showModal && (
                <div className="fixed-place-order">
                    <div className="popup-checkout-content">
                        <span className="popup-close" onClick={() => setShowModal(false)}>
                        ×
                        </span>

                        <div className="popup-custom-coupon" style={{ marginBottom: "20px" }}>
                            <input
                                type="text"
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value)}
                                placeholder="Enter coupon code"
                                style={{ padding: "6px 10px", width: "180px" }}
                            />
                            <button type="button" id="popup_apply_coupon" className="popup-coupon-btn" onClick={applyCoupon}>Apply Coupon</button>
                        </div>

                        {/* Sign-in area */}
                        <div style={{ marginBottom: 18 }}>
                            <button type="button" className="custom-button button-small" onClick={() => setShowLogin(!showLogin)}>
                                {showLogin ? 'Hide Sign In' : 'Sign In'}
                            </button>
                            {showLogin && (
                                <div style={{ marginTop: 10, display: 'flex', gap: 8, alignItems: 'center' }}>
                                    <input
                                        type="text"
                                        placeholder="Email or username"
                                        value={loginEmail}
                                        onChange={(e) => setLoginEmail(e.target.value)}
                                        style={{ padding: 8 }}
                                    />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={loginPassword}
                                        onChange={(e) => setLoginPassword(e.target.value)}
                                        style={{ padding: 8 }}
                                    />
                                    <button type="button" className="custom-button button-small" onClick={handleSignIn}>Sign In</button>
                                    {loginMsg && <span style={{ marginLeft: 8 }}>{loginMsg}</span>}
                                </div>
                            )}
                        </div>

                        <table className="popup-cart-table" style={{ width: "100%", marginBottom: "20px" }}
                        >
                            <thead>
                                <tr>
                                <th className="image-col">Image</th>
                                <th className="product-col">Product</th>
                                <th className="qty-col">Qty</th>
                                <th className="total-col">Total</th>
                                <th className="remove-col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr data-key="819f46e52c25763a55cc642422644317">
                                    <td className="image-col">
                                        <img
                                        width="35"
                                        height="40"
                                        src="https://wpdemo1.startup-bd.com/wp-content/uploads/2024/03/vg-d-eg-4.jpg"
                                        className="attachment-40x40 size-40x40"
                                        alt="ডিম ১ হালি"
                                        decoding="async"
                                        />
                                    </td>
                                    <td className="product-col">ডিম ১ হালি</td>
                                    <td className="qty-col">
                                        <div className="popup-qty-wrap">
                                        <button
                                            type="button"
                                            className="popup-qty-btn popup-qty-minus"
                                        >
                                            -
                                        </button>

                                        <input
                                            type="number"
                                            min="1"
                                            className="popup-cart-qty"
                                            defaultValue={2}
                                        />

                                        <button
                                            type="button"
                                            className="popup-qty-btn popup-qty-plus"
                                        >
                                            +
                                        </button>
                                        </div>
                                    </td>
                                    <td className="total-col">
                                        <span className="woocommerce-Price-amount amount">
                                        <bdi>
                                            <span className="woocommerce-Price-currencySymbol">
                                            ৳&nbsp;
                                            </span>
                                            3
                                        </bdi>
                                        </span>
                                    </td>
                                    <td className="remove-col">
                                        <button
                                        type="button"
                                        className="popup-cart-remove"
                                        title="Remove"
                                        style={{ color: "red" }}
                                        >
                                        ×
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="customer-details" id="customer_details">
                            <div className="woocommerce-billing-fields">
                                <h3>Billing details</h3>
                                <div className="woocommerce-billing-fields__field-wrapper">
                                    <div className="form-group">
                                        <label>Name*</label>
                                        <input type="text" className="input-text form-control" name="billing_name" id="billing_name" placeholder="" />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone*</label>
                                        <input type="text" className="input-text" name="billing_phone" id="billing_phone" placeholder="" />
                                    </div>
                                    <div className="form-group">
                                        <label>Address*</label>
                                        <input type="text" className="input-text" name="billing_address" id="billing_address" placeholder="" />
                                    </div>
                                    <div className="form-group">
                                        <label>Order Note</label>
                                        <textarea name="order_note" className="order_note"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="order_review" className="woocommerce-checkout-review-order">
                            <div className="wd-table-wrapper wd-manage-on">
                                <table className="shop_table woocommerce-checkout-review-order-table">
                                <thead>
                                    <tr>
                                    <th className="product-name">Product</th>
                                    <th className="product-total">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="cart_item">
                                    <td className="product-name">
                                        ডিম ১ হালি&nbsp;
                                        <strong className="product-quantity">×&nbsp;2</strong>
                                    </td>
                                    <td className="product-total">
                                        <span className="woocommerce-Price-amount amount">
                                        <bdi>
                                            <span className="woocommerce-Price-currencySymbol">৳&nbsp;</span>3
                                        </bdi>
                                        </span>
                                    </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr className="cart-subtotal">
                                    <th>Subtotal</th>
                                    <td>
                                        <span className="woocommerce-Price-amount amount">
                                        <bdi>
                                            <span className="woocommerce-Price-currencySymbol">৳&nbsp;</span>3
                                        </bdi>
                                        </span>
                                    </td>
                                    </tr>

                                    <tr className="woocommerce-shipping-totals shipping">
                                    <th>Shipping</th>
                                    <td data-title="Shipping">
                                        <ul id="shipping_method" className="woocommerce-shipping-methods">
                                        <li>
                                            <input
                                            type="radio"
                                            name="shipping_method[0]"
                                            id="shipping_method_0_flat_rate1"
                                            value="flat_rate:1"
                                            className="shipping_method"
                                            defaultChecked
                                            />
                                            <label htmlFor="shipping_method_0_flat_rate1">
                                            ঢাকার বাহিরে:{" "}
                                            <span className="woocommerce-Price-amount amount">
                                                <bdi>
                                                <span className="woocommerce-Price-currencySymbol">৳&nbsp;</span>120
                                                </bdi>
                                            </span>
                                            </label>
                                        </li>

                                        <li>
                                            <input
                                            type="radio"
                                            name="shipping_method[0]"
                                            id="shipping_method_0_flat_rate2"
                                            value="flat_rate:2"
                                            className="shipping_method"
                                            />
                                            <label htmlFor="shipping_method_0_flat_rate2">
                                            ঢাকার ভিতরে:{" "}
                                            <span className="woocommerce-Price-amount amount">
                                                <bdi>
                                                <span className="woocommerce-Price-currencySymbol">৳&nbsp;</span>70
                                                </bdi>
                                            </span>
                                            </label>
                                        </li>
                                        </ul>
                                    </td>
                                    </tr>

                                    <tr className="order-total">
                                    <th>Total</th>
                                    <td>
                                        <strong>
                                        <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                            <span className="woocommerce-Price-currencySymbol">৳&nbsp;</span>123
                                            </bdi>
                                        </span>
                                        </strong>
                                    </td>
                                    </tr>
                                </tfoot>
                                </table>
                            </div>
                            <div id="payment" className="woocommerce-checkout-payment">
                                <ul className="wc_payment_methods payment_methods methods">
                                <li className="wc_payment_method payment_method_cod">
                                    <input
                                    id="payment_method_cod"
                                    type="radio"
                                    className="input-radio"
                                    name="payment_method"
                                    value="cod"
                                    defaultChecked
                                    />
                                    <label htmlFor="payment_method_cod">Cash on delivery</label>

                                    <div className="payment_box payment_method_cod">
                                    <p>Pay with cash upon delivery.</p>
                                    </div>
                                </li>
                                </ul>

                                <div className="form-row place-order">
                                <div className="woocommerce-terms-and-conditions-wrapper">
                                    <div className="woocommerce-privacy-policy-text">
                                    <p>
                                        Your personal data will be used to process your order, support your
                                        experience throughout this website, and for other purposes described
                                        in our{" "}
                                        <a
                                        href="#"
                                        className="woocommerce-privacy-policy-link"
                                        target="_blank"
                                        rel="noreferrer"
                                        >
                                        privacy policy
                                        </a>
                                        .
                                    </p>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="button alt"
                                    name="woocommerce_checkout_place_order"
                                    id="place_order"
                                    value="Place Order"
                                >
                                    Place Order{" "}
                                    <span className="order-total-amount" style={{ fontWeight: 600 }}>
                                    ৳&nbsp;123
                                    </span>
                                </button>

                                <input
                                    type="hidden"
                                    id="woocommerce-process-checkout-nonce"
                                    name="woocommerce-process-checkout-nonce"
                                    value="0ae001e2b7"
                                />
                                <input
                                    type="hidden"
                                    name="_wp_http_referer"
                                    value="/?wc-ajax=popup_checkout_form"
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal CSS */}
            <style>{`
            /* Overlay */
            .fixed-place-order {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.65);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            font-family: "Inter", Arial, sans-serif;
            }

            /* Popup box */
            .popup-checkout-content {
            background: #fff;
            width: 700px;
            max-width: 95%;
            max-height: 90vh;
            overflow-y: auto;
            border-radius: 12px;
            padding: 22px;
            position: relative;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
            }

            /* Close */
            .popup-close {
            position: absolute;
            top: 14px;
            right: 18px;
            font-size: 26px;
            cursor: pointer;
            color: #999;
            }
            .popup-close:hover {
            color: #000;
            }

            /* Coupon */
            .popup-custom-coupon input {
                border-radius: 0px;
                font-size: 14px;
                max-width: 100% !important;
                background: transparent;
                padding: 20px !important;
                border: 1px solid #ddd !important;
            }
            /* Cart table */
            .popup-cart-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
            }

            .popup-cart-table th {
            background: #f8f8f8;
            font-size: 13px;
            font-weight: 600;
            padding: 10px;
            border-bottom: 1px solid #e5e5e5;
            }

            .popup-cart-table td {
            padding: 10px;
            font-size: 14px;
            border-bottom: 1px solid #eee;
            vertical-align: middle;
            }

            .popup-cart-table img {
            border-radius: 6px;
            }

            .product-col {
            text-align: left;
            font-weight: 500;
            }

            /* Quantity */
            .popup-qty-wrap {
            display: flex;
            align-items: center;
            justify-content: center;
            }

            .popup-qty-btn {
            width: 28px;
            height: 28px;
            border: 1px solid #ddd;
            background: #f5f5f5;
            cursor: pointer;
            font-size: 16px;
            }

            .popup-cart-qty {
            width: 45px;
            height: 28px;
            text-align: center;
            border: 1px solid #ddd;
            margin: 0 5px;
            border-radius: 4px;
            }

            /* Remove */
            .popup-cart-remove {
            border: none;
            background: none;
            font-size: 20px;
            cursor: pointer;
            }

            /* Billing */
            .customer-details {
            margin-top: 20px;
            }

            .woocommerce-billing-fields h3 {
            font-size: 18px;
            margin-bottom: 12px;
            }

            .form-group {
            margin-bottom: 12px;
            }

            .form-group label {
            display: block;
            font-size: 13px;
            margin-bottom: 4px;
            color: #555;
            }

            .form-group input,
            .form-group textarea {
            width: 100%;
            padding: 9px 12px;
            border-radius: 6px;
            border: 1px solid #ddd;
            font-size: 14px;
            }

            .form-group textarea {
            resize: vertical;
            }

            /* Order review */
            .woocommerce-checkout-review-order-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            }

            .woocommerce-checkout-review-order-table th,
            .woocommerce-checkout-review-order-table td {
            padding: 10px;
            border-bottom: 1px solid #eee;
            font-size: 14px;
            }

            .order-total th,
            .order-total td {
            font-size: 16px;
            font-weight: 700;
            }

            /* Shipping */
            .woocommerce-shipping-methods {
            list-style: none;
            padding: 0;
            margin: 0;
            }

            .woocommerce-shipping-methods li {
            margin-bottom: 6px;
            }

            /* Payment */
            .wc_payment_methods {
            list-style: none;
            padding: 0;
            margin-top: 15px;
            }

            .payment_box {
            background: #f8f8f8;
            padding: 10px;
            border-radius: 6px;
            margin-top: 8px;
            font-size: 13px;
            }

            /* Place order */
            .place-order {
            margin-top: 20px;
            }

            .place-order button {
            width: 100%;
            background: linear-gradient(135deg, #ff5722, #ff784e);
            color: #fff;
            border: none;
            padding: 14px;
            font-size: 16px;
            font-weight: 600;
            border-radius: 8px;
            cursor: pointer;
            }

            .place-order button:hover {
            opacity: 0.9;
            }

            .order-total-amount {
                margin-left: 6px;
            }

            .customer-details input {
                max-width: 100% !important;
                padding: 16px !important;
                height: 40px !important;
            }

            /* Mobile */
            @media (max-width: 600px) {
                .popup-checkout-content {
                    padding: 16px;
                }

                .popup-cart-table th,
                .popup-cart-table td {
                    font-size: 12px;
                }
            }
            `}</style>
        </>
    );
};

export default BuyNowPopupCheckout;
