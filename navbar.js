const navbarHTML = `
<header class="section-navbar">
    <section class="top_txt">
      <div class="head container">
        <div class="head_txt">
          <p>Free shipping, 30 days return or refund gurantee</p>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="navbar-brand">
        <a href="index.html">
          <img src="images/logo.png" alt="eCom logo" class="logo" height="10%" width="auto">
        </a>
      </div>

      <nav class="navbar">
        <ul>
          <li class="nav-item">
            <a href="/" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="products.html" class="nav-link">Products</a>
          </li>
          <li class="nav-item">
            <a href="contact.html" class="nav-link">contact</a>
          </li>
          <li>
          <li class="nav-item">
            <a href="/addToCart.html" class="nav-link add-to-cart-button" id="cartValue"><i
                class="fa-solid fa-cart-shopping"> 0 </i></a>
          </li>
          </li>
        </ul>
      </nav>
    </div>
  </header>
`

const headerElem = document.querySelector(".section-header");
headerElem.insertAdjacentHTML("afterbegin", navbarHTML);