import React from 'react';
import "./Product.css";
import formatCurrency from '../utils';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';


export default class Product extends React.Component {

    constructor(props) {
        super();
        this.state = {
            product: null,
        }
    }
    openProductModal = () => {
        this.setState({ product: this.props.prod })
    }
    closeProductModal = () => {
        this.setState({ product: null })
    }
    render() {
        const { prod } = this.props;
        const { product } = this.state;
        return (
            <div>
                <div className="product">
                    <a href={"#" + prod._id} onClick={() => this.openProductModal()}>
                        <img src={prod.image} alt={prod.title} />
                        <p>{prod.title}</p>
                    </a>
                    <div className="product-price">
                        <div>{formatCurrency(prod.price)}</div>
                        <button className="button primary" onClick={() => this.props.addToCart(prod)}>Add To Cart</button>
                    </div>
                </div>
                {product && (
                    <Modal isOpen={true} onRequestClose={this.closeProductModal}>
                        <Zoom>
                            <button className="close-modal" onClick={this.closeProductModal}>x</button>
                            <div className="product-details">
                                <img src={prod.image} alt={prod.title} />
                                <div className="product-details-description">
                                    <p>
                                        <strong>{prod.title}</strong>
                                    </p>
                                    <p>
                                        {prod.description}
                                    </p>
                                    <p>
                                        Available Sizes : {" "}
                                        {prod.availableSizes.map((size) => (
                                            <span>
                                                {" "}
                                                <button className="button"> {size}</button>
                                            </span>
                                        )

                                        )}
                                    </p>
                                    <div className="product-price">
                                        <div>{formatCurrency(prod.price)}</div>
                                        <button className="button primary" onClick={() => {
                                            this.props.addToCart(prod);
                                            this.closeProductModal();
                                        }}
                                        >Add To Cart</button>
                                    </div>
                                </div> 
                            </div>
                        </Zoom>
                    </Modal>
                )}
            </div>
        )
    }
}
