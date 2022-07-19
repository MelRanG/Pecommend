import logo from './logo.svg';
import Nav from './nav/nav';
import Footer from './footer/footer';

function Home() {
    return (
        <div className="App">
            <Nav />
            {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
            <div className="slider-area">
                <div className="slider-active owl-carousel nav-style-1 owl-dot-none">
                    <div className="single-slider slider-height-1 bg-purple">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
                                    <div className="slider-content slider-animated-1">
                                        <h3 className="animated">Smart Products</h3>
                                        <h1 className="animated">Summer Offer <br />2020 Collection</h1>
                                        <div className="slider-btn btn-hover">
                                            <a className="animated" href="shop.html">SHOP NOW</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
                                    <div className="slider-single-img slider-animated-1">
                                        <img className="animated" src="assets/img/slider/single-slide-1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-slider slider-height-1 bg-purple">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
                                    <div className="slider-content slider-animated-1">
                                        <h3 className="animated">Smart Products</h3>
                                        <h1 className="animated">Summer Offer <br />2020 Collection</h1>
                                        <div className="slider-btn btn-hover">
                                            <a className="animated" href="shop.html">SHOP NOW</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
                                    <div className="slider-single-img slider-animated-1">
                                        <img className="animated" src="assets/img/slider/single-slide-hm1-2.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="suppoer-area pt-100 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="support-wrap mb-30 support-1">
                                <div className="support-icon">
                                    <img className="animated" src="assets/img/icon-img/support-1.png" alt="" />
                                </div>
                                <div className="support-content">
                                    <h5>Free Shipping</h5>
                                    <p>Free shipping on all order</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="support-wrap mb-30 support-2">
                                <div className="support-icon">
                                    <img className="animated" src="assets/img/icon-img/support-2.png" alt="" />
                                </div>
                                <div className="support-content">
                                    <h5>Support 24/7</h5>
                                    <p>Free shipping on all order</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="support-wrap mb-30 support-3">
                                <div className="support-icon">
                                    <img className="animated" src="assets/img/icon-img/support-3.png" alt="" />
                                </div>
                                <div className="support-content">
                                    <h5>Money Return</h5>
                                    <p>Free shipping on all order</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="support-wrap mb-30 support-4">
                                <div className="support-icon">
                                    <img className="animated" src="assets/img/icon-img/support-4.png" alt="" />
                                </div>
                                <div className="support-content">
                                    <h5>Order Discount</h5>
                                    <p>Free shipping on all order</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-area pb-60">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>DAILY DEALS!</h2>
                    </div>
                    <div className="product-tab-list nav pt-30 pb-55 text-center">
                        <a href="#product-1" data-bs-toggle="tab" >
                            <h4>New Arrivals  </h4>
                        </a>
                        <a className="active" href="#product-2" data-bs-toggle="tab">
                            <h4>Best Sellers </h4>
                        </a>
                        <a href="#product-3" data-bs-toggle="tab">
                            <h4>Sale Items</h4>
                        </a>
                    </div>
                    <div className="tab-content jump">
                        <div className="tab-pane" id="product-1">
                            <div className="row">
                                <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                    <div className="product-wrap mb-25">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="assets/img/product/pro-8.jpg" alt="" />
                                                <img className="hover-img" src="assets/img/product/pro-6.jpg" alt="" />
                                            </a>
                                            <span className="pink">-10%</span>
                                            <div className="product-action">
                                                <div className="pro-same-action pro-wishlist">
                                                    <a title="Wishlist" href="wishlist.html"><i className="pe-7s-like"></i></a>
                                                </div>
                                                <div className="pro-same-action pro-cart">
                                                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                                                </div>
                                                <div className="pro-same-action pro-quickview">
                                                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">Crew Ventile Coat</a></h3>
                                            <div className="product-rating">
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <div className="product-price">
                                                <span>$ 60.00</span>
                                                <span className="old">$ 60.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                    <div className="product-wrap mb-25">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="assets/img/product/pro-7.jpg" alt="" />
                                                <img className="hover-img" src="assets/img/product/pro-4-1.jpg" alt="" />
                                            </a>
                                            <span className="purple">New</span>
                                            <div className="product-action">
                                                <div className="pro-same-action pro-wishlist">
                                                    <a title="Wishlist" href="wishlist.html"><i className="pe-7s-like"></i></a>
                                                </div>
                                                <div className="pro-same-action pro-cart">
                                                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                                                </div>
                                                <div className="pro-same-action pro-quickview">
                                                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">Trench Winter Coat</a></h3>
                                            <div className="product-rating">
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <div className="product-price">
                                                <span>$ 60.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                    <div className="product-wrap mb-25">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="assets/img/product/pro-6.jpg" alt="" />
                                                <img className="hover-img" src="assets/img/product/pro-6-1.jpg" alt="" />
                                            </a>
                                            <span className="pink">-10%</span>
                                            <div className="product-action">
                                                <div className="pro-same-action pro-wishlist">
                                                    <a title="Wishlist" href="wishlist.html"><i className="pe-7s-like"></i></a>
                                                </div>
                                                <div className="pro-same-action pro-cart">
                                                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                                                </div>
                                                <div className="pro-same-action pro-quickview">
                                                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">Winter Overcoat</a></h3>
                                            <div className="product-rating">
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <div className="product-price">
                                                <span>$ 60.00</span>
                                                <span className="old">$ 60.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                    <div className="product-wrap mb-25">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="assets/img/product/pro-5.jpg" alt="" />
                                                <img className="hover-img" src="assets/img/product/pro-5-1.jpg" alt="" />
                                            </a>
                                            <span className="purple">New</span>
                                            <div className="product-action">
                                                <div className="pro-same-action pro-wishlist">
                                                    <a title="Wishlist" href="wishlist.html"><i className="pe-7s-like"></i></a>
                                                </div>
                                                <div className="pro-same-action pro-cart">
                                                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                                                </div>
                                                <div className="pro-same-action pro-quickview">
                                                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">Nice Black Dress</a></h3>
                                            <div className="product-rating">
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <div className="product-price">
                                                <span>$ 60.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                    <div className="product-wrap mb-25">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="assets/img/product/pro-4.jpg" alt="" />
                                                <img className="hover-img" src="assets/img/product/pro-4-1.jpg" alt="" />
                                            </a>
                                            <span className="pink">-10%</span>
                                            <div className="product-action">
                                                <div className="pro-same-action pro-wishlist">
                                                    <a title="Wishlist" href="wishlist.html"><i className="pe-7s-like"></i></a>
                                                </div>
                                                <div className="pro-same-action pro-cart">
                                                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                                                </div>
                                                <div className="pro-same-action pro-quickview">
                                                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">Trench Winter Coat</a></h3>
                                            <div className="product-rating">
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <div className="product-price">
                                                <span>$ 60.00</span>
                                                <span className="old">$ 60.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                    <div className="product-wrap mb-25">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="assets/img/product/pro-3.jpg" alt="" />
                                                <img className="hover-img" src="assets/img/product/pro-3-1.jpg" alt="" />
                                            </a>
                                            <span className="purple">New</span>
                                            <div className="product-action">
                                                <div className="pro-same-action pro-wishlist">
                                                    <a title="Wishlist" href="wishlist.html"><i className="pe-7s-like"></i></a>
                                                </div>
                                                <div className="pro-same-action pro-cart">
                                                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                                                </div>
                                                <div className="pro-same-action pro-quickview">
                                                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">Winter Zipper </a></h3>
                                            <div className="product-rating">
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <div className="product-price">
                                                <span>$ 60.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                    <div className="product-wrap mb-25">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="assets/img/product/pro-2.jpg" alt="" />
                                                <img className="hover-img" src="assets/img/product/pro-2-1.jpg" alt="" />
                                            </a>
                                            <span className="pink">-10%</span>
                                            <div className="product-action">
                                                <div className="pro-same-action pro-wishlist">
                                                    <a title="Wishlist" href="wishlist.html"><i className="pe-7s-like"></i></a>
                                                </div>
                                                <div className="pro-same-action pro-cart">
                                                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                                                </div>
                                                <div className="pro-same-action pro-quickview">
                                                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">Trench Winter Coat</a></h3>
                                            <div className="product-rating">
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <div className="product-price">
                                                <span>$ 60.00</span>
                                                <span className="old">$ 60.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                    <div className="product-wrap mb-25">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="assets/img/product/pro-1.jpg" alt="" />
                                                <img className="hover-img" src="assets/img/product/pro-1-1.jpg" alt="" />
                                            </a>
                                            <span className="purple">New</span>
                                            <div className="product-action">
                                                <div className="pro-same-action pro-wishlist">
                                                    <a title="Wishlist" href="wishlist.html"><i className="pe-7s-like"></i></a>
                                                </div>
                                                <div className="pro-same-action pro-cart">
                                                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                                                </div>
                                                <div className="pro-same-action pro-quickview">
                                                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">Winter Zipper </a></h3>
                                            <div className="product-rating">
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <div className="product-price">
                                                <span>$ 60.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane active" id="product-2">
                            <div className="row">
                                <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                    <div className="product-wrap mb-25">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="assets/img/product/pro-1.jpg" alt="" />
                                                <img className="hover-img" src="assets/img/product/pro-1-1.jpg" alt="" />
                                            </a>
                                            <span className="pink">-10%</span>
                                            <div className="product-action">
                                                <div className="pro-same-action pro-wishlist">
                                                    <a title="Wishlist" href="wishlist.html"><i className="pe-7s-like"></i></a>
                                                </div>
                                                <div className="pro-same-action pro-cart">
                                                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                                                </div>
                                                <div className="pro-same-action pro-quickview">
                                                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">Winter Zipper </a></h3>
                                            <div className="product-rating">
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <div className="product-price">
                                                <span>$ 60.00</span>
                                                <span className="old">$ 60.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                    <div className="product-wrap mb-25">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="assets/img/product/pro-2.jpg" alt="" />
                                                <img className="hover-img" src="assets/img/product/pro-2-1.jpg" alt="" />
                                            </a>
                                            <span className="purple">New</span>
                                            <div className="product-action">
                                                <div className="pro-same-action pro-wishlist">
                                                    <a title="Wishlist" href="wishlist.html"><i className="pe-7s-like"></i></a>
                                                </div>
                                                <div className="pro-same-action pro-cart">
                                                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                                                </div>
                                                <div className="pro-same-action pro-quickview">
                                                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">Trench Winter Coat</a></h3>
                                            <div className="product-rating">
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <div className="product-price">
                                                <span>$ 60.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                    <div className="product-wrap mb-25">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="assets/img/product/pro-3.jpg" alt="" />
                                                <img className="hover-img" src="assets/img/product/pro-3-1.jpg" alt="" />
                                            </a>
                                            <span className="pink">-10%</span>
                                            <div className="product-action">
                                                <div className="pro-same-action pro-wishlist">
                                                    <a title="Wishlist" href="wishlist.html"><i className="pe-7s-like"></i></a>
                                                </div>
                                                <div className="pro-same-action pro-cart">
                                                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                                                </div>
                                                <div className="pro-same-action pro-quickview">
                                                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">Winter Zipper </a></h3>
                                            <div className="product-rating">
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <div className="product-price">
                                                <span>$ 60.00</span>
                                                <span className="old">$ 60.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                    <div className="product-wrap mb-25">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="assets/img/product/pro-4.jpg" alt="" />
                                                <img className="hover-img" src="assets/img/product/pro-4-1.jpg" alt="" />
                                            </a>
                                            <span className="purple">New</span>
                                            <div className="product-action">
                                                <div className="pro-same-action pro-wishlist">
                                                    <a title="Wishlist" href="wishlist.html"><i className="pe-7s-like"></i></a>
                                                </div>
                                                <div className="pro-same-action pro-cart">
                                                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                                                </div>
                                                <div className="pro-same-action pro-quickview">
                                                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">Trench Winter Coat</a></h3>
                                            <div className="product-rating">
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <div className="product-price">
                                                <span>$ 60.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                    <div className="product-wrap mb-25">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="assets/img/product/pro-5.jpg" alt="" />
                                                <img className="hover-img" src="assets/img/product/pro-5-1.jpg" alt="" />
                                            </a>
                                            <span className="pink">-10%</span>
                                            <div className="product-action">
                                                <div className="pro-same-action pro-wishlist">
                                                    <a title="Wishlist" href="wishlist.html"><i className="pe-7s-like"></i></a>
                                                </div>
                                                <div className="pro-same-action pro-cart">
                                                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                                                </div>
                                                <div className="pro-same-action pro-quickview">
                                                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">Nice Black Dress</a></h3>
                                            <div className="product-rating">
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <div className="product-price">
                                                <span>$ 60.00</span>
                                                <span className="old">$ 60.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                    <div className="product-wrap mb-25">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="assets/img/product/pro-6.jpg" alt="" />
                                                <img className="hover-img" src="assets/img/product/pro-6-1.jpg" alt="" />
                                            </a>
                                            <span className="purple">New</span>
                                            <div className="product-action">
                                                <div className="pro-same-action pro-wishlist">
                                                    <a title="Wishlist" href="wishlist.html"><i className="pe-7s-like"></i></a>
                                                </div>
                                                <div className="pro-same-action pro-cart">
                                                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                                                </div>
                                                <div className="pro-same-action pro-quickview">
                                                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">Winter Overcoat</a></h3>
                                            <div className="product-rating">
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <div className="product-price">
                                                <span>$ 60.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                    <div className="product-wrap mb-25">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="assets/img/product/pro-7.jpg" alt="" />
                                                <img className="hover-img" src="assets/img/product/pro-4-1.jpg" alt="" />
                                            </a>
                                            <span className="pink">-10%</span>
                                            <div className="product-action">
                                                <div className="pro-same-action pro-wishlist">
                                                    <a title="Wishlist" href="wishlist.html"><i className="pe-7s-like"></i></a>
                                                </div>
                                                <div className="pro-same-action pro-cart">
                                                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                                                </div>
                                                <div className="pro-same-action pro-quickview">
                                                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">Trench Winter Coat</a></h3>
                                            <div className="product-rating">
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <div className="product-price">
                                                <span>$ 60.00</span>
                                                <span className="old">$ 60.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                    <div className="product-wrap mb-25">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="assets/img/product/pro-8.jpg" alt="" />
                                                <img className="hover-img" src="assets/img/product/pro-6.jpg" alt="" />
                                            </a>
                                            <span className="purple">New</span>
                                            <div className="product-action">
                                                <div className="pro-same-action pro-wishlist">
                                                    <a title="Wishlist" href="wishlist.html"><i className="pe-7s-like"></i></a>
                                                </div>
                                                <div className="pro-same-action pro-cart">
                                                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                                                </div>
                                                <div className="pro-same-action pro-quickview">
                                                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">Crew Ventile Coat</a></h3>
                                            <div className="product-rating">
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <div className="product-price">
                                                <span>$ 60.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="product-3">
                            <div className="row">
                                <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                    <div className="product-wrap mb-25">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="assets/img/product/pro-6.jpg" alt="" />
                                                <img className="hover-img" src="assets/img/product/pro-6-1.jpg" alt="" />
                                            </a>
                                            <span className="pink">-10%</span>
                                            <div className="product-action">
                                                <div className="pro-same-action pro-wishlist">
                                                    <a title="Wishlist" href="wishlist.html"><i className="pe-7s-like"></i></a>
                                                </div>
                                                <div className="pro-same-action pro-cart">
                                                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                                                </div>
                                                <div className="pro-same-action pro-quickview">
                                                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">Winter Overcoat</a></h3>
                                            <div className="product-rating">
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <div className="product-price">
                                                <span>$ 60.00</span>
                                                <span className="old">$ 60.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                    <div className="product-wrap mb-25">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="assets/img/product/pro-5.jpg" alt="" />
                                                <img className="hover-img" src="assets/img/product/pro-5-1.jpg" alt="" />
                                            </a>
                                            <span className="purple">New</span>
                                            <div className="product-action">
                                                <div className="pro-same-action pro-wishlist">
                                                    <a title="Wishlist" href="wishlist.html"><i className="pe-7s-like"></i></a>
                                                </div>
                                                <div className="pro-same-action pro-cart">
                                                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                                                </div>
                                                <div className="pro-same-action pro-quickview">
                                                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">Nice Black Dress</a></h3>
                                            <div className="product-rating">
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <div className="product-price">
                                                <span>$ 60.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                    <div className="product-wrap mb-25">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="assets/img/product/pro-4.jpg" alt="" />
                                                <img className="hover-img" src="assets/img/product/pro-4-1.jpg" alt="" />
                                            </a>
                                            <span className="pink">-10%</span>
                                            <div className="product-action">
                                                <div className="pro-same-action pro-wishlist">
                                                    <a title="Wishlist" href="wishlist.html"><i className="pe-7s-like"></i></a>
                                                </div>
                                                <div className="pro-same-action pro-cart">
                                                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                                                </div>
                                                <div className="pro-same-action pro-quickview">
                                                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">Trench Winter Coat</a></h3>
                                            <div className="product-rating">
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <div className="product-price">
                                                <span>$ 60.00</span>
                                                <span className="old">$ 60.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                    <div className="product-wrap mb-25">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="assets/img/product/pro-3.jpg" alt="" />
                                                <img className="hover-img" src="assets/img/product/pro-3-1.jpg" alt="" />
                                            </a>
                                            <span className="purple">New</span>
                                            <div className="product-action">
                                                <div className="pro-same-action pro-wishlist">
                                                    <a title="Wishlist" href="wishlist.html"><i className="pe-7s-like"></i></a>
                                                </div>
                                                <div className="pro-same-action pro-cart">
                                                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                                                </div>
                                                <div className="pro-same-action pro-quickview">
                                                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">Winter Zipper </a></h3>
                                            <div className="product-rating">
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <div className="product-price">
                                                <span>$ 60.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                    <div className="product-wrap mb-25">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="assets/img/product/pro-2.jpg" alt="" />
                                                <img className="hover-img" src="assets/img/product/pro-2-1.jpg" alt="" />
                                            </a>
                                            <span className="pink">-10%</span>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">Trench Winter Coat</a></h3>
                                            <div className="product-rating">
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <div className="product-price">
                                                <span>$ 60.00</span>
                                                <span className="old">$ 60.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                    <div className="product-wrap mb-25">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="assets/img/product/pro-1.jpg" alt="" />
                                                <img className="hover-img" src="assets/img/product/pro-1-1.jpg" alt="" />
                                            </a>
                                            <span className="purple">New</span>
                                            <div className="product-action">
                                                <div className="pro-same-action pro-wishlist">
                                                    <a title="Wishlist" href="wishlist.html"><i className="pe-7s-like"></i></a>
                                                </div>
                                                <div className="pro-same-action pro-cart">
                                                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                                                </div>
                                                <div className="pro-same-action pro-quickview">
                                                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">Winter Zipper </a></h3>
                                            <div className="product-rating">
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <div className="product-price">
                                                <span>$ 60.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                    <div className="product-wrap mb-25">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="assets/img/product/pro-8.jpg" alt="" />
                                                <img className="hover-img" src="assets/img/product/pro-6.jpg" alt="" />
                                            </a>
                                            <span className="pink">-10%</span>
                                            <div className="product-action">
                                                <div className="pro-same-action pro-wishlist">
                                                    <a title="Wishlist" href="wishlist.html"><i className="pe-7s-like"></i></a>
                                                </div>
                                                <div className="pro-same-action pro-cart">
                                                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                                                </div>
                                                <div className="pro-same-action pro-quickview">
                                                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">Crew Ventile Coat</a></h3>
                                            <div className="product-rating">
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <div className="product-price">
                                                <span>$ 60.00</span>
                                                <span className="old">$ 60.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                    <div className="product-wrap mb-25">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="assets/img/product/pro-7.jpg" alt="" />
                                                <img className="hover-img" src="assets/img/product/pro-4-1.jpg" alt="" />
                                            </a>
                                            <span className="purple">New</span>
                                            <div className="product-action">
                                                <div className="pro-same-action pro-wishlist">
                                                    <a title="Wishlist" href="wishlist.html"><i className="pe-7s-like"></i></a>
                                                </div>
                                                <div className="pro-same-action pro-cart">
                                                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                                                </div>
                                                <div className="pro-same-action pro-quickview">
                                                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">Trench Winter Coat</a></h3>
                                            <div className="product-rating">
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <div className="product-price">
                                                <span>$ 60.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog-area pb-55">
                <div className="container">
                    <div className="section-title text-center mb-55">
                        <h2>OUR BLOG</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-wrap mb-30 scroll-zoom">
                                <div className="blog-img">
                                    <a href="blog-details.html"><img src="assets/img/blog/blog-1.jpg" alt="" /></a>
                                    <span className="purple">Lifestyle</span>
                                </div>
                                <div className="blog-content-wrap">
                                    <div className="blog-content text-center">
                                        <h3><a href="blog-details.html">Lorem ipsum dolor sit <br /> amet consec.</a></h3>
                                        <span>By Shop <a href="#">Admin</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-wrap mb-30 scroll-zoom">
                                <div className="blog-img">
                                    <a href="blog-details.html"><img src="assets/img/blog/blog-2.jpg" alt="" /></a>
                                    <span className="pink">Lifestyle</span>
                                </div>
                                <div className="blog-content-wrap">
                                    <div className="blog-content text-center">
                                        <h3><a href="blog-details.html">Lorem ipsum dolor sit <br /> amet consec.</a></h3>
                                        <span>By Shop <a href="#">Admin</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-wrap mb-30 scroll-zoom">
                                <div className="blog-img">
                                    <a href="blog-details.html"><img src="assets/img/blog/blog-3.jpg" alt="" /></a>
                                    <span className="purple">Lifestyle</span>
                                </div>
                                <div className="blog-content-wrap">
                                    <div className="blog-content text-center">
                                        <h3><a href="blog-details.html">Lorem ipsum dolor sit <br /> amet consec.</a></h3>
                                        <span>By Shop <a href="#">Admin</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-5 col-sm-12 col-xs-12">
                                    <div className="tab-content quickview-big-img">
                                        <div id="pro-1" className="tab-pane fade show active">
                                            <img src="assets/img/product/quickview-l1.jpg" alt="" />
                                        </div>
                                        <div id="pro-2" className="tab-pane fade">
                                            <img src="assets/img/product/quickview-l2.jpg" alt="" />
                                        </div>
                                        <div id="pro-3" className="tab-pane fade">
                                            <img src="assets/img/product/quickview-l3.jpg" alt="" />
                                        </div>
                                        <div id="pro-4" className="tab-pane fade">
                                            <img src="assets/img/product/quickview-l2.jpg" alt="" />
                                        </div>
                                    </div>
                                    {/* <!-- Thumbnail Large Image End -->
                        <!-- Thumbnail Image End --> */}
                                    <div className="quickview-wrap mt-15">
                                        <div className="quickview-slide-active owl-carousel nav nav-style-1" role="tablist">
                                            <a className="active" data-bs-toggle="tab" href="#pro-1"><img src="assets/img/product/quickview-s1.jpg" alt="" /></a>
                                            <a data-bs-toggle="tab" href="#pro-2"><img src="assets/img/product/quickview-s2.jpg" alt="" /></a>
                                            <a data-bs-toggle="tab" href="#pro-3"><img src="assets/img/product/quickview-s3.jpg" alt="" /></a>
                                            <a data-bs-toggle="tab" href="#pro-4"><img src="assets/img/product/quickview-s2.jpg" alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7 col-sm-12 col-xs-12">
                                    <div className="product-details-content quickview-content">
                                        <h2>Products Name Here</h2>
                                        <div className="product-details-price">
                                            <span>$18.00 </span>
                                            <span className="old">$20.00 </span>
                                        </div>
                                        <div className="pro-details-rating-wrap">
                                            <div className="pro-details-rating">
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <span>3 Reviews</span>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco</p>
                                        <div className="pro-details-list">
                                            <ul>
                                                <li>- 0.5 mm Dail</li>
                                                <li>- Inspired vector icons</li>
                                                <li>- Very modern style  </li>
                                            </ul>
                                        </div>
                                        <div className="pro-details-size-color">
                                            <div className="pro-details-color-wrap">
                                                <span>Color</span>
                                                <div className="pro-details-color-content">
                                                    <ul>
                                                        <li className="blue"></li>
                                                        <li className="maroon active"></li>
                                                        <li className="gray"></li>
                                                        <li className="green"></li>
                                                        <li className="yellow"></li>
                                                        <li className="white"></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="pro-details-size">
                                                <span>Size</span>
                                                <div className="pro-details-size-content">
                                                    <ul>
                                                        <li><a href="#">s</a></li>
                                                        <li><a href="#">m</a></li>
                                                        <li><a href="#">l</a></li>
                                                        <li><a href="#">xl</a></li>
                                                        <li><a href="#">xxl</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pro-details-quality">
                                            <div className="cart-plus-minus">
                                                <input className="cart-plus-minus-box" type="text" name="qtybutton" value="2" />
                                            </div>
                                            <div className="pro-details-cart btn-hover">
                                                <a href="#">Add To Cart</a>
                                            </div>
                                            <div className="pro-details-wishlist">
                                                <a href="#"><i className="fa fa-heart-o"></i></a>
                                            </div>
                                            <div className="pro-details-compare">
                                                <a href="#"><i className="pe-7s-shuffle"></i></a>
                                            </div>
                                        </div>
                                        <div className="pro-details-meta">
                                            <span>Categories :</span>
                                            <ul>
                                                <li><a href="#">Minimal,</a></li>
                                                <li><a href="#">Furniture,</a></li>
                                                <li><a href="#">Fashion</a></li>
                                            </ul>
                                        </div>
                                        <div className="pro-details-meta">
                                            <span>Tag :</span>
                                            <ul>
                                                <li><a href="#">Fashion, </a></li>
                                                <li><a href="#">Furniture,</a></li>
                                                <li><a href="#">Electronic</a></li>
                                            </ul>
                                        </div>
                                        <div className="pro-details-social">
                                            <ul>
                                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                                <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Modal end --> */}









            {/* <!-- All JS is here
============================================ --> */}
        </div>
        //     <script src="assets/js/vendor/modernizr-3.11.7.min.js"></script>
        // <script src="assets/js/vendor/jquery-v3.6.0.min.js"></script>
        // <script src="assets/js/vendor/jquery-migrate-v3.3.2.min.js"></script>
        // <script src="assets/js/vendor/popper.min.js"></script>
        // <script src="assets/js/vendor/bootstrap.min.js"></script>
        // {/* <script src="assets/js/plugins.js"></script> */}
        // {/* <!-- Ajax Mail --> */}
        // <script src="assets/js/ajax-mail.js"></script>
        // {/* <!-- Main JS --> */}
        // <script src="assets/js/main.js"></script>
    );
}

export default Home;
