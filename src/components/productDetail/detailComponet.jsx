import React from "react";
import "./detailComponent.css";
import { NavLink } from "react-router-dom";
import RecommandItem from "../recommand-product/recommans";

class DetailComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="pro-detail-section">
        <div className="detailContainer">
          <div className="imgHero">
            <img src={this.props.img} />
          </div>

          <div className="info-container">
            <NavLink onClick={() => alert(this.props.id)}>
              <i class="fa-solid fa-cart-shopping myShoppingCart"></i>
            </NavLink>
            <div className="product-info">
              <h1>{this.props.item}</h1>
              <p>{this.props.i_discri}</p>
              <h4>{this.props.year}</h4>
              <h3>{this.props.price}</h3>
            </div>

            <div className="icons"></div>
          </div>
        </div>

        <div className="recommandations">
          <h1>Recommandation</h1>
          <div className="recommand-items">
          
            {this.props.data.map((item) => (
              <RecommandItem 
                data = {item}
              />
            ))}
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </section>
    );
  }
}

export default DetailComponent;
