sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/f/FlexibleColumnLayoutSemanticHelper"
], function (jQuery, UIComponent, JSONModel, FlexibleColumnLayoutSemanticHelper) {
	"use strict";

	var Component =  UIComponent.extend("sap.kadaster.FlexibleColumnLayoutWithOneColumnStart.Component", {
		metadata: {
			manifest: "json",
			config: {
				sample: {
					iframe: "webapp/index.html",
					stretch: true,
					files: [
						"view/Detail.view.xml",
						"view/DetailDetail.view.xml",
						"view/FlexibleColumnLayout.view.xml",
						"view/Master.view.xml",
						"view/AboutPage.view.xml",
						"controller/Detail.controller.js",
						"controller/DetailDetail.controller.js",
						"controller/FlexibleColumnLayout.controller.js",
						"controller/Master.controller.js",
						"controller/AboutPage.controller.js",
						"Component.js",
						"index.html",
						"manifest.json"
					]
				}
			}
		},

		init: function() {
			UIComponent.prototype.init.apply(this, arguments);

			var oModel = new JSONModel();
			this.setModel(oModel);

			// set products demo model on this sample
			var oProductsModel = new JSONModel(jQuery.sap.getModulePath("sap.kadaster.FlexibleColumnLayoutWithOneColumnStart", "/model/products.json"));
			oProductsModel.setSizeLimit(1000);
			this.setModel(oProductsModel, "products");

			this.getRouter().initialize();
		},
		
		createContent: function () {
			return sap.ui.view({
				viewName: "sap.kadaster.FlexibleColumnLayoutWithOneColumnStart.view.FlexibleColumnLayout",
				type: "XML"
			});
		},

		/**
		 * Returns an instance of the semantic helper
		 * @returns {sap.f.FlexibleColumnLayoutSemanticHelper} An instance of the semantic helper
		 */
		getHelper: function () {
			var oFCL = this.getRootControl().byId("fcl"),
				oParams = jQuery.sap.getUriParameters(),
				oSettings = {
					defaultTwoColumnLayoutType: sap.f.LayoutType.TwoColumnsMidExpanded,
					defaultThreeColumnLayoutType: sap.f.LayoutType.ThreeColumnsMidExpanded,
					mode: oParams.get("mode"),
					initialColumnsCount: oParams.get("initial"),
					maxColumnsCount: oParams.get("max")
				};

			return FlexibleColumnLayoutSemanticHelper.getInstanceFor(oFCL, oSettings);
		}
	});
	return Component;
}, true);