import{S as b,N as q}from"./swiper-BxwyBx_L-v4.6.0.js";import{n as w}from"./nouislider--DU6hECO-v4.6.0.js";import"./ProductCard-K7Tgvmwg-v4.6.0.js";import"./Pagination-DKj6Zlmg-v4.6.0.js";import"./ProductMixin-Bsmxlrzq-v4.6.0.js";import"./ProductRating-B-YFAG_Q-v4.6.0.js";Alpine.data("ProductIndex",({initialQuery:u,initialBrandName:o,initialBrandBanner:n,initialBrandSlug:h,initialCategoryName:c,initialCategoryBanner:d,initialCategorySlug:P,initialTagName:p,initialTagSlug:l,initialAttribute:g,minPrice:s,maxPrice:e,initialSort:m,initialPage:i,initialPerPage:f,initialViewMode:y})=>({fetchingProducts:!1,products:{data:[]},attributeFilters:[],initialBrandName:o,initialTagName:p,brandBanner:n,categoryName:c,categoryBanner:d,viewMode:y,currentPage:i,queryParams:{query:u,brand:h,category:P,tag:l,attribute:g,fromPrice:0,toPrice:e,sort:m,perPage:f,page:i},get emptyProducts(){return this.products.data.length===0},get totalPage(){return Math.ceil(this.products.total/this.queryParams.perPage)},get showingResults(){if(!this.emptyProducts)return trans("storefront::products.showing_results",{from:this.products.from,to:this.products.to,total:this.products.total})},init(){this.initPriceFilter(),this.fetchProducts(),this.initLatestProductsSlider()},uid(){return Math.random().toString(36).slice(3)},changeSort(t){this.queryParams.sort=t,this.fetchProducts()},changePerPage(t){this.currentPage=1,this.queryParams.perPage=t,this.queryParams.page=1,this.fetchProducts()},initPriceFilter(){w.create(this.$refs.priceRange,{connect:!0,direction:window.FleetCart.rtl?"rtl":"ltr",start:[s,e],range:{min:[s],max:[e]}}),this.$refs.priceRange.noUiSlider.on("update",(t,r)=>{let a=Math.round(t[r]);r===0?this.queryParams.fromPrice=a:this.queryParams.toPrice=a}),this.$refs.priceRange.noUiSlider.on("change",()=>{this.fetchProducts()})},updatePriceRange(t,r){this.$refs.priceRange.noUiSlider.set([t,r]),this.fetchProducts()},toggleAttributeFilter(t,r){this.queryParams.attribute.hasOwnProperty(t)||(this.queryParams.attribute[t]=[]),this.queryParams.attribute[t].includes(r)?this.queryParams.attribute[t].splice(this.queryParams.attribute[t].indexOf(r),1):this.queryParams.attribute[t].push(r),this.fetchProducts({updateAttributeFilters:!1})},isFilteredByAttribute(t,r){return this.queryParams.attribute.hasOwnProperty(t)?this.queryParams.attribute[t].includes(r):!1},changeCategory(t){this.categoryName=t.name,this.categoryBanner=t.banner.path,this.currentPage=1,this.queryParams.query=null,this.queryParams.category=t.slug,this.queryParams.attribute={},this.queryParams.page=1,this.fetchProducts()},changePage(t){this.currentPage=t,this.queryParams.page=t,this.fetchProducts()},async fetchProducts(t={updateAttributeFilters:!0}){this.fetchingProducts=!0;try{const r=await axios.get(route("products.index",this.queryParams));this.products=r.data.products,t.updateAttributeFilters&&(this.attributeFilters=r.data.attributes)}catch(r){notify(r.response.data.message)}finally{this.fetchingProducts=!1}},initLatestProductsSlider(){new b(this.$refs.latestProducts,{modules:[q],slidesPerView:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}}));
