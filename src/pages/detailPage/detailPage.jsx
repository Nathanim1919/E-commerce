import React from "react";
import { useParams } from "react-router-dom";
// import PhoneItem from "../../components/phone-item-component/phone-item";
import DetailComponent from "../../components/productDetail/detailComponet";

const DatailedPage = (props) => {
 
  const {id} = useParams()
  console.log(props.data)
  console.log(id);
  return (
    <>
      <DetailComponent
       data = {props.data}
       img = {props.data[id].imageUrl}
       item = {props.data[id].item}
       i_discri = {props.data[id].i_discri}
       price = {props.data[id].price}
       year = {props.data[id].year}
      />
    </>
  );
};

export default DatailedPage;
