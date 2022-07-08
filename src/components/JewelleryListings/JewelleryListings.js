import React, { useEffect, useCallback, useMemo, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productsActions";
import BreadcrumbPage from "../BreadCrumb/BreadCrumb";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import jewellery from "../JewelleryListings/jewellery.jpg";
import Jewellery from '../Jewellery/Jewellery';

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState([]);
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
    console.log(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  
  // setFilter(updatedList);
  // console.log(updatedList, "naveen")
  // const filterProduct = (element) => {
    
  // }
  return (
    <div className="productlisting">
      <div className="container">
        <div class="aem-Grid aem-Grid--12">
          <div class="aem-GridColumn aem-GridColumn--default--4">
            <div className="productlisting__title">
              <h3>Jewellery</h3>
            </div>
          </div>
          <div class="aem-GridColumn aem-GridColumn--default--8">
            <div className="productlisting__image">
              <img src={jewellery} alt="Jewellery" />
            </div>
          </div>
        </div>
        <div className="breadcrumbslist">
          <div class="aem-Grid aem-Grid--12">
            <div class="aem-GridColumn aem-GridColumn--default--3">
              <BreadCrumb />
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--9">
              <div className="breadcrumbslist__filter">
                <p>4 Products</p>
                <div>
                  <select>
                    <option>Sort by Latest</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="productfilter">
          <div class="aem-Grid aem-Grid--12">
            <div class="aem-GridColumn aem-GridColumn--default--3">
              <div className="productfilters">
                <h4>Filters</h4>
                <p>Attribute</p>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <a href="#">Show more</a>
                <p>Attribute</p>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <p>Color</p>
                <button className="btn-1"></button>
                <button className="btn-2"></button>
                <button className="btn-3"></button>
                <button className="btn-4"></button>
                <button className="btn-5"></button>
                <button className="btn-6"></button>
                <button className="btn-7"></button>
                <button className="btn-8"></button>
                <button className="btn-9"></button>
                <button className="btn-10"></button>
                <p>Attribute</p>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <hr></hr>
              </div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--9">
              <Jewellery />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductPage;
