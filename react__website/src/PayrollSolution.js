import React from "react";
import "./Payroll.css";
import Support from "./images/support.png";
import BankCard from "./images/bank-card-1.png";
import MobileApp from "./images/mobile-apps-4.png";
import CommonPayroll from "./CommonPayroll";

const PayrollSolution = () => {
    return (
        <>
            <div className="et_pb_section et_pb_section_2 et_pb_with_background et_section_regular">
                <div className="container">
                    <div className="row et_pb_row et_pb_row_1_payroll">
                        <div className="col-12 col-lg-6">
                            <div className="et_pb_module et_pb_text et_pb_text_4 et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <p style={{ textAlign: "left" }}>
                                        <span style={{ color: "#ffffff" }}>Process your salary from</span>
                                    </p>
                                </div>
                            </div>

                            <div className="et_pb_module et_pb_text et_pb_text_5_payroll et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <h1>anywhere</h1> <h1>&amp; anytime</h1>
                                </div>
                            </div>

                            <div className="et_pb_button_module_wrapper et_pb_button_1_wrapper et_pb_module">
                                <a className="et_pb_button et_pb_button_1 et_pb_bg_layout_light" href="https://cards.qpayi.com" target="_blank" rel="noopener noreferrer">
                                    Sign up now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="et_pb_section et_pb_section_161 et_section_regular">
                <div className="container">
                    <div className="row et_pb_row et_pb_row_31">
                        <div className="col-lg-12 col-12">
                            <div className="et_pb_module et_pb_text et_pb_text_9_payroll et_pb_bg_layout_light">
                                <div className="et_pb_text_inner">
                                    <p>Take Control Over Your Payroll</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row et_pb_row et_pb_row_31">
                        <div className="col-12 col-lg-12">
                            <div className="et_pb_module et_pb_text et_pb_text_10 et_pb_bg_layout_light">
                                <div className="et_pb_text_inner">
                                    <p>QPAY does not charge any fees related to WPS. All WPS related fees are FREE of charge. All salary processing fees are FREE of charge</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row et_pb_row et_pb_row_5_payroll">
                        <div className="col-lg-4 col-12">
                            <CommonPayroll
                                columnClass="et_pb_text_11"
                                classStyle="et_pb_image_1_payroll"
                                imgsrc={Support}
                                imgsrcHeading="The fastest Salary Transfer solution in Qatar!"
                                imgsrcSubHeading="The QPAY Wage Protection System (WPS) platform is the fastest amd most robust solution for your business giving you the freedom to pay employee anytime for an easy web or mobile interface."
                            />
                        </div>

                        <div className="col-lg-4  col-12">
                            <CommonPayroll
                                columnClass="et_pb_text_13"
                                classStyle="et_pb_image_21"
                                imgsrc={BankCard}
                                imgsrcHeading="Your employees will get IBAN Salary Cards"
                                imgsrcSubHeading="Pay your employees directly and digitally to their personalize IBAN Salary Card; which can be used at the ATM, in-stores & online."
                            />
                        </div>

                        <div className="col-lg-4 col-12 changeText">
                            <CommonPayroll
                                columnClass="et_pb_text_15"
                                classStyle="et_pb_image_3"
                                imgsrc={MobileApp}
                                imgsrcHeading="Full control for your employees"
                                imgsrcSubHeading="Empowering your employees with a mobile app to track their transactions, and manage their finances."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PayrollSolution;
