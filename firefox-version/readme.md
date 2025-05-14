
### How to create Firefox version :

1. Execute ```npm run build``` in the root folder (conditions of execution in the root 'package.json' file). 
   

---------
The script will take all files from the Chrome version, except for :
- 'manifest.json' (but the version will still be changed to match the Chrome manifest version, for example : 2.9.0)
web-ext build
---------
Run local test version :
- Execute ```npx webpack``` in the **'_firefox-version/firefox-plugin_' directory**
- Execute ```web-ext build``` also in the '_firefox-version/firefox-plugin_' directory

The zip file is in the '_firefox-version/firefox-plugin_' directory.