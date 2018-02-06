
    function init() {
        if (window.goSamples) goSamples();  // init for these samples -- you don't need to call this
        var $ = go.GraphObject.make;

        myDiagram =
            $(go.Diagram, "myDiagramDiv",
                {
                    initialContentAlignment: go.Spot.Center,
                    "undoManager.isEnabled": true,
                    layout: $(go.TreeLayout,
                        { // this only lays out in trees nodes connected by "generalization" links
                            angle: 90,
                            path: go.TreeLayout.PathSource,  // links go from child to parent
                            setsPortSpot: false,  // keep Spot.AllSides for link connection spot
                            setsChildPortSpot: false,  // keep Spot.AllSides
                            // nodes not connected by "generalization" links are laid out horizontally
                            arrangement: go.TreeLayout.ArrangementHorizontal
                        })
                });

        // show visibility or access as a single character at the beginning of each property or method
        function convertVisibility(v) {
            switch (v) {
                case "public": return "+";
                case "private": return "-";
                case "protected": return "#";
                case "package": return "~";
                default: return v;
            }
        }

        // the item template for properties
        var propertyTemplate =
            $(go.Panel, "Horizontal",
                // property visibility/access
                $(go.TextBlock,
                    { isMultiline: false, editable: false, width: 12 },
                    new go.Binding("text", "visibility", convertVisibility)),
                // property name, underlined if scope=="class" to indicate static property
                $(go.TextBlock,
                    { isMultiline: false, editable: true },
                    new go.Binding("text", "name").makeTwoWay(),
                    new go.Binding("isUnderline", "scope", function(s) { return s[0] === 'c' })),
                // property type, if known
                $(go.TextBlock, "",
                    new go.Binding("text", "type", function(t) { return (t ? ": " : ""); })),
                $(go.TextBlock,
                    { isMultiline: false, editable: true },
                    new go.Binding("text", "type").makeTwoWay()),
                // property default value, if any
                $(go.TextBlock,
                    { isMultiline: false, editable: false },
                    new go.Binding("text", "default", function(s) { return s ? " = " + s : ""; }))
            );

        // the item template for methods
        var methodTemplate =
            $(go.Panel, "Horizontal",
                // method visibility/access
                $(go.TextBlock,
                    { isMultiline: false, editable: false, width: 12 },
                    new go.Binding("text", "visibility", convertVisibility)),
                // method name, underlined if scope=="class" to indicate static method
                $(go.TextBlock,
                    { isMultiline: false, editable: true },
                    new go.Binding("text", "name").makeTwoWay(),
                    new go.Binding("isUnderline", "scope", function(s) { return s[0] === 'c' })),
                // method parameters
                $(go.TextBlock, "()",
                    // this does not permit adding/editing/removing of parameters via inplace edits
                    new go.Binding("text", "parameters", function(parr) {
                        var s = "(";
                        for (var i = 0; i < parr.length; i++) {
                            var param = parr[i];
                            if (i > 0) s += ", ";
                            s += param.name + ": " + param.type;
                        }
                        return s + ")";
                    })),
                // method return type, if any
                $(go.TextBlock, "",
                    new go.Binding("text", "type", function(t) { return (t ? ": " : ""); })),
                $(go.TextBlock,
                    { isMultiline: false, editable: true },
                    new go.Binding("text", "type").makeTwoWay())
            );

        // this simple template does not have any buttons to permit adding or
        // removing properties or methods, but it could!
        myDiagram.nodeTemplate =
            $(go.Node, "Auto",
                {
                    locationSpot: go.Spot.Center,
                    fromSpot: go.Spot.AllSides,
                    toSpot: go.Spot.AllSides
                },
                $(go.Shape, { fill: "lightyellow" }),
                $(go.Panel, "Table",
                    { defaultRowSeparatorStroke: "black" },
                    // header
                    $(go.TextBlock,
                        {
                            row: 0, columnSpan: 2, margin: 3, alignment: go.Spot.Center,
                            font: "bold 12pt sans-serif",
                            isMultiline: false, editable: true
                        },
                        new go.Binding("text", "name").makeTwoWay()),
                    // properties
                    $(go.TextBlock, "Properties",
                        { row: 1, font: "italic 10pt sans-serif" },
                        new go.Binding("visible", "visible", function(v) { return !v; }).ofObject("PROPERTIES")),
                    $(go.Panel, "Vertical", { name: "PROPERTIES" },
                        new go.Binding("itemArray", "properties"),
                        {
                            row: 1, margin: 3, stretch: go.GraphObject.Fill,
                            defaultAlignment: go.Spot.Left, background: "lightyellow",
                            itemTemplate: propertyTemplate
                        }
                    ),
                    $("PanelExpanderButton", "PROPERTIES",
                        { row: 1, column: 1, alignment: go.Spot.TopRight, visible: false },
                        new go.Binding("visible", "properties", function(arr) { return arr.length > 0; })),
                    // methods
                    $(go.TextBlock, "Methods",
                        { row: 2, font: "italic 10pt sans-serif" },
                        new go.Binding("visible", "visible", function(v) { return !v; }).ofObject("METHODS")),
                    $(go.Panel, "Vertical", { name: "METHODS" },
                        new go.Binding("itemArray", "methods"),
                        {
                            row: 2, margin: 3, stretch: go.GraphObject.Fill,
                            defaultAlignment: go.Spot.Left, background: "lightyellow",
                            itemTemplate: methodTemplate
                        }
                    ),
                    $("PanelExpanderButton", "METHODS",
                        { row: 2, column: 1, alignment: go.Spot.TopRight, visible: false },
                        new go.Binding("visible", "methods", function(arr) { return arr.length > 0; }))
                )
            );

        function convertIsTreeLink(r) {
            return r === "generalization";
        }

        function convertFromArrow(r) {
            switch (r) {
                case "generalization": return "";
                default: return "";
            }
        }

        function convertToArrow(r) {
            switch (r) {
                case "generalization": return "Triangle";
                case "aggregation": return "StretchedDiamond";
                default: return "";
            }
        }

        myDiagram.linkTemplate =
            $(go.Link,
                { routing: go.Link.Orthogonal },
                new go.Binding("isLayoutPositioned", "relationship", convertIsTreeLink),
                $(go.Shape),
                $(go.Shape, { scale: 1.3, fill: "white" },
                    new go.Binding("fromArrow", "relationship", convertFromArrow)),
                $(go.Shape, { scale: 1.3, fill: "white" },
                    new go.Binding("toArrow", "relationship", convertToArrow))
            );

        // setup a few example class nodes and relationships
        var nodedata = [
            {
                key: 1,
                name: "CuentaBancaria",
                properties: [
                    { name: "propietario", type: "varcha(100)", visibility: "public" },
                    { name: "balance", type: "decimal", visibility: "public", default: "0" }
                ],
                methods: [
                    { name: "depositar", parameters: [{ name: "amount", type: "Currency" }], visibility: "public" },
                    { name: "retirar", parameters: [{ name: "amount", type: "Currency" }], visibility: "public" }
                ]
            },
            {
                key: 11,
                name: "persona",
                properties: [
                    { name: "ci", type: "int", visibility: "public" },
                    { name: "nombre", type: "varchar(100)", visibility: "public" },
                    { name: "apellidos", type: "varchar(100)", visibility: "protected" }
                ],
                methods: [
                    { name: "getCurrentAge", type: "int", visibility: "public" }
                ]
            },
            {
                key: 12,
                name: "Estudiante",
                properties: [
                    { name: "registro", type: "int", visibility: "public" },
                    { name: "nombre", type: "varchar(200)", visibility: "public" }
                ]
            },
            {
                key: 13,
                name: "Profesor",
                properties: [
                    { name: "codigo", type: "int", visibility: "public" },
                    { name: "nombre", type: "varchar(200)", visibility: "public" }
                ],
                methods: [
                ]
            },
            {
                key: 14,
                name: "curso",
                properties: [
                    { name: "name", type: "varchar(100)", visibility: "public" },
                    { name: "description", type: "varchar(100)", visibility: "public" },
                    { name: "idprofesor", type: "int", visibility: "public" },
                    { name: "location", type: "varchar(100)", visibility: "public" },
                    { name: "horario", type: "time", visibility: "public" },
                    { name: "prerequisites", type: "int", visibility: "public" },
                    { name: "fkEstudiante", type: "int", visibility: "public" }
                ]
            }
        ];

        var linkdata = [
            { from: 12, to: 11, relationship: "generalization" },
            { from: 13, to: 11, relationship: "generalization" },
            { from: 14, to: 13, relationship: "aggregation" }
        ];
        myDiagram.model = $(go.GraphLinksModel,
            {
                copiesArrays: true,
                copiesArrayObjects: true,
                nodeDataArray: nodedata,
                linkDataArray: linkdata
            });

        myPalette =
            $(go.Palette, "myPaletteDiv",  // must name or refer to the DIV HTML element
                {
                    scrollsPageOnFocus: false,
                    nodeTemplateMap: myDiagram.nodeTemplateMap,  // share the templates used by myDiagram
                    model: new go.GraphLinksModel([  // specify the contents of the Palette
                        { category: "Start", text: "Start" },
                        { text: "Step" },
                        { text: "???", figure: "Diamond" },
                        { category: "End", text: "End" },
                        { category: "Comment", text: "Comment" }
                    ])
                });
    }

function save() {
    document.getElementById("mySavedModel").value = myDiagram.model.toJson();
    myDiagram.isModified = false;
}
function load() {
    var model = go.Model.fromJson(document.getElementById("mySavedModel").value);
    // establish GraphLinksModel functions:
    // node data id's are odd numbers
    myDiagram.model = model;
};
function generateScript() {
    var model = go.Model.fromJson(document.getElementById("mySavedModel").value);
    var arrayObjets = model.nodeDataArray;
    var query = "";
    var atributes = "";
    var arrayTables = [];
    for (x in arrayObjets){
        nameTable= arrayObjets[x].name;
        properties = arrayObjets[x].properties;
        atributes = "";
        for (i in properties ){
            name =properties[i].name;
            type = properties[i].type;
            if (i == 0){
                atributes += "  "+ name + " "+ type+ " NOT NULL PRIMARY KEY," +"\n";
            }else
            if (i == properties.length-1){
                atributes += "  "+ name + " "+ type+"\n" +");";
            }else{
                atributes += "  "+ name +" "+ type+","+"\n";
            }
        }
        query = "CREATE TABLE " +nameTable +"(" +"\n" +atributes;
        console.log(query);
        arrayTables.push(query);
    }
    var cad = "";
    for (x in arrayTables){
       table = arrayTables[x]
        cad +=table+"\n";
    }
    return cad;

}
