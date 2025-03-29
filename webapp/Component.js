sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], (UIComponent,JSONModel,ResourceModel)=>{
    "use strict";
    return UIComponent.extend("ui5.walkthrough.Component",{
        metadata : {
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
        },
        init() {
            //llama al init padre de la vista
            UIComponent.prototype.init.apply(this, arguments);
            //seteamos el modelo de datos
            var oData = {
                recipient : {
                   name : "World"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);
            
        }
    });
});