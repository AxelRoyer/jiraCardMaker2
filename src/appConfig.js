var AppConfig = {
	LAYOUT_EXAMPLE_TASK_DATA: {
		key: "FXM-1000",
      	title: "Update login-screen",
      	epic: "web components",
      	parent: "FXM-18",
        fields: {
            priority: {
              id: "4",
              name: "High"
            },
            summary: "Update login screen with wecomponents",
            customfield_10243: 4,
            issuetype: {
            	name: "Bug",
            	color: "red"
            }
        }
	},
	LAYOUT_CONFIG: {
        keys: ["color", "qrcode", "parent", "component", "epic", "priority", "version", "estimate"],
        parameters: {
            color: {
                label: "Color",
                checked: true
            },
            qrcode: {
                label: "QR Code",
                checked: true
            },
            parent: {
                label: "Parent",
                checked: true
            },
            component: {
                label: "Component",
                checked: false
            },
            epic: {
                label: "Epic",
                checked: true
            },
            priority: {
                label: "Priority",
                checked: true
            },
            version: {
                label: "Version",
                checked: false
            },
            estimate: {
                label: "Estimate task point",
                checked: true
            }
        }
	}
};

module.exports = AppConfig;