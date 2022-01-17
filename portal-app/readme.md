App run
    ionic serve

Build web
    ionic build

Add cordova plugin to ionic project
    ionic integrations enable cordova --add

Add platform for Android
    ionic cordova platform add android

    --remove
    cordova platform remove android

Run in Android
    ionic cordova run android
    ionic cordova run android --device

    ionic cordova run android --livereload
    # We used the --livereload tag. It automatically creates the build #as soon as it noticed any change in the application files.

Build for Android
    ionic cordova build android

Add Addtional plugins for Locations
    ionic cordova plugin add cordova-plugin-geolocation
    cordova plugin add cordova-plugin-android-permissions
    ionic cordova plugin add cordova-plugin-fcm-with-dependecy-updated
    cordova plugin add cordova-plugin-androidx
    cordova plugin add cordova-plugin-androidx-adapter