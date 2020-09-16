module.exports = {
	someSidebar: {
		Documents:
			[
				"introduction",                                   // 1. Introduction
				{
					"2. Glasswall Core":
						[
							"glasswall_core/glasswall_rebuild",   // 2.1
							"glasswall_core/glasswall_editor",    // 2.2
							"glasswall_core/glasswall_web_api",   // 2.3
							"glasswall_core/glasswall_tools",     // 2.4
							"glasswall_core/glasswall_licencing"  // 2.5
						]
				},
				{
					"3. Glasswall Core Builds":
					[
						"glasswall_core_builds/build_agents",      // 3.1
						"glasswall_core_builds/versioning",        // 3.2
						"glasswall_core_builds/build_definitions"  // 3.3
					]
				},
				"guides",                                          // 4. Guides
				{
					"5. Testing":
					[
						"testing/core_test_strategy",
						"testing/automated_testing",
						"testing/manual_testing",
						"testing/testing_guidelines"
					]
				},
				{
					"6. Development":
					[
						"development/development_process",
						"development/coding_guidelines",
						"development/branching_strategy",
						"development/unit_testing",
						{
							"6.5 Code Reviews":
							[
								"development/code_reviews/code_review_overview",
								"development/code_reviews/code_collaborator"
							]
						}
					]
				},
				{
					"7. Deployment":
					[
						{
							"7.1 Release Process":
							[
								"deployment/release_process/release_process_overview",
								"deployment/release_process/release_notes"
							]
						},
						{
							"7.2 Glasswall SDK Documentation":
							[
								"deployment/glasswall_sdk_documentation/glasswall_rebuild_sdk_documentation",
								"deployment/glasswall_sdk_documentation/glasswall_editor_sdk_documentation"
							]
						}

					]
				},
				"other_related_links"
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