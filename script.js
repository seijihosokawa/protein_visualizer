// create a `stage` object=
var stage = new NGL.Stage("viewport");
// load a PDB structure and consume the returned `Promise`
function load_pdb(){
    //checks whether or not the view should be reset
    var view_reset_or_build_upon = document.getElementById("flexSwitchCheckDefault").checked;
    //console.log(view_reset_or_build_upon);
    if(!view_reset_or_build_upon){
        stage.removeAllComponents();
        //stage.dispose();
    }
    stage.loadFile("rcsb://pdb_files/6WZR").then(function (component) {
        // add a style representation to the structure component
        var e = document.getElementById("style");
        var style_val = e.options[e.selectedIndex].text;
        console.log("style", style_val);
        component.addRepresentation(style_val);
        // provide a "good" view of the structure
        component.autoView();
    });
}

//sets the canvas to full screen
function set_fullscreen(){
    stage.toggleFullscreen();
}

/* Does not work yet, download a PNG file of current view
function take_screenshot(){
    var response = stage.makeImage();
    var blob = new Blob([response], {type: "image/png"});
    console.log(blob);
    console.log(blob.size, blob.type);

    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    a.href = URL.createObjectURL(blob);
    a.download = 'image.png';
    a.click();
}
 */
//tasks:
// instructions
// two or more proteins viewed at the same time
// jpg saving


//references:
//https://www.rcsb.org/
//http://nglviewer.org/ngl/api/class/src/stage/stage.js~Stage.html
