import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./images/logo@2x.png";

const Navbar = () => {
    return (
        <>
            <div className="et_pb_section et_pb_section_0 et_pb_with_background et_pb_fullwidth_section et_section_regular">
                <div className="et_pb_module et_pb_fullwidth_menu et_pb_fullwidth_menu_0 et_pb_bg_layout_light et_pb_text_align_left et_dropdown_animation_fade">
                    <div className="container">
                        <div className="row et_pb_row clearfix">
                            <div className="et_mobile_nav_menu">
                                <div  className="mobile_nav closed">
                                   
                                    <span className="mobile_menu_bar"></span>
                                    <ul id="mobile_menu1" className="et_mobile_menu">
                                        <li className="et_pb_menu_page_id-27712 menu-item menu-item-type-custom menu-item-object-custom menu-item-27712">
                                            <NavLink to="/payroll-soution">payroll</NavLink>
                                        </li>

                                        <li className="et_pb_menu_page_id-27713 menu-item menu-item-type-custom menu-item-object-custom menu-item-27713">
                                            <NavLink to="/point-of-sale">POS</NavLink>
                                        </li>

                                        <li className="et_pb_menu_page_id-27714 menu-item menu-item-type-custom menu-item-object-custom menu-item-27714">
                                            <NavLink to="/e-commerce">ecommerce</NavLink>
                                        </li>

                                        <li className="et_pb_menu_page_id-27773 menu-item menu-item-type-custom menu-item-object-custom menu-item-27773">
                                            <a href="https://cards.qpayi.com/login">Sign in</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="et_pb_section et_pb_section_3_nav et_pb_inner_shadow et_section_regular">
                <div className="container">
                    <div className="row">
                        <div className="et_pb_column col-lg-2">
                            <div className="et_pb_module et_pb_image et_pb_image_0_nav">
                                <NavLink to="https://qpay.com.qa/">
                                    <span className="et_pb_image_wrap">
                                        <img src={logo} alt="" />
                                    </span>
                                </NavLink>
                            </div>
                        </div>
                        <div className="et_pb_column col-lg-2">
                            <div className="et_pb_module et_pb_text et_pb_text_1_nav et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <p style={{ textAlign: "center" }}>
                                        <NavLink to="/">Home</NavLink>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="et_pb_column col-lg-2">
                            <div className="et_pb_module et_pb_text et_pb_text_2_nav et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <p style={{ textAlign: "center" }}>
                                        <NavLink to="/point-of-sale">Point of Sale</NavLink>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="et_pb_column col-lg-2">
                            <div className="et_pb_module et_pb_text et_pb_text_3_nav et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <p style={{ textAlign: "center" }}>
                                        <NavLink to="/payroll-soution">Payroll</NavLink>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="et_pb_column col-lg-2">
                            <div className="et_pb_module et_pb_text et_pb_text_3_nav et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <p style={{ textAlign: "center" }}>
                                        <NavLink to="/e-commerce">e-Commerce</NavLink>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="et_pb_column col-lg-2">
                            <div className="et_pb_button_module_wrapper et_pb_button_1_wrapper et_pb_module">
                                <a className="et_pb_button et_pb_button_1_nav et_pb_bg_layout_light" href="https://cards.qpayi.com/login" target="_blank" rel="noopener noreferrer">
                                    Sign in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
