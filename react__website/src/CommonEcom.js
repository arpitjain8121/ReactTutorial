import React from 'react'

const CommonEcom=(props) =>{
    return (
        <>
            <div className="et_pb_module et_pb_blurb et_pb_blurb_0 et_pb_bg_layout_light et_pb_text_align_left et_pb_blurb_position_top">
                <div className="et_pb_blurb_content centerImage">
                    <div className="et_pb_main_blurb_image">
                        <span className="et_pb_image_wrap"><span className="et-pb-icon et_pb_animation_top">{props.icon}</span></span>
                    </div>
                    <div className="et_pb_blurb_container">
                        <h4 className="et_pb_module_header">{props.header}</h4>
                        <div className="et_pb_blurb_description"></div>
                    </div>
                </div>
            </div>
        
        </>
    )


}

export default CommonEcom