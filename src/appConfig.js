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
            },
            customfield_10870: "FXM-1000"
        }
	},
    LAYOUT_EXAMPLE_EPIC_DATA: {
        epics: [
            {
                key: "FXM-1000",
                epicLabel: "Technical debt",
                epicColor: "yellow"
            }
        ]
    },
	LAYOUT_CONFIG: {
        keys: ["color", "qrcode", "parent", "epic", "priority", "estimate"],
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
            epic: {
                label: "Epic",
                checked: true
            },
            priority: {
                label: "Priority",
                checked: true
            },
            estimate: {
                label: "Estimate task point",
                checked: true
            }
        }
	}
};

module.exports = AppConfig;