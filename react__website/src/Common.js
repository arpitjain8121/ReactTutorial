import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
    return (
        <>
            <div className="et_pb_module et_pb_text et_pb_text_21_home et_pb_bg_layout_light et_pb_text_align_left">
                <div className="et_pb_text_inner">
                    <h1 style={{ textAlign: "center" }}>
                        <span>{props.number}</span>
                    </h1>
                    <h1 style={{ textAlign: "center", visibility: "hidden" }}>1</h1>
                    <h1 style={{ textAlign: "center" }}></h1>
                    <h1 style={{ textAlign: "center" }}></h1>
                    <h3 style={{ textAlign: "center" }}>{props.numberName}</h3>
                </div>
            </div>
        </>
    );
};

const HomeLinks = (props) => {
    return (
        <>
            <div className="et_pb_module et_pb_image et_pb_image_10_home">
                <NavLink to={props.storelink} target="_blank">
                    <span className="et_pb_image_wrap">
                        <img src={props.storeImg} alt="" />
                    </span>
                </NavLink>
            </div>
        </>
    );
};

const Certification = (props) => {
    return (
        <>
            <div className={`et_pb_module et_pb_image ${props.certClass}`}>
                <span className="et_pb_image_wrap">
                    <img src={props.certImg} alt="" />
                </span>
            </div>

            <div className="et_pb_module et_pb_text et_pb_text_28 et_pb_bg_layout_light et_pb_text_align_left">
                <div className="et_pb_text_inner">{props.certText}</div>
            </div>
        </>
    );
};

const Solution = (props) => {
    return (
        <>
            <div className="et_pb_module et_pb_image et_pb_image_14_home">
                <span className="et_pb_image_wrap">
                    <img src={props.solImg} alt="" />
                </span>
            </div>

            <div className="et_pb_module et_pb_text et_pb_text_32_home et_pb_bg_layout_light et_pb_text_align_left">
                <div className="et_pb_text_inner">
                    <h3>
                        <span style={{ color: "#444444" }}>{props.solHead}</span>
                    </h3>
                    <p>{props.subHead}</p>
                </div>
            </div>

            <div className="et_pb_with_border et_pb_module et_pb_text et_pb_text_33_home et_clickable et_pb_bg_layout_dark et_pb_text_align_center">
                <div className="et_pb_text_inner">
                    <p>{props.btnTxt}</p>
                </div>
            </div>
        </>
    );
};

const Testimonial = (props) => {
    return (
        <>
            <div className="et_pb_module et_pb_testimonial et_pb_testimonial_0 clearfix et_pb_bg_layout_light et_pb_text_align_left et_pb_icon_off">
                <div className={`et_pb_testimonial_portrait ${props.potraitImg}`} style={{ paddingBottom: "0px", width: "90px", height: "90px" }}></div>
                <div className="et_pb_testimonial_description" style={{ marginLeft: "0px" }}>
                    <div className="et_pb_testimonial_description_inner">
                        <p>{props.testText}</p>
                        <span className="et_pb_testimonial_author">{props.author}</span>
                        <p className="et_pb_testimonial_meta">
                            <span className="et_pb_testimonial_company">{props.company}</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

const ContactInfo = (props) => {
    return (
        <>
            <div className={`${props.contactInfoClass} et_pb_module et_pb_blurb et_pb_blurb_0 et_pb_bg_layout_light et_pb_text_align_left et_pb_blurb_position_left`}>
                <div className="et_pb_blurb_content">
                    <div className="et_pb_main_blurb_image">
                        <span className="et_pb_image_wrap">
                            <span className="et-pb-icon et-waypoint et_pb_animation_top et-animated">{props.contactInfoIcon}</span>
                        </span>
                    </div>
                    <div className="et_pb_blurb_container">
                        <h4 className="et_pb_module_header">{props.contactInfoTxt}</h4>
                        <div className="et_pb_blurb_description"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

const ContactLinks = (props) => {
    return (
        <>
            <div className={` ${props.iconClass} et_pb_module et_pb_blurb et_pb_blurb_3 et_pb_bg_layout_light et_pb_text_align_left et_pb_blurb_position_left`}>
                <div className="et_pb_blurb_content">
                    <div className="et_pb_main_blurb_image">
                        <span className="et_pb_image_wrap">
                            <span className="et-pb-icon et-waypoint et_pb_animation_top et-animated">{props.dataIcon}</span>
                        </span>
                    </div>
                    <div className="et_pb_blurb_container">
                        <h4 className="et_pb_module_header">{props.iconTxt}</h4>
                        <div className="et_pb_blurb_description"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

const Carousel = (props) => {
    return (
        <>
            <div className="et_pb_module et_pb_image et_pb_image_18 ds-carousel-module et_pb_has_overlay">
                <a href={props.youtubeLinks} rel="noopener noreferrer">
                    <span className="et_pb_image_wrap">
                        <img src={props.carouselImg} alt="" />
                        <span className="et_overlay et_pb_inline_icon" data-icon="I"></span>
                    </span>
                </a>
            </div>
        </>
    );
};

export { Common, HomeLinks, Certification, Solution, Testimonial, ContactLinks, ContactInfo, Carousel };
