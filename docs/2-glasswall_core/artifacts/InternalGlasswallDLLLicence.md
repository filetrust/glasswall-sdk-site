Glasswall DLL Licence {#InternalGlasswallDLLLicence}
=======================

There is an ability to deploy our Glasswall DLL so that there is a 90 day validity from the date of release after which it ceases processing of documents and indicates that there is a licensing issue.

# Build & Release Management #

By default, each of our Glasswall DLL build definitions will build a Glasswall DLL that does not have any licensing restrictions.  It is envisaged that the following mechanisms are used to deploy a build with licence checking enabled.

Taking a Windows 64Bit DLL build with licence checking enabled as what is required as an example:

- The licence code will need to be made ‘live’ once (if not already done so).
- TFS build definition `0026_QAReleaseWin_x64` will need to be cloned to `nnnn_QAReleaseWin_x64`
- The licence checking will need to be enabled via an additional TFS build parameter: `/p:GWLicence=GW_LICENCE_ENABLED`
- The TFS build denomination parameter value `/p:GWBuldDenomination=26` must be updated to reflect the newly cloned build definition.
 
# Known Loopholes #

The following are known loopholes to workaround the licensed DLL:

- The system date can be altered such that the DLL is always within the 90 day valid period.
- The DLL can be loaded into a hex editor and the Julian date altered.

# Notes for QA Testing #

There is a facility to override the system configuration date to aid testing.  This is achieved by creating an entry in the the XML system configuration file read in by our GWFileConfigXML API.  The value of the date must be expressed in Julian date format `yyddd`.  For example: 
  
    <sysConfig>
    <test_julian_date>15132</test_julian_date>
    </sysConfig>

 