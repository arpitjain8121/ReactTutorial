import React from "react";
const CommonFooterLinks = (props) => {
    return (
        <>
            <li className={`et_pb_social_icon et_pb_social_network_link ${props.classHeading}`}>
                <a href={props.links} className="icon et_pb_with_border" title={props.title} rel="noopener noreferrer" target="_blank">
                    <span className="et_pb_social_media_follow_network_name" aria-hidden="true">
                        Follow
                    </span>
                </a>
            </li>
        </>
    );
};

const CommonFooterText = (props) => {
    return (
        <>
            <div className="et_pb_module et_pb_text et_pb_text_53 et_pb_bg_layout_light et_pb_text_align_left">
                <div className="et_pb_text_inner">
                    <p className="rights" style={{ textAlign: "center" }}>
                        {props.text}
                    </p>
                </div>
            </div>
        </>
    );
};

export { CommonFooterLinks, CommonFooterText };
