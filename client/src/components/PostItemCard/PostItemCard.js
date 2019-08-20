import React from "react";
import { Input, PriceInput, TextArea, FormBtn } from "../../components/Form/Form"
import UploadImage from "../../components/UploadImage/UploadImage";
import "./style.css"


export default function(props) {


    return (
            <div className="card-background">


                    <h1>Post an Item</h1>
                    <br></br>
                    <form>
                        <Input
                            value={props.state.item_name}
                            onChange={props.handleInputChange}
                            name="item_name"
                            placeholder="Please Enter a Name for your Item"
                        />

                        <TextArea
                            value={props.state.item_description}
                            onChange={props.handleInputChange}
                            name="item_description"
                            placeholder="Please Enter an Item Description"
                        />

                        <PriceInput
                            value={props.state.price}
                            onChange={props.handleInputChange}
                            name="price"
                            placeholder="Please Enter a Price"
                        />

                        <UploadImage handleImageChange={props.handleImageChange} />
                        <FormBtn onClick={props.handleFormSubmit} onClick={props.handleImageUpload}>
                            Submit
                        </FormBtn>


                    </form>


            </div>
    )
}