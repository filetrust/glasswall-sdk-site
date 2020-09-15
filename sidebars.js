module.exports = {
	someSidebar: {
		Documents:
			[
				"introduction",
				{
					"2. Glasswall Core":
						[
							"glasswall_core/glasswall_rebuild",   // sidebar_label: 2.1 Glasswall Rebuild. File will contain links to all the documents
							"glasswall_core/glasswall_editor",    // sidebar_label: 2.2 Glasswall Editor
							"glasswall_core/glasswall_web_api",   // sidebar_label: 2.3 Glasswall Web API
							"glasswall_core/glasswall_tools",     // sidebar_label: 2.4 Tools
							"glasswall_core/glasswall_licencing"  // sidebar_label: 2.5 Licencing
						]
				}
			],
		"How-To's":
			[
				{
					"CI/CD": [
						"how-tos/ci-cd-pipeline"
					]
				}
			]
	},
};