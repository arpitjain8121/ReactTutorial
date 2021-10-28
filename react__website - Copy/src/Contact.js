import React ,{useState} from 'react';

const Contact = () =>{

  const [data , setData] = useState({
    Fullname: "",
    Phone: "",
    Email: "",
    Message: ""

  })

  const InputEvent = (event) =>{
      const {name,value} = event.target;

      setData((preVal) =>{
        return {
            ...preVal,
            [name]:value,
        }
      })

  }
  const formSubmit = (e) =>{
    e.preventDefault();

    alert(`My name is ${data.Fullname}. My number is ${data.Phone}. My email is ${data.Email}. My message is ${data.Message}`)

  }



  return (
      <div>
          <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
          </div>

          <div className="container contact_div">
            <div className="row">
                <div className="col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                    <div className="mb-3">
                           <label className="form-label">FullName</label>
                          <input type="text" className="form-control" name="Fullname" value={data.Fullname} onChange={InputEvent} placeholder="Enter Your Name" />
                       </div>

                      



                       <div className="mb-3">
                           <label for="exampleFormControlInput2" className="form-label">Phone</label>
                          <input type="number" className="form-control" id="exampleFormControlInput2" name="Phone" value={data.Phone} onChange={InputEvent} placeholder="Enter Your Phone" />
                       </div>

                        <div className="mb-3">
                           <label for="exampleFormControlInput3" className="form-label">Email address</label>
                          <input type="email" className="form-control" id="exampleFormControlInput3" name="Email" value={data.Email} onChange={InputEvent} placeholder="name@example.com" />
                       </div>
                       <div className="mb-3">
                          <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="Message" value={data.Message} onChange={InputEvent}></textarea>
                      </div>

                      <div className="col-12">
                        <button className="btn btn-outline-primary" type="submit">Submit form</button>
                      </div>
                    </form>
                </div>
            </div>
          </div>
        </div>
    
  )
}

export default Contact;
