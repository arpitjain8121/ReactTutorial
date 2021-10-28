import React from "react";

const CommonPOS = (props) => {
    return (
        <>
            <div className="et_pb_module et_pb_image et_pb_image_2_pos">
                <span className="et_pb_image_wrap">
                    <img src={props.posimg} alt="" />
                </span>
            </div>

            <div className="et_pb_module et_pb_text et_pb_text_8_pos et_pb_bg_layout_light et_pb_text_align_left">
                <div className="et_pb_text_inner">
                    <p style={{ textAlign: "center", margin: "0" }}>{props.text1}</p>
                    <p style={{ textAlign: "center" }}>{props.text2}</p>
                </div>
            </div>
        </>
    );
};

export default CommonPOS;
