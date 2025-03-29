sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], (Controller,MessageToast,Fragment) => {
    "use strict";
    return Controller.extend("ui5.walkthrough.controller.HolaPanel", {
        onShowHello() {

            //leer mensaje del modelo i18n
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            MessageToast.show(sMsg); //Este linea utiliza el objeto MessageToast para mostrar el mensaje
        },
        onAccionDialogo(){
            var oView= this.getView();
            //creo el dialogo
            if(!this.byId("holaDialogo")){
                //cargar el fragmento de xml
                Fragment.load({
                    id: oView.getId(),
                    name:"ui5.walkthrough.view.HolaDialogo"

                }).then(function(oDialogo){
                    //conectar la vista con los modelos
                    oView.addDependent(oDialogo);
                    oDialogo.open();
                })
            }else{
                this.byId("holaDialogo").open();
            }                
        }
    });
});
