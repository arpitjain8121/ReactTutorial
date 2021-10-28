import React from "react";
import "./Home.css";
import { Common, HomeLinks, Certification, Solution, Testimonial, ContactLinks, ContactInfo, Carousel } from "./Common";
import { CommonFooterLinks } from "./CommonFooterLinks";
import Products from "./images/products.png";
import { NavLink } from "react-router-dom";

import appStore from "./images/appStore.png";
import googlePlay from "./images/google-play.png";

import iso from "./images/iso.png";
import pci from "./images/pci-vector-3.png";

import posmerchant from "./images/pos-merchant.jpg";
import payroll from "./images/payroll.jpg";

import one from "./images/1.jpg";
import two from "./images/2.jpg";

import videoImg1 from "./images/video-10.jpg";
import videoImg2 from "./images/video-9.jpg";
import videoImg3 from "./images/video-7.jpg";
import videoImg4 from "./images/video-4.jpg";
import videoImg5 from "./images/video-11.jpg";
import videoImg6 from "./images/video-6.jpg";
import videoImg7 from "./images/video-1.jpg";
import videoImg8 from "./images/video-8.jpg";
import videoImg9 from "./images/video-5.jpg";
import videoImg10 from "./images/video-2.jpg";
import videoImg11 from "./images/video-15.jpg";
import videoImg12 from "./images/video-3.jpg";

import $ from 'jquery' 

class Home extends React.Component {

    componentDidMount(){

        let mn_index = 0;
        let mn_visible = 4;
        let mn_end_index = 0;

    mn_carousel_init();

    function mn_next_slide(item) {
        mn_end_index = item.length / mn_visible - 1;
        if (mn_index < mn_end_index) {
            mn_index++;
            item.animate({ left: "-=100vw" }, 1000);
        }
    }

    function mn_previous_slide(item) {
        
        if (mn_index > 0) {
            mn_index--;
            item.animate({ left: "+=100vw" }, 1000);
        }
    }

    function mn_set_visible() {
        if ($(window).width() < 400) {
            mn_visible = 1;
        } else if ($(window).width() < 1025) {
            mn_visible = 3;
        }
    }

    function mn_carousel_init() {
        mn_set_visible();
        let item = $(".ds-carousel-module");
        $("#ds-arrow-right").click(function () {
            mn_next_slide(item);
        });
        $("#ds-arrow-left").click(function () {
            mn_previous_slide(item);
        });
        $(window).resize(function () {
            mn_set_visible();
            
        });
    }



    }

    


    render(){
    return (
        <>
            <div className="et_pb_with_border et_pb_section et_pb_section_1_home et_pb_with_background et_section_regular section_has_divider et_pb_bottom_divider">
                <div className="container">
                    <div className="row et_pb_row et_pb_row_0_home">
                        <div className="col-lg-12">
                            <div className="et_pb_module et_pb_text et_pb_text_0 et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <p>
                                        <span style={{ color: "#ffffff" }}>Qatar’s </span>
                                        <span>Largest</span>
                                        <span>
                                            <span style={{ color: "#ffffff" }}> Financial Technology Services Network for</span>{" "}
                                        </span>
                                        <span>
                                            Small <span style={{ color: "#ffffff" }}>&amp;</span> Med-Size
                                        </span>{" "}
                                        <span>Enterprises</span>
                                    </p>
                                </div>
                            </div>

                            <div className="et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_module">
                                <NavLink className="et_pb_button et_pb_button_0 et_pb_bg_layout_light" to="https://cards.qpayi.com/login">
                                    Sign in
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="et_pb_section et_pb_section_4_home et_pb_with_background et_section_regular section_has_divider et_pb_bottom_divider et_pb_top_divider">
                <div className="et_pb_top_inside_divider"></div>
                <div className="container">
                    <div className="row et_pb_row et_pb_row_2_home">
                        <div className="col-12">
                            <div className="et_pb_module et_pb_text et_pb_text_5 et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <h2 className="bestFinalcialTech">The Best Financial Technology (FINTECH) partner for your small business.</h2>
                                </div>
                            </div>

                            <div className="et_pb_module et_pb_text et_pb_text_6_home et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <p>QPAY brings you the best and most leading FINTECH solutions that help grow your small business and give you a better life, for you, your family and your employees.</p>
                                </div>
                            </div>

                            <div className="et_pb_module et_pb_image et_pb_image_1">
                                <span className="et_pb_image_wrap">
                                    <img src={pci} alt="" />
                                </span>
                            </div>

                            <div className="et_pb_module et_pb_text et_pb_text_7_home et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <p>PCI Certified</p>
                                </div>
                            </div>

                            <div className="et_pb_module et_pb_image et_pb_image_2">
                                <span className="et_pb_image_wrap">
                                    <img src={iso} alt="" />
                                </span>
                            </div>

                            <div className="et_pb_module et_pb_text et_pb_text_8_home et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <p>ISO Certified</p>
                                </div>
                            </div>

                            <div className="et_pb_module et_pb_text et_pb_text_9_home et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <h2 className="bestFinalcialTech">What we do</h2>
                                </div>
                            </div>

                            <div className="et_pb_module et_pb_text et_pb_text_10 et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <p>We help SME (small and mid-sized Enterprises) owners and operators grow their businesses through a network of low cost, secure and easy financial services apps.</p>
                                    <p>
                                        We are a group of highly talented professionals with combined 200+ years of experience in banking, technology, security, legal, compliance and financial services who work around the clock to deliver
                                        the best solutions customized for your small business needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <div className="et_pb_module et_pb_image et_pb_image_3">
                                <a href="https://apps.apple.com/qa/app/qpay-payroll/id1360204966" target="_blank" rel="noopener noreferrer">
                                    <span className="et_pb_image_wrap">
                                        <img src={appStore} alt="" />
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="et_pb_module et_pb_image et_pb_image_4">
                                <a href="https://play.google.com/store/apps/details?id=com.nexxuspay.payrolllite" target="_blank" rel="noopener noreferrer">
                                    <span className="et_pb_image_wrap">
                                        <img src={googlePlay} alt="" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="et_pb_with_border et_pb_section et_pb_section_5_home et_pb_with_background et_section_regular section_has_divider et_pb_bottom_divider et_pb_top_divider">
                <div className="container">
                    <div className="row et_pb_row et_pb_row_7_home">
                        <div className="col-lg-6">
                            <div className="et_pb_module et_pb_text et_pb_text_20_home et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <p>
                                        <span style={{ color: "#ffffff" }}>Qatar’s </span>
                                        <span>Largest</span>
                                        <span>
                                            <span style={{ color: "#ffffff" }}> Financial Technology Services Network for</span>{" "}
                                        </span>
                                        <span>
                                            Small <span style={{ color: "#ffffff" }}>&amp;</span> Med-Size
                                        </span>
                                        <span>Enterprises</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row et_pb_with_border et_pb_row et_pb_row_8_home et_pb_gutters2">
                        <div className="col-lg-4">
                            <Common number="14,008" numberName="Business Owners" />
                        </div>

                        <div className="col-lg-4">
                            <Common number="212,097" numberName="Cardholders" />
                        </div>

                        <div className="col-lg-4">
                            <Common number="65" numberName="Partners" />
                        </div>
                    </div>

                    <div className="row et_pb_row et_pb_row_9_home">
                        <div className="col-lg-6">
                            <div className="et_pb_module et_pb_text et_pb_text_24_home et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <h2 className="bestFinalcialTech">The Best Financial Technology (FINTECH) partner for your small business.</h2>
                                </div>
                            </div>

                            <div className="et_pb_module et_pb_text et_pb_text_25_home et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <div className="merchantTxtContainer">
                                        <div className="cell-xs-12"></div>
                                        <div className="cell-xs-12 cell-lg-8 offset-top-56">
                                            <p className="bestFinalcialTechPara">
                                                QPAY brings you the best and most leading FINTECH solutions that help grow your small business and give you a better life, for you, your family and your employees.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row appContainer hidden-sm"></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="et_pb_module et_pb_image et_pb_image_9_home">
                                <span className="et_pb_image_wrap">
                                    <img src={Products} alt="" />
                                </span>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <HomeLinks storelink="https://apps.apple.com/qa/app/qpay-payroll/id1360204966" storeImg={appStore} />
                                </div>

                                <div className="col-lg-6">
                                    <HomeLinks storelink="https://play.google.com/store/apps/details?id=com.nexxuspay.payrolllite" storeImg={googlePlay} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="et_pb_section et_pb_section_6_home et_pb_with_background et_section_regular section_has_divider et_pb_bottom_divider et_pb_top_divider">
                <div className="et_pb_top_inside_divider"></div>
                <div className="container">
                    <div className="row et_pb_row et_pb_row_11_home">
                        <div className="col-lg-8 col-12">
                            <div className="et_pb_module et_pb_text et_pb_text_26_home et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <h2 className="whatwedo">What We Do</h2>
                                    <p>We help SME (Small and Mid-sized Enterprise) owners and operators grow their businesses through a network of high-quality, low cost, secure and easy to use financial services solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row et_pb_row et_pb_row_12_home et_pb_row_3-5_1-5_1-5">
                        <div className="col-lg-8">
                            <div className="et_pb_module et_pb_text et_pb_text_27_home et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <h3 style={{ textAlign: "left" }}>
                                        We are a team of highly talented professionals with combined 200+ years of experience in banking, technology, security, legal, compliance and financial services. We work around the clock to deliver
                                        the best financial solutions customized for your small business needs.
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <Certification certImg={iso} certText="ISO Certified" certClass="et_pb_image_12_home" />
                        </div>
                        <div className="col-lg-2">
                            <Certification certImg={pci} certText="PCI Certified" certClass="et_pb_image_13_home" />
                        </div>
                    </div>

                    <div className="row et_pb_row et_pb_row_13_home">
                        <div className="col-lg-12">
                            <div className="et_pb_module et_pb_text et_pb_text_30_home et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <h2>Our Solutions</h2>
                                </div>
                            </div>

                            <div className="et_pb_module et_pb_text et_pb_text_31_home et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <h2>QPAY, Your “One-Stop-Shop” Financial Service Partner from payments to payroll, there are QPAY solutions for almost everything!</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row et_pb_row et_pb_row_14_home">
                        <div className="col-lg-6 col-sm-6 col-12">
                            <Solution solImg={posmerchant} solHead="Mr. Ameen" subHead="The first POS Solution that tracks cash payment, with full access to your sales reports anytime, and anywhere!" btnTxt="Schedule a Demo" />
                        </div>
                        <div className="col-lg-6 col-sm-6 col-12">
                            <Solution solImg={payroll} solHead="WPS Compliant Payroll" subHead="Qatar’s fastest salary payment system, allowing you to transfer salaries in less than 60 seconds." btnTxt="Sign up" />
                        </div>
                    </div>

                    <div className="row et_pb_with_border et_pb_row et_pb_row_15_home">
                        <div className="col-lg-6 col-sm-6 col-12">
                            <Solution solImg={one} solHead="eCommerce & e-Billing" subHead="Grow your business with an easy integrated solution with your existing billing and invoicing system." btnTxt="Contact Us" />
                        </div>

                        <div className="col-lg-6 col-sm-6 col-12">
                            <Solution solImg={two} solHead="IBAN Salary Card" subHead="Empower your employees with an IBAN salary card; to use at the ATM, in-stores & online." btnTxt="Learn more" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="et_pb_section et_pb_section_7_home et_section_regular">
                <div className="container">
                    <div className="row et_pb_row et_pb_row_16_home">
                        <div className="col-lg-12">
                            <div className="et_pb_module et_pb_text et_pb_text_40_home et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <h2>Our Community</h2>
                                </div>
                            </div>

                            <div className="et_pb_module et_pb_text et_pb_text_41_home et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <h2>Learn why 15,000 business owners choose Qpay</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="et_pb_section et_pb_section_8_home ds-carousel-section et_section_regular">
                <div className="et_pb_row et_pb_row_17 ds-carousel-row">
                    <div className="col-lg-12">
                        <Carousel youtubeLinks="https://youtu.be/BNhQ6pBuRbI" carouselImg={videoImg1} />

                        <Carousel youtubeLinks="https://youtu.be/gRLg4VHoHv8" carouselImg={videoImg2} />
                        <Carousel youtubeLinks="https://youtu.be/07JbNj9m7aQ" carouselImg={videoImg3} />

                        <Carousel youtubeLinks="https://youtu.be/5lYvnprzPX8" carouselImg={videoImg4} />

                        <Carousel youtubeLinks="https://youtu.be/kuxJ7ZwRIrA" carouselImg={videoImg5} />

                        <Carousel youtubeLinks="https://youtu.be/0-JFEW2KSaY" carouselImg={videoImg6} />
                        <Carousel youtubeLinks="https://youtu.be/PTEo-asJjbg" carouselImg={videoImg7} />
                        <Carousel youtubeLinks="https://youtu.be/_gaOG8mJV2U" carouselImg={videoImg8} />

                        <Carousel youtubeLinks="https://youtu.be/zTWb5kad6ik" carouselImg={videoImg9} />
                        <Carousel youtubeLinks="https://youtu.be/pfE8VPitXs8" carouselImg={videoImg10} />
                        <Carousel youtubeLinks="https://youtu.be/xd-GSVRAWg8" carouselImg={videoImg11} />
                        <Carousel youtubeLinks="https://youtu.be/414Ui8SsJWk" carouselImg={videoImg12} />
                    </div>
                </div>
            </div>

            <div className="et_pb_section et_pb_section_9_home et_section_regular">
                <div className="row et_pb_row et_pb_row_18_home">
                    <div className="col-lg-6">
                        <div className="et_pb_module et_pb_text et_pb_text_42_home ds-arrow-row et_pb_bg_layout_light et_pb_text_align_left">
                            <div className="et_pb_text_inner">
                                <input id="ds-arrow-left" type="button" value="8" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="et_pb_module et_pb_text et_pb_text_43_home ds-arrow-row et_pb_bg_layout_light et_pb_text_align_left">
                            <div className="et_pb_text_inner">
                                <input id="ds-arrow-right" type="button" value="9" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="et_pb_section et_pb_section_10_home et_section_regular">
                <div className="container">
                    <div className="row et_pb_row et_pb_row_19_home">
                        <div className="col-lg-4 col-sm-4 col-12">
                            <Testimonial potraitImg="img1_home" testText="Using Qpay Payroll App is easier than using Instagram." author="Nasser M." company="1upGaming" />
                        </div>

                        <div className="col-lg-4 col-sm-4 col-12">
                            <Testimonial potraitImg="img2_home" testText="Qpay provides a secure and reliable way to process salaries." author="Wael S." company="Saj Al Samak Restaurant" />
                        </div>

                        <div className="col-lg-4 col-sm-4 col-12">
                            <Testimonial potraitImg="img3_home" testText="A hassle-free service that helped grow my business." author="Hamad B." company="Flower49" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="et_pb_section et_pb_section_11_home et_pb_with_background et_section_regular section_has_divider et_pb_bottom_divider et_pb_top_divider">
                <div className="et_pb_top_inside_divider"></div>

                <div className="container">
                    <div className="row et_pb_with_border et_pb_row et_pb_row_20_home et_pb_gutters2">
                        <div className="col-lg-4 col-sm-12 col-12">
                            <div className="et_pb_module et_pb_text et_pb_text_44_home et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <p>Contact Us Anytime, 7 days a Week</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-12">
                            <div className="et_pb_module et_pb_text et_pb_text_45_home et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <p>Contact Info</p>
                                </div>
                            </div>

                            <ContactInfo contactInfoClass="arp_blurb_0 et_pb_blurb_0" contactInfoIcon="" contactInfoTxt="Suite 1&amp;4, Floor 1, Building Number 2 Grand Hamad Street, Doha,Qatar." />

                            <div className="arp_blurb_1 Set_pb_module et_pb_blurb et_pb_blurb_1 et_pb_bg_layout_light et_pb_text_align_left et_pb_blurb_position_left">
                                <div className="et_pb_blurb_content">
                                    <div className="et_pb_main_blurb_image">
                                        <a href="mailto:support@qpay.com.qa" rel="noopener noreferrer">
                                            <span className="et_pb_image_wrap">
                                                <span className="et-pb-icon et-waypoint et_pb_animation_top et-animated"></span>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="et_pb_blurb_container">
                                        <h4 className="et_pb_module_header">
                                            <a href="mailto:support@qpay.com.qa">support@qpay.com.qa</a>
                                        </h4>
                                        <div className="et_pb_blurb_description"></div>
                                    </div>
                                </div>
                            </div>

                            <ContactInfo contactInfoClass="arp_blurb_2 et_pb_blurb_2" contactInfoIcon="" contactInfoTxt="+974-40342600" />
                        </div>

                        <div className="col-lg-4 col-sm-6 col-12">
                            <div className="et_pb_module et_pb_text et_pb_text_46_home et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <p>Open Hours</p>
                                </div>
                            </div>

                            <ContactLinks iconClass="arp_blurb_3" dataIcon="" iconTxt="Sunday- Thursday" />

                            <ContactLinks iconClass="arp_blurb_4" dataIcon="}" iconTxt="8:30 AM - 4:30 PM" />

                            <ul className="et_pb_module et_pb_social_media_follow et_pb_social_media_follow_3 clearfix et_pb_bg_layout_light">
                                <CommonFooterLinks classHeading="et_pb_social_media_follow_network_15 et-social-facebook " title="Follow on Facebook" links="https://www.facebook.com/QpayQA/" />

                                <CommonFooterLinks classHeading="et_pb_social_media_follow_network_16 et-social-linkedin" title="Follow on LinkedIn" links="https://www.linkedin.com/company/2990645" />

                                <CommonFooterLinks classHeading="et_pb_social_media_follow_network_17 et-social-instagram" title="Follow on Instagram" links="https://www.instagram.com/qpayqa/" />

                                <CommonFooterLinks classHeading="et_pb_social_media_follow_network_18 et-social-youtube" title="Follow on Youtube" links="https://www.youtube.com/channel/UCyWBOnIZEDNrLqpkppqJ0nw" />

                                <CommonFooterLinks classHeading="et_pb_social_media_follow_network_19 et-social-twitter" title="Follow on Twitter" links="https://twitter.com/Qpay_QA" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    } 
};

export default Home;
