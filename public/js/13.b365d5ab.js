(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{b009:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-card",{staticClass:"table-bg no-shadow"},[i("q-card-section",[i("div",{staticClass:"text-h6"},[e._v("\n      Secciones Internas\n    ")])]),i("q-separator",{attrs:{color:"white"}}),i("q-card-section",{staticClass:"q-pa-none"},[i("q-table",{staticClass:"table-bg",attrs:{data:e.sections,columns:e.columns,filter:e.filter,pagination:e.pagination},scopedSlots:e._u([{key:"top-left",fn:function(){return[i("q-input",{attrs:{borderless:"",dense:"",debounce:"300",placeholder:"Buscar"},scopedSlots:e._u([{key:"append",fn:function(){return[i("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]},proxy:!0},{key:"top-right",fn:function(){return[i("q-btn",{staticClass:"float-right text-capitalize",attrs:{color:"positive",icon:"add"},on:{click:function(t){e.sectionsDialog=!0}}})]},proxy:!0},{key:"body-cell-Action",fn:function(t){return[i("q-td",{attrs:{props:t}},[i("q-btn",{attrs:{icon:"edit",size:"sm",flat:"",dense:""},on:{click:function(i){return e.editSection(t.row)}}}),i("q-btn",{staticClass:"q-ml-sm",attrs:{icon:"delete",size:"sm",flat:"",dense:""},on:{click:function(i){return e.deleteSection(t.row)}}})],1)]}},{key:"body-cell-Slider-Image",fn:function(t){return[i("q-td",{attrs:{props:t}},[t.row.slider_url?i("q-img",{attrs:{src:"https://admin.pediapp.com.ar/images/"+t.row.slider_url,height:"auto",width:"100px",ratio:1}}):e._e()],1)]}},{key:"body-cell-Support-Image",fn:function(t){return[i("q-td",{attrs:{props:t}},[t.row.slider_url?i("q-img",{attrs:{src:"https://admin.pediapp.com.ar/images/"+t.row.support_image_url,height:"auto",width:"100px",ratio:1}}):e._e()],1)]}},{key:"body-cell-Description",fn:function(t){return[i("q-td",{attrs:{props:t}},[e._v("\n          "+e._s(t.row.description.substr(0,25)+"…")+"\n        ")])]}}])})],1),i("q-dialog",{model:{value:e.sectionsDialog,callback:function(t){e.sectionsDialog=t},expression:"sectionsDialog"}},[i("q-card",{staticStyle:{"min-width":"750px"}},[i("q-card-section",[i("div",{staticClass:"text-h6"},[e._v(e._s(e.formTitle))])]),i("q-card-section",{staticClass:"q-pt-none"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col q-mx-sm"},[i("q-input",{attrs:{dense:"",label:"Titulo"},model:{value:e.editedItem.title,callback:function(t){e.$set(e.editedItem,"title",t)},expression:"editedItem.title"}})],1)]),i("div",{staticClass:"row q-mt-md"},[i("div",{staticClass:"col q-mx-sm"},[i("q-input",{attrs:{dense:"",clearable:"",autogrow:"",label:"Descripción",type:"textarea"},model:{value:e.editedItem.description,callback:function(t){e.$set(e.editedItem,"description",t)},expression:"editedItem.description"}})],1)]),i("div",{staticClass:"row q-mt-md justify-center"},[i("div",{staticClass:"col-6 q-mx-sm"},[i("q-file",{attrs:{rounded:"",outlined:"",type:"file","bottom-slots":"",label:"Slider",counter:"","max-file-size":"2097152","max-files":"1",accept:".jpg, image/*"},on:{rejected:e.onRejected},scopedSlots:e._u([{key:"before",fn:function(){return[i("q-icon",{attrs:{name:"attachment"}})]},proxy:!0},{key:"append",fn:function(){return[null!==e.editedItem.slider_url?i("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(t){t.stopPropagation(),e.editedItem.slider_url=null}}}):e._e(),i("q-icon",{attrs:{name:"search"},on:{click:function(e){e.stopPropagation()}}})]},proxy:!0},{key:"hint",fn:function(){return[e._v("\n                Tamaño máximo 2MB\n              ")]},proxy:!0}]),model:{value:e.editedItem.slider_image,callback:function(t){e.$set(e.editedItem,"slider_image",t)},expression:"editedItem.slider_image"}})],1)]),i("div",{staticClass:"row q-mt-md justify-center"},[i("div",{staticClass:"col-6 q-mx-sm"},[i("q-file",{attrs:{rounded:"",outlined:"",type:"file","bottom-slots":"",label:"Imagen soporte",counter:"","max-file-size":"2097152","max-files":"1",accept:".jpg, image/*"},on:{rejected:e.onRejected},scopedSlots:e._u([{key:"before",fn:function(){return[i("q-icon",{attrs:{name:"attachment"}})]},proxy:!0},{key:"append",fn:function(){return[null!==e.editedItem.support_image_url?i("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(t){t.stopPropagation(),e.editedItem.support_image_url=null}}}):e._e(),i("q-icon",{attrs:{name:"search"},on:{click:function(e){e.stopPropagation()}}})]},proxy:!0},{key:"hint",fn:function(){return[e._v("\n                Tamaño máximo 2MB\n              ")]},proxy:!0}]),model:{value:e.editedItem.support_image,callback:function(t){e.$set(e.editedItem,"support_image",t)},expression:"editedItem.support_image"}})],1)])]),i("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[i("q-btn",{attrs:{flat:"",label:"Cancelar"},on:{click:e.close}}),i("q-btn",{attrs:{flat:"",label:e.formTitle},on:{click:e.save}})],1)],1)],1)],1)},s=[],a=(i("cca6"),i("a434"),i("a4d3"),i("e01a"),i("758b")),o={name:"InternalSectionsTable",created:function(){this.getSections()},data:function(){return{sections:[],filter:"",columns:[{name:"Id",label:"ID",field:"id",sortable:!0,align:"left"},{name:"Title",label:"Titulo",field:"title",sortable:!0,align:"left"},{name:"Slider-Image",label:"Slider",field:"slider_url",sortable:!0,align:"left"},{name:"Description",label:"Descripción",field:"description",sortable:!0,align:"left"},{name:"Support-Image",label:"Imagen soporte",field:"support_image_url",sortable:!0,align:"left"},{name:"Action",label:"",field:"Action",sortable:!1,align:"center"}],pagination:{rowsPerPage:5},sectionsDialog:!1,editedIndex:-1,editedItem:{title:"",slider_image:null,description:"",support_image:null,slider_url:"",support_image_url:""},defaultItem:{title:"",slider_image:null,description:"",support_image:null,slider_url:"",support_image_url:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"Crear Sección":"Editar Sección"}},methods:{getSections:function(){var e=this;a["a"].get("internalSections").then((function(t){e.sections=t.data})).catch((function(e){console.log("error"+e)}))},editSection:function(e){this.editedIndex=this.sections.indexOf(e),this.editedItem=Object.assign({},e),this.sectionsDialog=!0},deleteSection:function(e){var t=this.sections.indexOf(e),i=this.sections[t].id;confirm("Estás seguro que querés eliminar esta sección?")&&this.sections.splice(t,1)&&a["a"].delete("internalSections/deleteSection/".concat(i)).catch((function(e){console.log(e.response)}))},close:function(){var e=this;this.sectionsDialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){var e=this,t=new FormData;if(t.set("title",this.editedItem.title),t.set("description",this.editedItem.description),t.append("slider_image",this.editedItem.slider_image),t.append("support_image",this.editedItem.support_image),this.editedIndex>-1){var i=this.editedIndex;a["a"].put("internalSections/editSection/".concat(this.sections[i].id),t).then((function(t){Object.assign(e.sections[i],{id:t.data.id,title:t.data.title,description:t.data.description,slider_image:null,support_image:null,slider_url:t.data.slider_url,support_image_url:t.data.support_image_url})})).catch((function(e){console.log(e)}))}else a["a"].post("internalSections/addSection",t).then((function(t){e.sections.push({id:t.data.id,title:t.data.title,description:t.data.description,slider_image:null,support_image:null,slider_url:t.data.slider_url,support_image_url:t.data.support_image_url})})).catch((function(e){console.log(e.response.data.errors.message)}));this.close()},onRejected:function(){this.$q.notify({type:"negative",message:"Archivo no permitido"})}}},l=o,r=i("2877"),c=i("f09f"),d=i("a370"),u=i("eb85"),p=i("eaac"),m=i("27f9"),f=i("0016"),g=i("9c40"),_=i("db86"),b=i("068f"),h=i("24e8"),q=i("7d53"),I=i("4b7e"),x=i("eebe"),y=i.n(x),v=Object(r["a"])(l,n,s,!1,null,null,null);t["default"]=v.exports;y()(v,"components",{QCard:c["a"],QCardSection:d["a"],QSeparator:u["a"],QTable:p["a"],QInput:m["a"],QIcon:f["a"],QBtn:g["a"],QTd:_["a"],QImg:b["a"],QDialog:h["a"],QFile:q["a"],QCardActions:I["a"]})}}]);