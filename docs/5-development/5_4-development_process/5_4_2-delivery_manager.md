---
title: 5.4.2 Core Delivery Manager Guide
sidebar_label: 5.4.2 Core Core Delivery Manager Guide
---

## Document History

Table 1: Document Change History

| **Issue Number** | **Description** |
| --- | --- |
| 0.1 | Initial Draft |

## Delivery Manager

The delivery manager is responsible for monitoring and tracking the progress of each project. The role involves the following:

### Keeping all parties on track and informed

Getting updates on a project&#39;s progress, identifying potential roadblocks, and escalating to the core management team. The delivery manager must provide updates on how the project is progressing at the weekly squad review meeting. Ultimately, to ensure that the team is progressing well against estimates and to the desired outcome. Delivery managers also provide updates to the entire core team at the weekly core meeting.

### Agreeing and monitoring Project Objectives

The DM needs to be sure they have a clear understanding of the project objectives. An Epic will be created in Azure DevOps with the project objectives listed. Work items can then be associated with the Epic. A project is considered complete when all objectives listed in the Epic have been met.

The project objectives should be entered into the description for the Epic. List what is in scope and what is not in scope. Adding what is not in scope helps set the boundaries of what is to be delivered. Try to word objectives clearly so it is easy to determine if it has been met or not.

#### The goal posts have moved

If a requested change to a project will, in the opinion of the DM, materially affect the project objectives the DM will stop all work on the project until the impact on the project is understood and the change agreed with core team management, and all appropriate work items updated, or rejected.

### Scheduling

Although this is not strictly required when working using a Kanban board some outline scheduling can be useful to provide a rough idea when the project will be finished and as a baseline to track progress. At a minimum work out a likely sequence of tasks with the team members available and see how that fits timewise. As our projects are small using some form of Gantt chart tool is not necessary but may be helpful when there are a lot of dependent tasks.

Be realistic about any schedule you create. When working out overall timescale consider a working week to only have 4 days.

### Monitoring, reporting and escalations

#### How complete is my project?

To provide a simplistic view of how complete a project is use the following formula:

Sum of Story points for all completed tasks + 25% Sum of Story points for all started tasks %
 Sum of story points for all tasks

Treat bugs as 3 story points. This figure is to be reported to core team management at weekly progress reviews.

If you have done some form of scheduling you should be able to predict what the expected completion percentage is at a moment in time and compare to what is actually happening. This can give indications of corrective action is required if you are significantly behind where you expect to be.

#### Escalations

The principle followed by the core management team is management by exception. Unless you tell us otherwise we assume all is going well. Part of the DM&#39;s role is to take some of the burden of managing the team&#39;s work.

Typical items that should be escalated to the core team management:

1. Significant delays or resource issues
2. Issues requiring management assistance
3. Significant scope creep
4. Risks and issues

Use your common sense on what to report but one of the fundamental truths is that management at any level don&#39;t like nasty surprises. It&#39;s always better to give early warning of potential issues than wait for them to have a catastrophic effect.

### Risk management

DM&#39;s need to consider 2 types of risk in their project:

1. Project Risks – things that could impact the delivery of the project, i.e. possible delays resource issues.
2. Product Risks - things that could impact the quality of what is delivered, i.e. missing functionality.

Make a list of potential risks to your project and consider how you would deal with them if they occur.

As part of weekly updates to the core management Team DM&#39;s should highlight any risks they are concerned about.

### Change management

Other changes may be needed to accomplish the project objectives, i.e. change in approach or adding additional features. The impacts of required changed should be assessed, tasked out if necessary and if they require more than 2 days effort escalated to core management team. Smaller impacts can be communicated at regular catch ups.

### JIRA Mappings

Delivery managers are responsible for mapping their projects on JIRA for company-wide visibility and tracking. Ensuring information on JIRA is up to date and in sync with the core development teams Kanban board. The mapping can be done with the help of an Upwork PM **.**