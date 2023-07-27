const soap = require("soap")

module.exports = class ProcessInitController {

    static async initProcess(req, res) {
        const url = '{URL DO SERVIDOR}/webdesk/ECMWorkflowEngineService?wsdl';

        soap.createClient(url, function (err, client) {
            if (err) {
                console.log("Erro ao criar cliente SOAP:", err);
                return;
            }

            const obj = {
                username: "{USUARIO ADM}",
                password: "{SENHA ADM}",
                companyId: "{COMPANY ID}",
                processId: "{ID DO PROCESSO}",
                comments: "Iniciado via NODE",
                attachments: "",
                cardData: ""
            }

            client.simpleStartProcess(obj, function (err, result) {
                if (err) {
                    console.log("Erro ao iniciar o processo via SOAP:", err);
                    return;
                }
                
                res.status(200).json({numProcess: result.result.item[5].split("=")[1]});
            });
        });

    }
}