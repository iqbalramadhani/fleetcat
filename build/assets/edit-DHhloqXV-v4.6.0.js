import{V as i}from"./vue-ROl3rvO--v4.6.0.js";import{P as r}from"./ProductMixin-C7jc-7_E-v4.6.0.js";import{E as s}from"./Errors-CLl7ZKxD-v4.6.0.js";import"./blueimp-md5-DrCnc-_a-v4.6.0.js";import"./@popperjs-DMMwm23M-v4.6.0.js";import"./wysiwyg-CMELiC-r-v4.6.0.js";import"./tinymce-O4mhUEqw-v4.6.0.js";import"./vuedraggable-wexgooZQ-v4.6.0.js";import"./vue2-selectize-BzvTQgAy-v4.6.0.js";import"./jquery-DsDSGtnt-v4.6.0.js";import"./vue-flatpickr-component-CGjPFiav-v4.6.0.js";import"./flatpickr-uj7nod85-v4.6.0.js";import"./@melloware-BTYRaMki-v4.6.0.js";import"./NProgress-Day8y6xD-v4.6.0.js";import"./nprogress-u2jSs69r-v4.6.0.js";import"./Toaster-kJWPoJWx-v4.6.0.js";import"./vue-toast-notification-mZWJjkD3-v4.6.0.js";i.prototype.defaultCurrencySymbol=FleetCart.defaultCurrencySymbol;i.prototype.route=route;new i({el:"#app",mixins:[r],data:{formSubmissionType:null,form:{brand_id:"",tax_class_id:"",is_active:!0,media:[],is_virtual:!1,manage_stock:0,in_stock:1,special_price_type:"fixed",meta:{},attributes:[],downloads:[],variations:[],variants:[],options:[],slug:null},errors:new s,selectizeConfig:{plugins:["remove_button"]},searchableSelectizeConfig:{},categoriesSelectizeConfig:{},flatPickrConfig:{mode:"single",enableTime:!0,altInput:!0}},created(){this.setFormData(),this.setSearchableSelectizeConfig(),this.setCategoriesSelectizeConfig(),this.setDefaultVariantUid(),this.setVariantsLength()},mounted(){this.hideAlertExitFlash()},methods:{prepareFormData(t){return this.prepareAttributes(t.attributes),this.prepareVariations(t.variations),this.prepareVariants(t.variants),this.prepareOptions(t.options),t},setFormData(){this.form={...this.prepareFormData(FleetCart.data.product)}},setDefaultVariantUid(){this.hasAnyVariant&&(this.defaultVariantUid=this.form.variants.find(({is_default:t})=>t===!0).uid)},setVariantsLength(){this.variantsLength=this.form.variants.length},hideAlertExitFlash(){const t=$(".alert-exit-flash");t.length!==0&&setTimeout(()=>{t.remove()},3e3)},submit({submissionType:t}){this.formSubmissionType=t,$.ajax({type:"PUT",url:route("admin.products.update",{id:this.form.id,...t==="save_and_exit"&&{exit_flash:!0}}),data:this.transformData(this.form),dataType:"json",success:e=>{if(t==="save_and_exit"){location.href=route("admin.products.index");return}this.form={...e.product_resource},this.errors.reset(),this.prepareFormData(this.form),this.resetBulkEditVariantFields(),this.hasAnyVariant&&this.setVariantsName(),toaster(e.message,{type:"success"})}}).catch(e=>{if(this.formSubmissionType=null,toaster(e.responseJSON.message,{type:"default"}),e.status===422){this.errors.reset(),this.errors.record(e.responseJSON.errors),this.focusFirstErrorField(this.$refs.form.elements);return}this.hasAnyVariant&&this.regenerateVariationsAndVariantsUid()}).always(()=>{t==="save"&&(this.formSubmissionType=null)})}}});