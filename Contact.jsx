import React, { useState } from 'react'
const Contact = () => {
    const [data , setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: "",
    });
    const InputEvent =(event) => {
        const {name , value} = event.target;
        setData((preVal) =>{
                    return{
                        ...preVal,
                        [name] : value,
                    }
        })
    }
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`my name is ${data.fullname}. My mobile number is ${data.mobile} . my email-id is ${data.email} . And here is what i want to say ${data.msg}`);
    };
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact Us </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto  ">
                        <form onSubmit={formSubmit}>
                            <div className="form-group" >
                                <label for="exampleInputEmail1">Full Name</label>
                                <input type="text"
                                 className="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp"
                                name="fullname"
                                value={data.fullname}
                                onChange={InputEvent}
                                 placeholder="Your Full Name Please!!" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Phone Number</label>
                                <input type="number" 
                                className="form-control" 
                                id="exampleInputEmail1"
                                 aria-describedby="emailHelp"
                                 name="phone"
                                 value={data.phone}
                                 onChange={InputEvent}
                                  placeholder="Your Mobile Number Please !!" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email"
                                 className="form-control"
                                  id="exampleInputEmail1"
                                   aria-describedby="emailHelp"
                                   name="email"
                                   value={data.email}
                                   onChange={InputEvent}
                                    placeholder="Email Id" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea className="form-control" 
                                id="exampleFormControlTextarea1"
                                 rows="3" 
                                 name="msg"
                                 value={data.msg}
                                 onChange={InputEvent}
                                 placeholder="Drop Your Message here."></textarea>
                            </div>

                            <button type="submit"
                             className="btn btn-outline-primary my-2">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;
