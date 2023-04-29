import { React, useState } from "react";
import {useEffect } from "react";
import productservice from "../service/productservice";
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom"

const EditProduct = () => {
  const navigate = useNavigate();
  useEffect(() => {
    productservice
      .getProductById(id)
      .then((res) => {
        console.log("GETELEMENT BY ID"+res.data);
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);


  const [product, setProduct] = useState({
    id:"",
    productName: "",
    description: "",
    price: "",
    status: "",
  });

  const { id } = useParams();

  const [msg, setMsg] = useState("");

 

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductRegister = (e) => {
    e.preventDefault();

    productservice
      .editProduct(product)
      .then((res) => {
        setMsg("Product Edited Successfully");
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });

    // setProduct({
    //   productName: "",
    //   description: "",
    //   price: "",
    //   status: "",
    // });
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header fs-3 text-center">Edit Product</div>
            {msg && <p className="fs-4 text-center text-success">{msg}</p>}
            <div className="card-body">
              <form onSubmit={(e) => ProductRegister(e)}>
                <div className="mb-3">
                  <label>Enter Product Name</label>
                  <input
                    type="text"
                    name="productName"
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    value={product.productName}
                  ></input>
                </div>

                <div className="mb-3">
                  <label>Enter Description</label>
                  <input
                    type="text"
                    name="description"
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    value={product.description}
                  ></input>
                </div>

                <div className="mb-3">
                  <label>Enter Price</label>
                  <input
                    type="text"
                    name="price"
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    value={product.price}
                  ></input>
                </div>

                <div className="mb-3">
                  <label>Enter Status</label>
                  <input
                    type="text"
                    name="status"
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    value={product.status}
                  ></input>
                </div>
                <button className="btn btn-primary col-md-12">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
