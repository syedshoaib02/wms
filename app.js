const express = require("express");
const cors = require("cors")
const axios = require("axios")
const app = express();
app.use(cors())
app.use(express.json());
app.post("/api", async (req, res) => {
    console.log(req.body)
    const Url = "https://mingle-sso.se1.inforcloudsuite.com:443/BNJNUU88223X2YDS_TST/as/token.oauth2"

    const data = await axios.post(Url, req.body, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic Qk5KTlVVODgyMjNYMllEU19UU1R+ZVJ6MDZoWXVIcmxrY2tHV1g4OGx5RFBLZUkwX2I4ZDd3bWdUMFVnMEZIWTpucTlEX04xS0NyeTZGeFZ4MzMwZHNreGFpQ085Z0V4U215NllFN1FLbjF1YURZVENFUUg5ODduOWhoYnVIdVY2MUVOZlUxNnYwSnlBUXplRDFMYnlsUQ==',
            "Access-Control-Allow-Origin": "*"
        }
    }
    ).then((res) => {
        return res.data
    }
    )
    res.status(200).json(data);
    console.log(JSON.stringify(data) + "/////////")
})
app.post("/getData", async (req, res) => {
    console.log(req.body)
    const data = await axios.get("https://mingle-ionapi.se1.inforcloudsuite.com/BNJNUU88223X2YDS_TST/WM/wmwebservice_rest/BNJNUU88223X2YDS_TST_REDAWESOMEOWL_TST_SCE_PRD_0_wmwhse1/locations/G1A.01.A1", req.body)
        .then((res) => {
            return res.data
        })
    res.status(200).json(data)
})
app.listen(8000, () => {
    console.log("app listening at 8000")
})