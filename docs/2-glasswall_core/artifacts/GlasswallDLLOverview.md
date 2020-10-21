---
title: Glasswall API Overview
---

This documents the Application Programming Interface (API) within the Windows Dynamic Link Library `glasswall.classic.dll` and the Linux shared object `libglasswall.classic.so`.

The API provides the following functionality:

- The production of reports detailing deep analysis of documents
- The management of documents against a configurable content management policy
- The force regeneration of documents against a configurable content management policy
- The production of detailed process reporting
- The modification of the content management policy

Where an API argument type is `wchar_t`, the argument must be converted to a wide character type before passing in to the API function.

The code snippet below provides a framework showing how this might be done on a GNU/Linux system, where the default encoding of the file system is UTF-8 (which can be verified by using the `locale(1P)` command: `locale charmap` in a terminal window). For the purpose of the example below, a string literal in UTF-8 encoding has been used.

	    /* Standard C headers */
	#include <limits.h>
	#include <locale.h>
	#include <string.h>
	#include <stdio.h>
	#include <stdlib.h>
	
	    /* platform dependent headers */
	#include <iconv.h>
	
	    /* define error handler to print message and exit */
	#define handle_error(msg) \
	        do { perror(msg); exit(EXIT_FAILURE); } while (0)

	int main(void)
	{
		char path[PATH_MAX] = "testfile/история карагача.doc";
		char *ppath = path;
	
		wchar_t wcpath[PATH_MAX * sizeof(wchar_t)];
		wchar_t * const pwcpath_start = wcpath;  /* iconv() changes param values; preserve start address */
		char *pwcpath = (char *)wcpath;
	
		size_t bpathremain = strlen(ppath)+1;                /* bytes, path remaining; +1 to include terminating null character */
		size_t bwcpathremain = (PATH_MAX) * sizeof(wchar_t); /* bytes, wide character path remaining */
		size_t retval;
		eGwFileStatus rv;
			
			/* convert from UTF-8 to wchar_t for API interface */
		iconv_t cd = iconv_open("WCHAR_T", "UTF-8");
		if (cd == (iconv_t)-1)
			handle_error("iconv_open() FAILED");
	
		/* Set the locale for LC_CTYPE to the implementation-defined native locale 
		 * so the way the print and scan functions declared in <stdlib.h> and <stdio.h> 
		 * correctly parse and translate multibyte strings
		 */
		setlocale(LC_CTYPE, "");  
	
		/* convert the file name from UTF-8 string to wide character string */
		retval = iconv(cd, &ppath, &bpathremain, &pwcpath, &bwcpathremain);
	
		if (retval == (size_t)-1)
			handle_error("iconv() FAILED");
		 
			/* set up the policy */
		rv = GWFileConfigXML(cmPolicy);
		if (rv != eGwFileStatus_Success)
		{
			fprintf(stderr, "pGWFileConfigXML() FAILED with status %d\n", rv);
			exit(EXIT_FAILURE);
		}
	
			/* process the file */	
		rv = GWFileToFileProtectAndReport(pwcpath_start, L"doc", L"/tmp/generatedfile.doc", L"/tmp/generatedfile.log");
		if (rv != eGwFileStatus_Success)
		{
			fprintf(stderr, "pGWFileToFileProtectAndReport() FAILED with status %d\n", rv);
			exit(EXIT_FAILURE);
		}
	
			/* tidy up */
		rv = GWFileDone();
		if (rv != eGwFileStatus_Success)
		{
			fprintf(stderr, "pGWFileDone() FAILED with status %d\n", rv);
			exit(EXIT_FAILURE);
		}

		exit(EXIT_SUCCESS);

	} /* end of function main */
