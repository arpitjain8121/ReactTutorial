import React from "react";

const CommonPayroll = (props) => {
    return (
        <>
            <div className={`et_pb_module et_pb_image ${props.classStyle}`}>
                <span className="et_pb_image_wrap">
                    <img src={props.imgsrc} alt="" />
                </span>
            </div>

            <div className={`et_pb_module et_pb_text et_pb_bg_layout_light et_pb_text_align_left ${props.columnClass}`}>
                <div className="et_pb_text_inner">
                    <p>
                        <span style={{ color: "#333333" }}>{props.imgsrcHeading}</span>
                    </p>
                </div>
            </div>

            <div className="et_pb_module et_pb_text et_pb_text_12 et_pb_bg_layout_light et_pb_text_align_left">
                <div className="et_pb_text_inner">
                    <p> {props.imgsrcSubHeading} </p>
                </div>
            </div>
        </>
    );
};

export default CommonPayroll;
