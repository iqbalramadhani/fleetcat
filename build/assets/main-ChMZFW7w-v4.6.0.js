import"./datatables.net-bs-tMCg-qWx-v4.6.0.js";import"./x-editable-DqCMi3AF-v4.6.0.js";import{D as t}from"./datatables.net-B4m-KJNi-v4.6.0.js";import"./jquery-DsDSGtnt-v4.6.0.js";import"./@popperjs-DMMwm23M-v4.6.0.js";class s{constructor(){$(".translation").editable({url:this.update,type:"text",mode:"inline",send:"always"}).on("shown",(e,a)=>{a.input.postrender=()=>{a.input.$input.select()}})}update(e){$.ajax({url:route("admin.translations.update",this.dataset.key),type:"PUT",data:{locale:this.dataset.locale,value:e.value},success(a){success(a)},error(a){error(a.responseJSON.message)}})}}new t(".translations-table",{stateSave:!0,pageLength:20,lengthMenu:[10,20,50,100,200],drawCallback:()=>{new s},layout:{topEnd:{search:{placeholder:trans("admin::admin.table.search_here")}}}});
