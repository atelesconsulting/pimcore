/**
 * Pimcore
 *
 * This source file is subject to the GNU General Public License version 3 (GPLv3)
 * For the full copyright and license information, please view the LICENSE.md and gpl-3.0.txt
 * files that are distributed with this source code.
 *
 * @copyright  Copyright (c) 2009-2016 pimcore GmbH (http://www.pimcore.org)
 * @license    http://www.pimcore.org/license     GNU General Public License version 3 (GPLv3)
 */

pimcore.registerNS("pimcore.object.classes.data.email");
pimcore.object.classes.data.email = Class.create(pimcore.object.classes.data.data, {

    type: "input",
    /**
     * define where this datatype is allowed
     */
    allowIn: {
        object: true,
        objectbrick: true,
        fieldcollection: true,
        localizedfield: false
    },

    initialize: function (treeNode, initData) {
        this.type = "email";

        if(!initData["name"]) {
            initData = {
                title: t("email")
            };
        }

        initData.fieldtype = "email";
        initData.datatype = "data";
        initData.name = "email";
        treeNode.setText("email");

        this.initData(initData);

        this.treeNode = treeNode;
    },

    getTypeName: function () {
        return t("email");
    },

    getGroup: function () {
            return "crm";
    },

    getIconClass: function () {
        return "pimcore_icon_email";
    },

    getLayout: function ($super) {

        $super();

        var nameField = this.layout.getComponent("standardSettings").getComponent("name");
        nameField.disable();

        this.specificPanel.removeAll();
        this.specificPanel.add([
            {
                xtype: "spinnerfield",
                fieldLabel: t("width"),
                name: "width",
                value: this.datax.width
            },{
                xtype: "spinnerfield",
                fieldLabel: t("columnlength"),
                name: "columnLength",
                value: this.datax.columnLength
            }
        ]);

        return this.layout;
    }

});
