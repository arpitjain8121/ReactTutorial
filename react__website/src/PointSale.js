import React from "react";
import "./POS.css";
import signature from "./images/signature_comp.gif";
import CommonPOS from "./CommonPOS";
import BankCard from "./images/bank-card-1.png";
import Cash from "./images/cash.png";
import Credit from "./images/credit-store.png";
import Receipt from "./images/receipts.png";
import Support from "./images/support-1.png";
import Safe from "./images/safe-1.png";
import Mobile from "./images/mobile-apps-4.png";
import TopUp from "./images/topup.png";
import Contact from "./Contact";
const PointSale = () => {
    return (
        <>
            <div className="et_pb_with_border et_pb_section et_pb_section_4_pos et_pb_with_background et_section_regular section_has_divider et_pb_bottom_divider">
                <div className="container">
                    <div className="row et_pb_row et_pb_row_1_pos">
                        <div className="col-12">
                            <div className="et_pb_module et_pb_text et_pb_text_4_pos et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <h3>Maximize your profile and generate more revenue with the</h3>
                                </div>
                            </div>

                            <div className="et_pb_module et_pb_text et_pb_text_5_pos et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <h1 className="boost">New Profit Booster</h1>
                                </div>
                            </div>

                            <div className="et_pb_button_module_wrapper et_pb_button_1_wrapper et_pb_module">
                                <a className="et_pb_button et_pb_button_1 et_pb_bg_layout_light" href="https://cards.qpayi.com/login" rel="noopener noreferrer">
                                    Sign in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="et_pb_section et_pb_section_5_pos et_pb_with_background et_pb_fullwidth_section et_section_regular"></div>

            <div className="et_pb_section et_pb_section_6_pos et_pb_with_background et_section_regular">
                <div className="container">
                    <div className="row et_pb_row et_pb_row_2_pos">
                        <div className="col-lg-6 col-12">
                            <div className="et_pb_module et_pb_text et_pb_text_6_pos et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <p style={{ textAlign: "left" }}>
                                        <span style={{ color: "#353535" }}>Maximize your profit and </span>
                                        <span style={{ color: "#353535", fontSize: "18px" }}>generate</span>
                                    </p>
                                    <p style={{ textAlign: "left" }}>
                                        <span style={{ color: "#353535", fontSize: "18px" }}> more revenue with the </span>
                                    </p>
                                </div>
                            </div>

                            <div className="et_pb_module et_pb_text et_pb_text_7_pos et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <h1>New Profit</h1>
                                    <h1>Booster</h1>
                                </div>
                            </div>

                            <div className="et_pb_button_module_wrapper et_pb_button_2_wrapper et_pb_module">
                                <a className="et_pb_button et_pb_button_2_pos et_pb_bg_layout_light" href="#contactus" rel="noopener noreferrer">
                                    Schedule a Demo
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12">
                            <div className="et_pb_module et_pb_image et_pb_image_1_pos">
                                <span className="et_pb_image_wrap">
                                    <img src={signature} alt="" />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="row et_pb_row et_pb_row_3_pos et_pb_row_4col">
                        <div className="col-lg-3">
                            <CommonPOS posimg={BankCard} text1="Accept Card" text2="Payments" />
                        </div>

                        <div className="col-lg-3">
                            <CommonPOS posimg={Cash} text1="Track Cash" text2="Transactions" />
                        </div>

                        <div className="col-lg-3">
                            <CommonPOS posimg={Credit} text1="Manage Store" text2="Credits" />
                        </div>

                        <div className="col-lg-3">
                            <CommonPOS posimg={Receipt} text1="Access Daily" text2="Reports" />
                        </div>
                    </div>

                    <div className="row et_pb_row et_pb_row_3_pos et_pb_row_4col">
                        <div className="col-lg-3">
                            <CommonPOS posimg={Mobile} text1="Customizable" text2="Apps" />
                        </div>

                        <div className="col-lg-3">
                            <CommonPOS posimg={TopUp} text1="Mobile Phones" text2="Top-ups" />
                        </div>

                        <div className="col-lg-3">
                            <CommonPOS posimg={Safe} text1="Keep your" text2="Records Safe" />
                        </div>

                        <div className="col-lg-3">
                            <CommonPOS posimg={Support} text1="24/7 Customer" text2="Support" />
                        </div>
                    </div>
                </div>
            </div>

            <Contact />
        </>
    );
};

export default PointSale;
