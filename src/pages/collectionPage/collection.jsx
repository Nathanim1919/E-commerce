import React from "react";
import "./collection.css";
import DATA from "../../components/datas";
import CollectionItem from "../../components/collection-item-component/collection-item";

const Collection = () => {
  return (
    <div className="coll-page">
      <div
        className="collection-banner"
        style={{
          backgroundImage:
            `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4)),url(${DATA[1].items[5].imageUrl})`,
        }}
      >
      </div>

      <h1>Available Products</h1>

      <div className="collections">
        {DATA.map((data) => {
          return (
            <div className="allCollctio">
              <CollectionItem data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Collection;
