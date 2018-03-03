var jsonfile = require('jsonfile')
var readlineSync = require('readline-sync');

function setup() {
    //Show setup header
    console.log('Google-Play-Decompiler Setup');
    console.log('\n');

    //Ask questions
    var username = readlineSync.question('Google Email>');
    var password = readlineSync.question('Google (app)password>', {
        hideEchoBack: true
    });
    var adevid = readlineSync.question('Android device ID>');
    var keepapk = false;
    if (readlineSync.keyInYN('Do you want to keep APK files (Y/N)>')) {
        // 'Y' key was pressed.
        keepapk = true;
        // Do something...
    } else {
        // Another key was pressed.
        keepapk = false;
        // Do something...
    }
    //Write to JSON
    var file = 'data.json'
    var obj = {
        username: username,
        pass: password,
        id: adevid,
        apk: keepapk
    }
    jsonfile.writeFile(file, obj, {
        spaces: 2
    }, function(err) {
        console.error(err)
    })
}

setup();