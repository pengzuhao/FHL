(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bb80ee9"],{2313:function(e,t,n){},"30b3":function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return o})),n.d(t,"i",(function(){return r})),n.d(t,"j",(function(){return c})),n.d(t,"g",(function(){return l})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"h",(function(){return d})),n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var a=n("b775");function i(e){return Object(a["a"])({url:"/cmdb/ecs/",method:"get",params:e})}function o(e){return Object(a["a"])({url:"/cmdb/ecs_list/",method:"get",params:e})}function r(e){return Object(a["a"])({url:"/cmdb/ecs/template/",method:"get",params:e,responseType:"blob"})}function c(e){return Object(a["a"])({url:"/cmdb/ecs/"+e+"/unbind/",method:"patch"})}function l(){return Object(a["a"])({url:"/cmdb/ecs/idle/",method:"get"})}function s(e){return Object(a["a"])({url:"/cmdb/ecs/batch_bind/",method:"patch",data:e})}function u(e){return Object(a["a"])({url:"/cmdb/ecs/binds/",method:"patch",data:e})}function d(e){return Object(a["a"])({url:"/cmdb/staff/",method:"get",params:e})}function f(e){return Object(a["a"])({url:"/cmdb/staff/",method:"post",data:e})}function m(e){return Object(a["a"])({url:"/cmdb/staff/"+e+"/",method:"DELETE"})}},5118:function(e,t,n){(function(e){var a="undefined"!==typeof e&&e||"undefined"!==typeof self&&self||window,i=Function.prototype.apply;function o(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new o(i.call(setTimeout,a,arguments),clearTimeout)},t.setInterval=function(){return new o(i.call(setInterval,a,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(a,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n("6017"),t.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("c8ba"))},6017:function(e,t,n){(function(e,t){(function(e,n){"use strict";if(!e.setImmediate){var a,i=1,o={},r=!1,c=e.document,l=Object.getPrototypeOf&&Object.getPrototypeOf(e);l=l&&l.setTimeout?l:e,"[object process]"==={}.toString.call(e.process)?m():p()?h():e.MessageChannel?b():c&&"onreadystatechange"in c.createElement("script")?g():_(),l.setImmediate=s,l.clearImmediate=u}function s(e){"function"!==typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return o[i]=r,a(i),i++}function u(e){delete o[e]}function d(e){var t=e.callback,a=e.args;switch(a.length){case 0:t();break;case 1:t(a[0]);break;case 2:t(a[0],a[1]);break;case 3:t(a[0],a[1],a[2]);break;default:t.apply(n,a);break}}function f(e){if(r)setTimeout(f,0,e);else{var t=o[e];if(t){r=!0;try{d(t)}finally{u(e),r=!1}}}}function m(){a=function(e){t.nextTick((function(){f(e)}))}}function p(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}function h(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"===typeof n.data&&0===n.data.indexOf(t)&&f(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),a=function(n){e.postMessage(t+n,"*")}}function b(){var e=new MessageChannel;e.port1.onmessage=function(e){var t=e.data;f(t)},a=function(t){e.port2.postMessage(t)}}function g(){var e=c.documentElement;a=function(t){var n=c.createElement("script");n.onreadystatechange=function(){f(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}function _(){a=function(e){setTimeout(f,0,e)}}})("undefined"===typeof self?"undefined"===typeof e?this:e:self)}).call(this,n("c8ba"),n("4362"))},"67ca":function(e,t,n){},7273:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"f",(function(){return o})),n.d(t,"e",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return s}));var a=n("b775");function i(){return Object(a["a"])({url:"/projects/full/",method:"get"})}function o(e){return Object(a["a"])({url:"/projects/index/",method:"get",params:e})}function r(e){return Object(a["a"])({url:"/projects/index/"+e+"/",method:"get"})}function c(e){return Object(a["a"])({url:"/projects/index/",method:"POST",data:e})}function l(e,t){return Object(a["a"])({url:"/projects/index/"+e+"/",method:"put",data:t})}function s(e){return Object(a["a"])({url:"/projects/index/"+e+"/",method:"delete"})}},af13:function(e,t,n){"use strict";var a=n("2313"),i=n.n(a);i.a},d1ab:function(e,t,n){"use strict";var a=n("67ca"),i=n.n(a);i.a},ee60:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-alert",{attrs:{title:"ECS资源同步阿里云，页面中仅展示已绑定应用的ECS主机信息; 请在绑定资源界面中关联您的资源与应用",type:"info",effect:"light",closable:!1}}),e._v(" "),n("el-dialog",{attrs:{title:"应用绑定ECS",visible:e.bindDialogVisible,width:"40%","destroy-on-close":"","close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.bindDialogVisible=t},close:function(t){return e.resetForm("bindForm")}}},[n("div",{staticClass:"dialog-form"},[n("el-form",{ref:"bindForm",attrs:{model:e.bindEcsForm,rules:e.bindecsRules,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"应用名",prop:"app_name"}},[n("el-select",{staticStyle:{width:"84%"},attrs:{filterable:"",placeholder:"请选择"},model:{value:e.bindEcsForm.app_name,callback:function(t){e.$set(e.bindEcsForm,"app_name",t)},expression:"bindEcsForm.app_name"}},e._l(e.allApps,(function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),e._v(" "),n("el-form-item",{attrs:{label:"关联实例",prop:"instance"}},[n("el-transfer",{attrs:{filterable:"",titles:["可用实例","已选实例"],"filter-placeholder":"请输入搜索内容",data:e.instanceData},model:{value:e.bindEcsForm.instance,callback:function(t){e.$set(e.bindEcsForm,"instance",t)},expression:"bindEcsForm.instance"}})],1)],1)],1),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){return e.resetForm("bindForm")}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.bindEcs("bindForm")}}},[e._v("确 定")])],1)]),e._v(" "),n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formSearch}},[n("el-form-item",{attrs:{label:""}},[n("el-input",{attrs:{placeholder:"应用名"},model:{value:e.formSearch.app_name,callback:function(t){e.$set(e.formSearch,"app_name",t)},expression:"formSearch.app_name"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.handleSearch}},[e._v("搜索")])],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.handleDownload}},[e._v("模板下载")])],1),e._v(" "),n("el-form-item",[n("div",[n("el-upload",{staticClass:"upload-demo",attrs:{"http-request":e.handleFile,multiple:!1,limit:1,action:"sss",clearFiles:"","on-exceed":e.handleExceed,"file-list":e.fileList,"show-file-list":!1,"before-upload":e.beforeAvatarUpload}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"您需要下载模板并填入信息后再上传",placement:"top"}},[n("el-button",{attrs:{type:"primary"}},[e._v("批量资源绑定")])],1)],1)],1)]),e._v(" "),n("el-form-item",[n("el-button",{attrs:{loading:e.loading,type:"primary"},on:{click:e.handleBind}},[e._v("绑定资源")])],1)],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.app_id)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"应用名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.app_name)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"主机名",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.hostname)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"内网IP",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.inner_ip_addr)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"外网IP",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.outer_ip_addr)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"弹性IP",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.elastic_ip)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"vCPU",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.cpu_count)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"MEM",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.memory_size)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"DISK",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.disk_size)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"更新时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.update_time)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"created_at",label:"操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-s-operation",round:""},on:{click:function(n){return e.unBind(t.$index,t.row)}}},[e._v("解绑资源")])]}}])})],1),e._v(" "),e.total>0?n("el-pagination",{staticClass:"pagination",attrs:{"current-page":e.currentPage,"page-sizes":[10,20,50,100],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}):e._e()],1)},i=[],o=(n("7f7f"),n("28a5"),n("30b3")),r=n("7273"),c=n("5118"),l={data:function(){return{list:null,listLoading:!0,loading:!1,dialogList:null,dialogLoading:!0,formSearch:{app_name:""},bindEcsForm:{app_name:"",instance:[]},bindecsRules:{app_name:[{required:!0,trigger:"blur",message:"应用名不能为空"}],instance:[{required:!0,trigger:"blur",message:"ECS未选择"}]},centerDialogVisible:!1,bindDialogVisible:!1,instanceData:[],total:0,currentPage:1,pageSize:10,instances:{},allApps:[],fileList:[]}},created:function(){this.fetchData(),this.getAllProjects()},methods:{fetchData:function(){var e=this;this.listLoading=!0,Object(o["e"])().then((function(t){e.list=t.data.results,e.total=t.data.count,e.listLoading=!1})).catch((function(t){e.listLoading=!1,console.log(t)}))},getAllProjects:function(){var e=this;Object(r["d"])().then((function(t){for(var n=t.data,a=0;a<n.length;a++)"h5"!==n[a].name.split("-")[0]&&e.allApps.push({id:n[a].id,name:n[a].name})})).catch((function(e){console.log(e.response)}))},handleSearch:function(){var e=this;Object(o["e"])({app_name:this.formSearch.app_name}).then((function(t){e.list=t.data.results,e.total=t.data.count})).catch((function(e){console.log(e)}))},handleSizeChange:function(e){this.pageSize=e,this.findPage(this.currentPage,this.pageSize)},handleCurrentChange:function(e){this.currentPage=e,this.findPage(this.currentPage,this.pageSize)},findPage:function(e,t){var n=this;Object(o["e"])({page:e,page_size:t}).then((function(e){n.list=e.data.results,n.total=e.data.count})).catch((function(e){console.log(e)}))},unBind:function(e,t){var n=this;this.$confirm("你真的要解绑定 "+t.hostname+" 么？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(o["j"])(t.id).then((function(e){for(var a=0;a<n.list.length;a++)n.list[a].id===t.id&&n.list.splice(a,1);n.total-=1,n.$message({type:"success",message:"解绑定成功!"})})).catch((function(){n.$message({type:"error",message:"解绑定失败!"})}))})).catch((function(){}))},handleDownload:function(){Object(o["i"])().then((function(e){var t=new Blob([e.data],{type:"application/vnd.ms-excel"}),n=document.createElement("a");n.href=window.URL.createObjectURL(t),n.download="ecs_template.csv",n.click(),console.log("download success")})).catch((function(e){console.log(e)}))},handleBind:function(){var e=this;this.loading=!0,this.instanceData=[],Object(o["g"])().then((function(t){for(var n=t.data,a=0;a<n.length;a++)e.instanceData.push({key:n[a].id,label:n[a].inner_ip_addr})})).catch((function(e){console.log(e)})),Object(c["setTimeout"])((function(){e.loading=!1,e.bindDialogVisible=!0}),1e3)},bindEcs:function(e){var t=this;this.$refs[e].validate((function(e){if(e){var n={app_id:t.bindEcsForm.app_name,ecs_list:t.bindEcsForm.instance};Object(o["c"])(n).then((function(e){200===e.status&&(t.bindDialogVisible=!1,t.$message.success("绑定成功"),Object(c["setTimeout"])((function(){t.fetchData()}),2e3))})).catch((function(e){console.log(e)}))}else console.log("error")}))},resetForm:function(e){this.bindDialogVisible=!1,this.$refs[e].resetFields()},beforeAvatarUpload:function(e){var t="csv"===e.name.split(".")[e.name.split(".").length-1],n=e.size/1024/1024<5;return t||this.$message.error("上传文件只能是 csv 格式!"),n||this.$message.error("上传文件大小不能超过 5MB!"),t&&n},handleFile:function(e){var t=this;this.fileList.push(e.file);var n=new FormData;n.append("file",this.fileList[0]),Object(o["d"])(n).then((function(e){t.$message.success("批量绑定成功"),t.fileList=[],Object(c["setTimeout"])((function(){t.fetchData()}),2e3)})).catch((function(e){t.fileList=[],console.log(e)}))},handleExceed:function(e,t){this.$message.warning("最多上传 ".concat(e.length," 个文件"))}}},s=l,u=(n("d1ab"),n("af13"),n("2877")),d=Object(u["a"])(s,a,i,!1,null,"a221f44a",null);t["default"]=d.exports}}]);