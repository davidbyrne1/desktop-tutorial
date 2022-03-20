var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var multer = require("multer");
//var upload = multer({ storage: multer.memoryStorage() });
var upload = multer({ dest: "uploads/" });
//var upload = multer({ dest: "uploads/" }).array("file1", 3);
app.get("/", function (req, res) {
  res.render("index");
});

app.set("view engine", "ejs");
app.set("views", "./views/pages");

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
//app.use(upload.array());
app.use(express.static("public"));
//app.use((error, req, res, next) => {
////console.log("This is the rejected field ->", error.field);
//});
app.post("/", upload.array("file1", 3), function (req, res) {
  console.log(req.body);
  console.log(req.files);
  //var err = new Error('Not Found');
  res.send("recieved your request!");

  console.log(req.body);

  //req.body
  const {
    Assigned_Group,
    Assigned_Support_Company,
    Assigned_Support_Organization,
    Categorization_Tier_1,
    Closure_Manufacturer,
    Closure_Product_Category_Tier1,
    Closure_Product_Category_Tier2,
    Closure_Product_Category_Tier3,
    Closure_Product_Name,
    First_Name,
    Impact,
    Last_Name,
    Product_Categorization_Tier_1,
    Product_Categorization_Tier_2,
    Product_Categorization_Tier_3,
    Product_Name,
    Reported_Source,
    Service_Type,
    Status,
    Action,
    Summary,
    Notes,
    Urgency,
    Work_Info_Summary,
    Work_Info_Notes,
    Work_Info_Type,
    Work_Info_Date,
    Work_Info_Source,
    Work_Info_Locked,
    Work_Info_View_Access,
    WorkInfoAttachment1Name,
    WorkInfoAttachment1Data,
    Status_Reason,
    Login_ID,
    ApprovalRequired,
    Approver,
    ApprovedDate,
    uploadFile,
  } = req.body;
  let errors = [];

  //req.body.

  const soapRequest = require("easy-soap-request");
  const fs = require("fs");
  //var test0 = req.files[0].get("path");
  console.log(req.files.length);

  if (req.files.length > 0) {
    var file = fs.readFileSync(req.files[0].path);
    var file64 = Buffer.from(file).toString("base64");
    var filename = req.files[0].originalname;
    console.log(req.files[0].originalname);
  }
  // convert binary data to base64 encoded string

  //console.log(req.files[1].originalname);
  //console.log(req.files[2].originalname);

  // example data
  const url =
    "https://servicemanagement.train.det.nsw.edu.au/arsys/services/ARService?server=servicemanagementars-as.train.det.nsw.edu.au&webService=HPD_IncidentInterface_Create_WS";
  const sampleHeaders = {
    "Content-Type": "text/xml;charset=UTF-8",
    soapAction:
      "https://servicemanagement.train.det.nsw.edu.au/arsys/services/ARService?server=servicemanagementars-as.train.det.nsw.edu.au&webService=HPD_IncidentInterface_Create_WS#HelpDesk_Submit_Service",
  };
  //const xml = fs.readFileSync('xml/ct3wi.xml', 'utf-8');
  if (req.files.length > 0) {
    var xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:HPD_IncidentInterface_Create_WS">
       <soapenv:Header>
          <urn:AuthenticationInfo>
             <urn:userName>perl.user</urn:userName>
             <urn:password>password</urn:password>        
          </urn:AuthenticationInfo>
      </soapenv:Header>
       <soapenv:Body>
          <urn:HelpDesk_Submit_Service>
          <urn:Assigned_Group>${Assigned_Group}</urn:Assigned_Group>
          <urn:Assigned_Support_Company>${Assigned_Support_Company}</urn:Assigned_Support_Company>
          <urn:Assigned_Support_Organization>${Assigned_Support_Organization}</urn:Assigned_Support_Organization>
          <urn:Categorization_Tier_1>${Categorization_Tier_1}</urn:Categorization_Tier_1>
          <urn:Closure_Manufacturer>${Closure_Manufacturer}</urn:Closure_Manufacturer>
          <urn:Closure_Product_Category_Tier1>${Closure_Product_Category_Tier1}</urn:Closure_Product_Category_Tier1>
          <urn:Closure_Product_Category_Tier2>${Closure_Product_Category_Tier2}</urn:Closure_Product_Category_Tier2>
          <urn:Closure_Product_Category_Tier3>${Closure_Product_Category_Tier3}</urn:Closure_Product_Category_Tier3>
          <urn:Closure_Product_Name>${Closure_Product_Name}</urn:Closure_Product_Name>
          <urn:First_Name>${First_Name}</urn:First_Name>
          <urn:Impact>${Impact}</urn:Impact>
          <urn:Last_Name>${Last_Name}</urn:Last_Name>
          <urn:Product_Categorization_Tier_1>${Product_Categorization_Tier_1}</urn:Product_Categorization_Tier_1>
          <urn:Product_Categorization_Tier_2>${Product_Categorization_Tier_2}</urn:Product_Categorization_Tier_2>
          <urn:Product_Categorization_Tier_3>${Product_Categorization_Tier_3}</urn:Product_Categorization_Tier_3>
          <urn:Product_Name>${Product_Name}</urn:Product_Name>
          <urn:Reported_Source>${Reported_Source}</urn:Reported_Source>
          <urn:Service_Type>${Service_Type}</urn:Service_Type>
          <urn:Status>${Status}</urn:Status>
          <urn:Action>${Action}</urn:Action>
          <urn:Summary>${Summary}</urn:Summary>
          <urn:Notes>${Notes}</urn:Notes>
          <urn:Urgency>${Urgency}</urn:Urgency>
          <urn:Work_Info_Summary>${Work_Info_Summary}</urn:Work_Info_Summary>
          <urn:Work_Info_Notes>${Work_Info_Notes}</urn:Work_Info_Notes>
          <urn:Work_Info_Type>1000</urn:Work_Info_Type>
          <urn:Work_Info_Date>${Work_Info_Date}</urn:Work_Info_Date>
          <urn:Work_Info_Source>${Work_Info_Source}</urn:Work_Info_Source>
          <urn:Work_Info_Locked>${Work_Info_Locked}</urn:Work_Info_Locked>
          <urn:Work_Info_View_Access>${Work_Info_View_Access}</urn:Work_Info_View_Access>
          <urn:WorkInfoAttachment1Name>${filename}</urn:WorkInfoAttachment1Name>
          <urn:WorkInfoAttachment1Data>${file64}</urn:WorkInfoAttachment1Data>
          <urn:Status_Reason>1000</urn:Status_Reason>
          <urn:Login_ID>${Login_ID}</urn:Login_ID>
          </urn:HelpDesk_Submit_Service>
       </soapenv:Body>
      </soapenv:Envelope>
      `;
  } else {
    var xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:HPD_IncidentInterface_Create_WS">
       <soapenv:Header>
          <urn:AuthenticationInfo>
             <urn:userName>perl.user</urn:userName>
             <urn:password>password</urn:password>        
          </urn:AuthenticationInfo>
      </soapenv:Header>
       <soapenv:Body>
          <urn:HelpDesk_Submit_Service>
          <urn:Assigned_Group>${Assigned_Group}</urn:Assigned_Group>
          <urn:Assigned_Support_Company>${Assigned_Support_Company}</urn:Assigned_Support_Company>
          <urn:Assigned_Support_Organization>${Assigned_Support_Organization}</urn:Assigned_Support_Organization>
          <urn:Categorization_Tier_1>${Categorization_Tier_1}</urn:Categorization_Tier_1>
          <urn:Closure_Manufacturer>${Closure_Manufacturer}</urn:Closure_Manufacturer>
          <urn:Closure_Product_Category_Tier1>${Closure_Product_Category_Tier1}</urn:Closure_Product_Category_Tier1>
          <urn:Closure_Product_Category_Tier2>${Closure_Product_Category_Tier2}</urn:Closure_Product_Category_Tier2>
          <urn:Closure_Product_Category_Tier3>${Closure_Product_Category_Tier3}</urn:Closure_Product_Category_Tier3>
          <urn:Closure_Product_Name>${Closure_Product_Name}</urn:Closure_Product_Name>
          <urn:First_Name>${First_Name}</urn:First_Name>
          <urn:Impact>${Impact}</urn:Impact>
          <urn:Last_Name>${Last_Name}</urn:Last_Name>
          <urn:Product_Categorization_Tier_1>${Product_Categorization_Tier_1}</urn:Product_Categorization_Tier_1>
          <urn:Product_Categorization_Tier_2>${Product_Categorization_Tier_2}</urn:Product_Categorization_Tier_2>
          <urn:Product_Categorization_Tier_3>${Product_Categorization_Tier_3}</urn:Product_Categorization_Tier_3>
          <urn:Product_Name>${Product_Name}</urn:Product_Name>
          <urn:Reported_Source>${Reported_Source}</urn:Reported_Source>
          <urn:Service_Type>${Service_Type}</urn:Service_Type>
          <urn:Status>${Status}</urn:Status>
          <urn:Action>${Action}</urn:Action>
          <urn:Summary>${Summary}</urn:Summary>
          <urn:Notes>${Notes}</urn:Notes>
          <urn:Urgency>${Urgency}</urn:Urgency>
          <urn:Work_Info_Summary>${Work_Info_Summary}</urn:Work_Info_Summary>
          <urn:Work_Info_Notes>${Work_Info_Notes}</urn:Work_Info_Notes>
          <urn:Work_Info_Type>1000</urn:Work_Info_Type>
          <urn:Work_Info_Date>${Work_Info_Date}</urn:Work_Info_Date>
          <urn:Work_Info_Source>${Work_Info_Source}</urn:Work_Info_Source>
          <urn:Work_Info_Locked>${Work_Info_Locked}</urn:Work_Info_Locked>
          <urn:Work_Info_View_Access>${Work_Info_View_Access}</urn:Work_Info_View_Access>
          <urn:Status_Reason>1000</urn:Status_Reason>
          <urn:Login_ID>${Login_ID}</urn:Login_ID>
          </urn:HelpDesk_Submit_Service>
       </soapenv:Body>
      </soapenv:Envelope>
      `;
  }
  //console.log(xml);

  // usage of module
  (async () => {
    const { response } = await soapRequest({
      url: url,
      headers: sampleHeaders,
      xml: xml,
      timeout: 30000,
    }); // Optional timeout parameter(milliseconds)
    const { headers, body, statusCode } = response;
    //console.log(headers);
    console.log(body);
    //console.log(ticket._id);
    var TN1;
    //var TN = parseXML(body);
    //var TN = parseXML(body);
    var parser = new xml2js.Parser();
    parser.parseString(body, function (err, result) {
      console.log(JSON.stringify(result));
      TN1 = JSON.stringify(result);
    });
    //console.log(body.indexof('_Number>') + 9);
    // var xmlText = new XMLSerializer().serializeToString(body);
    var TN = TN1.substr(430, 15);
    console.log(TN);

    res.redirect("/");
  })();
});
app.listen(3000);
