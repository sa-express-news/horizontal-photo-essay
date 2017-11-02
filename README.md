# SAEN Horizontal Photo Essay #

This template can be used to build full screen horizontal slideshow photo essays like the following:

 - [Caught in the opioid snare: A photo essay](http://www.expressnews.com/caught-in-the-opioid-snare-san-antonio/#/)

 This README assumes a familiarity with GIT, React and our normal project building workflow. If you are new to that process, I suggest first [following the README here and building a story in the Long Form Template](https://github.com/sa-express-news/longform-story-template/blob/master/README.md).

 ## Loading your data ##

 Clone the repo and `npm install`.

 ### Authorizing Google Drive ###

 Your photo essay will be populated with data from Google Sheets. Thus, in order to get the data from google to your repo, you'll need to authorize Google Drive to communicate with your computer. _This step will only need to be completed once. Future projects will not require this step_.

 Visit the [Google Drive developer console](https://console.developers.google.com/) while logged into the SAENPremiumEditors Google account. At the top of the page open "Horizontal Slideshow".

 From the nav bar, select "Credentials", then "Create Credentials" and then "OAuth Client ID". Set "Application Type" to "Other". Set the Application Name to your name.

 Now, click on the application you named after yourself and select "Export JSON". These are your secret oAuth credentials. Name the file `.horizontal_slider_google_client_secrets.json` (don't forget the period!) and save it in an easy to find directory on your computer.

 In your terminal, navigate to the directory where you saved the JSON file and then type the following followed by "return":

 ```
 mv .horizontal_slider_google_client_secrets.json ~/.horizontal_slider_google_client_secrets.json
 ```

 Still in the terminal, navigate to your horizontal slider repo and run `npm run user/authorize` and follow the onscreen prompts. That's it! Note: When google asks you to authorize the oAuth request, make sure it is talking to the SAENPremiumEditors account, not your personal account.

 ### Build your spreadsheet ###

 [Here is an example horizontal photo essay spreadsheet](https://docs.google.com/spreadsheets/d/1UZhhS6G81YuOIoivHpUM3szag8lrichEcpB060UWAXk/edit?usp=sharing). Create your own in the SAENPremiumEditors account that mimicks the example. The `META` sheet is used to populate the hero image with title, date, etc. The `PHOTOS` sheet includes the URLs and captions for each of your photos stored in order of presentation.

 ### Import your spreadsheet ###

 Once your spreadsheet is ready to deploy, grab the spreadsheet ID from the URL – for instance, in this Sheet URL, `https://docs.google.com/document/d/1k8_1P_r-a8bFLvWXMhUN56ufVP-1vbxKH2sJWINv6Oc/edit`, the ID is: `1k8_1P_r-a8bFLvWXMhUN56ufVP-1vbxKH2sJWINv6Oc` – and drop it into `src/utils/config-import.json` like this:

 ```
 {
 	"google_spreadsheet_key": "1k8_1P_r-a8bFLvWXMhUN56ufVP-1vbxKH2sJWINv6Oc",
 	...
 }
 ```

 Finally, in the terminal at the root of the repo, run `npm run spreadsheet/fetch`. This will import your Google Sheet into the `src/data/data.json` file. You can now run `npm start` and your photo essay should be ready to go!

## Publishing your essay ##

The publishing process is exactly the same as that for other React Apps that will end up in the WCM. Again, I will refer you to the [Long Form Template README](https://github.com/sa-express-news/longform-story-template/blob/master/README.md) for more information.