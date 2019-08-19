import React from "react";
import { Input, PriceInput, TextArea, FormBtn } from "../../components/Form/Form"
import UploadImage from "../../components/UploadImage/UploadImage";


export default function(props) {


    return (
                <div>




                    <h1>Post an Item</h1>
                    <br></br>
                    <form>
                        <Input
                            value={this.state.item_name}
                            onChange={this.handleInputChange}
                            name="item_name"
                            placeholder="Please Enter a Name for your Item"
                        />

                        <TextArea
                            value={this.state.item_description}
                            onChange={this.handleInputChange}
                            name="item_description"
                            placeholder="Please Enter an Item Description"
                        />

                        <PriceInput
                            value={this.state.price}
                            onChange={this.handleInputChange}
                            name="price"
                            placeholder="Please Enter a Price"
                        />

                        <UploadImage handleImageChange={this.handleImageChange} />
                        <FormBtn onClick={this.handleFormSubmit} onClick={this.handleImageUpload}>
                            Submit
                        </FormBtn>


                    </form>


    </div>
    )
}