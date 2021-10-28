import React, {useEffect} from "react";
import qpayLogo from "./images/qpay-logo.png";
import { NavLink } from "react-router-dom";
import { CommonFooterLinks, CommonFooterText } from "./CommonFooterLinks";
import $ from 'jquery'

const Footer = () => {
    useEffect(() => {
       
        let d = new Date();
        let n = d.getFullYear(); 
        $("#copyright-year").text(n);
        
    })

    return (
        <>
            <footer className="footer_part">
                <div className="container">
                    <div className="row justify-content-between et_pb_row">
                        <div className="col-lg-3 col-6 col-sm-6">
                            <div className="logo_image">
                                <a href="https://qpay.com.qa" rel="noopener noreferrer">
                                    <img src={qpayLogo} alt="" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-6 col-sm-6">
                            <div className="single_footer_part">
                                <p>
                                    <strong>
                                        <span style={{ color: "#fff" }}>Solution</span>
                                    </strong>
                                </p>

                                <p>
                                    <span style={{ color: "#fff" }}>
                                        <NavLink to="/payroll-soution" style={{ color: "#fff" }}>
                                            Payroll
                                        </NavLink>
                                    </span>
                                    <br />
                                    <span style={{ color: "#fff" }}>
                                        <NavLink to="/point-of-sale" style={{ color: "#fff" }}>
                                            POS
                                        </NavLink>
                                    </span>
                                    <br />
                                    <span style={{ color: "#fff" }}>
                                        <NavLink to="/e-commerce" style={{ color: "#fff" }}>
                                            e-Commerce
                                        </NavLink>
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-4">
                            <div className="single_footer_part marginModule Del_Mob">
                                <p>
                                    <strong>
                                        <span style={{ color: "#fff" }}>Address</span>
                                    </strong>
                                </p>
                            </div>

                            <div className="Del_Mob marginModule et_pb_module et_pb_blurb et_pb_blurb_10 et_pb_bg_layout_light et_pb_text_align_left et_pb_blurb_position_left">
                                <div className="et_pb_blurb_content">
                                    <div className="et_pb_main_blurb_image">
                                        <span className="et_pb_image_wrap">
                                            <span className="et-pb-icon et-waypoint et_pb_animation_top et-animated"></span>
                                        </span>
                                    </div>
                                    <div className="et_pb_blurb_container">
                                        <h4 className="et_pb_module_header">Suite 1&amp;4, Floor 1, Building Number 2 Grand Hamad Street, Doha,Qatar.</h4>
                                        <div className="et_pb_blurb_description"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="Del_Mob et_pb_module et_pb_blurb et_pb_blurb_10 et_pb_bg_layout_light et_pb_text_align_left et_pb_blurb_position_left">
                                <div className="et_pb_blurb_content">
                                    <div className="et_pb_main_blurb_image">
                                        <span className="et_pb_image_wrap">
                                            <span className="et-pb-icon et-waypoint et_pb_animation_top et-animated"></span>
                                        </span>
                                    </div>
                                    <div className="et_pb_blurb_container">
                                        <h4 className="et_pb_module_header">+974-40342600</h4>
                                        <div className="et_pb_blurb_description"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="Del_Mob et_pb_module et_pb_blurb et_pb_blurb_10 et_pb_bg_layout_light et_pb_text_align_left et_pb_blurb_position_left">
                                <div className="et_pb_blurb_content">
                                    <div className="et_pb_main_blurb_image">
                                        <a href="mailto:support@qpay.com.qa">
                                            <span className="et_pb_image_wrap">
                                                <span className="et-pb-icon et-waypoint et_pb_animation_top et-animated"></span>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="et_pb_blurb_container">
                                        <h4 className="et_pb_module_header">
                                            <a href="mailto:support@qpay.com.qa" rel="noopener noreferrer">
                                                support@qpay.com.qa
                                            </a>
                                        </h4>
                                        <div className="et_pb_blurb_description"></div>
                                    </div>
                                </div>
                            </div>

                            <ul className="footersocialLinks et_pb_module et_pb_social_media_follow et_pb_social_media_follow_3 clearfix et_pb_bg_layout_light">
                                <CommonFooterLinks classHeading="et_pb_social_media_follow_network_15 et-social-facebook " title="Follow on Facebook" links="https://www.facebook.com/QpayQA/" />

                                <CommonFooterLinks classHeading="et_pb_social_media_follow_network_16 et-social-linkedin" title="Follow on LinkedIn" links="https://www.linkedin.com/company/2990645" />

                                <CommonFooterLinks classHeading="et_pb_social_media_follow_network_17 et-social-instagram" title="Follow on Instagram" links="https://www.instagram.com/qpayqa/" />

                                <CommonFooterLinks classHeading="et_pb_social_media_follow_network_18 et-social-youtube" title="Follow on Youtube" links="https://www.youtube.com/channel/UCyWBOnIZEDNrLqpkppqJ0nw" />

                                <CommonFooterLinks classHeading="et_pb_social_media_follow_network_19 et-social-twitter" title="Follow on Twitter" links="https://twitter.com/Qpay_QA" />
                            </ul>
                        </div>
                        <div className="col-lg-3"></div>
                    </div>

                    <div className="row et_pb_row_26">
                        <div className="col-lg-12 col-sm-12">
                            <CommonFooterText text="All QPAY Salary cards and other GPR issuing solutions are developed in partnership with Mastercard International and with United Bank Limited (Qatar) with approval from the Qatar Central Bank." />

                            <CommonFooterText text=" All QPAY POS, e-commerce, e-billing and other Acquiring solutions are developed in partnership with VISA, Mastercard, AMEX, and with Qatar Islamic Bank (Qatar) with approval from the Qatar Central Bank." />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="et_pb_module et_pb_text et_pb_text_56 et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <p className="rights" style={{ textAlign: "center" }}>
                                        © <span id="copyright-year">2020</span> QPAY International LLC.{" "}
                                        <NavLink to="/privacy-policy">
                                        Privacy policy
                                        </NavLink>
                                    </p>
                                    <p className="rights"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
