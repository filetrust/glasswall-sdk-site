(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{163:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return c}));var n=a(2),r=a(6),o=(a(0),a(221)),s={title:"7.9.4 GWDemonstrator Test Tool",sidebar_label:"7.9.4 GWDemonstrator Test Tool"},i={unversionedId:"7-tools/7_9-testing/7_9_4-gwdemonstrator_test_tool",id:"7-tools/7_9-testing/7_9_4-gwdemonstrator_test_tool",isDocsHomePage:!1,title:"7.9.4 GWDemonstrator Test Tool",description:"This document needs to be brought in line with the RFC, see",source:"@site/docs/7-tools/7_9-testing/7_9_4-gwdemonstrator_test_tool.md",slug:"/7-tools/7_9-testing/7_9_4-gwdemonstrator_test_tool",permalink:"/glasswall-sdk-site/docs/7-tools/7_9-testing/7_9_4-gwdemonstrator_test_tool",version:"current",sidebar_label:"7.9.4 GWDemonstrator Test Tool",sidebar:"someSidebar",previous:{title:"7.9.3 Glasswall Regression Tester",permalink:"/glasswall-sdk-site/docs/7-tools/7_9-testing/7_9_3-glasswallregressiontester"},next:{title:"7.9.5 GWFile Process Status Validator",permalink:"/glasswall-sdk-site/docs/7-tools/7_9-testing/7_9_5-gwfile_process_status_validator"}},l=[{value:"Conventions",id:"conventions",children:[]},{value:"<strong>DESCRIPTION</strong>",id:"description",children:[]},{value:"<strong>FILES</strong>",id:"files",children:[]},{value:"Processing Setup",id:"processing-setup",children:[{value:"Processing Progress",id:"processing-progress",children:[]},{value:"Processing Network",id:"processing-network",children:[]},{value:"Scan History",id:"scan-history",children:[]},{value:"Scan History Options",id:"scan-history-options",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Selecting Database type",id:"selecting-database-type",children:[]},{value:"GwDemonstrator with SQL Server 2008 R2",id:"gwdemonstrator-with-sql-server-2008-r2",children:[]},{value:"GwDemonstrator with SSCE",id:"gwdemonstrator-with-ssce",children:[]}]}],b={rightToc:l};function c(e){var t=e.components,s=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{style:{color:"red"}},"This document needs to be brought in line with the RFC, see"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/filetrust/Glasswall-Documents-Triage/blob/master/rfc_glasswall_core_documentation_format.md"}),"Request for Comments: Standardisation of Core Team Documentation for Programs and Scripts"),"."),Object(o.b)("h3",{id:"conventions"},"Conventions"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Bold")," -- This is used for key words that are used in the application\nUI."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Italics")," -- This is used to identify extracts from code or log files."),Object(o.b)("h3",{id:"description"},Object(o.b)("strong",{parentName:"h3"},"DESCRIPTION")),Object(o.b)("p",null,"GWDemonstrator is designed to process large numbers of files\nquickly. It overcomes the singled threaded nature of the Glasswall DLL\nby running a number of processing clients in parallel, all controlled\nfrom the server application and reporting results back to the server\napplication. Results are persisted to database enabling detailed reports\nto be extracted during post-processing."),Object(o.b)("p",null,"The GWDemonstrator test application consists of a suite of executables\nand associated DLLs. It makes use of the Glasswall DLL, having a\ndependency on the Glasswall API and the format of the analysis report."),Object(o.b)("p",null,"The GWDemonstrator.exe can operate in two modes: GUI or Command line. If\nno arguments are passed in on the command-line then GUI mode is\nselected. The user interface is presented as shown below."),Object(o.b)("p",null,Object(o.b)("img",{src:a(366).default})),Object(o.b)("h3",{id:"files"},Object(o.b)("strong",{parentName:"h3"},"FILES")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Executable"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"DLLs"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Purpose"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GWDemonstrator.exe"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CommandLine.dll",Object(o.b)("br",null),"GWDemonstratorDataLayer.dll",Object(o.b)("br",null),"GWDemonstratorShared.dll",Object(o.b)("br",null),"System.Data.SqlServerCe.dll"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Principle application of the suite that drives the scans and stores the results.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GwDemoDBAdministrator.exe"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GWDemonstratorDataLayer.dll",Object(o.b)("br",null),"GWDemonstratorShared.dll"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Provides functionality to create and remove analysis database instances on an SQL Server database.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GWDemonstratorClient.exe"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"glasswall.classic.dll",Object(o.b)("br",null),"GWDemonstratorShared.dll"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Multiple instances of this client application connect to the GWDemonstrator.exe application providing parallel document processing funcionality.")))),Object(o.b)("h2",{id:"processing-setup"},"Processing Setup"),Object(o.b)("p",null,"This tab is where the file scanning is configured and started."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Source Documents"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User configurable to specify the root folder from which processing will start. The location can be type directly, or selected using the 'folder browser' provided by the Select button. The Start button will not be enabled until a valid Source Folder is specified.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Write to Disk"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This checkbox enables the user to specify whether the results of the scan should be saved to disk. If this item is selected, a valid output folder must be provided in the        adjacent text box.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Write Database Report"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Each analysis report received from the processing of the documents is stored in the database. If this checkbox is enabled, it is this version of the report that is written to disk (if 'Write to Disk' is enabled). If this checkbox is not enabled, then the original analysis report received from the processing client is written.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"File Filter"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any files that are not recognised by Glasswall are reported as ",Object(o.b)("strong",{parentName:"td"},"unmanaged"),". The checkboxes provided in the ",Object(o.b)("strong",{parentName:"td"},"File Filter")," group enable any Glasswall recognised file types to be found during the file search.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Summary Results"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This table (shown in the screenshot below) is updated in real-time as files are processed. If give a report of the number of files of each processed, and whether they were managed or found to be non-conforming.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The progress bar and associated statistics fields are also updated in real-time. The total files statistic may not be accurate until close to the end of processing. This is due to an implementation constraint that stops overloading in the event of extremely large file sets being processed. As a results this field will only ever be a maximum of 500 documents greater than the  ",Object(o.b)("strong",{parentName:"td"},"processed documents")," field.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Start button"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This button is contextual; it is enabled when a valid scan configuration is available, and switches to ",Object(o.b)("strong",{parentName:"td"},"Stop")," when a scan is in progress.")))),Object(o.b)("p",null,Object(o.b)("img",{src:a(367).default})),Object(o.b)("h3",{id:"processing-progress"},"Processing Progress"),Object(o.b)("p",null,"This tab provides detailed information on the results of the current scan."),Object(o.b)("p",null,Object(o.b)("img",{src:a(368).default})),Object(o.b)("p",null,"Each line of the report represents a file processed whilst searching the\nspecified folder hierarchy. The file status can either be ",Object(o.b)("strong",{parentName:"p"},"Managed")," or\n",Object(o.b)("strong",{parentName:"p"},"Non-conforming"),". In the event of a file being non-conforming, the\nerror message provided by the Glasswall DLL is logged. This may not be\nthe only issue in the document. For a detailed description of what was\nfound in the document the ",Object(o.b)("strong",{parentName:"p"},"Review")," button will open up a form\ndisplaying an abridged version of the analysis report. The displayed\ninformation includes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Issue Items"),Object(o.b)("li",{parentName:"ul"},"Sanitisation Items"),Object(o.b)("li",{parentName:"ul"},"Remedy Items")),Object(o.b)("p",null,"All grouped within their Content Groups. The report form is modal, but\ndoes not affect the progress of the current scan if reports are viewed\nwhilst the scan is in progress."),Object(o.b)("h3",{id:"processing-network"},"Processing Network"),Object(o.b)("p",null,"This tab provides information regarding the collection of\n",Object(o.b)("strong",{parentName:"p"},"GWDemonstratorClient")," applications that have connected to the\n",Object(o.b)("strong",{parentName:"p"},"GwDemonstrator")," application are and are available to support\nprocessing."),Object(o.b)("p",null,Object(o.b)("img",{src:a(369).default})),Object(o.b)("p",null,"The Connection Port is the TCP port opened\nby GwDemonstrator to which the clients should attach. If more than one\ninstance of GwDemonstrator is running on a single platform, this value\nwill need to be modified as only one application can open the port.\n",Object(o.b)("strong",{parentName:"p"},"GWDemonstratorClient")," configuration would have to be set\nappropriately if this configuration item is changed. Details of this are\nprovided in a later section."),Object(o.b)("h3",{id:"scan-history"},"Scan History"),Object(o.b)("p",null,"Each time the ",Object(o.b)("strong",{parentName:"p"},"Processing Setup")," tab's ",Object(o.b)("strong",{parentName:"p"},"Start")," button is pressed, a\nnew scan is started. This tab provides details of all the scans that are\ncurrently available in the connected database."),Object(o.b)("p",null,Object(o.b)("img",{src:a(370).default})),Object(o.b)("p",null,"For each scan the table displays the following information"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Purpose"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This is the name of the Scan. It defaults to the datetime stamp of when the scan started. This is an editable field, enabling the user to provide a meaningful name.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Date"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The date and time at which the scan was started.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Owner"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The network identity of the user who triggered the scan.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Version"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The version of Glasswall DLL used to process the scan")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Source Folder"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The root folder of the scan.")))),Object(o.b)("p",null,"The scan list can be filtered using the ",Object(o.b)("strong",{parentName:"p"},"Scan Owner")," and ",Object(o.b)("strong",{parentName:"p"},"Date\nRange")," fields."),Object(o.b)("p",null,"Filtering by ",Object(o.b)("strong",{parentName:"p"},"Scan Owner")," enables the list to display only those scans\nstarted by the specified owner. The drop-down list is populated from the\ndisplayed scans. Selecting ",Object(o.b)("strong",{parentName:"p"},"All")," allows the scans from all users to be\ndisplayed."),Object(o.b)("p",null,"Filtering by ",Object(o.b)("strong",{parentName:"p"},"Date Range")," enables the user to define the period in\nwhich the scan started."),Object(o.b)("h3",{id:"scan-history-options"},"Scan History Options"),Object(o.b)("p",null,"There are a number of context sensitive menu options available to the\nuser from this table."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Menu Item"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Purpose"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Summary"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This provides a brief report of the scan results, similar to that displayed on the ",Object(o.b)("strong",{parentName:"td"},"Processing Setup")," and ",Object(o.b)("strong",{parentName:"td"},"Processing Progress")," tabs whilst the scan is in progress.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Compare"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This is only enabled if two scans are selected. Selecting this menu option displays a form that enables the results of two scans to be displayed. The form has three areas: two areas list the files that are unique to that scan. The third area compares the results of the file processing between the two scans.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"In order to highlight any differences, a checkbox is provided that, when enabled, filters that comparison area to only show the results that differ between scans")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Edit"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Selecting this option enables the user to modify the scan name.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Delete"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Selecting this option enables the scan results to be deleted from the database ","[",Object(o.b)("em",{parentName:"td"},"not yet implemented"),"]",".")))),Object(o.b)("h3",{id:"configuration"},"Configuration"),Object(o.b)("h4",{id:"client-application-start-up"},"Client application start-up"),Object(o.b)("p",null,"The GwDemonstratorClient is a command-line application. It is provided\nwith GwDemonstrator application connection information on the command\nline"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"GWDemonstratorClient.exe localhost:25")),Object(o.b)("p",null,"Where 'localhost' specifies the host of the GwDemonstrator application\nand '25' identifies the IP port in use by the GwDemonstrator\napplication."),Object(o.b)("p",null,"'25' is the default port number. If this port is already in use on the\nhost PC, it may be changed by updating the value in the 'Processing\nNetwork' tab of GwDemonstrator application. The same port number should\nthen be used on the GwDemonstratorClient command line."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"If no arguments are provided on the command line, then the defaults\nshown above will be used.")),Object(o.b)("p",null,"If two instances of GwDemonstrator are started on the same PC, the port\nnumber of one will need to be changed."),Object(o.b)("p",null,"When the GwDemonstratorClient application starts-up it attempts to\nconnect to the GwDemonstrator application on the specified port. If the\nGwDemonstrator application has not yet been started (or has a different\nport number specified) then the client application will poll\ncontinuously."),Object(o.b)("p",null,"Once the GwDemonstratorClient connects to the GwDemonstrator application\nthe GwDemonstrator requests the Glasswall DLL version, which is then\nprovided by the client. This finishes the start-up sequence."),Object(o.b)("p",null,"It is recommended that the number of GwDemonstratorClient instances\nrunning does not exceed the number of cores available on the host PC."),Object(o.b)("h4",{id:"gwdemonstrator-command-line-mode"},"GwDemonstrator Command Line Mode"),Object(o.b)("p",null,"Triggering the GwDemonstrator from the command line with arguments puts\nthe application into command line mode."),Object(o.b)("p",null,Object(o.b)("img",{src:a(371).default})),Object(o.b)("p",null,"In this mode the application processes the specified folder hierarchy,\ninserting the results into the specified database. The screen show above\ndetails the necessary configuration. The GWDemonstratorClient\napplications need to be started separately."),Object(o.b)("h4",{id:"gwdemonstrator-database-usage"},"GwDemonstrator Database Usage"),Object(o.b)("h3",{id:"selecting-database-type"},"Selecting Database type"),Object(o.b)("p",null,"Database selection is available under the Configuration menu item."),Object(o.b)("p",null,"The required database is selected from the dropdown list. The\nconfiguration may not be changed once a scan has started."),Object(o.b)("p",null,"The default database at start up is the SQL Server Compact Edition\n(SSCE)."),Object(o.b)("p",null,"If the Server SQL 2008 R2 database has already been configured,\nselecting the required database from the drop down is the only action\nrequired to switch between databases."),Object(o.b)("h3",{id:"gwdemonstrator-with-sql-server-2008-r2"},"GwDemonstrator with SQL Server 2008 R2"),Object(o.b)("p",null,"The GwDemonstrator can be configured to use a Server SQL 2008 R2\ndatabase instead of the default SSCE database."),Object(o.b)("h4",{id:"creating-the-database"},"Creating the database"),Object(o.b)("p",null,"SQL Scripts are provided to create an instance of a GwDemonstrator\ndatabase and create the necessary tables. It is beyond the scope of this\npresentation to give detailed instructions on how to do this. Often the\nSQL Server is under the control of a DBA or the IT department. If this\nis the case, then it is unlikely that anyone else has sufficient\nprivileges to create database or tables. These scripts can be provided\nto an appropriately privileged individual for them to run."),Object(o.b)("p",null,"Any individual who wishes to store results to the SQL Server 200 R2\ndatabase will need to have the ",Object(o.b)("em",{parentName:"p"},"db_datawriter")," privilege enabled. Any\nindividual who wishes to extract information from the database will need\nto have the ",Object(o.b)("em",{parentName:"p"},"db_datareader")," privilege. These privileges should be set up\nwhen the database is created."),Object(o.b)("p",null,"When the database has been created, its name and the database hostname\nare required in order to configure the GwDemonstrator application."),Object(o.b)("h4",{id:"configuring-gwdemonstrator"},"Configuring GwDemonstrator"),Object(o.b)("p",null,"The database configuration is stored in the application ini file. This\nfile is only created if the application configuration is changed from\ndefault value. The following steps are required to change to using the\nnewly created SQL server database."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Start GwDemonstrator application and select the\n",Object(o.b)("em",{parentName:"p"},"Configuration","|","Database")," menu option")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"From the drop down list, select ",Object(o.b)("em",{parentName:"p"},"gwAnalysisSQLServer2008"),", and click\nthe OK button")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Shutdown GwDemonstrator")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Open app.ini")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Update the ",Object(o.b)("em",{parentName:"p"},"SQLServerSource")," and ",Object(o.b)("em",{parentName:"p"},"SQLServerDbName")," to the server\nhostname and database name")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Restart GwDemonstrator"))),Object(o.b)("p",null,"All subsequent scan information will be written to the specified SQL\nserver database."),Object(o.b)("p",null,"Once the above steps have been completed, switching between the two\ndatabase types can be done through the ",Object(o.b)("em",{parentName:"p"},"Configuration","|","Database")," menu\noption. The option is not available whilst scans are in progress."),Object(o.b)("h3",{id:"gwdemonstrator-with-ssce"},"GwDemonstrator with SSCE"),Object(o.b)("p",null,"The SSCE means that processing results can be persisted to a database\nwithout the need for a full SQL Server database being provisioned. It\nshould be understood that the use of the SSCE for extremely large file\nsystems this database is not recommended. Nor is it recommended for\nscenarios where complicated queries will be required on the scanned\ninformation as only a reduced set of TRANSACT-SQL command is made\navailable. It is possible to export data from SSCE to a full SQL Server\ndatabase (the details of this are beyond the scope of this document)."))}c.isMDXComponent=!0},221:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),c=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=n,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return a?r.a.createElement(m,i(i({ref:t},b),{},{components:a})):r.a.createElement(m,i({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var b=2;b<o;b++)s[b]=a[b];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},366:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/demonstrator1-e0ae7ba3f2d471eab11fa21c0799f24b.png"},367:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/demonstrator2-58d00f9134ae847cf3a75f8439fbe9c0.png"},368:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/demonstrator3-b9eda3c9eaa45f8afb96564b684bedff.png"},369:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/demonstrator4-f770851d41c41bdab6cd8316a6f239f1.png"},370:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/demonstrator5-808faffeb6c436f866197e33fd9b10a4.png"},371:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/demonstrator6-618ba67d41809429496b537937d55137.png"}}]);