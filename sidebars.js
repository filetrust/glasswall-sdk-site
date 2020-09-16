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
				},
				{
					"3. Glasswall Core Builds":
					[
						"glasswall_core_builds/build_agents", // 3.1
						"glasswall_core_builds/versioning",
						"glasswall_core_builds/build_definitions"
					]
				},
				"guides",
				{
					"5. Testing":
					[
						"testing/core_test_strategy",
						"testing/automated_testing",
						"testing/manual_testing",
						"testing/testing_guidelines"
					]
				}
			],
			
/* 		"How-To's":
			[
				{
					"CI/CD": [
						"how-tos/ci-cd-pipeline"
					]
				}
			] */
	},
};