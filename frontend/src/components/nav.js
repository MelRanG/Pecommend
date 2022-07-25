function nav() {
  return (
    <header class="header-area clearfix">
      <div class="header-top-area header-padding-2">
        <div class="container-fluid"></div>
      </div>
      <div class="header-bottom sticky-bar header-res-padding header-padding-2">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-2 col-lg-2 d-none d-lg-block"></div>
            <div class="col-xl-3 col-lg-3 d-none d-lg-block">
              <div class="main-menu">
                <nav>
                  <ul style={{ textAlign: "right" }}>
                    <li>
                      <a href="about.html" style={{ fontSize: "25px" }}>
                        {" "}
                        Perfume
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-6 col-4">
              <div class="logo" style={{ textAlign: "center", marginTop: "0" }}>
                <a
                  href="index.html"
                  // style={{
                  //   textAlign: "center",
                  //   fontFamily: "GmarketSansBold",
                  //   fontSize: "40px",
                  // }}
                >
                  {/* <img alt="" src="assets/img/logo/logo.png" /> */}
                  <img
                    alt=""
                    src="assets/tempImg/로고.PNG"
                    style={{ height: "94px" }}
                  />
                </a>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 d-none d-lg-block">
              <div class="main-menu">
                <nav>
                  <ul style={{ textAlign: "left" }}>
                    <li>
                      <a href="contact.html" style={{ fontSize: "25px" }}>
                        {" "}
                        Community
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-6 col-8">
              <div class="header-right-wrap">
                <div class="same-style header-search">
                  <a class="search-active" href="#">
                    <i class="pe-7s-search"></i>
                  </a>
                  <div class="search-content">
                    <form action="#">
                      <input type="text" placeholder="Search" />
                      <button class="button-search">
                        <i class="pe-7s-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
                <div class="same-style account-satting">
                  <a class="account-satting-active" href="#">
                    <i class="pe-7s-user-female"></i>
                  </a>
                  <div class="account-dropdown">
                    <ul>
                      <li>
                        <a href="login-register.html">Login</a>
                      </li>
                      <li>
                        <a href="login-register.html">Register</a>
                      </li>
                      {/* <li>
                        <a href="wishlist.html">Wishlist </a>
                      </li> */}
                      <li>
                        <a href="my-account.html">my account</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="same-style header-wishlist">
                  <a href="wishlist.html">
                    <i class="pe-7s-like"></i>
                  </a>
                </div>
                {/* <div class="same-style cart-wrap">
                  <button class="icon-cart">
                    <i class="pe-7s-shopbag"></i>
                    <span class="count-style">02</span>
                  </button>
                  <div class="shopping-cart-content">
                    <ul>
                      <li class="single-shopping-cart">
                        <div class="shopping-cart-img">
                          <a href="#">
                            <img alt="" src="assets/img/cart/cart-1.png" />
                          </a>
                        </div>
                        <div class="shopping-cart-title">
                          <h4>
                            <a href="#">T- Shart & Jeans </a>
                          </h4>
                          <h6>Qty: 02</h6>
                          <span>$260.00</span>
                        </div>
                        <div class="shopping-cart-delete">
                          <a href="#">
                            <i class="fa fa-times-circle"></i>
                          </a>
                        </div>
                      </li>
                      <li class="single-shopping-cart">
                        <div class="shopping-cart-img">
                          <a href="#">
                            <img alt="" src="assets/img/cart/cart-2.png" />
                          </a>
                        </div>
                        <div class="shopping-cart-title">
                          <h4>
                            <a href="#">T- Shart & Jeans </a>
                          </h4>
                          <h6>Qty: 02</h6>
                          <span>$260.00</span>
                        </div>
                        <div class="shopping-cart-delete">
                          <a href="#">
                            <i class="fa fa-times-circle"></i>
                          </a>
                        </div>
                      </li>
                    </ul>
                    <div class="shopping-cart-total">
                      <h4>
                        Shipping : <span>$20.00</span>
                      </h4>
                      <h4>
                        Total : <span class="shop-total">$260.00</span>
                      </h4>
                    </div>
                    <div class="shopping-cart-btn btn-hover text-center">
                      <a class="default-btn" href="cart-page.html">
                        view cart
                      </a>
                      <a class="default-btn" href="checkout.html">
                        checkout
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div class="mobile-menu-area">
            <div class="mobile-menu">
              <nav id="mobile-menu-active">
                <ul class="menu-overflow">
                  <li>
                    <a href="about.html">About us</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default nav;
