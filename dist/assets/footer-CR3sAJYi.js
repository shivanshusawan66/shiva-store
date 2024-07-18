(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const o=`
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
`,n=document.querySelector(".section-header");n.insertAdjacentHTML("afterbegin",o);const c=`
<div class="footer-container container">
<div class="content_1">
<img src="images/logo.png" alt="logo">
<p>Welcome to Shiva Stores, your ultimate destination for cutting-edge gadgets!</p>
<img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards">
</div>
<div class="content_2">
<h4>SHOPPING</h4>
<a href="#">Computer Stores</a>
<a href="#"> Laptop Stores</a>
<a href="#">Accessories</a>
<a href="#">Sales & Discount</a>
</div>
<div class="content_3">
<h4>Experience</h4>
<a href="./contact.html">Contact Us</a>
<a href="" target="_blank">Payment Method</a>
<a href="" target="_blank">Delivery</a>
<a href="" target="_blank">Return and Exchanges</a>
</div>
<div class="content_4">
<h4>NEWSLETTER</h4>
<p>Be the first to know about new <br> arrivals, sales & promos!</p>
<div class="f-mail">
<input type="email" placeholder="Your Email"/>
<i class="bx bx-envelop"></i>
</div>
<hr/>
</div>
</div>
<div class="f-design">
<div class="f-design-txt">
<p>Design and Code by Shivanshu Sawan</p>
</div>
</div>`,l=document.querySelector(".section-footer");l.insertAdjacentHTML("afterbegin",c);
