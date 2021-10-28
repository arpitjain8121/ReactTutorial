import React from "react";
import "./Ecom.css";
import CommonEcom from "./CommonEcom";
import Contact from './Contact'

const Ecommerce = () => {
    return (
        <>
            <section className="">
                <div className="et_pb_section et_pb_section_15_ecom et_pb_with_background et_pb_inner_shadow et_section_regular">
                    <div className="container">
                        <div className="row et_pb_row et_pb_row_2_ecom">
                            <div className="col-12 col-lg-6">
                                <div className="et_pb_module banner-sliderText">
                                    <div className="et_pb_text_inner">
                                        <p style={{ textAlign: "left" }}>Take your business online</p>
                                    </div>
                                </div>

                                <div className="et_pb_module et_pb_text et_pb_text_16_ecom et_pb_bg_layout_light et_pb_text_align_left">
                                    <div className="et_pb_text_inner">
                                        <h1>with QPAY eCommerce</h1>
                                    </div>
                                </div>

                                <div className="et_pb_button_module_wrapper et_pb_button_2_wrapper et_pb_module">
                                    <a className="et_pb_button et_pb_button_2 et_pb_bg_layout_light signupNowBtn" href="https://qpayi.com/" target="_blank" rel="noopener noreferrer">
                                        Sign up now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="et_pb_section et_pb_section_16_ecom et_section_regular">
                <div className="container">
                    <div className="row marginRows et_pb_row">
                        <div className="col-lg-12">
                            <div className="et_pb_with_border et_pb_module et_pb_text et_pb_text_17_ecom et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <h2>Our Solutions</h2>
                                </div>
                            </div>

                            <div className="et_pb_module et_pb_text et_pb_text_8_ecom et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <h2 className="sectionApps" style={{ textAlign: "left" }}>
                                        With the QPAY payments gateway, get your products and services out there for millions of customers to see, and grow your business.
                                    </h2>
                                </div>
                            </div>

                            <div className="et_pb_module et_pb_divider et_pb_divider_0 et_pb_divider_position_ et_pb_space">
                                <div className="et_pb_divider_internal"></div>
                            </div>
                        </div>
                    </div>

                    <div className="row et_pb_row">
                        <div className="col-12 col-lg-6">
                            <div className="et_pb_module et_pb_text et_pb_text_9_ecom et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <h2>Take full advantage of QPAY eCommerce Solutions</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row et_pb_row_5_ecom et_pb_row">
                        <div className="col-12 col-lg-4 col-sm-4">
                            <CommonEcom header="The Lowest Transaction Fee" icon="" />
                        </div>
                        <div className="col-12 col-lg-4 col-sm-4">
                            <CommonEcom header="No Collateral Required" icon="" />
                        </div>
                        <div className="col-12 col-lg-4 col-sm-4">
                            <CommonEcom header="Built-in e-Billing Solution" icon="i" />
                        </div>
                    </div>

                    <div className="row et_pb_row_6_ecom et_pb_row">
                        <div className="col-12 col-lg-4 col-sm-4">
                            <CommonEcom header="Payment Gateway Integration" icon="" />
                        </div>
                        <div className="col-12 col-lg-4 col-sm-4">
                            <CommonEcom header="Invoice and User Tracking" icon="" />
                        </div>
                        <div className="col-12 col-lg-4 col-sm-4">
                            <CommonEcom header="24/7 Sales Report" icon="" />
                        </div>
                    </div>
                </div>
            </div>

            <Contact />  
         </>
    );
};

export default Ecommerce;
