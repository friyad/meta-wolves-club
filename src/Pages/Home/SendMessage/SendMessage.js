import React, { useState } from 'react';

const SendMessage = () => {
    const [formData, setFormData] = useState({})

    const onChangeValue = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...formData }
        newData[field] = value;
        setFormData(newData)
    }


    // console.log(formData)



    return (
        <div className="mt-44">
            <h1 className="xs:text-3xl lg:text-5xl font-bold font-miedinger m-0">Send A Message</h1>
            <hr className="border-2 rounded-full w-52 mt-1 mx-auto" style={{ borderColor: '#7165FF' }} />



            <div className="xs:w-11/12 md:w-8/12 mx-auto mt-16">
                <form action="">
                    <div>
                        <div className="grid grid-cols-12 justify-center items-center">
                            <label
                                htmlFor="firstName"
                                className="xs:col-span-12 lg:col-span-3 2xl:col-span-2 text-left"
                            >First Name</label>
                            <input
                                onChange={onChangeValue}
                                type="text"
                                name="firstName"
                                id="firstName"
                                required
                                placeholder="Type your first name"
                                className="xs:col-span-12 lg:col-span-9 2xl:col-span-10 px-4 py-2 rounded-sm outline-none
                                text-black font-abel text-xl"
                            />
                        </div>

                        <div className="grid grid-cols-12 justify-center items-center mt-3">
                            <label
                                htmlFor="lastName"
                                className="xs:col-span-12 lg:col-span-3 2xl:col-span-2 text-left"
                            >Last Name</label>
                            <input
                                onChange={onChangeValue}
                                type="text"
                                name="lastName"
                                id="lastName"
                                required
                                placeholder="Type your last name"
                                className="xs:col-span-12 lg:col-span-9 2xl:col-span-10 px-4 py-2 rounded-sm outline-none
                                text-black font-abel text-xl"
                            />
                        </div>

                        <div className="grid grid-cols-12 justify-center items-center mt-3">
                            <label
                                className="xs:col-span-12 lg:col-span-3 2xl:col-span-2 self-start text-left"
                                htmlFor="message"
                            >Message</label>
                            <textarea
                                onChange={onChangeValue}
                                cols="30"
                                rows="4"
                                type="text"
                                name="message"
                                id="message"
                                required
                                placeholder="Type your message"
                                className="xs:col-span-12 lg:col-span-9 2xl:col-span-10 px-4 py-2 rounded-sm outline-none
                                text-black font-abel text-xl"
                            ></textarea>
                        </div>

                        <div className="grid grid-cols-12 justify-center items-center mt-5">
                            <label
                                htmlFor=""
                                className="xs:col-span-12 lg:col-span-3 2xl:col-span-2 text-left"
                            >PDF file</label>
                            <div className=" xs:col-span-12 lg:col-span-9 2xl:col-span-10 text-left">
                                <input
                                    onChange={onChangeValue}
                                    type="file"
                                    name="pdfAttachment"
                                    accept="application/pdf,application/vnd.ms-excel"
                                    id="pdfAttachment"
                                    required
                                    className="font-abel text-xl xs:w-44 md:w-auto"
                                />
                            </div>
                        </div>



                        <div className="col-span-12 text-left xs:mt-8 lg:mt-14 flex
                        xs:flex-col xs:space-y-5 lg:space-y-0 md:flex-row ">
                            <button
                                type="submit"
                                style={{ backgroundColor: '#FF06AA' }}
                                className="pinkBtnShadow px-14 py-2 rounded-full">
                                Submit
                            </button>

                            <button
                                onClick={() => setFormData({})}
                                type="reset"
                                style={{ border: '3px solid #FF06AA' }}
                                className="pinkBtnShadow px-8 py-2 rounded-full md:ml-4">
                                Reset
                            </button>
                        </div>


                    </div>
                </form>
            </div>

        </div>
    );
};

export default SendMessage;
