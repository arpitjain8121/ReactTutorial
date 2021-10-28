import React from "react";
import $ from 'jquery'

class Contact extends React.Component {

    componentDidMount(){

        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
            $(".browserCheck").val("Mobile");
        } else {
            $(".browserCheck").val("Desktop");
        }

        $('.et_pb_contact_submit').click(function(e){
            let checkvalidate=true;

             if($("#et_pb_contact_name_0").val()==""){
                 $("#et_pb_contact_name_0").addClass('et_contact_error');
                     checkvalidate=false;
             }else{
                 $("#et_pb_contact_name_0").removeClass('et_contact_error');

             }

             if($("#et_pb_contact_phone_0").val()==""){
                 $("#et_pb_contact_phone_0").addClass('et_contact_error');
                 checkvalidate=false;
             }else{

                $("#et_pb_contact_phone_0").removeClass('et_contact_error');
            }

            if($("#et_pb_contact_phone_0").val().length !==8){
                $("#et_pb_contact_phone_0").addClass('et_contact_error');
                $('.et-pb-contact-message').html('Enter 8 Digit Phone Number').show().fadeOut(2000);
                 checkvalidate=false;

            }else{
                $("#et_pb_contact_phone_0").removeClass('et_contact_error'); 
                checkvalidate=true
            } 

            if($( "#enquiry_type option:selected" ).val()==0){
                $("#enquiry_type").addClass('et_contact_error');
                checkvalidate=false;

            }else{
                $("#enquiry_type").removeClass('et_contact_error')
            }

            if(checkvalidate==true){
                
                $.ajax({         
                    type: "POST",
                    url: "https://old.nexxo.com/qpay_wordpress/sendmail.php",
                    data: $("#submitform").serialize(),
                    success: function(){
                       SaveLead();
                    }})
                    return false;
            }else{
                    return false
            }
        })

        function SaveLead(){
            console.log('saveLead');
            if  ($("#enquiry_type").val()==="Payroll"){
                $(".PayrollCheck").val('true')
            }else{
                $(".PayrollCheck").val('false');
            }
            if  ($("#enquiry_type").val()==="POS"){
                $(".POSCheck").val('true');
            }else{
                $(".POSCheck").val('false');
            }
            if  ($("#enquiry_type").val()==="ECOM"){
                $(".ECOMCheck").val('true');
            }else{
                $(".ECOMCheck").val('false');
            }


            var SendInfo=[];
            var domain={"contactName":  $("#et_pb_contact_name_0").val(),
                        "phone" :   $("#et_pb_contact_phone_0").val(), 
                        "isdCode":  $('#prefix1').val(),
                         "interestedInWPS" :    $(".PayrollCheck").val(),
                          "interestedInEcomm" : $(".ECOMCheck").val(), 
                          "interestedInPOS" :   $(".POSCheck").val(), 
                          "utmSource":  $(".browserCheck").val(), 
                          "utmMedium" : "corporate-website"
                        }
                SendInfo.push(domain);console.log(SendInfo);            

                $.ajax({
                    type:"POST",
                    url:'https://card-inventory.qpayi.com/dist/captureexternallead',
                    data: JSON.stringify(domain),
                    contentType: "application/json",
                    cache: false,
                    success:function(data,status){
                        
                        $('.et-pb-contact-message').show();
                        $('.et-pb-contact-message').text("Thanks for your enquiry.We will get in touch with you shortly.")

                        setTimeout(function(){
                            $('.et-pb-contact-message').hide();
                        },5000)

                        $('#et_pb_contact_name_0').val(' ');
                        $('#et_pb_contact_phone_0').val(' ');
                        $('#enquiry_type option:selected').removeAttr('selected');
                        $('#enquiry_type').val([]);
                    }

                })








        }



    }

    handleFormChange(){
        
    }

    render(){

        return (
            <>
                <div className="et_pb_section et_pb_section_7_contact et_section_regular">
                    <div className="container">
                        <div id="#contactus" className="row">
                            <div className="col-lg-12">
                                <div className="et_pb_module et_pb_text et_pb_text_10 et_pb_bg_layout_light et_pb_text_align_left">
                                    <div className="et_pb_text_inner">
                                        <h1 id="contactus" className="contactus">
                                            Contact us
                                        </h1>
                                    </div>
                                </div>
    
                                <div id="" className="et_pb_module et_pb_contact_form_0 et_pb_contact_form_container clearfix">
                                    <div className="et-pb-contact-message"></div>
    
                                    <div className="et_pb_contact">
                                        <form className="et_pb_contact_form clearfix" method="post" name="submitform" id="submitform" action="contact.php">
                                            <p className="et_pb_contact_field et_pb_contact_field_0 et_pb_contact_field_half" data-id="name" data-type="input">
                                                <label htmlFor="et_pb_contact_name_0" className="et_pb_contact_form_label">
                                                    Name
                                                </label>
                                                <input
                                                    onChange={this.handleFormChange}
                                                    type="text"
                                                    id="et_pb_contact_name_0"
                                                    className="input checkInput"
                                                    defaultValue=""
                                                    name="et_pb_contact_name_0"
                                                    data-required_mark="required"
                                                    data-field_type="input"
                                                    data-original_id="name"
                                                    placeholder="Name"
                                                />
                                            </p>
                                            <p className="et_pb_contact_field et_pb_contact_field_1 et_pb_contact_field_half et_pb_contact_field_last" data-id="phone" data-type="input">
                                                <label htmlFor="et_pb_contact_phone_0" className="et_pb_contact_form_label">
                                                    Phone number
                                                </label>
                                                <input onChange={this.handleFormChange} id="prefix1" name="prefix" className="form-control" defaultValue="+974" placeholder="+974" style={{width: '27%', float: 'left', marginRight: '3%', pointerEvents: 'none'}} type="text" readOnly="" />
                                                <input
                                                    onChange={this.handleFormChange}
                                                    type="text"
                                                    id="et_pb_contact_phone_0"
                                                    className="input checkInput"
                                                    defaultValue=""
                                                    name="et_pb_contact_phone_0"
                                                    data-required_mark="required"
                                                    data-field_type="input"
                                                    data-original_id="phone"
                                                    placeholder="Phone number"
                                                    pattern=""
                                                    style={{width: '70%', float: 'left'}}
                                                />
                                            </p>
                                            <p className="et_pb_contact_field et_pb_contact_field_2 et_pb_contact_field_last" data-id="interestedin" data-type="checkbox">
                                                <label htmlFor="et_pb_contact_interestedin_0" className="et_pb_contact_form_label" style={{display: 'none'}}>
                                                    Interested In
                                                </label>
                                                <input readOnly defaultValue="" className="et_pb_checkbox_handle" type="hidden" name="et_pb_contact_interestedin_0" data-required_mark="not_required" data-field_type="checkbox" data-original_id="interestedin" />
                                                <span className="et_pb_contact_field_options_wrapper">
                                                    <span className="et_pb_contact_field_options_title">Interested In</span>
                                                    <select id="enquiry_type" name="enquiry_type" className="dropdown et_pb_contact_field_options_list checkInput" tabIndex="" aria-hidden="true">
                                                        <option value="0">--Select Product--</option>
                                                        <option value="Payroll">Payroll</option>
                                                        <option value="POS">POS</option>
                                                        <option value="ECOM">E-Commerce</option>
                                                    </select>
                                                </span>
                                            </p>
                                            <input readOnly  type="hidden" className="et_contact_proccess" name="et_pb_contactform_submit_0" /> 
                                            <input readOnly type="text" value="" name="et_pb_contactform_validate_0" className="et_pb_contactform_validate_field" />
                                            <div className="et_contact_bottom_container">
                                                <button type="submit" className="et_pb_contact_submit et_pb_button">
                                                    Submit
                                                </button>
                                            </div>
                                            <input readOnly  type="hidden" defaultValue="Desktop" name="" className="browserCheck" /> <input type="hidden" value="" name="" className="POSCheck" /> <input type="hidden" value="" name="" className="PayrollCheck" />
                                            <input readOnly  type="hidden" defaultValue="" name="" className="ECOMCheck" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );


    }
   
};

export default Contact;
